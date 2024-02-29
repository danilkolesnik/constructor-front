/* eslint-disable */
import { v4 as uuidv4 } from 'uuid';

export function Export2Word(element, userEmail, filename = '') {
  let html = document.getElementById(element).innerHTML;

  const findDoc = html.toString().split('EXAMPLEDOC')
  const separateHtml = html.toString().split('EXAMPLE OF DOCUMENT')
  
  let css =
  '\
  <style>\
  * {font-family: Arial, Serif; font-size: 10pt !important;}\
  td {font-family: Arial, Serif; font-size: 10pt !important;}\
  th {font-family: Arial,  Serif; font-size: 10pt !important;}\
  table {font-family: Arial, Serif; font-size: 10pt !important;}\
  span {font-family: Arial, Serif; font-size: 10pt !important;}\
  </style>\
  ';


if(findDoc.length>1){
  console.log(findDoc.length)
  separateHtml[0] =
      '\
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">\
    <head>\
      <title>Document Title</title>\
      <xml>\
        <w:worddocument xmlns:w="#unknown">\
          <w:donotoptimizeforbrowser />\
        </w:worddocument>\
      </xml>\
    </head>\
    <body lang=RU-ru style="tab-interval:.5in">\
    </table><div class="Section1">' +
      separateHtml[0].replaceAll("EXAMPLEDOC", "") + separateHtml[1].replaceAll("EXAMPLEDOC", "") +
      '</table></div>\
    </body>\
    </html>';

    for (let i = 2; i <= separateHtml.length; i++) {
      if(separateHtml[i]){
      separateHtml[i] =
          '\
        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">\
        <head>\
          <title>Document Title</title>\
          <xml>\
            <w:worddocument xmlns:w="#unknown">\
              <w:donotoptimizeforbrowser />\
            </w:worddocument>\
          </xml>\
        </head>\
        <body lang=RU-ru style="tab-interval:.5in;">\
        <hr class="pb">\
          <div class="Section1"><table style="margin-top:100%;">' +
          separateHtml[i].replaceAll("EXAMPLEDOC", "") +
          '</table></div>\
        </body>\
        </html>'; 
      }
    }
}
else {
  html =
      '\
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">\
    <head>\
      <title>Document Title</title>\
      <xml>\
        <w:worddocument xmlns:w="#unknown">\
          <w:donotoptimizeforbrowser />\
        </w:worddocument>\
      </xml>\
    </head>\
    <body lang=RU-ru style="tab-interval:.5in">\
      <div class="Section1">' +
      html.replaceAll("EXAMPLE OF DOCUMENT", "") +
      '</table></div>\
    </body>\
    </html>';
}


  // let tableRowList = document.querySelectorAll('tr');
  // for (let i = 0, max = tableRowList.length; i < max; i++) {
  //   tableRowList[i].style = 'page-break-after: always; color: red !important;';
  // }

  let rightAligned = document.getElementsByClassName('sm-align-right');
  for (let i = 0, max = rightAligned.length; i < max; i++) {
    rightAligned[i].style = 'text-align: right;';
  }

  let centerAligned = document.getElementsByClassName('sm-align-center');
  for (let i = 0, max = centerAligned.length; i < max; i++) {
    centerAligned[i].style = 'text-align: center;';
  }

  const generateDocument = (separateHtml) => {
    let htmldocument = separateHtml[2];
    if(separateHtml.length>3){
      for (let y = 3; y < separateHtml.length; y++) {
        if(separateHtml[y] && separateHtml[y].includes("</tr>")){
          htmldocument += separateHtml[y];
        }
      }
    }
    return htmldocument;
  }
  let blob = new Blob(['\ufeff',  findDoc.length > 1 ? css + separateHtml[0] + generateDocument(separateHtml) : css + html], {
    type: 'application/msword',
  });

  // Specify link url
  let url = URL.createObjectURL(blob);
  let link = document.createElement('A');
  link.href = url;

  // Specify file name
  const userName = sessionStorage.getItem('userName');
  // Specify file name
  filename = JSON.parse(sessionStorage.getItem('contract_name'));

  if (Array.isArray(filename)) filename = filename[0];
  filename += '.doc';

  // Create download link element

  // document.body.appendChild(link);

  // if (navigator.msSaveOrOpenBlob) {
  //   navigator.msSaveOrOpenBlob(blob, filename);
  // } else {
  //   // Create a link to the file

  //   // Setting the file name
  //   link.download = filename;

  //   //triggering the function
  //   link.click();
  // }

  // document.body.removeChild(link);
  // Create download link element
  const file = blob;
  const formData = new FormData();
  formData.append('email', userEmail);
  formData.append('fileName', filename);
  formData.append('username', userName);
  formData.append('file', file, `${uuidv4()}.doc`);

  const requestOptions = {
    method: 'POST',
    body: formData,
    redirect: 'follow',
  };

  

  fetch('https://email-quickdraft.linecore.com.ua/api/email', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log('Document sent'))
    .catch((error) => console.log('error', error));
}
