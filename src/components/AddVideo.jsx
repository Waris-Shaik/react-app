import React, { useEffect, useState } from "react";

const initialState = {
  title: "",
  channelName: "",
  views: "",
  time: "",
  verified: true,
  subscribers: ''
};
const AddVideo = ({ addVideos, editableVideo, updateVideo }) => {
  const [video, setVideo] = useState(initialState);

  const handleChange = (e) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if(editableVideo){
      updateVideo(video);
    }else{
      addVideos(video); // taking new video
    }
    console.log(video);
    setVideo(initialState);
  };



  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo);
    }
  },[editableVideo]);




  return (
    <div className="w-full md:w-1/2 lg:w-full xl:w-full p-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Add Video</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={video.title}
              onChange={handleChange}
              placeholder="Enter title..."
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="views"
              className="block text-sm font-medium text-gray-700"
            >
              Views:
            </label>
            <input
              type="text"
              id="views"
              name="views"
              value={video.views}
              onChange={handleChange}
              placeholder="Enter views..."
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="channelName"
              className="block text-sm font-medium text-gray-700"
            >
              Channel Name:
            </label>
            <input
              type="text"
              id="channelName"
              name="channelName"
              value={video.channelName}
              onChange={handleChange}
              placeholder="Enter channelName..."
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="time"
              className="block text-sm font-medium text-gray-700"
            >
              Time :
            </label>
            <input
              type="text"
              id="time"
              name="time"
              value={video.time}
              onChange={handleChange}
              placeholder="Enter time..."
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subscribers"
              className="block text-sm font-medium text-gray-700"
            >
            subscribers :
            </label>
            <input
              type="text"
              id="subscribers"
              name="subscribers"
              value={video.subscribers}
              onChange={handleChange}
              placeholder="Enter subscribers..."
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-md py-2 px-4 font-semibold hover:bg-blue-600 focus:outline-none focus:ring focus:bg-blue-600"
          >
            {editableVideo ? 'Edit Video': "Add Video"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVideo;
