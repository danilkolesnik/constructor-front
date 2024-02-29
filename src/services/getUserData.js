/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { URL, PAYLOAD_SECRET } from '../utils/constants/constants';

export const getUserData = () => {
  const url = `${URL}/api/users-website`;
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
        return res.data.docs.map((user) => {
          const bytes = CryptoJS.AES.decrypt(user.Code, PAYLOAD_SECRET);
          const encrypted = bytes.toString(CryptoJS.enc.Utf8);
          return {
            id: user.id,
            time: user.time,
            isActive: user.isActive,
            email: user.Email,
            name: user.Name,
            code: encrypted,
          };
        });
      })
  );
};
