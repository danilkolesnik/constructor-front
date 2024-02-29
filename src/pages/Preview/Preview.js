/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/layouts/Header/Header';
import { PreviewWindow, PreviewContainer, PreviewTitle, ContractWrapper } from './PreviewStyles';
import '../../utils/i18next';
import {
  FooterField,
  FooterWrapper,
  FooterLogo,
  FooterHolder,
  FooterWrapperCopyright,
  FooterLogoWrapper,
  ColumnTextParagraph,
} from '../../components/layouts/Footer/FooterStyles';
import Footer from '../../components/layouts/Footer/Footer';
import footerLogo from '../../assets/icons/footer_logo.svg';
import ContractForm from '../../components/layouts/Contract/Contract';
import Confirmation from '../../components/layouts/ConfirmationBlock/Confirmation';

export default function Home() {
  const { t } = useTranslation();
  return (
    <PreviewWindow>
      <Header dark />
      <PreviewContainer>
        <PreviewTitle>{t('preview.caption')}</PreviewTitle>
        <ContractWrapper>
          <ContractForm />
          <Confirmation />
        </ContractWrapper>
      </PreviewContainer>
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
