import { useState } from "react";
import { instanceTwo } from "../../App";

const CreatePost = () => {
  const [value, setValue] = useState();
  const [tru, setTru] = useState(false);
  const create = async () => {
    if (value !== "") {
      await instanceTwo.post("/", {
        title: value,
        body: value,
      });
    }
  };
  const changer = () => {
    if (tru === true) {
      setTru(false);
    } else {
      setTru(true);
    }
  };

  return (
    <div>
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "black",
          display: tru ? "none" : "inline",
        }}
      ></div>
      <div style={{ display: "flex", flexDirection: "row" }} onClick={changer}>
        <input
          className="navbarInput"
          onChange={(e) => setValue(e.target.value)}
          style={{ border: "1px solid grey  ", backgroundColor: "white" }}
          placeholder="create a post"
        ></input>
        <button
          onClick={create}
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            border: "1px solid grey",
          }}
        >
          create
        </button>
      </div>
    </div>
  );
};
export default CreatePost;
