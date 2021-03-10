import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import dictionary from '../../data/dictionary';
import addZero from '../../helpers/addZero';

import { IProps } from '../types/types';

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

export default function Time ({ timeZone, capitalName } : IProps){
    const classes = useStyles();
    let [ time, setTime ] = useState('');
    let [ date, setDate ] = useState('');

    const showTime = () => {
        const today: Date = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone }))
        const hour: number = today.getHours(),
              min: number  = today.getMinutes(),
              sec: number  = today.getSeconds(),
              day: number  = today.getDate(),
              month: number  = today.getMonth(),
              week: number  = today.getDay();

        const time: string = `${addZero(hour)}:${addZero(min)}:${addZero(sec)}`;
        const date: string = `${day} ${dictionary['months']['en'][month]}, ${dictionary['week']['en'][week]}`; 

        setTime(time);
        setDate(date);
    }
    

    useEffect(()=> {
        const timer = setInterval(() => { showTime() }, 1000);

        return () => { clearTimeout(timer) };
      }, [time])

  return (
    <Card className={classes.root} >
      <CardContent>
        <Typography variant="h6" component="h3">
            Time in {capitalName}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            {date}
        </Typography>
        <Typography variant="h4" component="h2">
            {time}
        </Typography>
      </CardContent>
    </Card>
  );
}