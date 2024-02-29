/* eslint-disable max-len */
// import * as cheerio from 'cheerio';

export const numerateDocument = (outerHTML, isMultiLangs) => {
  let iteration = 1;
  let number = 1;
  const changedHTML = [];
  const returnNumber = (item) => {
    item = item.replaceAll('[number]', number);
    if (!isMultiLangs) {
      number += 1;
      return item;
    }
    if (iteration % 2 === 0) {
      number += 1;
    }
    iteration += 1;
    return item;
  };

  outerHTML.split(' ').forEach((item) => {
    if (item.includes('[number]')) {
      const changedItem = returnNumber(item);
      changedHTML.push(changedItem);
      return;
    }
    changedHTML.push(item);
  });
  // CHEERIO METHOD
  // const $ = cheerio.load(changedHTML.join(' '));
  // const targetRow = $('tr:contains("CUT__THIS__CELL__OFF")');
  // targetRow.remove();
  // return String($.html()).split(' ');

  // REPLACE WITH REGEX METHOD
  // const uncuttedString = changedHTML.join(' ');
  // console.log(uncuttedString);
  // let cuttedString = '';
  // const regex =
  //   /<tr[^>]*>(?:\s|.)*?(<td[^>]*>\s*<span[^>]*>\s*<p[^>]*>\s*<span[^>]*>\s*CUT__THIS__CELL__OFF\s*<\/span>\s*<\/p>\s*<\/span>\s*<\/td>){2}(?:\s|.)*?<\/tr>/g;
  // cuttedString = uncuttedString.replace(regex, '');
  // return cuttedString.split(' ');
  // console.log(changedHTML.join(' '));
  // console.log(changedHTML.join(' '));
  return changedHTML;
};
