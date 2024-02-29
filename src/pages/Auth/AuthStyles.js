import styled from 'styled-components';
import { font_cera, font_cera_bold } from '../../assets/style/fonts.variables';

const AuthContainer = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 1280px) {
    display: flex;
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: ${(props) => (props.showAuth ? 'show' : 'hidden')};
    margin-top: -10px;
  }
`;

const Swiper = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (max-width: 1020px) {
    display: block;
    height: 500px;
  }
  @media (max-width: 480px) {
    display: block;
    width: 100%;
    height: auto;
    background-color: #35364e;
  }
`;

const FormContainer = styled.div`
  @media (min-width: 1020px) {
    width: 50%;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  @media (max-width: 1020px) {
    display: block;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  @media (max-width: 480px) {
    display: ${(props) => (props.showAuth ? 'block' : 'none')};
  }
`;

const AuthHeader = styled.div`
  @media (min-width: 480px) {
    height: 20px;
    margin: 38px 30px 0px 38px;
    display: flex;
    justify-content: right;
  }
  @media (max-width: 480px) {
    height: 38px;
    margin: 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const CopyrightInfo = styled.p`
  @media (min-width: 480px) {
    color: black;
    font-weight: 600;
    font-size: 10px;
    font-family: ${font_cera};
    margin: 0px 0px 25px 50px;
  }
  @media (max-width: 480px) {
    color: black;
    font-weight: 600;
    font-size: 10px;
    font-family: ${font_cera};
    margin: 0px 0px 22px 22px;
    padding-bottom: 20px;
  }
`;

const HeaderLogo = styled.img`
  @media (min-width: 481px) {
    display: none;
  }
  @media (max-width: 980px) {
    display: block;
    max-width: 240px;
  }
`;

// AuthForm

const Form = styled.div`
  @media (min-width: 1280px) {
    margin: 91px 50px 34px 50px;
    height: 100%;
    border-bottom: 1px solid #c8c8df;
  }
  @media (max-width: 1280px) {
    margin: 31px 20px 14px 0px;
    height: 100%;
    border-bottom: 1px solid #c8c8df;
  }
  @media (max-width: 480px) {
    margin: 42px 22px 22px 22px;
    height: auto;
    border-bottom: 1px solid #c8c8df;
  }
`;

const AuthCaption = styled.h1`
  @media (min-width: 1024px) {
    color: #35364e;
    font-weight: 800;
    font-style: bold;
    font-size: 28px;
    font-family: ${font_cera_bold};
    margin: 0px 0px 68px 101px;
  }

  @media (max-width: 980px) {
    color: #35364e;
    font-weight: 800;
    font-style: bold;
    font-size: 28px;
    font-family: ${font_cera_bold};
    text-align: center;
  }
`;

const InputContainer = styled.div`
  @media (min-width: 1024px) {
    margin: 68px 0px 39px 0px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  @media (max-width: 980px) {
    margin: 68px 0px 39px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }
  @media (max-width: 480px) {
    margin: 16px 0px 39px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
`;

const InputDiv = styled.div`
  @media (min-width: 480px) {
    display: flex;
    gap: 30px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 9px;
  }
`;

const InputCaption = styled.h1`
  @media (min-width: 480px) {
    color: #35364e;
    font-weight: 400;
    line-height: 42px;
    min-width: 60px;
    text-align: left;
    font-style: bold;
    font-size: 18px;
    font-family: ${font_cera_bold};
    margin: 0px 0px 0px 101px;
  }
  @media (max-width: 480px) {
    color: #35364e;
    font-weight: 400;
    line-height: 42px;
    font-style: bold;
    font-size: 18px;
    font-family: ${font_cera_bold};
  }
`;

const ShowHelper = styled.p`
  @media (min-width: 480px) {
    cursor: pointer;
    color: #35364e;
    font-weight: 400;
    line-height: 20px;
    font-style: bold;
    font-size: 15px;
    margin-left: 186px;
    font-family: ${font_cera_bold};
  }
  @media (max-width: 480px) {
    cursor: pointer;
    color: #35364e;
    font-weight: 400;
    line-height: 20px;
    font-style: bold;
    font-size: 15px;
    font-family: ${font_cera_bold};
  }
`;

const Error = styled.p`
  @media (min-width: 480px) {
    cursor: pointer;
    color: #ff0000;
    font-weight: 400;
    line-height: 20px;
    font-style: bold;
    font-size: 15px;
    margin-left: 186px;
    font-family: ${font_cera_bold};
  }
  @media (max-width: 480px) {
    cursor: pointer;
    color: #ff0000;
    font-weight: 400;
    line-height: 20px;
    font-style: bold;
    font-size: 15px;
    font-family: ${font_cera_bold};
  }
`;

export {
  AuthContainer,
  Swiper,
  FormContainer,
  AuthHeader,
  CopyrightInfo,
  Form,
  AuthCaption,
  InputContainer,
  InputDiv,
  InputCaption,
  ShowHelper,
  HeaderLogo,
  Error,
};
