import React from 'react';
import { Link } from 'react-router-dom';
const videos = [
    {
      id: 1,
      url: "https://www.youtube.com/embed/nydq3FbLvA4", // Replace with your actual YouTube video ID
      title: "Revolutionizing Healthcare The AI Medical Scriber",
      description: `In today’s fast-paced medical world, doctors are often overwhelmed with administrative tasks, such as taking notes and documenting patient encounters. This can lead...`,
      more:"https://youtu.be/nydq3FbLvA4?si=bBEpUpwZreu930gz"
    },
    {
      id: 2,
      url: "https://www.youtube.com/embed/nuOVAiiO5RM", // Replace with your actual YouTube video ID
      title: "The Achilles' Heel of Healthcare  Admin...",
      description: "Did you know? 🤔 Doctors spend nearly as much time on medical documentation as they do on patient care. For every hour...",
      more:"https://youtu.be/nuOVAiiO5RM?si=GVbZbJylWd8jLvzp"
    },
    {
      id: 3,
      url: "https://www.youtube.com/embed/IG4E_ucLOSE", // Replace with your actual YouTube video ID
      title: "Busy doctor neglecting patient care. AI ...",
      description: "Ditch the Charts, Doc! AI Scribes Take On Busy Hospitals 🩺⏰ Stressed doctor swamped with paperwork? Imagine an AI ...",
      more:"https://youtu.be/IG4E_ucLOSE?si=pn9WSfoJVXuvDpg1"
    }
  ];
const VideoShowcase = () => {
  return (
    <div className=" w-11/12 xl:max-w-7xl grid grid-cols-2 md:grid-cols-3 grid-rows-2 sm:grid-rows-3 md:grid-rows-2 gap-4 max-w-7xl mx-auto my-24" >
      {videos.map((video, index) => (
        <div
          key={video.id}
          className={`h-full flex flex-col justify-center ${
            index === 0 ? 'row-span-1 sm:row-span-2 md:row-span-2 col-span-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500' : 'row-span-1'
          }`}
        >
          <iframe
            width="100%"
            height={'auto'}
            className={` rounded-lg mb-1  shadow-gray-500 ${index===0?"shadow-lg h-full":'shadow-sm md:h-5/6'}`}
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="video-info">
            <h3 className='text-lg text-gray-900 font-semibold'>{video.title}</h3>
            <p className='text-gray-600 font-sans' >{video.description}
            <Link to={video.more} target="_blank" className={"m-1 px-3 text-primary font-bold uppercase text-xs rounded-md hover:underline "} >
              Read More
            </Link></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoShowcase;
<iframe width="427" height="240" src="" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>