import React, { useState } from "react";
import dataCollection from "./dataBase/database";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

const App = () => {
  const [videos, setVideos] = useState(dataCollection);
  const [editableVideo, setEditableVideo] = useState(null);

  const addVideos = (video) => {
    // addVideo function
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  };

  const deleteVideo = (id) => {
    // deleteVideo fuction
    const item = videos.find((itm) => itm.id === id);
    const video = videos.filter((item) => item.id !== id);
    setVideos(video);
    alert(`${item.title} Deleted Successfully...✅`);
  };

  const editVideo = (id) => {
    // editing funcion putting it in setEditableVideo
    const item = videos.find((itm) => itm.id === id);
    setEditableVideo(item)
    console.log(item);
  };

  const updateVideo = (video) =>{
    // uparing function
    console.log('video updated', video);
    const index = videos.findIndex((item)=> item.id === video.id);
    const cleanList = videos.splice(index,1, video);
    setVideos([...videos, cleanList]);
    setEditableVideo(null);    

  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Video App</h1>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-full mb-4">
        <AddVideo addVideos={addVideos} editableVideo={editableVideo} updateVideo={updateVideo} ></AddVideo>
      </div>
      <VideoList
        videos={videos}
        deleteVideo={deleteVideo}
        editVideo={editVideo}
      ></VideoList>
    </div>
  );
};

export default App;
