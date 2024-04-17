import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaCompress, FaExpand } from 'react-icons/fa';

const VideoComponent = ({ src, onClose,buy, onBuy, isVisible }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust the threshold as needed
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && isVisible) {
          videoElement.play();
          setIsPlaying(true);
        } else {
          videoElement.pause();
          setIsPlaying(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, [src]);

  const handlePlayPause = () => {
    const videoElement = videoRef.current;

    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleMuteUnmute = () => {
    const videoElement = videoRef.current;

    if (isMuted) {
      videoElement.muted = false;
    } else {
      videoElement.muted = true;
    }

    setIsMuted(!isMuted);
  };

  const handleFullscreenToggle = () => {
    if (!isFullscreen) {
      // Enter fullscreen mode
      const videoContainer = document.getElementById('videoContainer');
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      } else if (videoContainer.mozRequestFullScreen) {
        videoContainer.mozRequestFullScreen();
      } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen();
      } else if (videoContainer.msRequestFullscreen) {
        videoContainer.msRequestFullscreen();
      }
    } else {
      // Exit fullscreen mode
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const styles = {
    videoContainer: {
      position: 'relative',
      width: 'auto',
      padding: 0,
      height: '100%',
      backgroundColor: '#000',
    },
    muteButton: {
      position: 'absolute',
      right: 55,
      bottom: 0,
      fontSize: '22px',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    },
    video: {
      width: 'auto',
      maxWidth: '100%',
      height: 'auto',
      maxHeight: '100vh',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex'
    },
    fullscreenButton: {
      position: 'absolute',
      right: 15,
      bottom: 0,
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '22px',
      color: '#fff',
      cursor: 'pointer',
    },
    pauseButton: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      fontSize: '40px',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      color: '#fff',
      cursor: 'pointer',
    },
  }




  return (
    <div id="videoContainer" style={styles.videoContainer} className='shadow-lg shadow-secondary' >
      <button onClick={onClose} className='z-10 hover:brightness-150  absolute top-0 left-0 rounded-br-full bg-rose-500 w-fit pr-3 pb-3 ' >
        <img
          src={'/svg/close.svg'}
          className="m-1"
          height={'auto'} width={35}
          alt='AI Medical Scriber whatsapp contact'
        />
      </button>
      <div className='hover:brightness-150   z-10 absolute top-0 right-0 shadow-md shadow-secondary rounded-bl-full bg-primary w-fit pr-3 pb-3 ' >
          <button
            aria-label={buy}
            onClick={onBuy}
            className="py-1 px-6 mt-1 ml-4 font-bold uppercase text-white tracking-wider transition-all duration-75 ease-in-out "
          >
            {buy}
          </button>
      </div>
      <video src={src} ref={videoRef} style={styles.video} autoPlay muted loop />
      <footer className='absolute bottom-0 w-full h-fit border-black bg-white flex items-center justify-end py-1 px-2 space-x-2 ' >
        <button onClick={handlePlayPause} className='flex-grow ' >
          <img
            src={`/svg/${isPlaying ? 'pause' : 'play'}.svg`}
            className="h-4 w-auto"
            height={'auto'} width={35}
            alt={isPlaying ? 'pause Video' : "play video"}
          />
        </button>
        <button onClick={handleMuteUnmute} className='' >
          <img
            src={`/svg/${isMuted ? 'mute' : 'unmute'}.svg`}
            className="h-5 w-auto "
            height={'auto'} width={35}
            alt={isMuted ? 'unmute Video' : "mute video"}
          />
        </button>
        <button className='' onClick={handleFullscreenToggle}>
          <img
            src={`/svg/${isFullscreen ? 'full-screen-close' : 'full-screen'}.svg`}
            className="h-4 w-auto"
            height={'auto'} width={35}
            alt={isFullscreen ? 'Remove Full Screen' : "Open Full Screen"}
          />
        </button>
      </footer>
    </div>
  );
};

export default VideoComponent;
