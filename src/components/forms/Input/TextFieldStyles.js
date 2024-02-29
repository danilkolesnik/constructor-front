import styled from 'styled-components';
import { font_cera } from '../../../assets/style/fonts.variables';

const Input = styled.input`
  @media (min-width: 1280px) {
    border: 1px solid #c8c8df;
    padding: 9px 15px 10px 15px;
    min-width: 285px;
    font-size: 17px;
    font-family: ${font_cera};
    color: #000;
    outline: none;
    &::placeholder {
      color: #8e8eb2;
    }
    &:focus {
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    }
  }
  @media (max-width: 1280px) {
    border: 1px solid #c8c8df;
    padding: 9px 101px 10px 15px;
    font-size: 17px;
    font-family: ${font_cera};
    color: #000;
    outline: none;
    &::placeholder {
      color: #8e8eb2;
    }
    &:focus {
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    }
  }
  @media (max-width: 480px) {
    border: 1px solid #c8c8df;
    padding: 9px 15px 10px 15px;
    width: 100%;
    font-size: 17px;
    font-family: ${font_cera};
    color: #000;
    outline: none;
    &::placeholder {
      color: #8e8eb2;
    }
    &:focus {
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    }
  }
`;

const EmailInput = styled.input`
  @media (min-width: 1280px) {
    border: 1px solid #c8c8df;
    padding: 9px 15px 10px 15px;
    width: 100%;
    font-size: 17px;
    font-family: ${font_cera};
    color: #000;
    outline: none;
    &::placeholder {
      color: #8e8eb2;
    }
    &:focus {
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    }
  }
  @media (max-width: 1280px) {
    border: 1px solid #c8c8df;
    padding: 9px 101px 10px 15px;
    font-size: 17px;
    font-family: ${font_cera};
    color: #000;
    outline: none;
    &::placeholder {
      color: #8e8eb2;
    }
    &:focus {
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    }
  }
  @media (max-width: 980px) {
    border: 1px solid #c8c8df;
    padding: ${(props) => (props.tablet ? `9px 10px 10px 15px;` : '9px 101px 10px 15px;')}
    font-size: 17px;
    font-family: ${font_cera};
    color: #000;
    outline: none;
    &::placeholder {
      color: #8e8eb2;
    }
    &:focus {
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    }
    ${(props) => (props.main ? `display: none` : '')}
  }
  @media (max-width: 480px) {
    border: 1px solid #c8c8df;
    padding: 9px 15px 10px 15px;
    width: 100%;
    font-size: 17px;
    font-family: ${font_cera};
    color: #000;
    outline: none;
    &::placeholder {
      color: #8e8eb2;
    }
    &:focus {
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
    }
    ${(props) => (props.main ? `display: block` : '')}
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  border: 1px solid #c8c8df;
  padding: 11px 16px;
  font-size: 20px;
  margin: 13px 0;
  font-family: ${font_cera};
  border-radius: 12px;
  color: #000;
  outline: none;
  resize: vertical;
  &::placeholder {
    color: #8e8eb2;
  }
  &:focus {
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.08);
  }
`;

const TextFieldContainer = styled.div`
  position: relative;
  .photo__loaded {
    font-family: ${font_cera};
    font-size: 16px;
    font-weight: 400;
  }
  .icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    filter: opacity(0.7);
    &:hover {
      cursor: pointer;
    }
  }
  .line::after {
    content: '/';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
  }
  #file,
  input[type='file'] {
    display: none;
  }
`;

export { Input, TextFieldContainer, EmailInput };
