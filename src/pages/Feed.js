import React from "react";
import Workout from "../components/Workout";
import Nav from "../components/Nav";
import PostButton from "../components/PostButton"

const Feed = () => {
  return (
    <div>
         <div>
         <Nav></Nav>
        </div>
        <div className="container mx-auto px-4">
            <Workout />
        </div>
        <div >
            <PostButton />
        </div>
         
    </div>
   
  );
};

export default Feed;
