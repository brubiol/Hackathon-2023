import Workout from "../components/Workout";
import Nav from "../components/Nav";
import PostButton from "../components/PostButton";
import { useEffect, useState } from "react";
import { account } from "../appwrite/appwriteConfig";
import { useNavigate } from "react-router-dom";
import { databases } from "../appwrite/appwriteConfig";
import { Query } from "appwrite";

const Feed = () => {
  const navigate = useNavigate();
  const [UserDetails, setUserDetails] = useState(null);
  const [posts, setPosts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = account.get();
    getData.then(
      function (response) {
        setUserDetails(response);
      },
      function (error) {
        console.log(error)
        navigate("/login");
      }
    );
  }, []);

  function reqPosts() {
    const promise = databases.listDocuments(
      "63e7dab6593b65a6cef9",
      "63e89b5d116735a1a113",
      [Query.orderDesc("")]
    );

    promise.then(
      function (response) {
        setPosts(response);
        setLoading(false);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  }

  useEffect(() => {
    reqPosts()
  }, []);

  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div className="container mx-auto px-4">
        <Workout loading={loading} posts={posts}/>
      </div>
      <div>
        <PostButton reqPosts={reqPosts} UserDetails={UserDetails} />
      </div>
    </div>
  );
};

export default Feed;
