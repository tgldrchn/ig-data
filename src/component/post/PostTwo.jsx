import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { instance } from "../../App";
const PostTwo = () => {
  const [value, setValue] = useState([]);
  const getPic = async () => {
    const res = await instance.get("");
    setValue(res.data.users[0]);
  };
  console.log(value);
  useEffect(() => {
    getPic();
  }, []);
  return (
    <div className="userDataContainer">
      {" "}
      <div className="userData">
        <img src={value.image} alt="" className="userDataBox" />
        <div className="names">
          <Link
            to={`${value.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>{value.username}</div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PostTwo;
