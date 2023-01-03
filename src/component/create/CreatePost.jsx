import { useState } from "react";
import { instanceTwo } from "../../App";

const CreatePost = () => {
  const [value, setValue] = useState();
  const [tru, setTru] = useState(false);
  const [message, setMessage] = useState();
  const create = async () => {
    if (value !== "") {
      try {
        await instanceTwo.post("/", {
          title: value,
          body: value,
        });
        setMessage();
      } catch (error) {
        // alert(error.response.data.data);
        setMessage(error.response.data.data);
      }
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
      <div
        style={{
          width: "100%",
          background: "white",
          fontWeight: "700",
          height: "auto",
          marginTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "10px",
        }}
      >
        {message}
      </div>
    </div>
  );
};
export default CreatePost;
