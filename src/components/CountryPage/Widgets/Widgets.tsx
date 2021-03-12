
import React from 'react';
import Time from './Time'
import Currency from './Currency'
import Weather from './Weather'

import './widgets.css'

import { IWidgets } from '../../types/types';

 const Widgets = ({ countryName, capitalName, timeZone, currency } : IWidgets ) => { 
    
    return (
        <div className="widgets-wrapper">
            <h2 className="widgets-city">{`${capitalName}, ${countryName}`}</h2>
            <Time timeZone={timeZone} />   
            <Weather capitalName={capitalName} />
            <Currency currency={currency} />
        </div>
    )
}

export default Widgets;