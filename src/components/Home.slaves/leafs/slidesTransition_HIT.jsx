import React, { useEffect, useState } from 'react';
import { Box, Divider, Grid, Grow, Typography, } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { MdDoubleArrow } from "react-icons/md";
import bg from "../../../assets/patterns/pattern3.webp";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import '../../../styles/css/steps.styles.css'
import { styles } from '../../../styles/js/styles';
import TryLearnButtons from '../../common.slaves/try learn button';

const textColors = ['#FF4081ee', '#AA00FFee', '#00B0FFee']
const bgColors = ['#FF408111', '#AA00FF11', '#00B0FF11']
const bgSubColors = ['#FF408155', '#AA00FF55', '#00B0FF55']

const StepAnimation = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const { t } = useTranslation();
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.up('xs'));
    const isSm = useMediaQuery(theme.breakpoints.up('sm'));
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));
    const data = [
        {
            title: t('Streamlined Intake Process'),
            bullets: [
                {
                    head: t('Appointment: '),
                    point: t('Get form link from staff.'),
                },
                {
                    head: t('Voice Input: '),
                    point: t('Click link, speak info.'),
                },
                {
                    head: t('AI Transcription: '),
                    point: t('Structured integration into EHR.'),
                },
            ],
        },
        {
            title: t('Intelligent Documentation During Your Visit'),
            bullets: [
                {
                    head: t('Doctor consults:'),
                    point: t('History, symptoms, info.'),
                },
                {
                    head: t('Real-time transcription:'),
                    point: t('AI listens, transcribes SOAP.'),
                },
                {
                    head: t('Review/edit SOAP: '),
                    point: t('Doctor ensures accuracy.'),
                },
            ],
        },
        {
            title: t('Efficient Administrative Processes'),
            bullets: [
                {
                    head: t('Automated billing: '),
                    point: t('Scribe sends notes for accurate billing.'),
                },
                {
                    head: t('Quick prescription:'),
                    point: t('Doctor can send e-prescription or fax to pharmacy.'),
                },
            ],
        },
    ];


    useEffect(() => {
        const timer = setTimeout(() => {
            if (stepIndex < data.length - 1) {
                setStepIndex((prevIndex) => prevIndex + 1);
            } else {
                setStepIndex(0);
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, [stepIndex, data]);

    const getStepStyle = (index) => {
        const totalSteps = data.length;
        const baseAngle = -85;
        const angleIncrement = 65;

        const focusIndex = (stepIndex + totalSteps - index) % totalSteps;
        const stepAngle = baseAngle + angleIncrement * focusIndex;
        const translateX = Math.cos((stepAngle * Math.PI) / 180) * 100;
        const translateY = Math.sin((stepAngle * Math.PI) / 180) * 100;

        const isFocus = index === stepIndex;
        const transformStyle = isFocus
            ? `translate(${translateX}px, ${translateY}px) scale(1.5)`
            : `translate(${translateX}px, ${translateY}px)`;
        const filterStyle = isFocus ? 'grayscale(0)' : 'grayscale(1)';

        // Define different font sizes for different screen sizes
        const stepSize = isLg ? 20 : isMd ? 18 : isSm ? 15 : isXs ? 12 : 20
        const focusSize = isLg ? 60 : isMd ? 55 : isSm ? 45 : isXs ? 30 : 60
        const fontSize = isFocus ? focusSize : stepSize;

        const zIndex = isFocus ? '10' : '0';

        return {
            transform: transformStyle,
            filter: filterStyle,
            fontSize: `${fontSize}px`,
            zIndex: zIndex,
            fontFamily: 'Exo',
        };
    };
    return (

        <Grid container
            alignItems={'center'}
            justifyContent={'space-evenly'}
            sx={{
                ...styles.box,
                backdropFilter: 'blur(52px)',
                backgroundImage: `url('${bg}')`,
                backgroundColor: `${bgColors[stepIndex]}`,
                border: `1px inset ${textColors[stepIndex]}`,
                boxShadow: `25px 55px 180px ${bgSubColors[stepIndex]}`,

            }}
        >

            <Grid item xs={5} sm={6} md={6}
                >
                <Box sx={{ overflow: 'hidden' }}
                    className={`step-heading`}>
                    <Grow
                        appear
                        in={true}
                        direction={'up'}
                        timeout={{ enter: 2500, exit: 1500 }}
                        key={stepIndex}
                    >
                        <Typography
                            component={'h3'}
                            variant='h2'
                            sx={{
                                ...styles.content,
                                color: `${textColors[stepIndex]}`
                            }}
                        >
                            {data[stepIndex].title}
                        </Typography>
                    </Grow>

                </Box>
                <Divider />
                <Grid container
                    alignItems={'center'}
                    justifyContent={'center'}
                    direction={'row'}
                >
                    {data[stepIndex].bullets.map((y, j) => (
                        <Grid item key={j} component={'ul'} >
                            <Grow
                                appear
                                in={true}
                                timeout={{ enter: 2500 * j, exit: 1500 }}
                                key={stepIndex * j}
                            >
                                <Typography
                                    component={'li'}
                                    variant='p'
                                    key={y + 'head'}
                                    sx={styles.pointsH}
                                >
                                    {y.head}
                                    <span>
                                        <MdDoubleArrow style={{
                                            fontSize: '1.4rem',
                                            display: 'inline',
                                            alignSelf: 'center',
                                            margin: 'auto',
                                            paddingLeft: 2,
                                            color: j !== data[stepIndex].bullets.length - 1 ? 'inherit' : 'transparent'
                                        }} />

                                    </span>
                                </Typography>
                            </Grow>
                        </Grid>
                    ))}

                </Grid>

                <TryLearnButtons smallSize={true} buttonColor={textColors[stepIndex]} />

            </Grid>
            <Grid item xs={3} sm={2} md={3} >
                <div className="step-animation">
                    {data.map((_, i) => (
                        <div
                            key={i}
                            className={`step ${i === stepIndex ? 'focus' : ''}`}
                            style={getStepStyle(i)}
                        >
                            <div
                                className="step-number"
                                onClick={() => setStepIndex(i)}
                                style={{ cursor: 'pointer', color: textColors[stepIndex] }} >
                                {`0${i + 1}`}
                            </div>
                        </div>
                    ))}
                </div>

            </Grid>

        </Grid>


    );
};

export default StepAnimation;
