import React, { useCallback, useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Rating }  from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';
import dict from '../../../data/dictionary';
import LangContext from '../../Language-context/LangContext';
import { useAuth } from '../../AuthContext/AuthContext';
import { API_URL } from '../../constants';
import request from '../../../helpers/request';

interface IRating{
  placeId: string;
  // rating: number | null;
  // ratingChanged: (value: number| null) => void;
}

interface IUserRating {
  user: string;
  userName: string;
  rating: string;
}

const StyledRating = withStyles({
  iconFilled: {
    color: '#000',
  },
  iconHover: {
    color: '#ffb400',
  },
})(Rating);

const sendRating = async (
  user: string,
  userName: string,
  token: string,
  place: string,
  rating: number
  ) => {
  return request('POST', `${API_URL}/ratings/`, {user, userName, place, rating}, token);
}

//  const CustomizedRatings: React.FC<IRating> = ({placeId, rating, ratingChanged}) => {
const CustomizedRatings: React.FC<IRating> = ({ placeId }) => {
  const { lang } = React.useContext(LangContext);
  const [ratingList, setRatingList] = useState('');
  const [avgRating, setAvgRating] = useState(0);
  const [placeRating, setPlaceRating] = useState(0);
  const { userLogin, userName, token } = useAuth();

  const getPlaceRatings = useCallback(() => {
    if (!placeId) return;
    request('GET', `${API_URL}/ratings/${placeId}`)
    .then((ratingData) => {
      if (ratingData.users) {
        const userList = ratingData.users.map((userRating: IUserRating) => `${userRating.userName || userRating.user}: ${userRating.rating}`);
        const currentUserRating = ratingData.users.find((u: IUserRating) => u.user === userLogin);
        setPlaceRating(currentUserRating ? currentUserRating.rating : 0);
        setRatingList(userList.join(', '));
        setAvgRating(ratingData.rating);
      }
    })
    .catch();
  }, [placeId, userLogin]);

  useEffect(() => {
    getPlaceRatings();
  }, [getPlaceRatings, placeId]);

  const ratingChanged = async (value: number | null) => {
    if (userLogin && placeId) {
      // setPlaceRating(value || 0);
      await sendRating(userLogin, userName, token, placeId, value || 0);
      getPlaceRatings();
    } else setPlaceRating(value || 0);
  };

  return (
    <div className="raiting__wrapper">
        <Box component="fieldset" mb={3} borderColor="transparent" className={"raiting__box"}>
          <StyledRating disabled={userLogin? false : true}
            name="customized-color"
            // value={rating}
            value={placeRating}
            onChange={(event: React.ChangeEvent<{}>, newValue: number | null) => { ratingChanged(newValue) }}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
          />
        </Box>
      <details className="details-animated">
          <summary>{dict.rate[lang]}</summary>
            <p>
              {/* <b style={{ display: 'block' }}>{dict.avgRate[lang]}: {Math.round(avgRating)}</b> */}
              <b style={{ display: 'block' }}>{avgRating ? `${dict.avgRate[lang]}: ${Math.ceil(avgRating)}` : 'Ещё нет оценок'}</b>
            </p>
            <p>{ratingList}</p>
      </details>
    </div>
  );
}

export default CustomizedRatings;





