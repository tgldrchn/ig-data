import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
const Users = ({ userName }) => {
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
    <Link to={`${userName.id}`}>
      <div className="userFatherDiv">
        <div className="sda">
          <img src={userName.image} alt="img" className="userImg" />
          <div>{userName.username}</div>
        </div>
        <div className="Switch" onClick={follow} style={styles.follow}>
          {isFollowed}
        </div>
      </div>
    </Link>
  );
};

export default Users;
