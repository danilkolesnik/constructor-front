/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {
  setAnswers,
  selectCurrentData,
  selectAnswers,
  setCurrentPageQuestions,
} from '../../services/redux/dataSlice';
import '../../utils/i18next';
import {
  setIsLockedQuestions,
  selectLanguage,
  selectLockedQuestions,
} from '../../services/redux/toolSlice';
import Header from '../../components/layouts/Header/Header';
import {
  CreateContractWindow,
  ProgressBarContainer,
  ProgressBarWrapper,
  ProgressBarCaption,
  ProgressBar,
  ProgressBarThumb,
  ProgressBarThumbText,
  SettingsContainer,
  PaginationWrapper,
  CraftNavigation,
  ButtonContainer,
  ButtonText,
} from './CreateContractStyles';
import {
  FooterField,
  FooterWrapper,
  FooterLogo,
  FooterHolder,
  FooterWrapperCopyright,
  FooterLogoWrapper,
  ColumnTextParagraph,
} from '../../components/layouts/Footer/FooterStyles';
import Footer from '../../components/layouts/Footer/Footer';
import footerLogo from '../../assets/icons/footer_logo.svg';
import 'react-toastify/dist/ReactToastify.css';
import { CollectionRender } from '../../components/layouts/ItemsRender/CollectionRender';
import { setNumber, setIteration } from '../../services/redux/tableSlice';
import Comments from '../../components/layouts/Comments/Comments';
import { NavigationButton } from '../../components/forms/Button/Buttonstyles';
import navigation_arrow from '../../assets/icons/navigation_arrow.svg';

export default function CreateContract() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // language
  const lang = useSelector(selectLanguage);
  const [currLanguage, setCurrLanguage] = useState(lang);
  useEffect(() => {
    setCurrLanguage(lang);
  }, [lang]);
  useEffect(() => {
    dispatch(setIteration(1));
    dispatch(setNumber(1));
  }, []);
  // questions
  const [collection, setCollection] = useState(useSelector(selectCurrentData));
  const [lockedQuestions, setLockedQuestions] = useState(false);
  const [progress, setProgress] = useState(0);
  const [picked, setPicked] = useState(useSelector(selectAnswers));
  const isLocked = useSelector(selectLockedQuestions);
  useEffect(() => {
    if (isLocked) {
      setLockedQuestions(true);
    } else {
      setLockedQuestions(false);
    }
  }, []);
  const emptyQuestion = {
    final_field: [[{ children: [{ text: '' }] }], [{ children: [{ text: '' }] }]],
    name: [{ children: [{ text: 'EMPTY__CELL' }] }],
    type: 'default',
    value: null,
  };
  useEffect(() => {
    setCollection((current) => {
      const pickedBeforeUpdate = picked;
      const updatedSlider = current.slider.map((item) => {
        if (
          item.QuestionEN[0].children[0].text.includes('Confidentiality term') ||
          item.QuestionEN[0].children[0].text.includes(
            'Monetary penalty for breach of confidentiality',
          ) ||
          item.QuestionEN[0].children[0].text.includes(
            'Remuneration for compliance with confidentiality provision',
          )
        ) {
          if (lockedQuestions && picked.length !== 0) {
            pickedBeforeUpdate.push(emptyQuestion);
          }
          return { ...item, locked: lockedQuestions };
        }
        return item;
      });
      if (lockedQuestions && picked.length !== 0) {
        setPicked(pickedBeforeUpdate);
      }
      return { ...current, slider: updatedSlider };
    });
    if (lockedQuestions) {
      setPicked((prevArray) => {
        const namesToRemove = [
          'Confidentiality term',
          'Monetary penalty for breach of confidentiality',
          'Remuneration for compliance with confidentiality provision',
        ];
        const newArray = prevArray.filter((item) => {
          return !namesToRemove.includes(item.name[0].children[0].text);
        });
        return newArray;
      });
    }
    if (!lockedQuestions && picked.length !== 0) {
      setPicked((prevArray) => {
        const namesToRemove = ['EMPTY__CELL'];
        const newArray = prevArray.filter((item) => {
          return !namesToRemove.includes(item.name[0].children[0].text);
        });
        return newArray;
      });
    }
  }, [lockedQuestions]);

  const onSetPicked = (question, answer) => {
    if (question.QuestionEN[0].children[0].text.includes('Confidentiality provisions')) {
      if (answer === 0) {
        setLockedQuestions(true);
      } else {
        setLockedQuestions(false);
      }
    }
    if (picked.some((e) => e.name === question.QuestionEN)) {
      /* [picked] contains the element we're looking for */
      setPicked((current) =>
        current.map((obj) => {
          if (obj.name === question.QuestionEN) {
            return {
              name: question.QuestionEN,
              value: answer,
              type: question.Type,
              final_field: [
                question.slider[answer].finalcontractfieldUA,
                question.slider[answer].finalcontractfieldEN,
              ],
            };
          }
          return obj;
        }),
      );
    } else {
      // add an picked element
      setPicked([
        ...picked,
        {
          name: question.QuestionEN,
          value: answer,
          type: question.Type,
          final_field: [
            question.slider[answer].finalcontractfieldUA,
            question.slider[answer].finalcontractfieldEN,
          ],
        },
      ]);
    }
  };

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const [currentItem, setCurrentItem] = useState(
    collection?.slider?.slice(firstItemIndex, lastItemIndex),
  );
  useEffect(() => {
    setCurrentItem(collection?.slider?.slice(firstItemIndex, lastItemIndex));
    dispatch(setCurrentPageQuestions(collection?.slider?.slice(firstItemIndex, lastItemIndex)));
  }, [collection?.slider, firstItemIndex, lastItemIndex]);

  const [wasPaginated, setWasPaginated] = useState(false);

  const SubmitAnswers = () => {
    if (Number(progress) >= 100) {
      dispatch(setAnswers(picked));
      dispatch(setIsLockedQuestions(lockedQuestions));
      navigate('/preview');
    } else {
      toast.error(t('create.error'));
    }
  };

  const paginate = (pageNumber) => {
    const lastIndex = pageNumber * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    if (collection.slider.slice(firstIndex, lastIndex).length === 0) {
      if (firstIndex === 0 || firstIndex < 0) {
        navigate('/home');
      } else {
        SubmitAnswers();
      }
    } else {
      setCurrentPage(pageNumber);
      setWasPaginated(true);
    }
  };
  return (
    <CreateContractWindow>
      <Header dark />
      {/* progress bar */}
      {Object.keys(collection).length !== 0 ? (
        <ProgressBarContainer>
          <ProgressBarWrapper>
            <ProgressBarCaption>
              {Object.keys(collection).length !== 0 ? collection[`Description${currLanguage}`] : ''}
            </ProgressBarCaption>
            <ProgressBar>
              <ProgressBarThumb createProgress={progress}>
                <ProgressBarThumbText>
                  {t('create.progressBar.progress')} {progress}%
                </ProgressBarThumbText>{' '}
              </ProgressBarThumb>
            </ProgressBar>
          </ProgressBarWrapper>
        </ProgressBarContainer>
      ) : null}
      {/* questions field */}
      <SettingsContainer>
        {/* questions */}
        <PaginationWrapper>
          <CollectionRender
            fullList={collection.slider}
            collection={currentItem}
            lang={currLanguage}
            picked={picked}
            onSetPicked={onSetPicked}
            setProgress={setProgress}
            lockedQuestions={lockedQuestions}
            wasPaginated={wasPaginated}
            setWasPaginated={setWasPaginated}
          />
        </PaginationWrapper>
        {/* vertical bar */}
        {Object.keys(collection).length !== 0 ? <Comments collection={collection} /> : null}
      </SettingsContainer>
      {/* navigation */}
      {Object.keys(collection).length !== 0 ? (
        <CraftNavigation>
          <ButtonContainer
            onClick={() => {
              // closeAllComments();
              window.scrollTo(0, 0);
              paginate(currentPage - 1);
            }}
          >
            <img src={navigation_arrow} alt='back' />
            <ButtonText>{t('create.nav.back')}</ButtonText>
          </ButtonContainer>
          <NavigationButton
            onClick={() => {
              // closeAllComments();
              window.scrollTo(0, 0);
              paginate(currentPage + 1);
            }}
          >
            {t('create.nav.next')}
          </NavigationButton>
        </CraftNavigation>
      ) : null}
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
      <FooterField>
        <FooterWrapper>
          <FooterLogoWrapper>
            <FooterLogo src={footerLogo} alt='logo' />
          </FooterLogoWrapper>
          <FooterHolder>
            <Footer />
          </FooterHolder>
        </FooterWrapper>
        <FooterWrapperCopyright>
          <FooterLogoWrapper>
            <ColumnTextParagraph>
              © Sayenko Kharenko {new Date().getFullYear()}. All rights reserved. Developed by
              Linecore.
            </ColumnTextParagraph>
          </FooterLogoWrapper>
        </FooterWrapperCopyright>
      </FooterField>
    </CreateContractWindow>
  );
}
