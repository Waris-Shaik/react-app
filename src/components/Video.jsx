import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Video = ({ title = 'New Video', channelName, views, time, verified, subscribers, children, id, deleteVideo, editVideo }) => {



  return (
    <div className="max-w-sm w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
      <div className="videoContainer bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <div className="flex justify-between items-center absolute top-0 left-0 w-full p-2">
            <button
              onClick={()=> deleteVideo(id)}
              className="text-gray-500 hover:text-red-500 bg-gray-200 hover:bg-red-100 rounded-full p-2 transition duration-300 sm:p-3 md:p-4"
            >
              <DeleteIcon className="h-5 w-5 sm:h-6 w-6 md:h-8 w-8" />
            </button>
            <button
              onClick={()=> editVideo(id)}
              className="text-gray-500 hover:text-blue-500 bg-gray-200 hover:bg-blue-100 rounded-full p-2 transition duration-300 sm:p-3 md:p-4"
            >
              <EditIcon className="h-5 w-5 sm:h-6 w-6 md:h-8 w-8" />
            </button>
          </div>
          <img
            src="https://picsum.photos/id/1/200/300"
            alt="Video Thumbnail"
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{title}</h2>
          <div className="flex items-center text-gray-600 font-bold mt-2">
            <img
              src="https://picsum.photos/id/2/40/40" // Replace with owner's image URL
              alt="Owner"
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <div>
                {channelName}
                <span className="text-xs mx-1">{verified ? '✅' : null}</span>
              </div>
              <div className="flex items-center text-gray-600 mt-1">
                <span className="font-bold text-xs">{subscribers}</span>
                <span className="text-xs mx-1">subscribers</span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
            <span>{views} views</span>
            <span>{time}</span>
          </div>
          <div className="mt-4">{children}</div>
        </div> 
      </div>
    </div>
  );
};

export default Video;
