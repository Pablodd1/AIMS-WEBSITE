
import * as React from 'react';
import { Button, Grid,  } from "@mui/material";
import { Link } from 'react-router-dom';

export let NavItems = ({ links, styles,loc }) => {

    return (

        links.map(x =>
            <Grid item id="navButtonLis" key={x.title}  >
                <Link
                    component={'a'}
                    underline='none'
                    to={x.add}
                    id={x.title + loc}
                    rel='follow index'
                >

                    <Button
                        startIcon={x.icon}
                        component={'h2'}
                        aria-label={x.title}
                        sx={styles.navItem}
                    >
                        {x.title}
                    </Button>
                </Link>

            </Grid>
        )
    )
}
