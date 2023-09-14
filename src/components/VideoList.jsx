import React from 'react'
import PlayButton from './PlayButton';
import Video from './Video';



const VideoList = ({videos, deleteVideo, editVideo}) => {

  return (
    <div className="container mx-auto">
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap lg:flex lg:flex-wrap lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {videos.map((video) => (
          <Video 
            key={video.id}
            title={video.title}
            channelName={video.channelName}
            views={video.views}
            time={video.time}
            verified={video.isVerified}
            id = {video.id}
            subscribers={video.subscribers}
            deleteVideo={deleteVideo}        
            editVideo={editVideo}
          >
            <PlayButton
              onPlay={() => console.log(`playing ${video.title}`)}
              onPause={() => console.log(`paused ${video.title}`)}
            >
              {video.title}
            </PlayButton>
          </Video>
        ))}
      </div>
    </div>
  )
}

export default VideoList