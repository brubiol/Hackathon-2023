// import React, { useState, useEffect } from "react";

// import { account } from "../appwrite/appwriteConfig";
// import { createAvatar } from '@dicebear/core';
// import { lorelei } from '@dicebear/collection';
// const dummyData = [
//   {
//     id: 1,
//     name: "John Doe",
//     workoutTime: "8:00 AM",
//     height: "6ft",
//     weight: "180lbs"
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//     workoutTime: "10:00 AM",
//     height: "5ft 5in",
//     weight: "130lbs"
//   },
//   {
//     id: 3,
//     name: "Jim Smith",
//     workoutTime: "12:00 PM",
//     height: "6ft 2in",
//     weight: "200lbs"
//   }
// ];

// const Feed = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     setPosts(dummyData);
//     setLoading(false);
//   }, []);

//   return (
//     <div className="flex flex-col items-center">
//       {loading ? (
//         <p className="text-lg text-gray-600">Loading...</p>
//       ) : (
//         <div className="w-full max-w-sm">
//           {posts.map(post => (
//             <div
//               key={post.id}
//               className="bg-white shadow-md rounded p-6 my-6"
//             >
//               <h2 className="text-xl font-bold">{post.name}</h2>
//               <p className="text-gray-700 mt-2">Workout Time: {post.workoutTime}</p>
//               <p className="text-gray-700 mt-2">Height: {post.height}</p>
//               <p className="text-gray-700 mt-2">Weight: {post.weight}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Feed;

//part 2

// import React, { useState, useEffect } from "react";

// const dummyData = [
//   {
//     id: 1,
//     name: "John Doe",
//     workoutTime: "9:00 AM",
//     height: "6'0",
//     weight: "180 lbs",
//     likes: 0
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//     workoutTime: "10:00 AM",
//     height: "5'6",
//     weight: "140 lbs",
//     likes: 0
//   },
//   {
//     id: 3,
//     name: "Jim Smith",
//     workoutTime: "11:00 AM",
//     height: "5'10",
//     weight: "160 lbs",
//     likes: 0
//   }
// ];

// const Workout = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     setPosts(dummyData);
//   }, []);

//   const handleLike = id => {
//     const updatedPosts = posts.map(post =>
//       post.id === id
//         ? { ...post, likes: post.likes + 1 }
//         : { ...post }
//     );
//     setPosts(updatedPosts);
//   };

//   return (
//     <div className="flex flex-col items-center mt-10">
//       <ul className="w-full max-w-md">
//         {posts.map(post => (
//           <li key={post.id} className="bg-white shadow-md rounded p-6 my-6">
//             <div className="flex items-center">
//               <div className="w-1/2">
//                 <h2 className="text-xl font-bold">{post.name}</h2>
//                 <p className="text-gray-700 mt-2">Workout time: {post.workoutTime}</p>
//                 <p className="text-gray-700 mt-2">Height: {post.height}</p>
//                 <p className="text-gray-700 mt-2">Weight: {post.weight}</p>
//               </div>
//               <div className="w-1/2 text-right">
//                 <button
//                   onClick={() => handleLike(post.id)}
//                   className="bg-blue-500 text-white py-2 px-4 rounded"
//                 >
//                   Like {post.likes}
//                 </button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Workout;

//part 3

//import React, { useState, useEffect } from "react";

// const dummyData = [
//   {
//     id: 1,
//     name: "John Doe",
//     workoutTime: "9:00 AM",
//     height: "6'0",
//     weight: "180 lbs",
//     likes: 0
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//     workoutTime: "10:00 AM",
//     height: "5'6",
//     weight: "140 lbs",
//     likes: 0
//   },
//   {
//     id: 3,
//     name: "Jim Smith",
//     workoutTime: "11:00 AM",
//     height: "5'10",
//     weight: "160 lbs",
//     likes: 0
//   }
// ];

// const Workout = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     setPosts(dummyData);
//   }, []);

//   const handleLike = id => {
//     const updatedPosts = posts.map(post =>
//       post.id === id
//         ? { ...post, likes: post.likes + 1 }
//         : { ...post }
//     );
//     setPosts(updatedPosts);
//   };

//   return (
//     <div className="flex flex-col items-center mt-10">
//       <ul className="w-full max-w-md">
//         {posts.map(post => (
//           <li key={post.id} className="bg-white shadow-md rounded p-6 my-6">
//             <div className="flex items-center">
//               <div className="w-1/2">
//                 <h2 className="text-xl font-bold">{post.name}</h2>
//                 <p className="text-gray-700 mt-2">Workout time: {post.workoutTime}</p>
//                 <p className="text-gray-700 mt-2">Height: {post.height}</p>
//                 <p className="text-gray-700 mt-2">Weight: {post.weight}</p>
//               </div>
//               <div className="w-1/2 text-right">
//                 <button
//                   onClick={() => handleLike(post.id)}
//                   className="bg-blue-500 text-white py-2 px-4 rounded"
//                 >
//                   Like {post.likes}
//                 </button>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Workout;

// const Workout = (props) => {
//   return (
//     <div className="flex flex-col justify-center items-center mt-10">
//       {props.loading ? (
//         <p className="text-lg text-gray-600">Loading...</p>
//       ) : (
//         <ul className="w-full max-w-lg">
//           {Object.values(props.posts.documents).map((post, index) => {
//             return (
//               <li
//                 key={index}
//                 className="bg-white shadow-md rounded p-8 my-6 border-2"
//               >
//                 {post.name}
//                 {post.caption}
//                 {post.workout}
//                 {post.time}
//                 {post.likes}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Workout;

// const avatar = (seedValue) => {
//   return createAvatar(lorelei, {
//       seed: seedValue
//   }).toDataUriSync();
// }
// const Workout = (props) => {
//   return (



    

    
//     <div className="flex flex-col justify-center items-center mt-10">
//       {props.loading ? (
//         <p className="text-lg text-gray-600">Loading...</p>
//       ) : (
//         <ul className="w-full max-w-lg">
//           {Object.values(props.posts.documents).map((post, index) => {
//             return (
//               <li
//                 key={index}
//                 className="bg-white shadow-md rounded p-8 my-6 border-2"
//               >
//                 <div className="text-lg font-bold">{post.name}</div>
//                 <div className="text-sm text-gray-600 mt-2">
//                   {post.caption}
//                 </div>
//                 <div className="text-base mt-4">{post.workout}</div>
//                 <div className="text-sm text-gray-600 mt-2">
//                   {post.time}
//                 </div>
//                 <div className="text-sm text-gray-600 mt-2">
//                   {post.likes} Likes
//                 </div>
//                 <div>
                  
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Workout;




// const Workout = (props) => {
//   return (
//     <div className="flex flex-col justify-center items-center mt-10">
//       {props.loading ? (
//         <p className="text-lg text-gray-600">Loading...</p>
//       ) : (
//         <ul className="w-full max-w-lg">
//           {Object.values(props.posts.documents).map((post, index) => {
//             const avatarImage = avatar(post.name);
//             return (
//               <li
//                 key={index}
//                 className="bg-white shadow-md rounded p-8 my-6 border-2"
//               >
//                 <div className="text-lg font-bold">{post.name}</div>
//                 <div className="text-sm text-gray-600 mt-2">
//                   {post.caption}
//                 </div>
//                 <div className="text-base mt-4">{post.workout}</div>
//                 <div className="text-sm text-gray-600 mt-2">
//                   {post.time}
//                 </div>
//                 <div className="text-sm text-gray-600 mt-2">
//                   {post.likes} Likes
//                 </div>
//                 {avatarImage ? (
//                   <div className="w-16 rounded-full">
//                     <img src={avatarImage} />
//                   </div>
//                 ) : null}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Workout;


// import { account } from "../appwrite/appwriteConfig";
// import { createAvatar } from '@dicebear/core';
// import { lorelei } from '@dicebear/collection';

// const avatar = (seedValue) => {
//   try {
//     return createAvatar(lorelei, {
//         seed: seedValue
//     }).toDataUriSync();
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

// const Workout = (props) => {
//   return (
//     <div className="flex flex-col justify-center items-center mt-10">
//       {props.loading ? (
//         <p className="text-lg text-gray-600">Loading...</p>
//       ) : (
//         <ul className="w-full max-w-lg">
//           {Object.values(props.posts.documents).map((post, index) => {
//             const avatarImage = avatar(post.name);
//             return (
//               <li
//                 key={index}
//                 className="bg-white shadow-md rounded p-8 my-6 border-2"
//               >
//                 <div className="text-lg font-bold">{post.name}</div>
//                 <div className="text-sm text-gray-600 mt-2">
//                   {post.caption}
//                 </div>
//                 <div className="text-base mt-4">{post.workout}</div>
//                 <div className="text-sm text-gray-600 mt-2">
//                   {post.time}
//                 </div>
//                 <div className="text-sm text-gray-600 mt-2">
//                   {post.likes} Likes
//                 </div>
//                 {avatarImage ? (
//                   <div className="w-16 rounded-full">
//                     <img src={avatarImage} />
//                   </div>
//                 ) : null}
//               </li>
//             );
//           })}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Workout;




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
                className="bg-white shadow-md rounded p-8 my-6 border-2 flex flex-row"
              >
                
                  <div className="w-16 rounded-full mr-6">
                    <img src={avatar(post.name)} />
                  </div>
                
                <div className="flex flex-col">
                  <div className="text-lg font-bold">{post.name}</div>
                  <div className="text-base mt-4">{post.workout}</div>
                  <div className="flex mt-4">
                    <div className="text-sm text-gray-600">
                      {post.time}
                    </div>
                    <div className="ml-auto text-sm text-gray-600">
                      {post.likes} Likes
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

export default Workout;
