import axios from 'axios';
import { URL } from '../utils/constants/constants';

export const getHeaderData = () => {
  const url = `${URL}/api/pages`;
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
        // console.log(res);
        return res.data.docs[0];
      })
  );
};
