import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import LangContext from '../../Language-context/LangContext';
import dict from '../../../data/dictionary';

interface ICurrency {
    currency: string;
    currencyCode: string;
}

const Currency: React.FC<ICurrency> =  ({ currency, currencyCode }) => {
    const { lang } = React.useContext(LangContext);

    const [ toRUB, setToRUB ] = useState<string>('');
    const [ toUSD, setToUSD] = useState<string>('');
    const [ toEUR, setToEUR ] = useState<string>('');

    

    useEffect(() => {

        async function getCurrencyData(fromCurrency: string, toCurrency: string): Promise<void> {
            const endpoint = `https://free.currconv.com/api/v7/convert?apiKey=9907c9f725cc3b503486&q=${fromCurrency}_${toCurrency},${toCurrency}_${fromCurrency}`;
            const response = await fetch(endpoint);
            const data  = await response.json();

            try {
              const currencyObject = data.results[`${fromCurrency}_${toCurrency}`];
              const result: string = String((currencyObject.val * 100).toFixed(2));

              if (toCurrency === 'RUB') {
                setToRUB(`${result} ₽ `);
              }  else if (toCurrency === 'USD') {
                setToUSD(`${result} $ `);
              }  else if (toCurrency === 'EUR') {
                setToEUR(`${result} € `);
              } 
              
            } catch(err){
              setToRUB('');
              setToUSD('');
              setToEUR('');
            }
        }

         if (currencyCode) {
          getCurrencyData(currencyCode, 'RUB')
          getCurrencyData(currencyCode, 'USD')
          getCurrencyData(currencyCode, 'EUR')
         }

      }, [currencyCode]
    );

  return (
    <Card className={'widget currency'} >
      <CardContent className="currency-content">
        <i className="fas fa-money-bill"></i>
        <span className="currency-country"> {`100 ${currencyCode}`} </span>
        <span className="currency-h">{`${currency}`}</span>
        <span> { toRUB ? `${toRUB} | ${toUSD} | ${toEUR}` : dict['limit'][lang]} </span>
      </CardContent>
    </Card>
  );
}

export default Currency;