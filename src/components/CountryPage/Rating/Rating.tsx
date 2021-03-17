import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Rating }  from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';

interface IRating{
    rating: number | null;
    ratingChanged: (value: number| null) => void;
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
    <div className="raiting__wrapper">
      <Box component="fieldset" mb={3} borderColor="transparent" className={"raiting__box"}>
        <StyledRating
          name="customized-color"
          value={rating}
          onChange={(event: React.ChangeEvent<{}>, newValue: number | null) => { ratingChanged(newValue) }}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box>
    </div>
  );
}

export default CustomizedRatings;





