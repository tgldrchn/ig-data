import { useState } from "react";
import "../App.css";
const Users = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState("Follow");
  const [boolean, setBoolean] = useState(true);
  const follow = () => {
    if (isFollowed === "Follow") {
      setIsFollowed("Following");
      setBoolean(false);
    } else {
      setIsFollowed("Follow");
      setBoolean(true);
    }
  };
  const styles = {
    follow: {
      color: boolean ? "#0095f6" : "grey",
    },
  };
  return (
    <div className="userFatherDiv">
      <div className="sda">
        <img src={user.image} alt="img" className="userImg" />
        <div>{user.username}</div>
      </div>
      <div className="Switch" onClick={follow} style={styles.follow}>
        {isFollowed}
      </div>
    </div>
  );
};

export default Users;
