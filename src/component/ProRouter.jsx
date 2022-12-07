import { useState } from "react";
import { instance } from "../App";
import { useEffect } from "react";
import UserProfile from "./UserProfile";
const ProRouter = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const rosponse = await instance.get(``);
    setData(rosponse.data.users);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="prorouter">
      {data &&
        data.map((e) => {
          return <UserProfile value={e} />;
        })}{" "}
    </div>
  );
};
export default ProRouter;
