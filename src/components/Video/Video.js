import React from 'react';
const VideoInfo = () => {
   return (
      <div>
         <h1>VideoInfo</h1>
      </div>
   );
};

const VideoContent = () => {
   return (
      <div>
         <h1>VideoContent</h1>
      </div>
   );
};
function Video() {
   return (
      <div>
         <VideoInfo></VideoInfo>
         <VideoContent></VideoContent>
      </div>
   );
}

export default Video;
