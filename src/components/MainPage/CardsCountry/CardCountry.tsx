import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { IProps } from '../../types/types';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 250,
    },
  });


const CardCountry = ({ countryName, capitalName, shortDescription, id, imageURL } : IProps ) => {

    const classes = useStyles();

    return (
      <Card
      className={classes.root}
      id={id}
      >
        <CardActionArea>
          <CardMedia
            className={classes.media}
            //image={`./assets/images/countries/${countryName.toLowerCase()}/${countryName.toLowerCase()}.jpg`}
            image={`./assets/images/countries/japan/japan.jpg`} //imageURL
            title={countryName}
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              {countryName}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {capitalName}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
           {shortDescription} 
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }

  export default CardCountry;