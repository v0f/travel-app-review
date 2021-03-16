import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Rating }  from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';

interface IRating{
    rating: number;
    ratingChanged: (value: number) => void;
}

const StyledRating = withStyles({
  iconFilled: {
    color: '#000',
  },
  iconHover: {
    color: '#ffb400',
  },
})(Rating);

 const CustomizedRatings: React.FC<IRating> = ({rating, ratingChanged}) => {

  return (
    <div className="raiting-wrapper">
      <Box component="fieldset" mb={3} borderColor="transparent" className={"raiting-box"}>
        <StyledRating
          name="customized-color"
          value={rating}
         //@ts-ignore
          onChange={(event: React.ChangeEvent<{}>, newValue: number) => { ratingChanged(newValue) }}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box>
    </div>
  );
}

export default CustomizedRatings;





