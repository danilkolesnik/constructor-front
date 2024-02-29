import React from 'react';
import './loader.scss';

export function Loader() {
  return (
    <div className='loader-wrapper'>
      <div className='lds-ring'>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
