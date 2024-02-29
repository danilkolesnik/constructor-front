import styled from 'styled-components';
import { font_cera_bold } from '../../assets/style/fonts.variables';

const PreviewWindow = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    justify-content: space-between;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    justify-content: space-between;
  }
`;

const PreviewTitle = styled.p`
  @media (min-width: 1300px) {
    font-family: ${font_cera_bold};
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: #35364e;
  }
  @media (max-width: 1300px) {
    font-family: ${font_cera_bold};
    margin-left: 100px;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: #35364e;
  }
  @media (max-width: 980px) {
    text-align: center;
    font-family: ${font_cera_bold};
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: #35364e;
  }
  @media (max-width: 480px) {
    text-align: center;
    font-family: ${font_cera_bold};
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    color: #35364e;
  }
`;

const PreviewContainer = styled.div`
  @media (min-width: 1300px) {
    margin: 70px 75px 154px 100px;
  }
  @media (max-width: 1300px) {
    margin: 70px 0px 154px 0px;
  }
  @media (max-width: 980px) {
    width: 100%;
    overflow: scroll;
    margin: 70px 0px 50px 0px;
  }
  @media (max-width: 480px) {
    width: 100%;
    overflow: scroll;
    margin: 30px 0px 20px 0px;
  }
`;

const SuccessPageContainer = styled.div`
  @media (min-width: 1024px) {
    margin: 70px 75px 154px 100px;
  }
  @media (max-width: 980px) {
    width: 100%;
    margin: 70px 0px 50px 0px;
    min-height: 70vh;
  }
  @media (max-width: 480px) {
  }
`;

const ContractWrapper = styled.div`
  @media (min-width: 1300px) {
    display: flex;
    gap: 24px;
    justify-content: center;
    margin-top: 50px;
  }
  @media (max-width: 1300px) {
    display: flex;
    justify-content: center;
    gap: 175px;
    margin-top: 50px;
  }
  @media (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    margin-top: 50px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
    margin-top: 20px;
    width: 100%;
  }
`;

export { PreviewWindow, PreviewTitle, PreviewContainer, ContractWrapper, SuccessPageContainer };
