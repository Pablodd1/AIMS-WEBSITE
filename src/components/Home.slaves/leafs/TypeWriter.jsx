import { Box, Slide, Typography, } from '@mui/material';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';



export default function Typewriter({ classNames, classNamesUL, classNamesBox, }) {
  const [bullet, setBullet] = useState(0);
  const { t } = useTranslation()
  const [showCursor, setShowCursor] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState([]);
  const bullets = [
    t('bullets.bullet1'),
    t('bullets.bullet2'),
    t('bullets.bullet3'),
    t('bullets.bullet4'),
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentBullet = bullets[bullet];
      if (currentIndex < currentBullet.length) {
        setDisplayText(prevDisplayText => {
          const updatedText = [...prevDisplayText];
          updatedText[bullet] = currentBullet.substring(0, currentIndex + 1);
          return updatedText;
        });
        setCurrentIndex(prevIndex => prevIndex + 1);
      } else if (bullet === bullets.length - 1) {
        clearInterval(intervalId);
      } else {
        setBullet(prevIndex => prevIndex + 1);
        setCurrentIndex(0);
      }
    }, 95);

    return () => {
      clearInterval(intervalId);
    };
  }, [bullets, bullet, currentIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prevShowCursor => !prevShowCursor);
    }, 500); 

    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <Box className={classNamesBox}>
      <ul className={classNamesUL}>
        {displayText.map((x, i) => (
          <Slide in={true} direction="right" timeout={{ enter: 750, exit: 250 }} key={i}>
            <Typography component="li" className={classNames} variant="p">
              {x}
              <b className='text-black-100'>{showCursor && bullet === i ? '  |' : '  '}</b>
            </Typography>
          </Slide>
        ))}
      </ul>
    </Box>
  );
}







