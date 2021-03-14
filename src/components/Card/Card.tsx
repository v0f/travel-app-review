import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const data = require('../../data/data-countries.json');

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
  media: {
    height: 250,
  },
});

interface ICard {
  id: string;
  getId: (id: string) => void;
}

const CountryCard: React.FC<ICard> = ({ id, getId }) => {
  const lang = 'en';

  const classes = useStyles();

  return (
    <Card className={classes.root} id={id} onClick={() => getId(id)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={data[id].imageURL}
          // title={data.id.countryName[lang]}
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='h2'>
            {data[id].countryName[lang]}
          </Typography>
          <Typography gutterBottom variant='h5' component='h2'>
            {data[id].capitalName[lang]}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {data[id].shortDescription[lang]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryCard;
