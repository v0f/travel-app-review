import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Register: React.FC = () => {
  const classes = useStyles();

  const [isLoaded, setIsLoaded] = useState(false);


  const uploadPhoto = useCallback((event:React.ChangeEvent<{}>) => {
    const input: FileList| null = (document.getElementById('upload-photo') as HTMLInputElement)?.files;
    if (input?.length && input.length === 1) {
      const file = input[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "travel-app");
      fetch('https://api.cloudinary.com/v1_1/rssteam69/image/upload', {
        method: "POST",
        body: formData
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const imgURL = data.url;
        console.log(imgURL);
        setIsLoaded(true);
      });
    }


  },[]);

  const handleSubmit = () => {
    // TODO send form for vof
  }

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              autoFocus
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
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
                color='secondary'
                size='small'
                component='span'
                aria-label='add'
                variant='extended'>
                <AddIcon /> {isLoaded ? 'done': 'upload'}
              </Fab>
            </label>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              disabled={!isLoaded}
              className={classes.submit}>
              Sign Up
            </Button>
            <Grid container>
              <Link to='/login'>{'Already have an account? Sign In'}</Link>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Register;
