const UserProfile = ({ value }) => {
  return (
    <div className="profileContainer">
      <div className="profileAbout">
        <div className="profilediv">
          <img src={value.image} alt="" className="profileImg" />
        </div>
        <div className="miniContainer">
          <div className="about">{value.username}</div>
          <div className="followersContainer">
            <div className="followersPosts">0 posts</div>
            <div className="followers">0 followers</div>
            <div className="following">0 following</div>
          </div>
          <div>
            {value.firstName} {""}
            {value.lastName}
          </div>
        </div>
      </div>{" "}
      <div className="newStory">
        <div className="addStory">
          <img src={value.image} alt="" className="addStory" />
        </div>
      </div>
      <div className="profilePosts">
        <div className="postButtons">
          <div className="postBtn">posts</div>
          <div className="saved">saved</div>
          <div className="tagged">tagged</div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
