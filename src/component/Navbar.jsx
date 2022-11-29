import image from "./assets/house.png";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarLogo'>Instagram</div>
      <div className='navbarButtonContainer'>
        <div className='navbarButton'>
          <div className='navbarImg'>
            <img src={image} style={{ width: "22px", height: "22px" }} alt='' />
            <span>Home</span>
          </div>
        </div>
        <div className='navbarButton'>
          <div className='navbarImg'>
            <img src={image} style={{ width: "22px", height: "22px" }} alt='' />
            <span>Search</span>
          </div>
        </div>
        <div className='navbarButton'>
          <div className='navbarImg'>
            <img src={image} style={{ width: "22px", height: "22px" }} alt='' />
            <span>Explore</span>
          </div>
        </div>
        <div className='navbarButton'>
          <div className='navbarImg'>
            <img src={image} style={{ width: "22px", height: "22px" }} alt='' />
            <span>Reels</span>
          </div>
        </div>
        <div className='navbarButton'>
          <div className='navbarImg'>
            <img src={image} style={{ width: "22px", height: "22px" }} alt='' />
            <span>Messages</span>
          </div>
        </div>
        <div className='navbarButton'>
          <div className='navbarImg'>
            <img src={image} style={{ width: "22px", height: "22px" }} alt='' />
            <span>Notifications</span>
          </div>
        </div>
        <div className='navbarButton'>
          <div className='navbarImg'>
            <img src={image} style={{ width: "22px", height: "22px" }} alt='' />
            <span>Create</span>
          </div>
        </div>
        <div className='navbarButton'>
          <div className='navbarImg'>
            <img src={image} style={{ width: "22px", height: "22px" }} alt='' />
            <span>Profile</span>
          </div>
        </div>
      </div>
      <div className='more'></div>
    </div>
  );
};
export default Navbar;
