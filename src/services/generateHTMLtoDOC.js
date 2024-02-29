/* eslint-disable */

import { v4 as uuidv4 } from 'uuid';

/**
 * Функция для экспорта содержимого в Word.
 * @param {string} element - Идентификатор HTML-элемента, который нужно экспортировать в Word.
 * @param {string} userEmail - Адрес электронной почты для отправки документа.
 * @param {string} filename - Необязательное имя файла (по умолчанию пустое).
 */
export function Export2Word(element, userEmail, filename = '') {
  // Получаем HTML-содержимое элемента по его идентификатору
  const html = document.getElementById(element).innerHTML;
  const localeDocLanguage = sessionStorage.getItem('localeDocLanguage');
  // Получаем значение annexException из sessionStorage
  const annexException = sessionStorage.getItem('pickedAnnexException');

  // Определяем, является ли браузер Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  let findDoc;

  // Выбираем правильный разделитель в зависимости от браузера
  if (isSafari) {
    findDoc = html
      .toString()
      .split(
        '<td style="border-bottom-width: 1px; border-bottom-style: solid; border-bottom-color: rgb(200, 200, 223); border-right-width: 1px; border-right-style: solid; border-right-color: rgb(200, 200, 223); padding: 5px; text-align: justify; vertical-align: top; font-size: 14px;"><span>EXAMPLEDOC</span></td>',
      );
  } else {
    findDoc = html
      .toString()
      .split(
        '<td style="border-bottom: 1px solid rgb(200, 200, 223); border-right: 1px solid rgb(200, 200, 223); padding: 5px; text-align: justify; vertical-align: top; font-size: 14px;"><span>EXAMPLEDOC</span></td>',
      );
  }

  console.log('FINDDOC', findDoc);

  // CSS-стили для экспорта в Word
  const css = `
    <style>
      * { font-family: Arial, Serif; font-size: 10pt !important; }
      td { font-family: Arial, Serif; font-size: 10pt !important; }
      th { font-family: Arial,  Serif; font-size: 10pt !important; }
      table { font-family: Arial, Serif; font-size: 10pt !important; }
      span { font-family: Arial, Serif; font-size: 10pt !important; }
    </style>
  `;

  // Если значение annexException равно '0', удаляем определенные части документа
  if (annexException === '0') {
    console.log('checkout')
    findDoc = findDoc.filter(
      (doc) => !doc.includes('ДОДАТОК') && !doc.includes('ANNEX') && !doc.includes('ANEXD'),
    );
  }

  /**
   * Функция для генерации содержимого документа Word.
   * @param {string} content - Содержимое документа.
   * @returns {string} - HTML-код документа Word.
   */
  const generateDocument = (content) => {
    return `
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
        <head>
          <title>Document Title</title>
          <xml>
            <w:worddocument xmlns:w="#unknown">
              <w:donotoptimizeforbrowser />
            </w:worddocument>
          </xml>
        </head>
        <body lang=RU-ru style="tab-interval:.5in;">
          <div class="Section1">
            <table style="margin-top:100%;">${content}</table>
          </div>
        </body>
      </html>
    `;
  };

  /**
   * Функция для генерации имени файла.
   * @param {string} content - Содержимое документа.
   * @param {string} filename - Имя файла.
   * @returns {string} - Имя файла.
   */
  const generateFileName = (content, filename) => {
    let updatedContent = content.toString().toLowerCase();

    if (updatedContent.includes('anexd')) {
      updatedContent = updatedContent.replaceAll('anexd', '');
      return `Додаток_А.doc`;
    }

    if (updatedContent.includes('acttd')) {
      updatedContent = updatedContent.replaceAll('acttd', '');
      return `АКТ_ПРИЙОМУ-ПЕРЕДАЧІ.doc`;
    }

    return `${filename}_${docNumb}.doc`;
  };

  /**
   * Функция для удаления дополнительного заголовка.
   * @param {string} content - Содержимое документа.
   * @returns {string} - Обновленное содержимое.
   */
  const removeAdditionalTitle = (content) => {
    let updatedContent = content.toString().toLowerCase();
    console.log(updatedContent);
    if (updatedContent.includes('anexd')) {
      updatedContent = updatedContent.replaceAll('ANEXD', '');
    }

    if (updatedContent.includes('acttd')) {
      updatedContent = updatedContent.replaceAll('ACTTD', '');
    }

    return updatedContent;
  };

  // Извлекаем имя файла из sessionStorage
  filename = JSON.parse(sessionStorage.getItem('contract_name'));
  if (Array.isArray(filename)) filename = filename[0];

  // Создаем объект FormData для отправки данных на сервер
  const formData = new FormData();
  formData.append('email', userEmail);
  formData.append('username', sessionStorage.getItem('userName'));

  let docNumb = 0;

  console.log('=========================================');
  // Итерируем по частям документа
  for (let i = 0; i < findDoc.length; i++) {
    console.log('beginning');
    const content = css + findDoc[i].replaceAll('EXAMPLEDOC', '');
    // console.log(content);
    const regexLine = />[a-zA-Z]+</;

    if (( (content.includes('tr') && regexLine.test(content)) ) || localeDocLanguage === 'ukrainian') {
      console.log('PASSED');
      // Функция для удаления содержимого между тегами
      function removeContentBetweenTags(inputString) {
        const regex = /<\/tr>(.*?)<\/table>/g;
        const outputString = inputString.replace(regex, '</tr></table>');
        return outputString;
      }

      // Генерируем HTML-код для документа Word
      const documentHtml = generateDocument(removeContentBetweenTags(content))
        .replaceAll(
          '<tr style="border-right: 1px solid rgb(200, 200, 223); border-bottom: 1px solid rgb(200, 200, 223); border-collapse: collapse;"><td style="border-bottom: 1px solid rgb(200, 200, 223); border-right: 1px solid rgb(200, 200, 223); padding: 5px; text-align: justify; vertical-align: top; font-size: 14px;"><span></table>',
          '',
        )
        .replaceAll(
          '/<tr style="border-right: 1px solid rgb(200, 200, 223); border-bottom: 1px solid rgb(200, 200, 223);[^>]+</table>/g',
          '',
        );

      docNumb++;

      // Создаем блоб для сохранения в формате .doc
      const blob = new Blob([removeAdditionalTitle(documentHtml)], { type: 'application/msword' });
      formData.append(`filename${docNumb}`, generateFileName(content, filename));
      formData.append(`file${docNumb}`, blob, `${uuidv4()}.doc`);
      console.log('FORMDATA', formData);
    }
  }
  console.log('=========================================')
  console.log('FINDDOC', findDoc);

  const requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow',
  };

  // Отправляем данные на сервер
  fetch('https://email-quickdraft.linecore.com.ua/api/email', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log('Document sent'))
    .catch((error) => console.log('Error', error));
}
