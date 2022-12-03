import { useEffect } from "react";
import { useState } from "react";
import { instance } from "./NavbarClicked";
const Users = () => {
  const [userData, setUserData] = useState("");
  const getData = async () => {
    const res = await instance.get("");
    console.log(res.data.users);
    setUserData(res.data.users);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='userDataContainer'>
      {userData &&
        userData.map((e) => {
          return (
            <div className='userData'>
              <div className='userDataBox'></div>
              <div className='names'>
                <div>
                  {e.firstName}
                  {e.lastName}
                </div>
                <div className='userName'>{e.username}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Users;
