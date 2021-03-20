import React, { useCallback, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import CheckIcon from '@material-ui/icons/Check';
import { Fab } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './LoginPage.scss';
import dict from '../../data/dictionary';
import LangContext from '../Language-context/LangContext';
import { useAuth } from '../AuthContext/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh - 80px)',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random/?asia)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  file: {
    margin: theme.spacing(2, 0, 1),
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.grey[50],
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type Props = {
  history: any;
};

const Register: React.FC<Props> = (props) => {
  const { lang } = React.useContext(LangContext);

  const classes = useStyles();

  const [isLoaded, setIsLoaded] = useState('');

  const { register } = useAuth();

  const loginInput = useRef<HTMLInputElement>(null!);
  const passwordInput = useRef<HTMLInputElement>(null!);
  const nameInput = useRef<HTMLInputElement>(null!);

  const uploadPhoto = useCallback((event: React.ChangeEvent<{}>) => {
    const input: FileList | null = (document.getElementById('upload-photo') as HTMLInputElement)
      ?.files;
    if (input?.length && input.length === 1) {
      const file = input[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'travel-app');
      fetch('https://api.cloudinary.com/v1_1/rssteam69/image/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const imgURL = data.url;
          setIsLoaded(imgURL);
        });
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginValue = loginInput?.current.value;
    const nameValue = nameInput?.current.value;
    const passwordValue = passwordInput?.current.value;
    const success = await register(loginValue, nameValue, passwordValue, isLoaded);
    if (success) props.history.push('/');
  };

  return (
    <Grid container component='main' className={classes.root + ' login-wrapper'}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image + ' login-img'} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            {`.${dict.signup[lang]}.`}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              inputRef={loginInput}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label={dict.email[lang]}
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              inputRef={nameInput}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='name'
              label={dict.name[lang]}
              name='name'
              autoComplete='name'
              autoFocus
            />
            <TextField
              inputRef={passwordInput}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label={dict.pass[lang]}
              type='password'
              id='password'
              autoComplete='current-password'
            />
            <label htmlFor='upload-photo'>
              <input
                onChange={uploadPhoto}
                style={{ display: 'none' }}
                id='upload-photo'
                name='upload-photo'
                type='file'
              />
              <Fab
                size='small'
                component='span'
                aria-label='add'
                variant='extended'
                className={classes.file + ' avatar-btn'}>
                {isLoaded ? <CheckIcon /> : <AddIcon />}
                {isLoaded ? dict.done[lang] : dict.loaded[lang]}
              </Fab>
            </label>
            <a href={isLoaded} className='img-link'>
              {isLoaded ? isLoaded : null}
            </a>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              disabled={!isLoaded}
              className={classes.submit}>
              {dict.signup[lang]}
            </Button>
            <Grid container>
              <Link to='/login'>{dict.logSugg[lang]}</Link>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
