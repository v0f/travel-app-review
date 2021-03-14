import React, { useEffect, useState, useCallback } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import addZeroBeforeNumber from '../../../helpers/addZeroBeforeNumber';
import dict from '../../../data/dictionary';
import { IProps } from '../../types/types';


 const Time = ({ timeZone } : IProps) => {
    const lang = 'en'; // TEMP LANG
    const [ time, setTime ] = useState<string>('');
    const [ date, setDate ] = useState<string>('');

    const showTime = useCallback(
      () => {
          const today = new Date(new Date().toLocaleString('en-US', { timeZone: timeZone }))
          const hour = today.getHours(),
                min  = today.getMinutes(),
                sec  = today.getSeconds(),
                day  = today.getDate(),
                month  = today.getMonth(),
                week  = today.getDay();

          const time: string = `${addZeroBeforeNumber(hour)}:${addZeroBeforeNumber(min)}:${addZeroBeforeNumber(sec)}`;

          const date: string = `${day} 
                                ${dict['months'][lang][month]}, 
                                ${dict['weekDay'][lang][week]}`; 

          setTime(time);
          setDate(date);

      }, [timeZone]
    )
    
    useEffect(()=> {
        const updateTime = setInterval(() => { showTime() }, 1000);

        return () => { clearTimeout(updateTime) };
      }, [showTime]
    )

    return (
      <Card className="widget time" >
        <CardContent className="time-content">
          <i className="fas fa-clock"></i>
          <span>
              {date}
          </span>
          <span className="timer">
              {time}
          </span>
        </CardContent>
      </Card>
    );
}

export default Time;