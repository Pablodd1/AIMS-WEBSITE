import React, { useState, useEffect, useRef } from 'react';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaCompress, FaExpand } from 'react-icons/fa';

const VideoComponent = ({ src }) => {
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
        if (entry.isIntersecting ) {
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
      padding:15,
      marginTop:5,
      marginBottom:5,
      height:'100%',
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
    video:{
      width:'auto',
      maxWidth:'100%',
      height:'auto',
      maxHeight:'100vh',
      marginLeft:'auto',
      marginRight:'auto',
      display:'flex'
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
    <div id="videoContainer" style={styles.videoContainer}>
      <video src={src}  ref={videoRef} style={styles.video} autoPlay muted loop />
      {isPlaying ? (
        <div style={styles.pauseButton} onClick={handlePlayPause}>
          <FaPause />
        </div>
      ) : (
        <div style={styles.pauseButton} onClick={handlePlayPause}>
          <FaPlay />
        </div>
      )}
      <div style={styles.muteButton}>
        {isMuted ? (
          <FaVolumeMute onClick={handleMuteUnmute} />
        ) : (
          <FaVolumeUp onClick={handleMuteUnmute} />
        )}
      </div>
      <div style={styles.fullscreenButton} onClick={handleFullscreenToggle}>
        {isFullscreen ? <FaCompress /> : <FaExpand />}
      </div>
    </div>
  );
};

export default VideoComponent;
