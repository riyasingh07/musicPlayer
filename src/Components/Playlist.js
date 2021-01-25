import React, {useState, useEffect} from "react";

import Navhead from "./Navhead";
import Footnote from "./Footnote";
import Player from "./Player";

export default function Playlist() {
  const [songs]= useState([
    {
      title: "Faded",
      artist: "Alan Walker",
      img_src: "./images/song-1.jpg",
      src: "./music/faded.mp3"
    },
    {
      title: "Memories",
      artist: "Maroon 5",
      img_src: "./images/song-2.jpg",
      src: "./music/memories.mp3"
    },
    {
      title: "BlankSpace",
      artist: "Taylor Swift",
      img_src: "./images/song-3.jpg",
      src: "./music/blankspace.mp3"
    },
    {
      title: "Heading Home",
      artist: "Alan Walker",
      img_src: "./images/song-4.jpg",
      src: "./music/headinghome.mp3"
    }
    
  ]);
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