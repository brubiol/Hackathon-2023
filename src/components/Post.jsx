import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { databases } from "../appwrite/appwriteConfig";
import { v4 as uuid } from 'uuid';
import { useNavigate, Link } from "react-router-dom";
import { account } from "../appwrite/appwriteConfig";


const PostModal = () => {
    const navigate = useNavigate()
    const [UserDetails, setUserDetails] = useState(null)




    useEffect(() => {
        const getData = account.get()
        getData.then(
            function (response) {
                setUserDetails(response)
            },
            function (error) {
                navigate("/login")
            }
        )
    }, [])






    const [errorMessage, setErrorMessage] = useState("");
    const [caption, setCaption] = useState("");
    const [exercise, setExercise] = useState("");
    const [time, setTime] = useState(0);
    const [image, setImage] = useState(null);
    const [likes, setlikes] = useState(0);




    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(caption)


        if (caption === "") {
            setErrorMessage("Caption" );
            return;
          }
        else if(time == 0){
            setErrorMessage("time");
            return;
        }
        else if(exercise == ""){
            setErrorMessage("exercise");
            return;
        }


          setErrorMessage("");
   




        // Add your submit logic here to send the data to the server
        const promise = databases.createDocument('63e7dab6593b65a6cef9', '63e89b5d116735a1a113', uuid(),
            {
                "id": uuid(),
                "workout": exercise,
                "time": time,
                "caption": caption,
                "name": UserDetails.name,
                "image": image,
                "likes": likes
            });






        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
       
        });




        // Reset the form after successful submission








        setCaption("");
        setExercise("");
        setTime(0);
        setImage(null);
        navigate('/feed')


    };




   


        if(UserDetails == null){
            return navigate("/")
        }


        return (
            <div>
                <Nav></Nav>
       
                <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>
                    <div className="bg-white rounded-lg px-4 pt-5 pb-4 overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                        <form onSubmit={handleSubmit}>
                        {errorMessage !== "" && (
                            <div className="alert alert-error shadow-lg">
                            <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                             </svg>
                            <span>Error! {errorMessage} needed.</span>
                             </div>
                                </div>)}


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
                                    <option value="Weightlifting">Weightlifting</option>
                                    <option value="Running">Running</option>
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
            </div>
        );
   


};




export default PostModal;
