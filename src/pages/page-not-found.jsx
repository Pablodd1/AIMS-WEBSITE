import { Stack, Alert, AlertTitle, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom"
import React from "react";


export function PageNotFound() {
    const navigate = useNavigate();

    return (
        <Grid container sx={{ height: "100vh", alignContent: "center", justifyContent: "center", padding: 3 }}>

            <Grid item sx={{ width: '80%' }}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">
                        <AlertTitle>Opps, Page Not Found</AlertTitle>
                        Requested address not found, please — <strong>check for spelling mistake!</strong>
                    </Alert>
                </Stack>
                <Grid item sx={{ width: 'fit-content' }}>
                    <Button onClick={() => navigate("/")} variant="contained" color="info" aria-label="Return to Home Page" sx={{m:5,}}>Return to Home Page</Button>
                </Grid>
                
            </Grid>
        </Grid>
    )
}