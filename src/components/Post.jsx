import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { databases } from "../appwrite/appwriteConfig";
import { v4 as uuid } from 'uuid';
import { useNavigate, Link } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";


const PostModal = () => {
    const navigate = useNavigate()
    const [UserDetails, setUserDetails] = useState()


    useEffect(() => {
        const getData = account.get()
        getData.then(
            function (response) {
                setUserDetails(response)
                console.log("YELLO")
                console.log(response)
            },
            function (error) {
                console.log(error)
            }
        )
    }, [])




    const [caption, setCaption] = useState("");
    const [exercise, setExercise] = useState("");
    const [time, setTime] = useState(0);
    const [image, setImage] = useState(null);
    const [likes, setlikes] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();


        // Add your submit logic here to send the data to the server
        const promise = databases.createDocument('63e7dab6593b65a6cef9', '63e7dac8e6e75f0280c6', uuid(),
            {
                "Name": "",
                "Workout": exercise,
                "Caption": caption,
                "Img": image,
                "Minutes": time,
                "Likes": likes
            });


        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });




        console.log(caption, exercise, time, image);


        // Reset the form after successful submission




        setCaption("");
        setExercise("");
        setTime(0);
        setImage(null);
    };


    return (
        <>UserDetails ?
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
                                    className="bg-blue-300 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Flex 💪
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>:<div></div></>




    );
};


export default PostModal;
