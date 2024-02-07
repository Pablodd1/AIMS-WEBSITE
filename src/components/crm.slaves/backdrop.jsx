import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid, Typography } from '@mui/material';

export default function SimpleBackdrop({ color, open, msg }) {

console.log(open)
    return (
        <Backdrop
            sx={{ color: color, zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <Grid 
            container
            justifyContent={'center'}
            alignItems={'center'}
            direction={'column'} 
            >
                <Grid item>
                    <CircularProgress color="inherit" />
                </Grid>
                <Grid item>
                    <Typography  >{msg}</Typography>

                </Grid>
            </Grid>
        </Backdrop>
    );
}