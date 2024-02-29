/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../../../utils/i18next';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import CryptoJS from 'crypto-js';
import { setShowPopup } from '../../../services/redux/toolSlice';
import { selectCurrentContractUpdate } from '../../../services/redux/dataSlice';
import { EmailInput } from '../../forms/Input/TextFieldStyles';
import {
  ConfirmationContainer,
  ButtonContainer,
  OrLineContainer,
  OrLine,
  ButtonWrapper,
  TabletEmailContainer,
} from './ConfirmationStyles';
import { ConfirmationButton } from '../../forms/Button/Buttonstyles';
import { Export2Word } from '../../../services/generateHTMLtoDOC';
import { URL, PAYLOAD_SECRET } from '../../../utils/constants/constants';

export default function Confirmation() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(sessionStorage.getItem('email'));
  const onSetEmail = (value) => {
    setUserEmail(value);
  };

  const collectionData = useSelector(selectCurrentContractUpdate);
  const id = sessionStorage.getItem('id');
  const code = sessionStorage.getItem('code');
  const ciphertext = CryptoJS.AES.encrypt(code, PAYLOAD_SECRET).toString();

  const UpdateAdmin = (userName) => {
    const userForm = new FormData();
    let requestOptions = {
      method: 'PATCH',
      body: userForm,
      redirect: 'follow',
    };
    // disable user account
    if (userName !== 'Admin') {
      userForm.append('isActive', false);
      userForm.append('Code', ciphertext);
      fetch(URL + `/api/users-website/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log('Account disabled');
        })
        .catch((error) => console.log('error', error));
    }
    // update collection counter
    const countForm = new FormData();
    countForm.append('Count', Number(collectionData[1]) + 1);
    requestOptions = {
      method: 'PATCH',
      body: countForm,
      redirect: 'follow',
    };
    fetch(URL + `/api/question-collection/${collectionData[0]}`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log('Document updated');
      })
      .catch((error) => console.log('error', error));
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (userEmail !== '') {
      const userName = sessionStorage.getItem('userName');
      UpdateAdmin(userName);
      Export2Word('contract', userEmail);
      // dispatch(setShowPopup(true));
      // navigate('/');
      // sessionStorage.removeItem('pickedAnnexException');
    } else {
      toast.error(t('preview.error'));
    }
  };

  return (
    <ConfirmationContainer>
      <form onSubmit={handleSendEmail}>
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
        <ButtonContainer>
          <TabletEmailContainer>
            <EmailInput
              placeholder='Email'
              tablet
              type='email'
              defaultValue={userEmail}
              onChange={(e) => onSetEmail(e.target.value)}
            />
            <ConfirmationButton type='submit'>{t('preview.send')}</ConfirmationButton>
          </TabletEmailContainer>
          <EmailInput
            placeholder='Email'
            main
            type='email'
            defaultValue={userEmail}
            onChange={(e) => onSetEmail(e.target.value)}
          />
          <ButtonWrapper>
            <ConfirmationButton main type='submit'>
              {t('preview.send')}
            </ConfirmationButton>
            <OrLineContainer>
              <OrLine />
              {t('preview.or')}
              <OrLine />
            </OrLineContainer>
            <ConfirmationButton onClick={() => navigate('/create')} return>
              {t('preview.return')}
            </ConfirmationButton>
          </ButtonWrapper>
        </ButtonContainer>
      </form>
    </ConfirmationContainer>
  );
}
