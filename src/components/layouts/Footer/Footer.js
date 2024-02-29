import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FooterContainer,
  FooterColumn,
  ColumnCaption,
  ColumnContent,
  ColumnText,
} from './FooterStyles';
import '../../../utils/i18next';
import { getFooterData } from '../../../services/getFooterData';

export default function Footer({ auth }) {
  const { t } = useTranslation();
  const [footerData, setFooterData] = useState(null);
  useEffect(() => {
    const data = getFooterData();
    data.then((result) => {
      setFooterData(result);
    });
  }, []);
  return (
    <FooterContainer auth={auth} id='footer'>
      <FooterColumn>
        <ColumnCaption auth={auth}>{t('navigation.footer.phone')}</ColumnCaption>
        <ColumnContent>
          <ColumnText
            href={`tel:${footerData?.length > 0 && footerData[0].Value.replaceAll(' ', '')}`}
            rel='noreferrer'
            auth={auth}
          >
            {footerData?.length > 0 ? footerData[0].Value : 'no data'}
          </ColumnText>
          <ColumnText
            href={`tel:${footerData?.length > 0 && footerData[1].Value.replaceAll(' ', '')}`}
            rel='noreferrer'
            auth={auth}
          >
            {footerData?.length > 0 ? footerData[1].Value : 'no data'}
          </ColumnText>
        </ColumnContent>
      </FooterColumn>
      <FooterColumn>
        <ColumnCaption auth={auth}>{t('navigation.footer.email')}</ColumnCaption>
        <ColumnContent>
          <ColumnText
            href={`mailto:${footerData?.length > 0 && footerData[2].Value.replaceAll(' ', '')}`}
            target='_blank'
            rel='noreferrer'
            auth={auth}
          >
            {footerData?.length > 0 ? footerData[2].Value : 'no data'}
          </ColumnText>
        </ColumnContent>
      </FooterColumn>
      <FooterColumn>
        <ColumnCaption auth={auth}>{t('navigation.footer.about.quickDraft')}</ColumnCaption>
        <ColumnContent>
          <ColumnText href='/terms-of-service' target='_blank' rel='noreferrer' auth={auth}>
            {t('navigation.header.terms')}
          </ColumnText>
        </ColumnContent>
      </FooterColumn>
      <FooterColumn>
        <ColumnCaption auth={auth}>{t('navigation.footer.about.diia')}</ColumnCaption>
        <ColumnContent>
          <ColumnText
            href={footerData?.length > 0 ? footerData[3].Value : 'https://sk.ua/uk'}
            target='_blank'
            rel='noreferrer'
            auth={auth}
          >
            {t('navigation.header.news')}
          </ColumnText>
        </ColumnContent>
      </FooterColumn>
    </FooterContainer>
  );
}
