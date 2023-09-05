import Video from './components/Video';

import { useEffect } from 'react';
function App() {
   useEffect(() => {
      document.getElementById('focus').focus();
   }, []);
   return (
      <div
         id="focus"
         tabIndex="1"
         className="App flex flex-col items-center snap-y snap-mandatory overflow-y-scroll h-screen"
      >
         <Video></Video>
         <Video></Video>
         <Video></Video>
         <Video></Video>
      </div>
   );
}

export default App;
