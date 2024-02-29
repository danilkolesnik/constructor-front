import React from 'react';
import './cookiebanner.scss';
import { useTranslation } from 'react-i18next';
import '../utils/i18next';
import cross from '../assets/icons/close_cookies.svg';

export function Banner({ onSetCookies }) {
  const { t } = useTranslation();
  return (
    <div className='cookies-popup'>
      <div className='cookies-popup__close'>
        <img
          src={cross}
          alt='x'
          role='presentation'
          onKeyDown={() => onSetCookies(true)}
          onClick={() => {
            onSetCookies(true);
          }}
        />
      </div>
      <div className='cookies-popup__body'>
        <div className='cookies-popup__title'>{t('auth.cookie.title')}</div>
        <div className='cookies-popup__text'>
          <p>
            {t('auth.cookie.text1')} <br />
            {t('auth.cookie.text2')}{' '}
            <a href='https://sk.ua/privacy-policy/' className='cookies-popup__link'>
              {t('auth.cookie.link')}
            </a>
          </p>
        </div>
        <div className='cookies-popup__button'>
          <button
            type='button'
            className='accept-cookies-button'
            onKeyDown={() => onSetCookies(true)}
            onClick={() => {
              onSetCookies(true);
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
