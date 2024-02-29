/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Swiper, Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import { AuthButtonMobile } from '../../forms/Button/Buttonstyles';
import arrow from '../../../assets/icons/swiper_arrow.svg';
import arrow_prev from '../../../assets/icons/swiper_arrow_prev.svg';
import './swiper.styles.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import onboardingOne from '../../../assets/images/Swiper/Onboarding_En/desktop/onboarding_1.svg';
import onboardingTwo from '../../../assets/images/Swiper/Onboarding_En/desktop/onboarding_2.svg';
import onboardingThree from '../../../assets/images/Swiper/Onboarding_En/desktop/onboarding_3.svg';

import onboardingOneTablet from '../../../assets/images/Swiper/Onboarding_En/tablet/onboarding_1.svg';
import onboardingTwoTablet from '../../../assets/images/Swiper/Onboarding_En/tablet/onboarding_2.svg';
import onboardingThreeTablet from '../../../assets/images/Swiper/Onboarding_En/tablet/onboarding_3.svg';

import onboardingOneHorisontalTablet from '../../../assets/images/Swiper/Onboarding_En/horisontal_tablet/1.svg';
import onboardingTwoHorisontalTablet from '../../../assets/images/Swiper/Onboarding_En/horisontal_tablet/2.svg';
import onboardingThreeHorisontalTablet from '../../../assets/images/Swiper/Onboarding_En/horisontal_tablet/3.svg';
import dynamicLogo from '../../../assets/images/Swiper/Onboarding_En/horisontal_tablet/dynamic_logo.svg';

import onboardingOneMobile from '../../../assets/images/Swiper/Onboarding_En/mobile/onboarding_1.svg';
import onboardingTwoMobile from '../../../assets/images/Swiper/Onboarding_En/mobile/onboarding_2.svg';
import onboardingThreeMobile from '../../../assets/images/Swiper/Onboarding_En/mobile/onboarding_3.svg';

export default function SwiperForm({ onSetForm, showAuth }) {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      modules: [Pagination, Navigation, EffectFade],
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
      },
      speed: 2000,
      centeredSlides: true,
      centeredSlidesBounds: true,
      effect: 'fade',
      loop: true,
    });
  }, []);

  Swiper.use([Autoplay]);

  const getWidth = () => {
    const { innerWidth: width } = window;
    return width;
  };

  const getImage = (type) => {
    let src;
    if (getWidth() >= 1024) {
      if (getWidth() <= 1300) {
        // eslint-disable-next-line default-case
        switch (type) {
          case 1:
            src = onboardingOneHorisontalTablet;
            break;
          case 2:
            src = onboardingTwoHorisontalTablet;
            break;
          case 3:
            src = onboardingThreeHorisontalTablet;
            break;
        }
      } else {
        // eslint-disable-next-line default-case
        switch (type) {
          case 1:
            src = onboardingOne;
            break;
          case 2:
            src = onboardingTwo;
            break;
          case 3:
            src = onboardingThree;
            break;
        }
      }
    }
    if (getWidth() > 480 && getWidth() < 1024) {
      // eslint-disable-next-line default-case
      switch (type) {
        case 1:
          src = onboardingOneTablet;
          break;
        case 2:
          src = onboardingTwoTablet;
          break;
        case 3:
          src = onboardingThreeTablet;
          break;
      }
    }
    if (getWidth() <= 480) {
      // eslint-disable-next-line default-case
      switch (type) {
        case 1:
          src = onboardingOneMobile;
          break;
        case 2:
          src = onboardingTwoMobile;
          break;
        case 3:
          src = onboardingThreeMobile;
          break;
      }
    }
    return src;
  };
  return (
    <>
      {showAuth ? (
        ''
      ) : (
        <div className='swiper'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <img src={getImage(1)} alt='slide-1' className='swiper-slide-image' />
              <img src={dynamicLogo} alt='logo' className='swiper-dynamic-logo' />
            </div>
            <div className='swiper-slide'>
              <img src={getImage(2)} alt='slide-2' className='swiper-slide-image' />
              <img src={dynamicLogo} alt='logo' className='swiper-dynamic-logo' />
            </div>
            <div className='swiper-slide'>
              <img src={getImage(3)} alt='slide-3' className='swiper-slide-image' />
              <img src={dynamicLogo} alt='logo' className='swiper-dynamic-logo' />
            </div>
          </div>
          <div className='swiper-navigation-wrapper'>
            {getWidth() <= 480 ? (
              <div className='swiper-button-prev'>
                <img src={arrow_prev} alt='' className='swiper-button-icon' />
              </div>
            ) : (
              ''
            )}
            <div className='swiper-pagination' />
            <div className='swiper-button-next'>
              <img src={arrow} alt='' className='swiper-button-icon' />
            </div>
          </div>
          <AuthButtonMobile onClick={() => onSetForm(true)}>Let&apos;s quickdraft</AuthButtonMobile>
        </div>
      )}
      <div />
    </>
  );
}
