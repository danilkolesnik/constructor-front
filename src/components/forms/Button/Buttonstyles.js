import styled from 'styled-components';
import { font_cera, font_cera_bold } from '../../../assets/style/fonts.variables';

const AuthButton = styled.button`
  @media (min-width: 480px) {
    color: white;
    width: 201px;
    height: 50px;
    margin-left: 186px;
    border: 0;
    text-align: center;
    font-family: ${font_cera};
    background-color: #ed1847;
    font-size: 20px;
    cursor: pointer;
    font-weight: 800;
    letter-spacing: 0.06em;
    transition: 0.1s;
    &:hover {
      background-color: #ff0000;
      filter: drop-shadow(0px 0px 15px rgba(255, 31, 0, 0.25))
        drop-shadow(0px 0px 20px rgba(255, 31, 0, 0.25));
    }
  }
  @media (max-width: 480px) {
    color: white;
    height: 50px;
    margin-top: 15px;
    border: 0;
    text-align: center;
    font-family: ${font_cera};
    background-color: #ed1847;
    font-size: 20px;
    cursor: pointer;
    font-weight: 800;
    letter-spacing: 0.06em;
  }
`;

const NavigationButton = styled.button`
  color: white;
  width: 150px;
  height: 40px;
  line-height: 40px;
  border: 0;
  text-align: center;
  font-family: ${font_cera};
  background-color: #ed1847;
  font-size: 17px;
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 0.06em;
  transition: 0.1s;
  &:hover {
    background-color: #ff0000;
    filter: drop-shadow(0px 0px 15px rgba(255, 31, 0, 0.25))
      drop-shadow(0px 0px 20px rgba(255, 31, 0, 0.25));
  }
`;

const AuthButtonMobile = styled.button`
  @media (min-width: 480px) {
    display: none;
    opacity: 0;
  }
  @media (max-width: 480px) {
    position: relative;
    z-index: 30;
    color: white;
    width: 80vw;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 40px;
    border: 0;
    text-align: center;
    font-family: ${font_cera};
    background-color: #ed1847;
    font-size: 16px;
    cursor: pointer;
    font-weight: 800;
    letter-spacing: 0.06em;
    bottom: 41vh;
  }
`;

const ConfirmationButton = styled.button`
  @media (min-width: 1024px) {
    font-family: ${font_cera_bold};
    color: ${(props) => (props.return ? '#ed1847' : '#fff')};
    font-size: 16px;
    width: 100%;
    height: 50px;
    background: ${(props) => (props.return ? 'none' : '#ed1847')};
    border: ${(props) => (props.return ? '2px solid #ed1847' : 'none')};
    cursor: pointer;
  }
  @media (max-width: 980px) {
    font-family: ${font_cera_bold};
    color: ${(props) => (props.return ? '#ed1847' : '#fff')};
    font-size: 16px;
    width: 100%;
    height: 50px;
    background: ${(props) => (props.return ? 'none' : '#ed1847')};
    border: ${(props) => (props.return ? '2px solid #ed1847' : 'none')};
    cursor: pointer;
    ${(props) => (props.main ? `display: none` : '')}
  }
  @media (max-width: 480px) {
    font-family: ${font_cera_bold};
    color: ${(props) => (props.return ? '#ed1847' : '#fff')};
    font-size: 16px;
    width: 148px;
    height: 65px;
    background: ${(props) => (props.return ? 'none' : '#ed1847')};
    border: ${(props) => (props.return ? '2px solid #ed1847' : 'none')};
    cursor: pointer;
    z-index: 10;
    ${(props) => (props.main ? `display: block` : '')}
  }
`;

export { AuthButton, NavigationButton, AuthButtonMobile, ConfirmationButton };
