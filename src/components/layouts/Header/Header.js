/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectIsLogged } from '../../../services/redux/toolSlice';
import {
  HeaderContainer,
  HeaderLogo,
  NavigationContainer,
  NavigationElement,
  BurgerIcon,
  NavigationBurger,
  BurgerInnerWrapper,
  PopupNavigationElement,
  Cross,
} from './HeaderStyles';
import '../../../utils/i18next';
import logo from '../../../assets/icons/header_logo.svg';
import logo_white from '../../../assets/icons/header_logo_white.svg';
import cross from '../../../assets/icons/close_popup.svg';
import burger from '../../../assets/icons/navigation_burger.svg';
import burger_white from '../../../assets/icons/navigation_burger_white.svg';
import Switch from '../LanguageSwitch/Switch';

export default function Header({ dark }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showNavPopup, setNavPopup] = useState(false);
  const [isLogged] = useState(useSelector(selectIsLogged));
  const navUser = () => {
    if (isLogged) {
      navigate('/home');
    } else {
      navigate('/terms-of-service');
    }
  };
  const icon = dark ? burger_white : burger;
  return (
    <HeaderContainer dark={dark}>
      <HeaderLogo src={dark ? logo_white : logo} alt='logo' onClick={navUser} />
      <NavigationContainer>
        <a href='/terms-of-service' target='_blank' rel='noreferrer'>
          <NavigationElement dark={dark}>{t('navigation.header.terms')}</NavigationElement>
        </a>
        <a href='https://sk.ua/insights/?cat=news&tags=3600' target='_blank' rel='noreferrer'>
          <NavigationElement dark={dark}>{t('navigation.header.news')}</NavigationElement>
        </a>
        <a href='#footer' rel='noreferrer'>
          <NavigationElement dark={dark}>{t('navigation.header.contacts')}</NavigationElement>
        </a>
        {/* <Switch dark={dark} /> */}
        <BurgerIcon src={icon} alt='burger-menu' onClick={() => setNavPopup(!showNavPopup)} />
      </NavigationContainer>
      {showNavPopup ? (
        <NavigationBurger>
          <Cross
            src={cross}
            alt='close'
            role='presentation'
            onKeyDown={() => setNavPopup(false)}
            onClick={() => setNavPopup(false)}
          />
          <BurgerInnerWrapper>
            <a href='/terms-of-service' target='_blank' rel='noreferrer'>
              <PopupNavigationElement dark={dark}>
                {t('navigation.header.terms')}
              </PopupNavigationElement>
            </a>
            <a href='https://sk.ua/insights/?cat=news&tags=3600' target='_blank' rel='noreferrer'>
              <PopupNavigationElement dark={dark}>
                {t('navigation.header.news')}
              </PopupNavigationElement>
            </a>
            <a href='#footer' rel='noreferrer'>
              <PopupNavigationElement dark={dark}>
                {t('navigation.header.contacts')}
              </PopupNavigationElement>
            </a>
          </BurgerInnerWrapper>
        </NavigationBurger>
      ) : (
        ''
      )}
    </HeaderContainer>
  );
}
