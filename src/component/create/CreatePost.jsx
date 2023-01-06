import { instanceTwo } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

const CreatePost = () => {
  const titleRef = useRef();
  const bodyRef = useRef();
  const imageRef = useRef();

  const create = async () => {
    if (titleRef.current.value !== "") {
      try {
        await instanceTwo.post("/", {
          title: titleRef.current.value,
          body: bodyRef.current.value,
          image: imageRef.current.value,
        });
        toast("successful");
      } catch (error) {
        toast(error.response.data.data);
      }
    }
  };

  return (
    <div className="inputContainer">
      <input
        ref={titleRef}
        className="postInputs one"
        placeholder="title"
      ></input>
      <input
        ref={bodyRef}
        className="postInputs two"
        placeholder="body"
      ></input>
      <input
        ref={imageRef}
        className="postInputs three"
        placeholder="image"
      ></input>
      <button onClick={create} className="createPostButton">
        create post
      </button>

      <ToastContainer />
    </div>
  );
};
export default CreatePost;
