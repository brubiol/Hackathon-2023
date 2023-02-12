import React from 'react';

const PostButton = () => {
  return (
    <div className="fixed bottom-0 right-0 m-8">
      
        <label htmlFor="my-modal-6" className="btn bg-blue-500 text-white">Post</label>

        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
         <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
             <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
             <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
             <div className="modal-action">
                 <label htmlFor="my-modal-6" className="btn">Yay!</label>
             </div>
        </div>
    </div>


    </div>
   

    
  );
};

export default PostButton;
