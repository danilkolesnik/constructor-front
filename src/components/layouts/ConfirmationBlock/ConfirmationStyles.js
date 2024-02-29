import styled from 'styled-components';
import { font_cera } from '../../../assets/style/fonts.variables';

const ConfirmationContainer = styled.div`
  @media (min-width: 1020px) {
    position: sticky;
    top: 0;
    width: 300px;
    height: 100%;
    margin-top: 50px;
    border: 1px solid #d6d6e7;
    box-shadow: 0px 0px 10px rgba(53, 54, 78, 0.25);
  }
  @media (max-width: 1020px) {
    top: 0;
    width: 500px;
    height: 100%;
    border: 1px solid #d6d6e7;
    box-shadow: 0px 0px 10px rgba(53, 54, 78, 0.25);
    order: -1;
  }
  @media (max-width: 480px) {
    width: 95%;
    margin-top: 20px;
    border: 1px solid #d6d6e7;
    box-shadow: 0px 0px 10px rgba(53, 54, 78, 0.25);
    order: -1;
  }
`;

const ButtonContainer = styled.div`
  @media (min-width: 1024px) {
    margin: 0px 20px;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    gap: 19px;
  }
  @media (max-width: 1024px) {
    margin: 0px 20px;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    gap: 19px;
  }
  @media (max-width: 480px) {
    display: flex;
    gap: 20px;
    margin: 0px 10px 0px 10px;
  }
`;

const TabletEmailContainer = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 1020px) {
    display: flex;
    gap: 15px;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;
const OrLineContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    gap: 12px;
    align-items: center;
    font-family: ${font_cera};
  }
  @media (max-width: 1024px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const OrLine = styled.div`
  @media (min-width: 1024px) {
    width: 100%;
    height: 1px;
    border: 1px solid #c8c8df;
  }
  @media (max-width: 980px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 19px;
  }
  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    margin: 0px 10px 0px 10px;
  }
`;

export {
  ConfirmationContainer,
  ButtonContainer,
  OrLineContainer,
  OrLine,
  ButtonWrapper,
  TabletEmailContainer,
};
