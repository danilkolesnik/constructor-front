import styled from 'styled-components';
// import { font_cera } from '../../assets/style/fonts.variables';

const HomeWindow = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    overflow: hidden;
  }
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-between;
    height: 100vh;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    overflow: visible;
    overflow-x: hidden;
    justify-content: space-between;
    height: 100vh;
  }
`;

const HomeMenu = styled.div`
  @media (min-width: 1024px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    margin-bottom: 25px;
    margin-top: 15px;
  }
  @media (max-width: 980px) {
    max-width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 7px;
    margin-top: 10px;
    margin-bottom: 14px;
  }
  @media (max-width: 480px) {
    width: 100vw;
    margin-top: 25px;
    margin-bottom: 14px;
  }
`;

const MenuElement = styled.div`
  @media (min-width: 1024px) {
    width: calc(100vw / 2.8);
    position: relative;
  }
  @media (max-width: 980px) {
    width: calc(100vw / 2.2);
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const ButtonImage = styled.img`
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
`;

const IndicatorContainer = styled.div`
  @media (min-width: 1024px) {
    position: absolute;
    top: 15px;
    left: 15px;
    width: calc(100% / 4);
    cursor: pointer;
  }
  @media (max-width: 980px) {
    position: absolute;
    top: 5px;
    left: 15px;
    width: 100%;
    cursor: pointer;
  }
`;

const IndicatorText = styled.p`
  font-family: 'Cera Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #d6d6e7;
`;

export { HomeWindow, HomeMenu, MenuElement, ButtonImage, IndicatorContainer, IndicatorText };
