import React from 'react';
import Time from './Time';
import Currency from './Currency';
import Weather from './Weather';

import LangContext from '../../Language-context/LangContext';
import dict from '../../../data/dictionary';

import './widgets.css';

import { IWidgets } from '../../types/types';

const Widgets = ({ capitalName, timeZone, currency, currencyCode }: IWidgets) => {
  const { lang } = React.useContext(LangContext);

  return (
    <div className='widgets-wrapper'>
      <div className='capital-wrapper'>
        <i className='fas fa-university'></i>
        <h3 className='widgets-city'>{dict.capital[lang]}</h3>
        <h2 className='widgets-city'>{`${capitalName}`}</h2>
      </div>
      <Time timeZone={timeZone} />
      <Weather capitalName={capitalName} />
      <Currency currency={currency} currencyCode={currencyCode} />
    </div>
  );
};

export default Widgets;
