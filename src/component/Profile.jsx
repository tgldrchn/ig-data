import { useState } from "react";
import { instance } from "../App";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Users from "./Users";
const Profile = () => {
  const [data, setData] = useState([]);
  const [pic, setPic] = useState([]);

  const getData = async () => {
    const response = await instance.get(`?limit=6`);
    setData(response.data.users);
    setPic(response.data.users[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='profile'>
      <div className='myProfile'>
        <div className='profileMain'>
          <img src={pic.image} alt='' className='myProfileImg' />
          <Link to='./0' style={{ textDecoration: "none" }}>
            {" "}
            <div className='myUserName'>PROJECT</div>
          </Link>
        </div>
        <div className='Switch'>Switch</div>
      </div>
      <div className='suggest'>
        <div className='suggestText'>Suggestions for you</div>
        {data &&
          data.map((user) => {
            return (
              <div>
                <Users userName={user} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Profile;
