/* eslint-disable camelcase */
import styled from 'styled-components';
import { font_cera } from '../../../assets/style/fonts.variables';

const FooterField = styled.div`
  display: flex;
  flex-direction: column;
  bottom: 0;
  margin-top: auto;
`;

const FooterWrapper = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
    height: 110px;
    display: flex;
    gap: 80px;
    background-color: #35364e;
  }
  @media (max-width: 980px) {
    width: 100%;
    height: 110px;
    display: flex;
    gap: 20px;
    background-color: #35364e;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
    background-color: #35364e;
  }
`;

const FooterWrapperCopyright = styled.div`
  padding-bottom: 14px;
  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    gap: 80px;
    background-color: #35364e;
  }
  @media (max-width: 980px) {
    width: 100%;
    display: flex;
    gap: 20px;
    background-color: #35364e;
  }
  @media (max-width: 480px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
    background-color: #35364e;
  }
`;

const FooterLogoWrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    margin: 36px 0px 0px 100px;
  }
  @media (max-width: 980px) {
    margin: 36px 0px 0px 20px;
  }
  @media (max-width: 480px) {
    margin: 22px 22px 0px 22px;
    max-width: 180px;
  }
`;

const FooterLogo = styled.img`
  @media (min-width: 1024px) {
    margin-bottom: 36px;
  }
  @media (max-width: 980px) {
    margin: 22px 0px 0px 0px;
    max-width: 230px;
  }
  @media (max-width: 480px) {
    margin: 22px 0px 0px 0px;
    max-width: 230px;
  }
`;

const FooterHolder = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
    margin: 38px 100px 0px 0px;
  }
  @media (max-width: 980px) {
    width: 100%;
    margin: 38px 20px 0px 0px;
  }
`;

const FooterContainer = styled.div`
  @media (min-width: 1024px) {
    ${(props) =>
      props.auth
        ? `display: flex;
          justify-content: space-between;
          margin: 0px 50px 0px 50px;`
        : `display: flex;
          justify-content: space-between;`};
  }
  @media (max-width: 980px) {
    display: flex;
    justify-content: space-between;
    margin: ${(props) => (props.auth ? '0px 50px 0px 50px;' : '')};
  }
  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-column-gap: 37px;
    grid-row-gap: 47px;
    margin: 0px 22px 0px 22px;
  }
`;

const FooterColumn = styled.div`
  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  @media (max-width: 480px) {
    max-width: 100px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
`;

const ColumnCaption = styled.h1`
  color: ${(props) => (props.auth ? '#ed1847' : '#fff')};
  font-weight: 800;
  font-size: 12px;
  font-family: ${font_cera};
`;

const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  max-width: 130px;
`;

const ColumnText = styled.a`
  color: ${(props) => (props.auth ? 'black' : '#fff')};
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  font-family: ${font_cera};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
const ColumnTextParagraph = styled.p`
  color: ${(props) => (props.auth ? 'black' : '#fff')};
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  font-family: ${font_cera};
  text-decoration: none;
`;

export {
  FooterField,
  ColumnTextParagraph,
  FooterWrapper,
  FooterLogo,
  FooterContainer,
  FooterHolder,
  FooterColumn,
  ColumnCaption,
  ColumnContent,
  ColumnText,
  FooterLogoWrapper,
  FooterWrapperCopyright,
};
