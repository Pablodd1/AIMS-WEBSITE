import React from 'react';
import { Button, Card, CardMedia, Grid,   Typography, Zoom } from "@mui/material";
import { useTranslation } from 'react-i18next';

import ceo from "../../assets/team/ceo.webp";
import member1 from "../../assets/team/ai-team-1.webp";
import member2 from "../../assets/team/ai-team-2.webp";
import member3 from "../../assets/team/ai-team-3.webp";

let team = [
    {
        title: "Mylene Carreres",
        des: "CFO",
        img: member1
    },
    {
        title: "Ivan Islamaj",
        des: "Medical Consultant",
        img: member2
    },
    {
        title: "Orlando Diaz",
        des: "CFO Accountant",
        img: member3
    }
]


export function CEOCont({styles}) {
    const { t } = useTranslation()

    return (

        <Grid
            container
            item
            justifyContent="center"
            alignItems="center"
            id="AboutUs-ceo"
            xs={12} sm={12} md={12} lg={12} xl={12}
            style={styles.ceocontainerStyle}
        >

            <Grid
                item
                xs={12} sm={12} md={6} lg={5} xl={4}
                style={styles.ceoimagecontainerStyle}
            >
                <img src={ceo} alt="CEO AI Medical Scriber" height={'auto'} width={'auto'} style={styles.ceoimageStyle} />
            </Grid>
            <Grid
                item
                xs={12} sm={12} md={6} lg={7} xl={8}

            >
                <div style={styles['aboutUS-para']} >
                    <Typography variant='h3' component='h1'  >{t('headings.CEOMsg')}</Typography>
                    <Typography variant='p' component='p' >
                        {t('legals.CEOMessage')}
                    </Typography>
                    <br />
                    <Button
                        size="larger"
                        variant="contained"
                        aria-label={t('buttons.sendEmail')}
                        sx={styles['aboutUS-button']}
                    >
                        {t('buttons.sendEmail')}
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export function TeamDetail({styles}) {
    const [showTeam, setShowTeam] = React.useState(false);
    const teamRef = React.useRef(null);
    const { t } = useTranslation()

    

    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setShowTeam(false);

                    setTimeout(() => {
                        setShowTeam(true);
                    }, 500);
                }
            });
        });

        if (teamRef.current) {
            observer.observe(teamRef.current);
        }

        return () => {
            if (teamRef.current) {
                observer.unobserve(teamRef.current);
            }
        };
    }, []);




    return (''
    )
}
