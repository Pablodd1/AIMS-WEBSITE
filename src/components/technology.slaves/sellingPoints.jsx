import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';

import bg from "../../assets/patterns/pattern4.webp";

const colors = ['#CE93D8', '#80DEEA', '#FFCC80']


const SellingPoints = ({styles}) => {

  const { t } = useTranslation();
  const data = [
    {
      head: t('sellingPoints.head1'),
      para: t('sellingPoints.para1')
    },
    {
      head: t('sellingPoints.head2'),
      para: t('sellingPoints.para2')
    },
    {
      head: t('sellingPoints.head3'),
      para: t('sellingPoints.para3')
    },
  ]

  return (
    <Box sx={{
      ...styles.sellingPointsContainer,
      ...{
        backgroundImage: `url("${bg}")`
      }
    }}>
      <Typography variant="h4" sx={styles.sellingPointsHeading}>
        {t('sellingPoints.title')}
      </Typography>
      <Grid container rowGap={4} spacing={4}>
        {data.map((x, i) => {
          return (
            <Grid item key={i} xs={12} sm={6} md={4}  >
              <Paper sx={{...styles.sellingPointItem,...{ backgroundColor:colors[i]}}}>
                <Typography variant="h6"><b>{x.head}</b></Typography>
                <Typography>
                  {x.para}
                </Typography>
              </Paper>
            </Grid>
          )
        })}

      </Grid>
    </Box>
  );
};

export default SellingPoints;
