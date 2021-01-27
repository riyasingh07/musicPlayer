import React, {useState, useEffect} from "react";

import Navhead from "./Navhead";
import Footnote from "./Footnote";
import Player from "./Player";
import songlist from "./Songlist";

export default function Playlist() {
  const [songs]= useState(songlist);
  const [currentSongIndex, setCurrentSongIndex]=useState(0);
  const [nextSongIndex, setNextSongIndex]=useState(currentSongIndex +1);
  useEffect(()=>{
     setNextSongIndex(()=>{
        if (currentSongIndex+1 > songs.length -1){
          return 0;
        }else{
          return currentSongIndex+1;
        }
     });
  },[currentSongIndex]);

return (
  <div>
    <Navhead />
    <div className="Playlist">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs} 
      />
    </div>
    
    <Footnote />
  </div>
);
};