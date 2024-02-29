import styled from 'styled-components';
import { font_cera } from '../../assets/style/fonts.variables';

const StaticPageWindow = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100vh;
  }
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100vh;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 100vh;
  }
`;

const StaticPageContentWrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 80vh;
    overflow: hidden;
    padding: 80px 0px 80px 0px;
  }
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    overflow: hidden;
    padding: 80px 0px 80px 0px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    overflow: hidden;
    padding: 80px 0px 80px 0px;
  }
`;

const StaticPageContent = styled.div`
  @media (min-width: 1024px) {
    width: 80%;
    font-family: ${font_cera};
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: #35364e;
  }
  @media (max-width: 980px) {
    width: 80%;
    font-family: ${font_cera};
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: #35364e;
  }
  @media (max-width: 480px) {
    width: 80%;
    font-family: ${font_cera};
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 28px;
    color: #35364e;
  }
`;

export { StaticPageWindow, StaticPageContentWrapper, StaticPageContent };
