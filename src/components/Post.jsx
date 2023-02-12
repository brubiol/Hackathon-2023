import React, { useEffect, useState } from "react";
import { databases } from "../appwrite/appwriteConfig";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";

const PostModal = (props) => {
  const [caption, setCaption] = useState("");
  const [exercise, setExercise] = useState("");
  const [time, setTime] = useState(0);
  const [image, setImage] = useState(null);
  const [likes, setlikes] = useState(0);
    
  const handleSubmit = (e) => {
    // Add your submit logic here to send the data to the server
    const promise = databases.createDocument(
      "63e7dab6593b65a6cef9",
      "63e89b5d116735a1a113",
      uuid(),
      {
        id: props.UserDetails.$id,
        name: props.UserDetails.name,
        workout: exercise,
        caption: caption,
        image: image,
        time: time,
        likes: likes,
      }
    );

    promise.then(
      function (response) {
        props.reqPosts()
      },
      function (error) {
        console.log(error); // Failure
      }
    );

    console.log(caption, exercise, time, image);

    // Reset the form after successful submission

    setCaption("");
    setExercise("");
    setTime(0);
    setImage(null);
  };

  return (
    <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
      <div>
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
            <option value="Swimming">Swimming</option>
            <option value="Biking">Biking</option>
            <option value="Running">Running</option>
            <option value="WeightLifting">WeightLifting</option>
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
        <div className="flex items-center justify-end pt-2 model-action">
          <label
            onClick={handleSubmit}
            className="bg-blue-300 px-4 py-2 rounded-lg hover:bg-blue-600 btn"
            htmlFor="my-modal-5"
          >
            Flex 💪
          </label>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
