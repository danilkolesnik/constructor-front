import axios from 'axios';
import { URL } from '../utils/constants/constants';

export const getContractData = () => {
  const url = `${URL}/api/question-collection?locale=en&draft=true`;
  return (
    axios
      .get(url, null, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      // eslint-disable-next-line arrow-body-style
      .then((res) => {
        const unsorted = res.data.docs;
        const sorted = unsorted.sort((a, b) => Number(a.Order) - Number(b.Order));
        console.log(sorted);
        return sorted;
      })
  );
};

export const getContractDataImage = () => {
  const url = `${URL}/api/question-collection`;
  return (
    axios
      .get(url, null, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      // eslint-disable-next-line arrow-body-style
      .then((res) => {
        const unsorted = res.data.docs;
        const sorted = unsorted.sort((a, b) => Number(a.Order) - Number(b.Order));
        return sorted;
      })
  );
};
