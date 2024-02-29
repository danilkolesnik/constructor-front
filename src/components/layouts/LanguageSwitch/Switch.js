import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setLanguage, selectLanguage } from '../../../services/redux/toolSlice';
import {
  SwitchContainer,
  LanguageContainer,
  LanguageIndicator,
  DropDownContainer,
  DropDownItem,
  Language,
} from './SwitchStyles';
import mark from '../../../assets/icons/language_mark.svg';
import arrow from '../../../assets/icons/dropdown_arrow.svg';
import arrow_white from '../../../assets/icons/dropdown_arrow_white.svg';

export default function Switch({ dark, auth }) {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState(useSelector(selectLanguage));
  const onSetLanguage = (l) => {
    setLang(l);
    setIsOpen(false);
    dispatch(setLanguage(l));
    i18n.changeLanguage(l.toLowerCase());
  };
  const detectScreen = (lan) => {
    let res = '';
    if (lan === 'English') {
      if (window.screen.availWidth > 1024) {
        res = lan;
      } else {
        res = 'En';
      }
    }
    if (lan === 'Українська') {
      if (window.screen.availWidth > 1024) {
        res = lan;
      } else {
        res = 'Укр';
      }
    }
    return res;
  };
  const display = lang === 'EN' ? detectScreen('English') : detectScreen('Українська');

  const switchRef = useRef();
  const handleClickOut = (e) => {
    if (switchRef.current && !switchRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleClickOut);
  }, []);

  return (
    <SwitchContainer ref={switchRef}>
      <LanguageContainer
        role='presentation'
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={() => setIsOpen(!isOpen)}
      >
        <LanguageIndicator dark={dark}>{display}</LanguageIndicator>
        <img src={dark ? arrow_white : arrow} alt='arrow' />
      </LanguageContainer>
      {isOpen ? (
        <DropDownContainer auth={auth}>
          <DropDownItem
            role='presentation'
            onClick={() => onSetLanguage('EN')}
            onKeyDown={() => onSetLanguage('EN')}
            picked={lang !== 'EN'}
          >
            <Language>English</Language>
            {lang === 'EN' ? <img src={mark} alt='mark' style={{ marginRight: '13px' }} /> : ''}
          </DropDownItem>
          <DropDownItem
            role='presentation'
            onClick={() => onSetLanguage('UA')}
            onKeyDown={() => onSetLanguage('UA')}
            picked={lang !== 'UA'}
          >
            <Language>Українська</Language>
            {lang === 'UA' ? <img src={mark} alt='mark' style={{ marginRight: '13px' }} /> : ''}
          </DropDownItem>
        </DropDownContainer>
      ) : (
        ''
      )}
    </SwitchContainer>
  );
}
