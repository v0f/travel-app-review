import React from 'react';
import Time from './Time';
import Currency from './Currency';
import Weather from './Weather';
import LangContext from '../../Language-context/LangContext';
import dict from '../../../data/dictionary';

import './Widgets.scss';

interface IWidgets {
  capitalName: string;
  capitalNameEN: string;
  timeZone: string;
  currency: string;
  currencyCode: string;
}

const Widgets: React.FC<IWidgets> = ({
  capitalName,
  capitalNameEN,
  timeZone,
  currency,
  currencyCode,
}) => {
  const { lang } = React.useContext(LangContext);

  return (
    <div className='widgets-wrapper'>
      <div className='capital-wrapper'>
        <i className='fas fa-university'></i>
        <h3 className='widgets-city'>{dict.capital[lang]}</h3>
        <h2 className='widgets-city'>{`${capitalName}`}</h2>
      </div>
      <Time timeZone={timeZone} />
      <Weather capitalNameEN={capitalNameEN} />
      <Currency currency={currency} currencyCode={currencyCode} />
    </div>
  );
};

export default Widgets;
