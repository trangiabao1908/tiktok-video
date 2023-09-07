import Video from './components/Video';

import db from './firebaseConfig';
import { useEffect, useState, useMemo } from 'react';
function App() {
   const [videos, setVideos] = useState([]);
   useEffect(() => {
      db.collection('videos')
         .get()
         .then((querySnapshot) => {
            setVideos(querySnapshot.docs.map((doc) => doc.data()));
         });
   }, []);
   return (
      <div
         tabIndex="1"
         id="focus"
         className="App flex flex-col items-center snap-y snap-mandatory overflow-y-scroll h-screen"
      >
         {videos.map((video, index) => (
            <Video key={index} data={video}></Video>
         ))}
      </div>
   );
}

export default App;
