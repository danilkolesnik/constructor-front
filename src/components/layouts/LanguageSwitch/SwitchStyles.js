/* eslint-disable camelcase */
import styled from 'styled-components';
import { font_cera } from '../../../assets/style/fonts.variables';

const SwitchContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DropDownContainer = styled.div`
  position: ${(props) => (props.auth ? 'static' : 'absolute')};
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 10px;
  z-index: 10;
  box-shadow: 0px 5px 15px rgba(53, 54, 78, 0.07), 0px 5px 10px rgba(53, 54, 78, 0.07);
`;

const LanguageContainer = styled.div`
  display: flex;
  gap: 7px;
  justify-content: right;
  cursor: pointer;
`;

const LanguageIndicator = styled.div`
  color: ${(props) => (props.dark ? '#fff' : '#35364E')};
  font-weight: 600;
  font-size: 16px;
  font-family: ${font_cera};
  text-align: right;
  &:hover {
    color: #ed1847;
    filter: drop-shadow(0px 0px 15px rgba(237, 24, 71, 0.35) ;)
      drop-shadow(0px 0px 20px rgba(237, 24, 71, 0.35));
  }
`;

const DropDownItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 150px;
  height: 39px;
  line-height: 39px;
  transition: 0.1s;
  cursor: pointer;
  background-color: ${(props) => (props.picked === true ? 'white' : '#EBEBF3')};
  &:hover {
    background-color: #ebebf3;
  }
`;

const Language = styled.p`
  color: black;
  font-weight: 600;
  font-size: 16px;
  font-family: ${font_cera};
  margin-left: 20px;
  line-height: 24px;
`;

export {
  LanguageContainer,
  LanguageIndicator,
  DropDownContainer,
  SwitchContainer,
  DropDownItem,
  Language,
};
