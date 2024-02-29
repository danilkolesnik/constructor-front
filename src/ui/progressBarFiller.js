/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */

export const ProgressBarFiller = (fullList, picked, lockedQuestions) => {
  const amount = fullList?.length;
  if (picked.length !== 0) {
    const result = picked.length === amount ? 100 : ((picked.length / amount) * 100).toFixed(0);
    return result;
  }
};
