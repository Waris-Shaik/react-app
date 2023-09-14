import React, { useState } from "react";



const PlayButton = ({children, onPlay, onPause}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    
    const handleClick = (e) =>{
        e.stopPropagation();
        if(isPlaying) onPause();
        else onPlay()
        setIsPlaying(!isPlaying);
    }
  return (
    <button onClick={handleClick}
      className="rounded px-8 py-1 font-bold"
      style={{ background: "#cfe2ff", color: "#0d6efd" }}
    >
    <span className="" >{children} {isPlaying ? '⏸️' : '▶️'}</span>   
       
    </button>
  );
};

export default PlayButton;
