import { jsPDF as JSPDF } from 'jspdf';
import { v4 as uuidv4 } from 'uuid';

const pdfFromReact = (target, orientation, resize) => {
  if (resize) {
    document.querySelector(target).style.width = orientation === 'p' ? '600px' : '841px';
    document.querySelector(target).style.minHeight = orientation === 'p' ? '841px' : '595px';
  }
  const pdf = new JSPDF(orientation, 'pt', 'a4');
  pdf.html(document.querySelector(target), {
    callback: async () => {
      const file = pdf.output('blob');
      const email = sessionStorage.getItem('email') || 'applicationitsolution@gmail.com';
      const formData = new FormData();
      formData.append('email', email);
      formData.append('file', file, `${uuidv4()}.pdf`);

      const requestOptions = {
        method: 'POST',
        body: formData,
        redirect: 'follow',
      };

      fetch('http://91.200.41.26:3003/api/email', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
    },
  });
};
export { pdfFromReact };
