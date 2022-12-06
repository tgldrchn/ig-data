import Profile from "./Profile";
import StoryContainer from "./StoryCam";
import Post from "./Post";
const Home = () => {
  return (
    <div className='container'>
      <div className='newsfeed'>
        <div className='storyAbout'>
          <StoryContainer />
        </div>
        <div className='posts'>
          <Post />
        </div>
      </div>
      <div className='profiled'>
        <Profile />
      </div>
    </div>
  );
};
export default Home;
