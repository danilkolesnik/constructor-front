import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import '../../../utils/i18next';
import { useDispatch } from 'react-redux';
import { setShowPopup } from '../../../services/redux/toolSlice';
import { PreviewWindow, SuccessPageContainer } from '../../../pages/Preview/PreviewStyles';
import {
  FooterField,
  FooterWrapper,
  FooterLogo,
  FooterHolder,
  FooterWrapperCopyright,
  FooterLogoWrapper,
  ColumnTextParagraph,
} from '../Footer/FooterStyles';
import Footer from '../Footer/Footer';
import footerLogo from '../../../assets/icons/footer_logo.svg';
import Header from '../Header/Header';
import {
  SuccessPopupContainer,
  SuccessPopupText,
  SuccessPopupTextMarked,
  Cross,
} from './PopupStyles';
import cross from '../../../assets/icons/close_popup.svg';

export default function SuccessCraft() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const returnBack = () => {
    dispatch(setShowPopup(false));
    navigate('/terms-of-service');
  };
  const timer = () => {
    let counter = 0;
    const timerInterval = setInterval(() => {
      counter += 1;
      if (counter === 5) {
        clearInterval(timerInterval);
        returnBack();
      }
    }, 1000);
  };

  useEffect(() => {
    timer();
  }, []);
  return (
    <PreviewWindow>
      <Header dark />
      <SuccessPageContainer>
        <SuccessPopupContainer>
          <Cross
            src={cross}
            alt='close'
            role='presentation'
            onKeyDown={() => returnBack()}
            onClick={() => returnBack()}
          />
          <SuccessPopupText>
            {t('preview.popup.text1')}
            <SuccessPopupTextMarked>{t('auth.helper.name')}</SuccessPopupTextMarked>™{' '}
            {t('preview.popup.text2')}
          </SuccessPopupText>
        </SuccessPopupContainer>
      </SuccessPageContainer>
      <FooterField>
        <FooterWrapper>
          <FooterLogoWrapper>
            <FooterLogo src={footerLogo} alt='logo' />
          </FooterLogoWrapper>
          <FooterHolder>
            <Footer />
          </FooterHolder>
        </FooterWrapper>
        <FooterWrapperCopyright>
          <FooterLogoWrapper>
            <ColumnTextParagraph>
              © Sayenko Kharenko {new Date().getFullYear()}. All rights reserved. Developed by
              Linecore.
            </ColumnTextParagraph>
          </FooterLogoWrapper>
        </FooterWrapperCopyright>
      </FooterField>
    </PreviewWindow>
  );
}
