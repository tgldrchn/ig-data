import { instance } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRef } from "react";

const CreateUser = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const userNameRef = useRef();
  const profileImageRef = useRef();
  const dateRef = useRef();

  const create = async () => {
    if (firstNameRef.current.value !== "") {
      try {
        await instance.post("/", {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          username: userNameRef.current.value,
          image: profileImageRef.current.value,
          birthday: dateRef.current.value,
        });
        toast("successful");
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
        className="postInputs five"
        placeholder="image"
      ></input>
      <input
        type="date"
        ref={dateRef}
        className="postInputs three"
        placeholder="birthday"
      ></input>
      <button onClick={create} className="createPostButton">
        create user
      </button>

      <ToastContainer />
    </div>
  );
};
export default CreateUser;
