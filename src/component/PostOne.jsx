const PostOne = ({ value }) => {
  return (
    <div className="postOne">
      <div className="postProfile">{value.id}</div>
      <div className="postImage"></div>
      <div className="postIcons"></div>
      <div className="likes">10likes</div>
      <div className="postTitle"></div>
    </div>
  );
};
export default PostOne;
