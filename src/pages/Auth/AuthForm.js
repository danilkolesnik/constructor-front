/* eslint-disable prefer-template */
/* eslint-disable no-undef */
/* eslint-disable no-else-return */
/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
/* eslint-disable consistent-return */
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import '../../utils/i18next';
import {
  AuthCaption,
  InputContainer,
  InputDiv,
  InputCaption,
  ShowHelper,
  Error,
} from './AuthStyles';
import Popup from '../../components/layouts/Popup/AuthPopup';
import TextField from '../../components/forms/Input/TextField';
import { AuthButton } from '../../components/forms/Button/Buttonstyles';
import { setIsLogged } from '../../services/redux/toolSlice';
import { getUserData } from '../../services/getUserData';
import { URL } from '../../utils/constants/constants';

export default function AuthForm({ setIsLoading }) {
  const { t } = useTranslation();
  const history = useNavigate();
  const dispatch = useDispatch();

  const [userData, setUserData] = useState(null);
  const isAccountOverdue = (account) => {
    const present = new Date();
    const userDate = new Date(account.time);
    if (present >= userDate) {
      return true;
    }
  };
  const replaceOverdueAccounts = (accounts) => {
    // update accounts state
    let prevArr = userData;
    accounts.forEach((account) => {
      prevArr = prevArr.map((prev) => (prev.id === account.id ? account : prev))
    });
    setUserData(prevArr);

    // fetch data to admin panel
    const userForm = new FormData();
    const requestOptions = {
      method: 'PATCH',
      body: userForm,
      redirect: 'follow',
    };
    userForm.append('isActive', false);
    accounts.forEach((account) => {
      userForm.append('Code', account.code);
      fetch(URL + `/api/users-website/${account.id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => console.log('error', error));
    });
  }

  useEffect(() => {
    // check time
    const overdue = [];
    userData?.forEach((num) => {
      if (num.time !== undefined) {
        if (isAccountOverdue(num)) {
          if (num.isActive) {
            num.isActive = false;
            overdue.push(num);
          }
        }
      }
    });
    if (overdue.length) {
      replaceOverdueAccounts(overdue);
    }
  }, [userData]);

  useEffect(() => {
    const data = getUserData();
    data.then((result) => {
      setUserData(result);
      setIsLoading(false);
    });
  }, []);

  const [showPopup, setShowPopup] = useState(false);
  const onSetValue = (value) => {
    setShowPopup(value);
  };
  const [error, setError] = useState(false);
  const [isActiveError, setIsActiveError] = useState(false);
  const AuthSubmit = (e) => {
    e.preventDefault();
    userData.forEach((user) => {
      if (user.name === e.target[0].value) {
        console.log('first')
        if (user.name === e.target[0].value && user.code === e.target[1].value) {
          console.log("ISACTIVE", user.isActive)
          if (user.isActive) {
            setError(false);
            setIsActiveError(false);
            dispatch(setIsLogged(true));
            sessionStorage.setItem('userName', user.name);
            sessionStorage.setItem('email', user.email !== undefined ? user.email : '');
            sessionStorage.setItem('code', user.code !== undefined ? user.code : '');
            sessionStorage.setItem('id', user.id);
            window.scrollTo(0, 0);
            history('/home');
          } else {
            setIsActiveError(true);
          }
        } else {
          setError(true);
        }
      }
    });
  };

  const popupRef = useRef();
  const handleClickOut = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClickOut);
    dispatch(setIsLogged(false));
  }, []);

  return (
    <>
      {showPopup ? <Popup onSetValue={onSetValue} ref={popupRef} /> : ''}
      <AuthCaption>{t('auth.auth')}</AuthCaption>
      <form onSubmit={AuthSubmit}>
        <InputContainer>
          <InputDiv>
            <InputCaption>{t('auth.client')}</InputCaption>
            <TextField placeholder='Name' required='required' />
          </InputDiv>
          <InputDiv>
            <InputCaption>{t('auth.code')}</InputCaption>
            <TextField placeholder='Access code' required='required' />
          </InputDiv>
          {error ? <Error>{t('auth.error')}</Error> : ''}
          {isActiveError ? <Error>{t('auth.isActiveError')}</Error> : ''}
          <ShowHelper
            role='presentation'
            ref={popupRef}
            onKeyDown={() => onSetValue(true)}
            onClick={() => onSetValue(true)}
          >
            {t('auth.accessCode')}
          </ShowHelper>
          <AuthButton type='submit'>{t('auth.craft')}</AuthButton>
        </InputContainer>
      </form>
    </>
  );
}
