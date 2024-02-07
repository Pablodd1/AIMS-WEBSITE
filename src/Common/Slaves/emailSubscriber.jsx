import { Alert, Box, Grid, IconButton, Slide, TextField, Typography, } from '@mui/material';
import React, { useState } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { contactIcons } from '../../assets/data/resources';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { keyframes } from '@mui/styled-engine';

const APILink = import.meta.env.VITE_APILink
function SocialIcons({ color }) {

  const styles = {
    socialIcons: {
      mt: 2,
    },
    icon: {
      color: color,
    }
  }

  return (
    <Grid
      container item
      justifyContent={'space-between'}
      alignItems={'center'}
      sx={styles.socialIcons}
    >
      {contactIcons.map((x, i) => {
        return (
          <Grid
            item
            key={i}

          >
            <IconButton
              aria-label={x.title}
              rel='me'
              href={x.link}
              target='_blank'
              sx={{ ...styles.icon, ...{ '&:hover': { color: x.fcolor } } }}
            >
              {x.icon}
            </IconButton>
          </Grid>
        )
      })}
    </Grid>
  )
}





export default function EmailSubscriber({ color = '#fff' }) {
  const [email, setEmail] = useState('');
  const { t } = useTranslation()
  const syncing = useSelector(x => x.syncing)
  const dispatch = useDispatch()
  const syncStatus = useSelector(x => x.syncStatus)
  const error = useSelector(x => x.error)
  const shake = keyframes`
  0% {
    transform: translateX(0%) ;
  }
  50% {
    transform: translateX(5%);
  }
    100% {
      transform: translateX(0%);
    }
    `;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Submitting email ${email}`);
    dispatch(
      {
        type: 'SET_SYNCING',
        payload: true
      }
    )


    // Prepare the request body
    const requestBody = {
      email: email
    };

    // Send a POST request to the API endpoint
    fetch('http://localhost:3000' + "/subs/subscribe", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then(response => {
        if (response.ok) {
          dispatch({
            type: 'SET_SYNCSTATUS',
            payload: 'success'
          })

          dispatch({
            type: 'SET_SYNCING',
            payload: false
          })

        } else {
          dispatch({
            type: 'SET_SYNCSTATUS',
            payload: 'error'
          })

        }
      })
      .catch(error => {
        dispatch({
          type: 'SET_SYNCSTATUS',
          payload: 'error'
        }, {
          type: 'SET_ERROR',
          payload: error
        })
      });
  };

  const styles = {
    subWrap: {
      width: 'max-content',
      maxWidth: '420px',
      minWidth: '320px',
      m: 'auto', p: 'auto',
    },
    subscribeText: {
      letterSpacing: '0.3em',
      textTransform: 'uppercase',
      fontFamily: 'sans-serif',
      fontWeight: 600,
      width: '100%'
    },
    root: {
      display: 'flex',
      alignItems: 'flex-end',
      marginTop: 5
    },
    input: {
      flexGrow: 1,
      color: color,
      '.MuiFormLabel-root': {
        color: color,
      },
      '& label.Mui-focused': {
        color: color,
      },
      '& .MuiInputBase-input': {
        color: color,
      },
      '& .MuiInputBase-input::placeholder': {
        color: color,
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: color,
      },
      '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: color,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: color,
      },
    },
    button: {
      color: color,
      ml: -5,
    },
  }



  return (
    <Box sx={styles.subWrap}>
      <form onSubmit={handleSubmit}>
        <Typography
          component={'p'}
          variant="h6"
          sx={styles.subscribeText}

        >
          {t('headings.subscribe')}
        </Typography>
        <div style={styles.root}>
          <TextField
            label="Email"
            variant="standard"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={styles.input}
          />
          <IconButton type="submit" aria-label={t('buttons.submit')} disabled={syncing} sx={styles.button}>
            <FaArrowAltCircleRight />
          </IconButton>
        </div>
      </form>
      <SocialIcons color={color} />

      <Slide
        appear
        direction="down"
        in={syncing}
        timeout={{ enter: 500, exit: 1500 }}>
        <Alert severity={syncStatus} variant='outlined' onClose={() => {
          dispatch({
            type: 'SET_SYNCING',
            payload: false,
          });
        }}
          sx={{
            position: 'fixed',
            top: '1.5%',
            left: '25%',
            zIndex: 25,
            ml: 'auto', mr: 'auto',
            borderRadius: '50px',
            width: 'fit-content',
            pl: 0.8, pr: 0.8,
            pt: 0.1, pb: 0.1,
            letterSpacing: 2,
            fontWeight: 600,
            transition: 'all ease-in-out 1s ',
            animation: !error && `${shake} infinite 0.2s`,
            backgroundColor: syncStatus === "success" ? "#90EE9088" : syncStatus === "info" ? "#87CEEB99" : "#FF240088"
          }} >
          {error ? error : 'Syncing...'}
        </Alert>
      </Slide>
    </Box>
  );
}
