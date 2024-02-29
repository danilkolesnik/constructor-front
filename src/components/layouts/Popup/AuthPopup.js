import React from 'react';
import { useTranslation } from 'react-i18next';
import '../../../utils/i18next';
import { PopupContainer, PopupText, PopupTextMarked, Cross } from './PopupStyles';
import cross from '../../../assets/icons/close_popup.svg';

export default function Popup({ onSetValue }) {
  const { t } = useTranslation();
  return (
    <PopupContainer>
      <Cross
        src={cross}
        alt='close'
        role='presentation'
        onKeyDown={() => onSetValue(false)}
        onClick={() => onSetValue(false)}
      />
      <PopupText>
        <PopupTextMarked>{t('auth.helper.name')}</PopupTextMarked>™ {t('auth.helper.text1')}{' '}
        <a href='/terms-of-service' target='_blank' rel='noreferrer'>
          {t('navigation.header.terms')}
        </a>{' '}
        {t('auth.helper.text2')}{' '}
        <a href='mailto:quickdraft@sk.ua' target='_blank' rel='noreferrer'>
          quickdraft@sk.ua
        </a>{' '}
        {t('auth.helper.text3')}
      </PopupText>
    </PopupContainer>
  );
}
