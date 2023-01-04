import { instance } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

const CreateUser = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const profileImageRef = useRef();

  const create = async () => {
    if (firstNameRef.current.value !== "") {
      try {
        await instance.post("/", {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          username: userNameRef.current.value,
          image: profileImageRef.current.value,
        });
      } catch (error) {
        // alert(error.response.data.data);
        toast(error.response.data.data);
      }
    }
  };

  return (
    <div className="inputContainer">
      <input
        ref={firstNameRef}
        className="postInputs one"
        placeholder="firstname"
      ></input>
      <input
        ref={lastNameRef}
        className="postInputs two"
        placeholder="lastname"
      ></input>
      <input
        ref={userNameRef}
        className="postInputs four"
        placeholder="username"
      ></input>
      <input
        ref={profileImageRef}
        className="postInputs three"
        placeholder="image"
      ></input>
      <button onClick={create} className="createPostButton">
        create
      </button>

      <ToastContainer />
    </div>
  );
};
export default CreateUser;
