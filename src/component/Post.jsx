import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PostOne from "./PostOne";
import { instance } from "../App";
import { instanceTwo } from "../App";

const Post = () => {
  const [post, setPost] = useState([]);
  const [profile, setProfile] = useState([]);
  const getData = async () => {
    const res = await instanceTwo.get("");
    console.log(res.data.posts);
    setPost(res.data.posts);
    const response = await instance.get("");
    setProfile(response.data.users);
  };

  useEffect((e) => {
    getData();
  }, []);
  return (
    <div className='postContainer'>
      {post.map((e) => {
        return <PostOne value={e} />;
      })}
      {profile.map((e) => {
        return <PostOne profile={e} />;
      })}
    </div>
  );
};
export default Post;
