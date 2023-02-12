import React from 'react';
import Post from './Post'

const PostButton = () => {
  return (
    <div className="fixed bottom-0 right-0 m-8">
      
        <label htmlFor="my-modal-5" className="btn bg-blue-500 text-white">Post</label>

        <input type="checkbox" id="my-modal-5" className="modal-toggle" />


         <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box  ">

             <div >
            <Post/>
            </div>
                
             
             <div className="modal-action">
                <label htmlFor="my-modal-5" className="btn">Yay!</label>
                     </div>
                 </div>
            </div>


    </div>
   

    
  );
};

export default PostButton;
