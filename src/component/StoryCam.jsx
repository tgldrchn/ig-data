import { useState, useEffect } from "react";
import Story from "./Story";
import { instance } from "../App";
import "../App.css";

const StoryContainer = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const rosponse = await instance.get(``);
    setData(rosponse.data.users);
    console.log(rosponse);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='storyBox'>
      {data &&
        data.map((users) => {
          return <Story users={users} />;
        })}
    </div>
  );
};
export default StoryContainer;
