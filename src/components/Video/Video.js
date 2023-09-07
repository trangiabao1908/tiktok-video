import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

const VideoInfo = ({ data }) => {
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
            src={data.avatar}
            alt="avatar"
         ></img>
         <div className="ml-4 w-[80%]">
            <div className="flex flex-row items-center">
               <a href="/" className="hover:underline font-bold text-3xl">
                  {data.idName}
               </a>
               <a className="ml-2 text-2xl" href="/">
                  {data.nickName}
               </a>
            </div>
            <div className="mt-1">{data.content}</div>
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
               className={`font-semibold text-black pl-7 pr-7 border-2  border-gray-400 hover:bg-gray-100 rounded-md ${
                  follow || 'border-red-400  text-red-400 hover:bg-red-100'
               }`}
            >
               {(follow && 'Đang Follow') || 'Follow'}
            </button>
         </div>
      </div>
   );
};

const VideoContent = ({ data }) => {
   const videoRef = useRef(null);
   // const [playing, setPlaying] = useState(false);
   // const handlePlayVideo = () => {
   //    if (playing) {
   //       videoRef.current.pause();
   //       setPlaying(!playing);
   //    } else {
   //       videoRef.current.play();
   //       setPlaying(!playing);
   //    }
   // };

   const [inViewRef, inView] = useInView({
      threshold: 1,
   });
   const setRefs = useCallback(
      (node) => {
         // Ref's from useRef needs to have the node assigned to `current`
         videoRef.current = node;
         // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
         inViewRef(node);

         if (node) {
            node.addEventListener('click', function () {
               if (this.paused) {
                  this.play();
                  this.muted = false;
               } else {
                  this.pause();
               }
            });
         }
      },
      [inViewRef],
   );

   useEffect(() => {
      if (!videoRef || !videoRef.current) {
         return;
      }

      if (inView) {
         videoRef.current.play();
      } else {
         videoRef.current.pause();
      }
   }, [inView]);

   return (
      <div className="flex flex-row min-h-[400px] select-none">
         <div className="video">
            <video
               playsInline
               muted
               ref={setRefs}
               // onClick={handlePlayVideo}
               height="100%"
               className="ml-[60px] max-w-[80%] max-h-[600px] rounded-md mt-4"
               loop
               src={data.video}
            ></video>
         </div>

         <div className="flex flex-col justify-end select-none ml-5">
            <div className="text-center mb-3 hover:cursor-pointer">
               <div className=" flex items-center justify-center rounded-full bg-gray-200 w-[45px] h-[45px]">
                  <FontAwesomeIcon className="w-8 h-8" icon={faHeart}></FontAwesomeIcon>
               </div>
               <span className="text-gray-600 font-semibold text-xl">{data.likes}</span>
            </div>
            <div className="text-center mb-3 hover:cursor-pointer">
               <div className=" flex items-center justify-center rounded-full bg-gray-200 w-[45px] h-[45px]">
                  <FontAwesomeIcon className="w-8 h-8" icon={faComment}></FontAwesomeIcon>
               </div>
               <span className="text-gray-600 font-semibold text-xl">{data.cmts}</span>
            </div>
            <div className="text-center mb-3 hover:cursor-pointer">
               <div className=" flex items-center justify-center rounded-full bg-gray-200 w-[45px] h-[45px]">
                  <FontAwesomeIcon className="w-8 h-8" icon={faShare}></FontAwesomeIcon>
               </div>
               <span className="text-gray-600 font-semibold text-xl">{data.shares}</span>
            </div>
         </div>
      </div>
   );
};
function Video({ data }) {
   return (
      <div className="snap-start max-w-[650px] w-[600px] border-b-2 border-gray-200 pb-10 pt-10">
         <VideoInfo data={data}></VideoInfo>
         <VideoContent data={data}></VideoContent>
      </div>
   );
}

export default Video;
