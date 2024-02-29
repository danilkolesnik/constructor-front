import styled from 'styled-components';
import { font_cera, font_cera_bold } from '../../../assets/style/fonts.variables';

const ContractHolder = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 100vw;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    width: 100vw;
  }
`;

const Contract = styled.div`
  @media (min-width: 1024px) {
    width: 864px;
    min-height: 1200px;
    margin-top: 50px;
    background: #ffffff;
    border: 1px solid #d6d6e7;
    box-shadow: 0px 0px 10px rgba(53, 54, 78, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 980px) {
    width: 90%;
    min-height: 1200px;
    background: #ffffff;
    border: 1px solid #d6d6e7;
    box-shadow: 0px 0px 10px rgba(53, 54, 78, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 480px) {
    width: 90%;
    min-height: 1200px;
    background: #ffffff;
    border: 1px solid #d6d6e7;
    box-shadow: 0px 0px 10px rgba(53, 54, 78, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const ContractContainer = styled.div`
  display: inline-block;
  @media (min-width: 1024px) {
    margin: 38px 98px 0px 98px;
    flex-direction: column;
    font-family: ${font_cera};
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 21px;
    color: #35364e;
    padding-bottom: 80px;
  }
  @media (max-width: 980px) {
    width: 80%;
    flex-direction: column;
    font-family: ${font_cera};
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 21px;
    color: #35364e;
    padding-bottom: 80px;
  }
  @media (max-width: 480px) {
    width: 90%;
    flex-direction: column;
    font-family: ${font_cera};
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 21px;
    color: #35364e;
    padding-bottom: 80px;
  }
`;

const ContractTitle = styled.p`
  @media (min-width: 1024px) {
    font-family: ${font_cera_bold};
    font-weight: 900;
    margin-top: 50px;
    font-size: 26px;
    line-height: 33px;
    text-align: center;
    text-transform: uppercase;
    color: #35364e;
  }
  @media (max-width: 980px) {
    font-family: ${font_cera_bold};
    font-weight: 900;
    margin-top: 50px;
    margin-bottom: 32px;
    font-size: 26px;
    line-height: 33px;
    text-align: center;
    text-transform: uppercase;
    color: #35364e;
  }
  @media (max-width: 480px) {
    font-family: ${font_cera_bold};
    font-weight: 900;
    margin-top: 50px;
    margin-bottom: 32px;
    font-size: 26px;
    line-height: 33px;
    text-align: center;
    text-transform: uppercase;
    color: #35364e;
  }
`;

export { Contract, ContractContainer, ContractTitle, ContractHolder };
