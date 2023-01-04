import PostTwo from "./PostTwo";
import { instanceTwo } from "../../App";
import { useState } from "react";
const PostOne = ({ value }) => {
  const [upt, setUpt] = useState("");
  const [color, setColor] = useState("");
  const [tru, setTru] = useState(false);

  const remove = async () => {
    await instanceTwo.delete(`${value._id}`);
  };
  const uptade = async () => {
    if (upt !== "") {
      await instanceTwo.put(`${value._id}`, {
        title: upt,
      });
    }
  };
  const like = async () => {
    if (tru === false) {
      await instanceTwo.put(`${value._id}`, {
        reactions: value.reactions + 1,
      });
      setTru(true);
    } else {
      await instanceTwo.put(`${value._id}`, {
        reactions: value.reactions - 1,
      });
      setTru(false);
    }
  };

  const fill = () => {
    if (tru === false) {
      setColor("red");
    } else {
      setColor("currentColor");
    }
  };
  return (
    <div className="postOne" style={{ height: "auto" }}>
      <div className="postProfile">
        <PostTwo />
      </div>
      <div className="postImage">
        <img src={value.image} alt="img" className="postImage" />
      </div>
      <div className="miniContain">
        {" "}
        <div className="postIcons">
          <div className="one">
            <div
              className="heartIcon"
              onClick={() => {
                like();
                fill();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill={color}
                class="bi bi-heart"
                viewBox="0 0 16 16"
                className="icon"
              >
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
            </div>
            <div className="messageIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat"
                viewBox="0 0 16 16"
                className="icon"
              >
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
              </svg>
            </div>
            <div className="sendIcon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-send"
                viewBox="0 0 16 16"
                className="icon"
              >
                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
              </svg>
            </div>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
            className="icon"
            onClick={remove}
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </div>
        <div className="description">
          <div className="nnn">
            {" "}
            <div
              className="likes"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <div>Liked by </div>
              <div style={{ fontWeight: "700", marginLeft: "5px" }}>
                {value.reactions}
              </div>
            </div>
            <div
              className="postTitle"
              style={{ fontWeight: "700", marginTop: "10px" }}
            >
              {value.title}
            </div>
          </div>
          <div className="postInput">
            <input
              type="text"
              placeholder="Add a comment"
              className="input"
              style={{ width: "95%" }}
              onChange={(e) => setUpt(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-pencil-square"
              viewBox="0 0 16 16"
              onClick={uptade}
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fill-rule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostOne;
