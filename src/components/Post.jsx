import React, { useState } from "react"
import { databases, storage } from "../appwrite/appwriteConfig"
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom"

const PostModal = (props) => {
  const navigate = useNavigate()

  const [errorMessage, setErrorMessage] = useState("")
  const [caption, setCaption] = useState("")
  const [exercise, setExercise] = useState("")
  const [time, setTime] = useState(0)
  const [image, setImage] = useState(null)
  const [likes, setlikes] = useState(0)


  const handleSubmit = (e) => {


    if (caption === "") {
      e.preventDefault();
      setErrorMessage("Caption");
      return;
    } else if (time === 0) {
      e.preventDefault();
      setErrorMessage("time");
      return;
    } else if (exercise === "") {
      e.preventDefault();
      setErrorMessage("exercise");
      return;
    }

    setErrorMessage("");

    if (image) {
      const id = uuid()
      storage.createFile('63e8e428bffe884d0ad6', id, image)

      databases.createDocument(
        "63e7dab6593b65a6cef9",
        "63e89b5d116735a1a113",
        uuid(),
        {
          id: props.UserDetails.$id,
          workout: exercise,
          time: time,
          caption: caption,
          name: props.UserDetails.name,
          image: storage.getFileView('63e8e428bffe884d0ad6', id),
          likes: likes,
        }
      )

    } else {
      databases.createDocument(
        "63e7dab6593b65a6cef9",
        "63e89b5d116735a1a113",
        uuid(),
        {
          id: props.UserDetails.$id,
          workout: exercise,
          time: time,
          caption: caption,
          name: props.UserDetails.name,
          image: null,
          likes: likes,
        }
      )
    }

    setCaption("")
    setExercise("")
    setTime(0)
    setImage(null)
    props.closeModal();
    
  }

  return (
    <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden transform transition-all sm:max-w-lg sm:w-full">
      <form>
        {errorMessage !== "" && (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! {errorMessage} needed.</span>
            </div>
          </div>
        )}

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
            accept="image/*"
            onChange={(e) => {setImage(e.target.files[0]); console.log(e.target.files[0])}}
          />
        </div>
        <div className="flex items-center justify-end pt-2">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Flex 💪
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostModal
