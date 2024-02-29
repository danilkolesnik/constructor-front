/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  setCurrentData,
  delCurrentData,
  setCurrentContractUpdate,
} from '../../services/redux/dataSlice';
import CounterIndicator from '../../ui/CounterIndicator';
import { HomeWindow, HomeMenu, ButtonImage } from './HomeStyles';
import Header from '../../components/layouts/Header/Header';
import {
  FooterField,
  FooterWrapper,
  FooterLogo,
  FooterHolder,
  FooterLogoWrapper,
  ColumnTextParagraph,
  FooterWrapperCopyright,
} from '../../components/layouts/Footer/FooterStyles';
import Footer from '../../components/layouts/Footer/Footer';
import footerLogo from '../../assets/icons/footer_logo.svg';
import './homeButton.scss';
import { getContractData, getContractDataImage } from '../../services/getContractData';
import { selectLanguage, setIsLockedQuestions } from '../../services/redux/toolSlice';
import { Loader } from '../../ui/loader';

export default function Home() {
  const dispatch = useDispatch();
  const [contractData, setContractData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const data = getContractData();

    data.then((result) => {
      setContractData(result);
      setIsLoading(false);
    });
    sessionStorage.removeItem('pickedAnnexException');
    dispatch(delCurrentData());
    dispatch(setIsLockedQuestions(false));
  }, []);

  const lang = useSelector(selectLanguage);
  const [currLanguage, setCurrLanguage] = useState(lang);
  useEffect(() => {
    setCurrLanguage(lang);
  }, [lang]);

  const handleSetData = (id) => {
    contractData.forEach((i) => {
      if (i.id === id) {
        dispatch(setCurrentData(i));
        dispatch(setCurrentContractUpdate([i.id, i.Count]));
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeWindow>
      {isLoading ? <Loader /> : ''}
      <Header />
      <HomeMenu>
        {contractData?.map((i) => {
          if (i.IsShowContainers) {
            return (
              <NavLink to='/create' onClick={() => handleSetData(i.id)} key={i.id}>
                <div className='menu-element'>
                  <ButtonImage src={i.Background?.url} alt='button' />
                  <div className='description'>
                    <p>{i[`Description${currLanguage}`]}</p>
                  </div>
                  <CounterIndicator count={i.Count} />
                </div>
              </NavLink>
            );
          }
        })}
      </HomeMenu>
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
    </HomeWindow>
  );
}
