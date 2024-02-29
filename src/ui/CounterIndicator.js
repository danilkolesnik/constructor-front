import React from 'react';
import { IndicatorContainer, IndicatorText } from '../pages/Home/HomeStyles';

export default function CounterIndicator({ count }) {
  const number = count === 'NaN' ? '0' : count;
  return (
    <IndicatorContainer>
      <IndicatorText>{number} – already crafted with the use of QuickDraft™</IndicatorText>
    </IndicatorContainer>
  );
}
