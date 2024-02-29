import styled from 'styled-components';
import { font_cera, font_cera_bold } from '../../assets/style/fonts.variables';

const CreateContractWindow = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  position: relative;
`;

const ProgressBarContainer = styled.div`
  @media (min-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100px;
    background: #ebebf3;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 115px;
    background: #ebebf3;
  }
`;

const ProgressBarWrapper = styled.div`
  @media (min-width: 980px) {
    display: flex;
    flex-direction: column;
    margin: 0px 100px 0px 100px;
    gap: 12px;
  }
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    margin: 0px 40px 0px 40px;
    gap: 12px;
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    margin: 0px 21px 0px 21px;
    gap: 12px;
  }
`;

const ProgressBarCaption = styled.h1`
  @media (min-width: 480px) {
    color: #35364e;
    font-weight: 600;
    font-size: 18px;
    line-height: 23px;
    font-family: ${font_cera_bold};
  }
  @media (max-width: 480px) {
    color: #35364e;
    font-weight: 600;
    font-size: 14px;
    line-height: 23px;
    font-family: ${font_cera_bold};
  }
`;

const ProgressBar = styled.div`
  background-color: #fff;
  color: #ed1847;
  height: 25px;
  display: flex;
  align-items: center;
`;

const PaginationWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 18px;
`;

const ProgressBarThumb = styled.div`
  background: #ed1847;
  height: 21px;
  margin-left: 2px;
  padding-left: 5px;
  width: ${(props) => props.createProgress}%;
  white-space: nowrap;
  transition: all 1s;
`;

const ProgressBarThumbText = styled.div`
  font-family: ${font_cera_bold};
  font-size: 14px;
  color: #fff;
  line-height: 21px;
`;

const SettingsContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    margin: 0px 100px 0px 100px;
  }
  @media (max-width: 980px) {
    display: flex;
    justify-content: space-between;
    margin: 0px 40px 0px 40px;
  }
  @media (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    margin: 0px 20px 0px 20px;
  }
`;

const SettingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
`;

const SettingUnit = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-bottom: 1px solid #d6d6e7;
    height: 200px;
    pointer-events: ${(props) => (props.locked ? 'none' : '')};
    opacity: ${(props) => (props.locked ? '50%' : '')};
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    height: 100%;
    min-height: 200px;
    border-bottom: 1px solid #d6d6e7;
    pointer-events: ${(props) => (props.locked ? 'none' : '')};
    opacity: ${(props) => (props.locked ? '50%' : '')};
    padding: 27px 0px 26px 0px;
    margin-bottom: 10px;
  }
  @media (max-width: 900px) {
    display: flex;
    pointer-events: ${(props) => (props.locked ? 'none' : '')};
    opacity: ${(props) => (props.locked ? '50%' : '')};
    flex-direction: column;
    ::-webkit-scrollbar-thumb {
      background: #ed1847;
      border-radius: 10px;
    }
    height: auto;
    gap: 16px;
    border-bottom: 1px solid #d6d6e7;
    padding: 27px 0px 57px 0px;
    margin-bottom: 10px;
    pointer-events: ${(props) => (props.locked ? 'none' : '')};
    opacity: ${(props) => (props.locked ? '50%' : '')};
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
    border-bottom: 1px solid #d6d6e7;
    padding: 27px 0px 26px 0px;
    margin-bottom: 10px;
    pointer-events: ${(props) => (props.locked ? 'none' : '')};
    opacity: ${(props) => (props.locked ? '50%' : '')};
  }
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    pointer-events: ${(props) => (props.locked ? 'none' : '')};
    opacity: ${(props) => (props.locked ? '50%' : '')};
    gap: 16px;
    height: auto;
    border-bottom: 1px solid #d6d6e7;
    padding: 27px 0px 26px 0px;
    pointer-events: ${(props) => (props.locked ? 'none' : '')};
    opacity: ${(props) => (props.locked ? '50%' : '')};
    margin-bottom: 10px;
  }
`;

const SettingInnerHolder = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    gap: 24px;
  }
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`;

const Setting = styled.div`
  @media (min-width: 1024px) {
    cursor: pointer;
    display: flex;
    align-items: start;
    width: 100%;
    gap: 7px;
    .checkbox-setting {
      transform: scale(1.5);
      min-width: 20px;
    }
  }
  @media (max-width: 980px) {
    cursor: pointer;
    display: flex;
    align-items: start;
    gap: 7px;
    .checkbox-setting {
      transform: scale(1.5);
      min-width: 20px;
    }
  }
`;

const SettingDescription = styled.h1`
  @media (min-width: 1024px) {
    max-height: 80px !important;
    color: #35364e;
    letter-spacing: 0.01em;
    font-weight: 800;
    font-size: 15px;
    line-height: 19px;
    font-family: ${font_cera};
    overflow-y: scroll;
    ol {
      padding-left: 17px;
    }
    ul {
      padding-left: 17px;
    }
    li {
      list-style-position: outside;
    }
  }
  @media (max-width: 1024px) {
    color: #35364e;
    letter-spacing: 0.01em;
    font-weight: 800;
    font-size: 15px;
    line-height: 19px;
    font-family: ${font_cera};
    ol {
      padding-left: 17px;
    }
    ul {
      padding-left: 17px;
    }
    li {
      list-style-position: outside;
    }
  }
  @media (max-width: 680px) {
    color: #35364e;
    letter-spacing: 0.01em;
    font-weight: 800;
    font-size: 15px;
    line-height: 19px;
    font-family: ${font_cera};
    ol {
      padding-left: 17px;
    }
    ul {
      padding-left: 17px;
    }
    li {
      list-style-position: outside;
    }
  }
  @media (max-width: 480px) {
    color: #35364e;
    letter-spacing: 0.01em;
    font-weight: 800;
    font-size: 15px;
    line-height: 19px;
    font-family: ${font_cera};
    ol {
      padding-left: 17px;
    }
    ul {
      padding-left: 17px;
    }
    li {
      list-style-position: outside;
    }
  }
`;

const CommentDescription = styled.h1`
  color: #35364e;
  letter-spacing: 0.01em;
  font-weight: 800;
  font-size: 15px;
  line-height: 19px;
  font-family: ${font_cera};
  ${(props) => (props.unique ? '' : 'overflow: hidden;')};
  ${(props) => (props.unique ? '' : 'text-overflow: ellipsis;')};
  ${(props) => (props.unique ? '' : 'white-space: pre;')};
  ${(props) => (props.unique ? 'min-height: 80px;' : 'max-height: 80px;')};
  ol {
    padding-left: 17px;
  }
  ul {
    padding-left: 17px;
  }
  li {
    list-style-position: outside;
  }
`;

const SettingCaption = styled.h1`
  color: #35364e;
  font-weight: 600;
  font-size: 16px;
  line-height: 23px;
  margin-top: 20px;
  font-family: ${font_cera_bold};
`;

const CommentExpHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

const CommentCaptionMobile = styled.h1`
  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 900px) {
    font-family: ${font_cera};
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;
    color: #ed1847;
    margin-left: 21px;
  }
`;

const CommentDescriptionMobile = styled.h1`
  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 900px) {
    font-family: ${font_cera};
    font-style: italic;
    font-weight: 800;
    font-size: 14px;
    line-height: 18px;
    color: #35364e;
    margin-left: 21px;
  }
`;

const CommentCloseMobile = styled.img`
  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 900px) {
    max-width: 13px;
  }
`;

const CraftNavigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 36px;
  margin-top: 40px;
  margin-bottom: 43px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

const ButtonText = styled.span`
  font-family: ${font_cera};
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  color: #ed1847;
`;

export {
  CreateContractWindow,
  ProgressBarContainer,
  ProgressBarWrapper,
  ProgressBarCaption,
  ProgressBar,
  ProgressBarThumb,
  ProgressBarThumbText,
  SettingsContainer,
  SettingsWrapper,
  SettingUnit,
  SettingCaption,
  SettingInnerHolder,
  Setting,
  SettingDescription,
  PaginationWrapper,
  CraftNavigation,
  ButtonContainer,
  ButtonText,
  CommentCaptionMobile,
  CommentDescriptionMobile,
  CommentCloseMobile,
  CommentExpHolder,
  CommentDescription,
};
