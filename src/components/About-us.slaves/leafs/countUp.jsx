import React, { useRef, useEffect, useState } from 'react';
import { Fade,  Typography } from '@mui/material';



export const CountUpAnimation = ({ limit,sx,text,suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const startCounting = () => {
        let counter = 0;
        const interval = setInterval(() => {
            counter++;
            setCount(counter);
            if (counter >= limit) {
                clearInterval(interval);
            }
        }, 10);
    };

    const styles = {

        'aboutUS-worldwideH2': {
            fontWeight: 700,
            fontFamily: 'Narrow',
            textTransform: 'uppercase',
            letterSpacing: '0.1rem',
        }
    }
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        startCounting();
                    } else {
                        setCount(0);
                    }
                });
            },
            { threshold: 0.1 } // Adjust the threshold value as needed
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <Typography ref={ref} variant='h5' component="h2" sx={{...sx,...styles['aboutUS-worldwideH2']}}>
            {count}{count >= limit && suffix}
            <Fade
 
                appear
                in={count >= limit}
                direction="up"
                {...({ timeout: 2000 * 0.8  })}
            >
                <Typography>{text}</Typography>
            </Fade>


        </Typography>
    );
};