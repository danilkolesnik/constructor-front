/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import { font_cera_bold } from '../../../assets/style/fonts.variables';

const HeaderContainer = styled.div`
  @media (min-width: 1024px) {
    background-color: ${(props) => (props.dark ? '#35364E' : '#fff')};
    width: 100%;
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 980px) {
    position: relative;
    background-color: ${(props) => (props.dark ? '#35364E' : '#fff')};
    width: 100%;
    height: 63px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 480px) {
    position: relative;
    background-color: ${(props) => (props.dark ? '#35364E' : '#fff')};
    width: 100%;
    min-height: 63px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const HeaderLogo = styled.img`
  @media (min-width: 1024px) {
    max-width: 315px;
    margin-left: 50px;
    cursor: pointer;
  }
  @media (max-width: 980px) {
    max-width: 315px;
    margin-left: 40px;
  }
  @media (max-width: 480px) {
    max-width: 213px;
    margin-left: 22px;
  }
`;

// min-width: 1024 => width: 45vw
const NavigationContainer = styled.div`
  @media (min-width: 1024px) {
<<<<<<< HEAD
    width: 39vw;
=======
    width: 40vw;
>>>>>>> 30a77abe52bd9de7ac407f80e5012c4bb75c63d8
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    margin-right: 100px;
    text-decoration: none;
  }
  @media (max-width: 980px) {
    width: 45vw;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 40px;
    text-decoration: none;
    gap: 24px;
  }
`;

const NavigationElement = styled.h1`
  @media (min-width: 1024px) {
    color: ${(props) => (props.dark ? '#fff' : '#35364E')};
    font-family: ${font_cera_bold};
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    transition: 0.1s;
    white-space: nowrap;
    border-bottom: ${(props) => (props.marked === true ? '1px solid red' : 'none')};
    &:hover {
      border-bottom: 1px solid ${(props) => (props.dark ? '#fff' : '#35364E')};
      /* color: #6a50c2;
      filter: drop-shadow(0px 0px 15px rgba(106, 80, 194, 0.35))
        drop-shadow(0px 0px 20px rgba(106, 80, 194, 0.35)); */
    }
  }
  @media (max-width: 980px) {
    display: none;
  }
`;

const BurgerIcon = styled.img`
  @media (min-width: 1024px) {
    display: none;
  @media (max-width: 980px) {
    display: block;
  }
`;

const NavigationBurger = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 980px) {
    position: absolute;
    z-index: 20;
    background-color: #fff;
    width: 250px;
    height: 207px;
    top: 0;
    right: 0;
    box-shadow: 0px 0px 20px rgba(53, 54, 78, 0.2);
  }
`;

const BurgerInnerWrapper = styled.div`
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 980px) {
    margin: auto;
    max-width: 140px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #fff;
    margin-top: 40px;
  }
`;

const PopupNavigationElement = styled.h1`
  @media (min-width: 1024px) {
    display: none;
  }
  @media (max-width: 980px) {
    max-width: 140px;
    color: #35364e;
    font-family: ${font_cera_bold};
    font-size: 16px;
    font-weight: 800;
  }
`;

const Cross = styled.img`
  position: absolute;
  right: 0;
  margin: 20px 20px 0px 0px;
  cursor: pointer;
`;

export {
  HeaderContainer,
  HeaderLogo,
  NavigationContainer,
  NavigationElement,
  BurgerIcon,
  NavigationBurger,
  BurgerInnerWrapper,
  PopupNavigationElement,
  Cross,
};
