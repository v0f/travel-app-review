import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

// import LangContext from '../Language-context/LangContext';
import ICountry from '../types/ICountry';

// const data = require('../../data/data-countries.json');

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
  country: ICountry;
}

const CountryCard: React.FC<ICard> = ({ id, getId, country }) => {
  // const { lang } = React.useContext(LangContext);

  const classes = useStyles();

  return (
    <Card className={classes.root} id={id} onClick={() => getId(id)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={country.imageURL}
        />
        <CardContent>
          <Typography gutterBottom variant='h4' component='h2'>
            {country.countryName}
          </Typography>
          <Typography gutterBottom variant='h5' component='h2'>
            {country.capitalName}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {country.shortDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryCard;
