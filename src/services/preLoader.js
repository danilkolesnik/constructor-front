/* eslint-disable */
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentData, selectAnswers } from './redux/dataSlice';
import { HTMLstringify } from './generateHTMLfromString';
// import { setPickedAnnexException } from './redux/toolSlice';

export const PreLoader = () => {
  // const dispatch = useDispatch();
  const data = useSelector(selectCurrentData);
  const answers = useSelector(selectAnswers);

  let empty_samples = [];
  let language = '';
  const defaults = [];
  // language
  answers.forEach((answer) => {
    // console.log(answer.type);
    // if (answer.type === 'language') {
    //   console.log('LANGUAGE FOUND:', answer);
    //   if (answer.value === 0) {
    //     language = 'bilingual';
    //   } else {
    //     language = 'ukrainian';
    //   }
    // }
    
    if (answer.type === 'language' && language === '') {
      console.log(answer);
      if (answer.value === 0) {
        language = 'bilingual';
      } else {
        language = 'ukrainian';
      }
    }
  });

  // sample
  let ifChosen = false;
  answers.forEach((answer) => {
    if (answer.type === 'sample') {
      ifChosen = true;
      if (language === 'bilingual') {
        empty_samples = [data[`Sample${answer.value + 1}UA`], data[`Sample${answer.value + 1}EN`]];
      } else {
        empty_samples = [data[`Sample${answer.value + 1}UA`]];
      }
    }
  });
  if (ifChosen === false) {
    if (language === 'bilingual') {
      empty_samples = [data[`Sample${1}UA`], data[`Sample${1}EN`]];
    } else {
      empty_samples = [data[`Sample${1}UA`]];
    }
  }
  // fill the sample(s)
  const cutChildren = [
    [{ children: [{ text: 'CUT__THIS__CELL__OFF' }] }],
    [{ children: [{ text: 'CUT__THIS__CELL__OFF' }] }],
  ];
  answers.forEach((answer) => {
    if (answer.final_field.includes(null)) {
      defaults.push(cutChildren);
    } else {
      //SECOND QUESTION EXCEPTION
      if (answer.name[0].children[0].text.includes('assigning tasks')) {
        console.log(answer.name[0].children[0].text, 'value:', answer.value);
        // dispatch(setPickedAnnexException(true));
        sessionStorage.setItem('pickedAnnexException', answer.value);
        sessionStorage.setItem('localeDocLanguage', language);
      }

      defaults.push(answer.final_field);
    }

    // defaults.push(answer.final_field);
  });
  const filled_samples = [];
  let notRequiredQuestions = [];

  const replaceQuestions = (array, i) => {
    let result = array;
    defaults.forEach((def, j) => {
      result = result.map((item) => {
        if (!item.children) return;
        const children = [];
        for (let y = 0; y < item.children.length; y++) {
          let element = item.children[y];
          if (element?.text === undefined) element = { ...element, text: '' };
          if (element?.text.includes(`[question`)) {
            const count = element.text.match(/\d+/)[0];
            const defaultObject = [{ type: 'h6', children: [{ text: '' }] }];
            let defaultsCount = null;
            if (data.DescriptionEN.includes('entrepreneur under Ukrainian law')) {
              if (defaults[count]) {
                defaultsCount = defaults[count - 1][i];
              } else {
                defaultsCount = defaults[count - 1][i];
              }
            } else {
              defaultsCount = defaults[count - 1] ? defaults[count - 1][i] : defaults[count];
            }
            const baseAnswer = defaultsCount || defaultObject;
            // console.log(def[i], "def[i]");
            // console.log(baseAnswer[0].children[0].text);
            // TODO: в даному місці я беру масив ітерую його через мап, і повертаю посив де відповіді поділені на елементи роздільні щоб вони потім
            // йшли по окремим ячейкам в таблиці, трабла в тому що питання 6 воно не повністю генерує
            const definitionsArr = HTMLstringify(baseAnswer).map((definition, index) => {
              // console.log('====================================');
              // console.log("count ", count);
              // console.log("defaults ", defaults);
              // console.log("defaults[count] ", defaults[count-1]);
              // console.log("defaults[i][count] ", defaults[count-1][i]);
              // console.log('====================================');
              const answerOption = HTMLstringify(baseAnswer);
              let text = answerOption;
              text = text[index] || text[0];

              return {
                index,
                text,
                code: element.code,
                bold: element.bold,
                italic: element.italic,
                type: definition.includes('separate') ? 'separate' : 'default',
              };
            });

            // console.log(definitionsArr, "definitionsArr");
            // console.log(definitionsArr, "definitionsArr");

            // check if definitionsArr has more then 1 item 0 1 2
            if (definitionsArr.length > 1) {
              let separateArrIndex = 0,
                defaultArrIndex = 0;
              let resultsArr = [];
              for (let z = 0; z < definitionsArr.length; z++) {
                const elementDefinition = definitionsArr[z];
                if (resultsArr.length === 0) {
                  resultsArr.push([elementDefinition]);
                } else {
                  if (elementDefinition.type === 'separate') {
                    const lastElement =
                      resultsArr[separateArrIndex][resultsArr[separateArrIndex].length - 1];
                    if (
                      (lastElement.type === elementDefinition.type &&
                        lastElement.index === elementDefinition.index + 1) ||
                      !lastElement?.text.includes('<br')
                    ) {
                      resultsArr[separateArrIndex].push(elementDefinition);
                    } else {
                      resultsArr.push([elementDefinition]);
                      separateArrIndex++;
                    }
                  }

                  if (elementDefinition.type === 'default') {
                    const lastElement =
                      resultsArr[defaultArrIndex][resultsArr[defaultArrIndex].length - 1];
                    if (
                      lastElement.type === elementDefinition.type &&
                      lastElement.index === elementDefinition.index + 1
                    ) {
                      resultsArr[defaultArrIndex].push(elementDefinition);
                    } else {
                      resultsArr.push([elementDefinition]);
                      separateArrIndex++;
                    }
                  }
                }
              }

              const uniqueArr = resultsArr.filter((arr, index) => {
                // Return true if the current array is the first occurrence of the array
                return (
                  index ===
                  resultsArr.findIndex((a) => a.every((obj, i) => obj?.text === arr[i]?.text))
                );
              });

              uniqueArr.forEach((item) => {
                item.forEach((itemA) => {
                  children.push({
                    text: itemA.text,
                    code: itemA.code,
                    bold: itemA.bold,
                    italic: itemA.italic,
                    type: itemA.type,
                  });
                });
              });
            } else {
              children.push({
                text: element.text.replaceAll(`[question${j + 1}]`, HTMLstringify(baseAnswer)),
                code: element.code,
                bold: element.bold,
                italic: element.italic,
              });
            }
          } else {
            children.push({
              text: element.text,
              code: element.code,
              bold: element.bold,
              italic: element.italic,
            });
          }
        }
        return { children };
        // return {
        //   children: item.children.map((t) => {
        //     return {
        //       text: t.text.replaceAll(`[question${j + 1}]`, HTMLstringify(def[i])[0]),
        //       code: t.code,
        //       bold: t.bold,
        //       italic: t.italic,
        //     };
        //   }),
        // };
      });
    });
    return result;
  };

  empty_samples.forEach((array, i) => {
    let replaceQuestionsArr = replaceQuestions(array, i).filter((item) => item);

    const resultArr = [];
    const replaceQuestionLangs = replaceQuestionsArr.map((itemChildren, i) => {
      itemChildren = itemChildren.children;
      const isSeparate = itemChildren.some((item) => item.text.includes(`separate`));
      if (isSeparate) {
        const childrenRightStructure = [[itemChildren.shift()]];
        itemChildren.forEach((item, index) => {
          const firstLevel = childrenRightStructure.length - 1;
          const secondLevel = childrenRightStructure[firstLevel].length - 1;
          const lastElement = childrenRightStructure[firstLevel][secondLevel];
          if (!lastElement.text.includes('separate') && !item?.text.includes('separate')) {
            return childrenRightStructure[firstLevel].push(item);
          }
          childrenRightStructure[firstLevel + 1] = [];
          return childrenRightStructure[firstLevel + 1].push(item);
        });
        return childrenRightStructure;
      }
      return itemChildren;
    });

    replaceQuestionLangs.forEach((item, index) => {
      item.forEach((itemChildren) => Array.isArray(itemChildren));
      if (item.every((itemChildren) => !Array.isArray(itemChildren)))
        return resultArr.push({ children: item });
      item.forEach((itemChildren) => {
        resultArr.push({ children: itemChildren });
      });
    });
    const resultArrCutCells = resultArr.map((item) => ({
      children: item.children.filter(
        (itemChildren) =>
          !itemChildren.text.length === 0 ||
          (itemChildren.text.length !== 0 && !itemChildren.text.includes('CUT__THIS__CELL__OFF')),
      ),
    }));

    let removeEmptyRows = resultArrCutCells.filter((item) => item.children.length !== 0);

    for (let i = 0; i < removeEmptyRows.length - 1; i++) {
      // Check if current element and next element have the same information
      if (
        removeEmptyRows[i].children[0].text === removeEmptyRows[i + 1].children[0].text &&
        removeEmptyRows[i].children[0].text.includes('p')
      ) {
        // Remove the next element from the array
        removeEmptyRows.splice(i + 1, 1);
        // Decrement the index to re-evaluate the current element
        i--;
      }
    }

    filled_samples.push(removeEmptyRows);
  });
  // console.log(filled_samples, 'filled samples');
  sessionStorage.setItem(
    'contract_name',
    JSON.stringify([data.ContractTitleUA, data.ContractTitleEN]),
  );
  return filled_samples;
};
