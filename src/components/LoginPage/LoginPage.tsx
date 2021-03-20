import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

type Props = {
  history: any;
};

const LoginPage: React.FC<Props> = (props) => {
  const { lang } = React.useContext(LangContext);

  const classes = useStyles();

  const loginInput = useRef<HTMLInputElement>(null!);
  const passwordInput = useRef<HTMLInputElement>(null!);

  const { login } = useAuth();

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginValue = loginInput?.current.value;
    const passwordValue = passwordInput?.current.value;
    const success = await login(loginValue, passwordValue);
    if (success) props.history.push('/');
  };
  return (
    <Grid container component='main' className={classes.root + ' login-wrapper'}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image + ' login-img'} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Typography component='h1' variant='h5'>
            {`.${dict.log[lang]}.`}
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSignIn}>
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
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              {dict.log[lang]}
            </Button>
            <Grid container>
              <Link to='/register'>{dict.signupSugg[lang]}</Link>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
