import { useState } from "react";
import "./AppProfile.css";
import { Link } from "react-router-dom";
const UsersOfMore = ({ userName }) => {
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
      <Link
        to={`${userName._id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        {" "}
        <div className="sda">
          <img src={userName.image} alt="img" className="userImg" />
          <div>{userName.username}</div>
        </div>{" "}
      </Link>
      <div className="Switch" onClick={follow} style={styles.follow}>
        {isFollowed}
      </div>
    </div>
  );
};

export default UsersOfMore;
