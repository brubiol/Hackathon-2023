import { account } from "../appwrite/appwriteConfig";
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

const avatar = (seedValue) => {
  try {
    return createAvatar(lorelei, {
        seed: seedValue
    }).toDataUriSync();
  } catch (error) {
    console.error(error);
    return null;
  }
}

const Workout = (props) => {
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {props.loading ? (
        <p className="text-lg text-gray-600">Loading...</p>
      ) : (
        <ul className="w-full max-w-lg">
          {Object.values(props.posts.documents).map((post, index) => {
            return (
              <li
                key={index}
                className="bg-white shadow-md rounded p-8 my-6 border-2 flex flex-col items-center"
              >
                
                  <div className="w-16 h-16 rounded-full mr-6">
                    <img src={avatar(post.name)} />
                  </div>
                
                  <div className="text-lg font-bold mr-6">{post.name}</div>
                
                <div className="w-full flex flex-col mt-4">
                  {post.image ? (
                    <img src={post.image} className="w-full "/>
                  ) : null}
                  <div className="text-base mt-4">Workout: {post.workout}</div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-600">
                     workout time: {post.time} mins
                    </div>
                    <div className="text-sm text-gray-600">
                      
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    {post.caption}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};


export default Workout
