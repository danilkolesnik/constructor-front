/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable prefer-template */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectShowPopup, setIsLogged } from '../../services/redux/toolSlice';
import Footer from '../../components/layouts/Footer/Footer';
import Switch from '../../components/layouts/LanguageSwitch/Switch';
import AuthForm from './AuthForm';
import SwiperForm from '../../components/layouts/Swiper/SwiperForm';
import HeaderLogoMobile from '../../assets/icons/header_logo_mobile.svg';
import {
  AuthContainer,
  Swiper,
  FormContainer,
  AuthHeader,
  Form,
  CopyrightInfo,
  HeaderLogo,
} from './AuthStyles';
import { Loader } from '../../ui/loader';
import { Banner } from '../../ui/CookieBanner';
import SuccessCraft from '../../components/layouts/Popup/SuccessCraft';

export default function AuthPage() {
  const dispatch = useDispatch();
  function writeCookie(name, val, expires) {
    const date = new Date();
    date.setDate(date.getDate() + expires);
    document.cookie = name + '=' + val + '; path=/; expires=' + date.toUTCString();
  }
  function readCookie(name) {
    const matches = document.cookie.match(
      new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'),
    );
    return matches;
  }

  const [showPopup] = useState(useSelector(selectShowPopup));
  const [isLoading, setIsLoading] = useState(true);
  const [accepted, setIsAccepted] = useState(readCookie('accepted_popup'));
  const onSetCookies = () => {
    setIsAccepted(true);
    writeCookie('accepted_popup', true, 30);
  };
  // mobile statements
  const [showAuthForm, setShowAuthForm] = useState(false);
  const onSetForm = (value) => {
    setShowAuthForm(value);
  };
  useEffect(() => {
    dispatch(setIsLogged(false));
  }, []);
  return showPopup ? (
    // THIS WINDOW WILL SHOW AFTER CREATING THE CONTRACT
    <SuccessCraft />
  ) : (
    // AUTH PAGE
    <AuthContainer>
      {isLoading ? <Loader /> : ''}
      <Swiper>
        <SwiperForm onSetForm={onSetForm} showAuth={showAuthForm} />
      </Swiper>
      <FormContainer showAuth={showAuthForm}>
        <AuthHeader>
          <HeaderLogo src={HeaderLogoMobile} alt='logo' />
          {/* <Switch auth /> */}
        </AuthHeader>
        <Form>
          <AuthForm setIsLoading={setIsLoading} />
        </Form>
        <Footer auth />
        <CopyrightInfo style={{ marginTop: '38px' }}>
          © Sayenko Kharenko {new Date().getFullYear()}
        </CopyrightInfo>
      </FormContainer>
      {!accepted ? <Banner onSetCookies={onSetCookies} /> : ''}
    </AuthContainer>
  );
}
