// import React, { useState, useEffect } from "react";

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

import React, { useState, useEffect } from "react";
//import axios from "axios";

const dummyData = [
    {
      id: 1,
      title: "Workout 1",
      workoutTime: "9:00 AM",
      height: "6ft",
      weight: "180lbs",
      user: {
        name: "John Doe",
        profilePicture: "https://staticg.sportskeeda.com/editor/2023/01/3efbd-16734525751485-1920.jpg"
      },
      likes: 10
    },
    {
      id: 2,
      title: "Workout 2",
      workoutTime: "11:00 AM",
      height: "5ft 8in",
      weight: "150lbs",
      user: {
        name: "Jane Doe",
        profilePicture: "https://staticg.sportskeeda.com/editor/2023/01/3efbd-16734525751485-1920.jpg"
      },
      likes: 20
    },
    {
      id: 3,
      title: "Workout 3",
      workoutTime: "2:00 PM",
      height: "5ft 10in",
      weight: "160lbs",
      user: {
        name: "Jim Smith",
        profilePicture: "https://staticg.sportskeeda.com/editor/2023/01/3efbd-16734525751485-1920.jpg"
      },
      likes: 15
    }
  ];
  

const Workout = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
       setPosts(dummyData);
       }, []);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("<appwrite-api-endpoint>/posts")
//       .then(res => {
//         setPosts(res.data.posts);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, []);

  const handleLike = id => {
    // Implementation for handling like action
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      {loading ? (
        <p className="text-lg text-gray-600">Loading...</p>
      ) : (
        <ul className="w-full max-w-lg">
          {posts.map(post => (
            <li key={post.id} className="bg-white shadow-md rounded p-8 my-6 border-2">
              <div className="flex">
                <img
                  className="w-16 h-12 rounded-full mr-6"
                  src={post.user.avatar || "https://staticg.sportskeeda.com/editor/2023/01/3efbd-16734525751485-1920.jpg"}
                  alt={post.user.name}
                />
                <div>
                  <h2 className="text-xl font-bold">{post.user.name}</h2>
                  <p className="text-gray-600 mt-2">
                    Workout Time: {post.workoutTime}
                  </p>
                  <p className="text-gray-600 mt-2">
                    Height: {post.height}
                  </p>
                  <p className="text-gray-600 mt-2">
                    Weight: {post.weight}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mt-2">{post.body}</p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-blue-300 hover:bg-blue-400 text-black-800 font-bold py-2 px-4 rounded-l"
                  onClick={() => handleLike(post.id)}
                >
                  Like
                </button>
                <p className="text-blue-600">
                  {post.likes} likes
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Workout;



