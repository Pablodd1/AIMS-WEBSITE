import React from 'react';
import { Box, Button, Card,  Grid, Grow,  Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

import { CountUpAnimation } from './leafs/countUp';
import WorldMapComponent from './leafs/worldmap';



// export function ContactUSAboutUs({styles}) {
//     const [showSupport, setShowSupport] = React.useState(false);
//     const supportRef = React.useRef(null);
//     const { t } = useTranslation()



//     React.useEffect(() => {

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     setShowSupport(false);

//                     setTimeout(() => {
//                         setShowSupport(true);
//                     }, 500);
//                 }
//             });
//         });

//         if (supportRef.current) {
//             observer.observe(supportRef.current);
//         }

//         return () => {
//             if (supportRef.current) {
//                 observer.unobserve(supportRef.current);
//             }
//         };
//     }, []);



//     return (''
//     )
// }





export function WorldMapCont({styles}) {
    const { t } = useTranslation()

    return (

        <Grid item sx={styles['worldMap-container']}>
            <br />
            <Typography
                component={'h1'} variant='h3'
                sx={styles['aboutUS-worldwideH1']}
            >
                {t('headings.worldWide')}
            </Typography>
            <WorldMapComponent />
            {/* <Box sx={styles.customers} >
                <CountUpAnimation limit={100} suffix={'+'} text={t('headings.customer')} />
                <CountUpAnimation limit={150} suffix={'%'} text={t('headings.fastDocumentation')} />
                <CountUpAnimation limit={7} suffix={'min'} text={t('headings.savedPerEncounter')} />
            </Box> */}
            <br />
        </Grid>
    )
}
