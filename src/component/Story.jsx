function Story({ users }) {
  return (
    <div className='storyContainer'>
      <img src={users.image} alt='' className='storyImg' />
      <div style={{ textAlign: "center" }}>{users.username}</div>
    </div>
  );
}

export default Story;
