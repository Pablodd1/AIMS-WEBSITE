import React from 'react';
import {Grid, Typography } from '@mui/material';
import { styles } from '../../styles/js/styles';
import StepAnimation from './leafs/slidesTransition_HIT';



const CustomRadioButtons = ({ head }) => {



  return (
    <Grid container
      spacing={5}
      rowSpacing={8}
      justifyContent={'center'}
      sx={styles.contHIW}
    >
      <Grid item xs={12} >
        <Typography variant='h2' component='h1' sx={styles.HIWHead}  >{head}</Typography>
      </Grid>
      <StepAnimation />
    </Grid>
  );
};

export default CustomRadioButtons;
