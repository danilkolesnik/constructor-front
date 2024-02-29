import axios from 'axios';
import { URL } from '../utils/constants/constants';

export const getFooterData = () => {
  const url = `${URL}/api/contacts`;
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
        return res.data.docs[0].contactsArray[0].contactValue;
      })
  );
};
