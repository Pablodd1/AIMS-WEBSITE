import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';

const AudioPlayer = ({ audioSrc,label }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleHover = () => {
    setHovered(!hovered);
  };

  const getProgress = () => {
    return (currentTime / audioRef.current.duration) * 100 || 0;
  };

  return (
    <div title={label} className="relative flex items-center justify-center w-fit mx-auto mt-12 px-4 py-1 bg-gray-500 rounded-full">
      {label}
      <motion.div
        className="ml-4 flex items-center justify-center p-2  rounded-full cursor-pointer"
        onClick={togglePlayPause}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        whileHover={{ scale: 1.1 }}
      >
        {isPlaying ? (
          <FaPause className="text-2xl text-gray-700" />
        ) : (
          <FaPlay className="text-2xl text-gray-700" />
        )}

        {hovered && (
          <motion.div
            className="absolute bottom-0 w-full h-1 bg-gray-300 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="h-full bg-green-500 rounded"
              style={{ width: `${getProgress()}%` }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        )}
      </motion.div>
        
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default AudioPlayer;
