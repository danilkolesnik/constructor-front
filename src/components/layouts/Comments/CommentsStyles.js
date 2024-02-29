import styled from 'styled-components';
import { font_cera, font_cera_bold } from '../../../assets/style/fonts.variables';

// closed popup
const ClosedContainer = styled.div`
  @media (min-width: 1024px) {
    width: 37px;
    margin-top: 17px;
    background-color: #ed1847;
    display: flex;
    gap: 63px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
    &:hover {
      background-color: #ff0000;
      filter: drop-shadow(0px 0px 15px rgba(255, 31, 0, 0.25))
        drop-shadow(0px 0px 20px rgba(255, 31, 0, 0.25));
    }
    transition: 0.1s;
  }
  @media (max-width: 900px) {
    display: none;
    opacity: 0;
  }
`;

const ClosedContainerCaption = styled.p`
  @media (min-width: 1024px) {
    font-family: ${font_cera_bold};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    transform: rotate(-90deg);
    white-space: nowrap;
  }
  @media (max-width: 980px) {
    font-family: ${font_cera_bold};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    transform: rotate(-90deg);
    white-space: nowrap;
  }
  @media (max-width: 480px) {
    font-family: ${font_cera_bold};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    transform: rotate(-90deg);
    white-space: nowrap;
  }
`;

const Icon = styled.img`
  @media (min-width: 1024px) {
    max-width: 13px;
    margin-bottom: 14px;
  }
  @media (max-width: 980px) {
    max-width: 13px;
    margin-bottom: 14px;
  }
  @media (max-width: 480px) {
    max-width: 13px;
    margin-bottom: 14px;
  }
`;

// open popup
const CommentsPopup = styled.div`
  @media (min-width: 1024px) {
    position: absolute;
    width: 50%;
    height: 100%;
    right: 0;
    background: #ffffff;
    box-shadow: 0px 0px 20px rgba(53, 54, 78, 0.1);
    z-index: 100;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

const PopupHeader = styled.div`
  @media (min-width: 1024px) {
    height: 40px;
    background-color: #ed1847;
    margin-top: -40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 980px) {
    height: 40px;
    background-color: #ed1847;
    margin-top: -40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 480px) {
    height: 40px;
    background-color: #ed1847;
    margin-top: -40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const PopupCaption = styled.h1`
  font-family: ${font_cera_bold};
  color: #fff;
  font-size: 18px;
  line-height: 23px;
  margin-left: 13px;
`;

const PopupContent = styled.div`
  b span {
    font-family: 'Cera Pro Bold', sans-serif !important;
  }
  @media (min-width: 1024px) {
    margin: 0px 30px 0px 30px;
  }
  @media (max-width: 980px) {
    margin: 0px 30px 0px 30px;
  }
  @media (max-width: 480px) {
    margin: 0px 30px 0px 30px;
  }
`;

const CollapseContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  margin-right: 13px;
  font-family: ${font_cera};
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  cursor: pointer;
`;

const CollapseIcon = styled.img`
  max-width: 13px;
`;

const CommentCollapseButton = styled.div`
  background-color: #ed1847;
  cursor: pointer;
  &:hover {
    background-color: #ff0000;
    filter: drop-shadow(0px 0px 15px rgba(255, 31, 0, 0.25))
      drop-shadow(0px 0px 20px rgba(255, 31, 0, 0.25));
  }
  transition: 0.1s;
  color: #fff;
  font-weight: 800;
  font-family: ${font_cera_bold};
  width: 150px;
  text-align: center;
`;
export {
  ClosedContainer,
  ClosedContainerCaption,
  Icon,
  CommentsPopup,
  PopupHeader,
  CollapseContainer,
  CollapseIcon,
  PopupCaption,
  PopupContent,
  CommentCollapseButton,
};
