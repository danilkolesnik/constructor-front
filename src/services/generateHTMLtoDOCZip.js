/* eslint-disable */
import { v4 as uuidv4 } from 'uuid';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export function Export2Word(element, userEmail, filename = '') {
  let html = document.getElementById(element).innerHTML;

  const findDoc = html.toString().split('EXAMPLEDOC');
  const css = `
    <style>
      * {font-family: Arial, Serif; font-size: 10pt !important;}
      td {font-family: Arial, Serif; font-size: 10pt !important;}
      th {font-family: Arial,  Serif; font-size: 10pt !important;}
      table {font-family: Arial, Serif; font-size: 10pt !important;}
      span {font-family: Arial, Serif; font-size: 10pt !important;}
    </style>
  `;

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
          <table style="margin-top:100%;">
            ${content}
          </table>
        </div>
      </body>
      </html>
    `;
  };
  filename = JSON.parse(sessionStorage.getItem('contract_name'));
  if (Array.isArray(filename)) filename = filename[0];
  
  if (findDoc.length === 1) {

    const content = css + findDoc[0].replaceAll("EXAMPLEDOC", "");
    const documentHtml = generateDocument(content);
    const blob = new Blob([documentHtml], { type: 'application/msword' });

    const formData = new FormData();
    formData.append('email', userEmail);
    formData.append('fileName', `${filename}.doc`);
    formData.append('username', sessionStorage.getItem('userName'));
    formData.append('file', blob, `${uuidv4()}.doc`);

    const requestOptions = {
      method: 'POST',
      body: formData,
      redirect: 'follow',
    };

    fetch('https://email-quickdraft.linecore.com.ua/api/email', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log('Document sent'))
      .catch((error) => console.log('error', error));
  } else {
    // zip
    const zip = new JSZip();
    let docNumb = 1;
    for (let i = 0; i < findDoc.length; i++) {
      const content = css + findDoc[i].replaceAll("EXAMPLEDOC", "");
      if(content.includes("tr")){
        const documentHtml = generateDocument(content);
        zip.file(`${filename}_${docNumb}.doc`, documentHtml);
        docNumb++;
      }
    }

    zip.generateAsync({ type: 'blob' }).then((content) => {
      
      // DELETE THIS LATER
      saveAs(content, `${filename}.zip`);

      // fetch
      const formData = new FormData();
      formData.append('email', userEmail);
      formData.append('fileName', `${filename}.zip`);
      formData.append('username', sessionStorage.getItem('userName'));
      formData.append('file', content, `${uuidv4()}.zip`);

      const requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow',
      };

      fetch('https://email-quickdraft.linecore.com.ua/api/email', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log('Documents sent'))
        .catch((error) => console.log('error', error));
    });
  }
}
