/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCurrentPageQuestions } from '../../../services/redux/dataSlice';
import {
  ClosedContainer,
  ClosedContainerCaption,
  Icon,
  CommentsPopup,
  PopupHeader,
  CollapseContainer,
  CollapseIcon,
  PopupCaption,
  PopupContent,
} from './CommentsStyles';
import {
  SettingsWrapper,
  SettingCaption,
  SettingUnit,
  SettingInnerHolder,
  Setting,
  SettingDescription,
} from '../../../pages/Create/CreateContractStyles';
import { selectLanguage } from '../../../services/redux/toolSlice';
import { serialize } from '../../../services/generateHTMLfromRichText';
import '../../../utils/i18next';
import collapse from '../../../assets/icons/collapse_cross.svg';
import arrow from '../../../assets/icons/comments_arrow.svg';
import { useOutsideAlerter } from '../../../services/useOutsideAlerter';

export default function Comments() {
  const { t } = useTranslation();
  const [showComments, setShowComments] = useState(false);
  const hideComments = () => setShowComments(false);
  const questions = useSelector(selectCurrentPageQuestions);
  const [collection, setCollection] = useState(questions);

  // language
  const lang = useSelector(selectLanguage);
  const [currLanguage, setCurrLanguage] = useState(lang);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, hideComments);

  useEffect(() => {
    setCurrLanguage(lang);
  }, [lang]);

  useEffect(() => {
    setCollection(questions);
  }, [questions]);

  return showComments ? (
    <CommentsPopup ref={wrapperRef}>
      <PopupHeader>
        <PopupCaption>{t('create.comments.header')}</PopupCaption>
        <CollapseContainer role='presentation' onKeyDown={hideComments} onClick={hideComments}>
          <p>{t('create.comments.collapse')}</p>
          <CollapseIcon src={collapse} />
        </CollapseContainer>
      </PopupHeader>
      <PopupContent>
        <SettingsWrapper>
          {collection
            ? collection.map((question) => (
                <SettingUnit key={question.id}>
                  <SettingCaption>
                    {question[`Question${currLanguage}`].map((comment) => (
                      <div>{serialize([comment])}</div>
                    ))}
                  </SettingCaption>
                  <SettingInnerHolder>
                    <Setting>
                      <SettingDescription>
                        {question[`comment${currLanguage}`].map((comment) => (
                          <div>{serialize([comment])}</div>
                        ))}
                      </SettingDescription>
                    </Setting>
                  </SettingInnerHolder>
                </SettingUnit>
              ))
            : null}
        </SettingsWrapper>
      </PopupContent>
    </CommentsPopup>
  ) : (
    <ClosedContainer onClick={() => setShowComments(true)}>
      <ClosedContainerCaption>{t('create.comments.caption')}</ClosedContainerCaption>
      <Icon src={arrow} />
    </ClosedContainer>
  );
}
