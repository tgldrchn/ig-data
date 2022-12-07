import { useState, useEffect } from "react";
import { instance } from "../App";
import PostOne from "./PostOne";
const PostTwo = () => {
  const [profile, setProfile] = useState([]);
  const getProfile = async () => {
    const res = await instance.get("");
    setProfile(res.data.users);
  };
  useEffect(() => {
    getProfile();
  }, []);
  console.log(profile);
  return (
    <div>
      {profile &&
        profile.map((e) => {
          return <PostOne profile={e} />;
        })}
    </div>
  );
};
export default PostTwo;
