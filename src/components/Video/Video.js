import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

import video1 from '../../videos/video1.mp4';
const VideoInfo = () => {
   const [follow, setFollow] = useState(false);
   const handleFollow = () => {
      if (!follow) {
         setFollow(true);
      } else {
         setFollow(false);
      }
   };
   return (
      <div className="flex flex-row">
         <img
            className="w-[55px] h-[55px] rounded-full select-none hover:cursor-pointer"
            src="https://cdn.devdojo.com/users/April2021/tnylea.jpg"
            alt="avatar"
         ></img>
         <div className="ml-4 w-[80%]">
            <div className="flex flex-row items-center">
               <a href="/" className="hover:underline font-bold text-3xl">
                  isYaaBaor
               </a>
               <a className="ml-2 text-2xl" href="/">
                  Trần Gia Bảo
               </a>
            </div>
            <div className="mt-1">Dang code web React</div>
            <div className="flex flex-row items-center mt-1">
               <FontAwesomeIcon className="text-2xl" icon={faMusic}></FontAwesomeIcon>
               <a className="ml-2 hover:underline text-2xl" href="/">
                  nhạc nền - Yêu Em Hơn Mỗi Ngày
               </a>
            </div>
         </div>
         <div className="h-[40px] flex select-none w-[200px] justify-end">
            <button
               onClick={handleFollow}
               className={`font-semibold border-red-400 border-2 pl-7 pr-7 text-red-400 rounded-md hover:bg-red-100  ${
                  follow && ' text-black border-gray-400 hover:bg-gray-100'
               }`}
            >
               {(follow && 'Đang Follow') || 'Follow'}
            </button>
         </div>
      </div>
   );
};

const VideoContent = () => {
   const videoRef = useRef();
   const [playing, setPlaying] = useState(false);
   const handlePlayVideo = () => {
      if (playing) {
         videoRef.current.pause();
         setPlaying(!playing);
      } else {
         videoRef.current.play();
         setPlaying(!playing);
      }
   };
   return (
      <div className="flex flex-row min-h-[400px] select-none">
         <video
            ref={videoRef}
            onClick={handlePlayVideo}
            height="100%"
            className=" ml-[60px] max-w-[80%] max-h-[600px] rounded-md mt-4"
            loop
            src={video1}
         ></video>
         <div className="flex flex-col justify-end select-none ml-5">
            <div className="text-center mb-3 hover:cursor-pointer">
               <div className=" flex items-center justify-center rounded-full bg-gray-200 w-[45px] h-[45px]">
                  <FontAwesomeIcon className="w-8 h-8" icon={faHeart}></FontAwesomeIcon>
               </div>
               <span className="text-gray-600 font-semibold text-xl">198</span>
            </div>
            <div className="text-center mb-3 hover:cursor-pointer">
               <div className=" flex items-center justify-center rounded-full bg-gray-200 w-[45px] h-[45px]">
                  <FontAwesomeIcon className="w-8 h-8" icon={faComment}></FontAwesomeIcon>
               </div>
               <span className="text-gray-600 font-semibold text-xl">198</span>
            </div>
            <div className="text-center mb-3 hover:cursor-pointer">
               <div className=" flex items-center justify-center rounded-full bg-gray-200 w-[45px] h-[45px]">
                  <FontAwesomeIcon className="w-8 h-8" icon={faShare}></FontAwesomeIcon>
               </div>
               <span className="text-gray-600 font-semibold text-xl">198</span>
            </div>
         </div>
      </div>
   );
};
function Video() {
   return (
      <div className="snap-start max-w-[650px] border-b-2 border-gray-200 pb-10 pt-10">
         <VideoInfo></VideoInfo>
         <VideoContent></VideoContent>
      </div>
   );
}

export default Video;
