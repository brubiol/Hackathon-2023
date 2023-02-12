import React, { useState } from "react";
import Nav from "./Nav";

const PostModal = () => {
    
  const [caption, setCaption] = useState("");
  const [exercise, setExercise] = useState("");
  const [time, setTime] = useState(0);
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here to send the data to the server
    console.log(caption, exercise, time, image);
    // Reset the form after successful submission
    setCaption("");
    setExercise("");
    setTime(0);
    setImage(null);
  };

  return (
    <div>
        <Nav></Nav>
    <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
      <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>

      <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <textarea
              className="w-full border border-gray-400 rounded-lg p-2"
              placeholder="Write a caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <select
              className="w-full border border-gray-400 rounded-lg p-2"
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
            >
              <option value="" disabled>
                Select an Exercise
              </option>
              <option value="Running">Running</option>
              <option value="Yoga">Yoga</option>
              <option value="Weightlifting">Weightlifting</option>
              <option value="Swimming">Swimming</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="number"
              className="w-full border border-gray-400 rounded-lg p-2"
              placeholder="Time (in minutes)"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              className="w-full border border-gray-400 rounded-lg p-2"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <div className="flex items-center justify-end pt-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default PostModal;