import React from 'react';
import { Box, Button, Card,  Grid, Grow,  Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

import { CountUpAnimation } from './leafs/countUp';
import WorldMapComponent from './leafs/worldmap';



export function ContactUSAboutUs({styles}) {
    const [showSupport, setShowSupport] = React.useState(false);
    const supportRef = React.useRef(null);
    const { t } = useTranslation()



    React.useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setShowSupport(false);

                    setTimeout(() => {
                        setShowSupport(true);
                    }, 500);
                }
            });
        });

        if (supportRef.current) {
            observer.observe(supportRef.current);
        }

        return () => {
            if (supportRef.current) {
                observer.unobserve(supportRef.current);
            }
        };
    }, []);

    let contact = [
        {
            head: t('headings.support'),
            msg: 'We are always here to help.',
            action: 'mailto:Jasmel@aimedicalscriber.com',
            contact: 'Jasmel@aimedicalscriber.com'
        },
        {
            head: t('headings.faqs'),
            msg: 'Explore predefined queries.',
            action: 'https://aimedicalscriber.com/customercare',
            contact: 'Explore'
        },
        {
            head: t('headings.phoneContact'),
            msg: `24/7 ${t('headings.service')}`,
            action: 'tel:1-(786)743-2499',
            contact: '1-(786)743-2499'
        },
    ]


    return (

        <Grid
            container item
            justifyContent='space-evenly'
            alignItems='flex-end'
            xs={12} sm={12} md={12} lg={12} xl={12}
            id="AboutUS-Support" ref={supportRef}
            sx={styles.contactContainer}
        >
            {contact.map((x, i) => {
                return (
                    <Grow
                        appear
                        in={showSupport}
                        {...({ timeout: 2000 * 0.8 * (i) })}
                        key={i}
                    >
                        <Grid item sx={styles.contactItem}>
                            <Card >

                            </Card>
                            <Typography variant='h4' component='h2' sx={styles.contactHeading}>{x.head}</Typography>
                            <Typography variant='p' component='p' sx={styles.contactMessage}>{x.msg}</Typography>
                            <Button sx={styles.contactButton} aria-label={x.head} onClick={() => window.location.href = x.action}>{x.contact}</Button>
                        </Grid>
                    </Grow>
                );
            })}
        </Grid>
    )
}





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
            <Box sx={styles.customers} >
                <CountUpAnimation limit={100} suffix={'+'} text={t('headings.customer')} />
                <CountUpAnimation limit={150} suffix={'%'} text={t('headings.fastDocumentation')} />
                <CountUpAnimation limit={7} suffix={'min'} text={t('headings.savedPerEncounter')} />
            </Box>
            <br />
        </Grid>
    )
}
