/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectStaticContent } from '../../services/redux/dataSlice';
import { selectLanguage } from '../../services/redux/toolSlice';
import Header from '../../components/layouts/Header/Header';
import { Loader } from '../../ui/loader';
import { StaticPageWindow, StaticPageContentWrapper, StaticPageContent } from './TermsStyles';
import {
  FooterWrapper,
  FooterLogo,
  FooterHolder,
  FooterLogoWrapper,
  ColumnTextParagraph,
  FooterWrapperCopyright,
} from '../../components/layouts/Footer/FooterStyles';
import Footer from '../../components/layouts/Footer/Footer';
import footerLogo from '../../assets/icons/footer_logo.svg';
import { serialize } from '../../services/generateHTMLfromRichText';
import { getHeaderData } from '../../services/getHeaderData';

export default function TermsOfService() {
  const staticContent = useSelector(selectStaticContent);
  const [data, setData] = useState(staticContent);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const info = getHeaderData();
    info.then((result) => {
      setData(result);
      setIsLoading(false);
    });
  }, []);
  const lang = useSelector(selectLanguage);
  const [currLanguage, setCurrLanguage] = useState(lang);
  useEffect(() => {
    setCurrLanguage(lang);
  }, [lang]);
  return (
    <StaticPageWindow>
      {isLoading ? <Loader /> : ''}
      <Header dark />
      <StaticPageContentWrapper>
        {isLoading === false
          ? data[`TermsofService${currLanguage}`].map((content) => (
              <StaticPageContent>{serialize(content.children)}</StaticPageContent>
            ))
          : ''}
      </StaticPageContentWrapper>
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
    </StaticPageWindow>
  );
}
