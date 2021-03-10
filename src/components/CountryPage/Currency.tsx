import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import dictionary from '../../data/dictionary';
import addZero from '../../helpers/addZero';

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
    let [ toRUB, setToRUB ] = useState<any>('');
    let [ toUSD, setToUSD] = useState<any>('');
    let [ toEUR, setToEUR ] = useState<any>('');

    useEffect(() => {
        const res: Array<string> = [];

        async function getCurrencyData(fromCurrency: string, toCurrency: string) {
            const endpoint: string = `https://free.currconv.com/api/v7/convert?apiKey=9907c9f725cc3b503486&q=${fromCurrency}_${toCurrency},${toCurrency}_${fromCurrency}`;
            const response: Response= await fetch(endpoint);
            const data: any = await response.json();
            const base: any = data.results[`${fromCurrency}_${toCurrency}`];
            const result: string = String(base.val.toFixed(2));

            //return result;
            res.push(result)
        }

        getCurrencyData(currency, 'RUB')
        getCurrencyData(currency, 'USD')
        getCurrencyData(currency, 'EUR')

        setToRUB(res[0])
        setToUSD(res[1])
        setToEUR(res[2])
        
        // setToRUB(await getCurrencyData(currency, 'RUB'))
        // setToUSD(await getCurrencyData(currency, 'USD'))
        // setToEUR(await getCurrencyData(currency, 'EUR'))
        }, []);

  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography variant="h6" component="h3">
            Currency course
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            {toRUB}
        </Typography>
        <Typography variant="h4" component="h2">
            {toUSD}
        </Typography>
        <Typography variant="h4" component="h2">
            {toEUR}
        </Typography>
      </CardContent>
    </Card>
  );
}