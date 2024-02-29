import styled from 'styled-components';
import { font_cera } from '../../../assets/style/fonts.variables';

const PopupContainer = styled.div`
  @media (min-width: 1024px) {
    position: absolute;
    background: #fff;
    z-index: 15;
    filter: drop-shadow(0px 0px 20px rgba(53, 54, 78, 0.15));
  }
  @media (max-width: 980px) {
    position: absolute;
    background: #fff;
    z-index: 15;
    filter: drop-shadow(0px 0px 20px rgba(53, 54, 78, 0.15));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 480px) {
    position: absolute;
    background: #fff;
    z-index: 15;
    width: 90%;
  }
`;

const SuccessPopupContainer = styled.div`
  @media (min-width: 1024px) {
    margin: auto;
    max-width: 530px;
    background: #fff;
    z-index: 15;
    filter: drop-shadow(0px 0px 20px rgba(53, 54, 78, 0.15));
  }
  @media (max-width: 980px) {
    margin: auto;
    width: 90%;
    max-width: 530px;
    background: #fff;
    z-index: 15;
    filter: drop-shadow(0px 0px 20px rgba(53, 54, 78, 0.15));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
  @media (max-width: 480px) {
    margin: auto;
    width: 90%;
    background: #fff;
    z-index: 15;
    filter: drop-shadow(0px 0px 20px rgba(53, 54, 78, 0.15));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }
`;

const PopupText = styled.p`
  @media (min-width: 1224px) {
    max-width: calc(100vw / 2 - 350px);
  }
  @media (min-width: 1024px) {
    color: black;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    font-family: ${font_cera};
    max-width: calc(100vw);
    padding: 40px 50px 40px 62px;
  }
  @media (max-width: 980px) {
    color: black;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    font-family: ${font_cera};
    max-width: 450px;
    padding: 40px 50px 40px 62px;
  }
  @media (max-width: 480px) {
    color: black;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    font-family: ${font_cera};
    max-width: calc(100vw);
    padding: 40px;
  }
`;

const SuccessPopupText = styled.p`
  @media (min-width: 1024px) {
    color: black;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    font-family: ${font_cera};
    padding: 40px 50px 40px 62px;
  }
  @media (max-width: 980px) {
    color: black;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    font-family: ${font_cera};
    max-width: 450px;
    padding: 40px 50px 40px 62px;
  }
  @media (max-width: 480px) {
    color: black;
    font-weight: 600;
    font-size: 22px;
    line-height: 28px;
    font-family: ${font_cera};
    max-width: calc(100vw);
    padding: 40px;
  }
`;

const SuccessPopupTextMarked = styled.span`
  color: #ed1847;
  font-weight: 600;
  font-size: 22px;
  line-height: 21px;
  font-family: ${font_cera};
`;

const PopupTextMarked = styled.span`
  color: #ed1847;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  font-family: ${font_cera};
`;

const Cross = styled.img`
  position: absolute;
  right: 0;
  margin: 20px 20px 0px 0px;
  cursor: pointer;
`;

export {
  PopupContainer,
  SuccessPopupContainer,
  SuccessPopupText,
  PopupText,
  SuccessPopupTextMarked,
  PopupTextMarked,
  Cross,
};
