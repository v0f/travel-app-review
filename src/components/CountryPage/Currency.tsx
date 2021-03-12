import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { ICurrency } from '../types/types';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function Time ({ currency } : ICurrency){
    const classes = useStyles();
    let [ toRUB, setToRUB ] = useState<string>('');
    let [ toUSD, setToUSD] = useState<string>('');
    let [ toEUR, setToEUR ] = useState<string>('');

    useEffect(() => {

        async function getCurrencyData(fromCurrency: string, toCurrency: string) {
            const endpoint: string = `https://free.currconv.com/api/v7/convert?apiKey=9907c9f725cc3b503486&q=${fromCurrency}_${toCurrency},${toCurrency}_${fromCurrency}`;
            const response: Response= await fetch(endpoint);
            const data: any = await response.json();
            const base: any = data.results[`${fromCurrency}_${toCurrency}`];
            const result: string = String(base.val.toFixed(2));

            if (fromCurrency === 'RUB') {
              setToRUB(result);
            }  else if (fromCurrency === 'USD') {
              setToUSD(result);
            }  else if (fromCurrency === 'EUR') {
              setToEUR(result);
            } 
        }

        getCurrencyData('RUB', currency)
        getCurrencyData('USD', currency)
        getCurrencyData('EUR', currency)

        }, []);

  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography variant="h6" component="h3">
            Currency
        </Typography>
        <Typography variant="h6" component="h2">
          {`1 RUB = ${toRUB} ${currency}`}
        </Typography>
        <Typography variant="h6" component="h2">
          {`1 USD = ${toUSD} ${currency}`}
        </Typography>
        <Typography variant="h6" component="h2">
          {`1 EUR = ${toEUR} ${currency}`}
        </Typography>
      </CardContent>
    </Card>
  );
}