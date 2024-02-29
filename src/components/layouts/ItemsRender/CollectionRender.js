/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
import React, { useState, useEffect } from 'react';
import {
  SettingsWrapper,
  SettingUnit,
  SettingCaption,
  SettingInnerHolder,
  Setting,
  SettingDescription,
  CommentExpHolder,
  CommentCaptionMobile,
  CommentDescriptionMobile,
  CommentCloseMobile,
} from '../../../pages/Create/CreateContractStyles';
import { ProgressBarFiller } from '../../../ui/progressBarFiller';
import cross from '../../../assets/icons/explanatory_cross.svg';
import { serialize } from '../../../services/generateHTMLfromRichText';

export function CollectionRender({
  fullList,
  collection,
  lang,
  picked,
  onSetPicked,
  setProgress,
  lockedQuestions,
  wasPaginated,
  setWasPaginated,
}) {
  const [explanatory, setExplanatory] = useState(collection?.map(() => false));
  const onSetExplanatory = (index) => {
    setExplanatory(
      explanatory.map((num, i) => {
        if (i === index) {
          return !num;
        } else {
          return num;
        }
      }),
    );
  };

  useEffect(() => {
    setExplanatory(collection?.map(() => false));
    setWasPaginated(false);
  }, [wasPaginated, collection]);

  useEffect(() => {
    setProgress(ProgressBarFiller(fullList, picked, lockedQuestions));
  }, [fullList, collection, picked]);
  return (
    <SettingsWrapper>
      {collection?.map((question, i) => (
        <SettingUnit locked={question.locked} key={question.id}>
          {/* <SettingCaption>{question[`Question${lang}`]}</SettingCaption> */}
          <SettingCaption>
            {question[`Question${lang}`].map((comment) => (
              <div>{serialize(comment.children)}</div>
            ))}
          </SettingCaption>
          <SettingInnerHolder>
            {question.slider.map((answer, index) => (
              <Setting key={answer.id} onClick={() => onSetPicked(question, index)}>
                <input
                  type='checkbox'
                  name='checkbox-setting'
                  className='checkbox-setting'
                  // eslint-disable-next-line array-callback-return, consistent-return
                  checked={picked.some((e) => {
                    const namesToRemove = [
                      'Confidentiality term',
                      'Monetary penalty for breach of confidentiality',
                      'Remuneration for compliance with confidentiality provision',
                    ];
                    if (lockedQuestions && namesToRemove.includes(e.name[0].children[0].text)) {
                      return e.value === null;
                    } else if (e.name === question.QuestionEN || e.name === question.QuestionUA) {
                      return e.value === index;
                    }
                  })}
                  onChange={() => onSetPicked(question, index)}
                />
                <SettingDescription>{answer[`Answer${lang}`]}</SettingDescription>
              </Setting>
            ))}
          </SettingInnerHolder>
          <CommentExpHolder>
            <CommentCaptionMobile onClick={() => onSetExplanatory(i)}>
              Explanatory Comment
            </CommentCaptionMobile>
            {explanatory[i] ? (
              <CommentCloseMobile src={cross} alt='close' onClick={() => onSetExplanatory(i)} />
            ) : (
              ''
            )}
          </CommentExpHolder>
          {explanatory[i] ? (
            <CommentDescriptionMobile>
              {question[`comment${lang}`].map((comment, index) => (
                <div key={index}>{serialize(comment.children)}</div>
              ))}
            </CommentDescriptionMobile>
          ) : (
            ''
          )}
        </SettingUnit>
      ))}
    </SettingsWrapper>
  );
}
