import house from "./assets/house.png";
import magnifier from "./assets/magnifier.jpg";
import explore from "./assets/explore.png";
import reels from "./assets/reels.png";
import messages from "./assets/messenger.jpeg";
import igLogo from "./assets/igLogo.png";
import { useContext } from "react";
import { NavbarChange } from "../App";
const Navbar = () => {
  const { navbar, setNavbar } = useContext(NavbarChange);
  const click = () => {
    if (navbar === false) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    console.log(navbar);
  };
  return (
    <div className='navbarsContainer'>
      <div className='navbarClick' id='navbar'>
        <div className='navbarButtonClick buttonLogoClick'>
          <div className='navbarImgClick'>
            <img
              src={igLogo}
              style={{
                width: "26px",
                height: "26px",
              }}
              alt=''
            />
          </div>
        </div>
        <div className='navbarButtonClick'>
          <div className='navbarImgClick'>
            <img src={house} style={{ width: "26px", height: "26px" }} alt='' />
          </div>
        </div>
        <div className='navbarButtonClick'>
          <div className='navbarImgClick'>
            <img
              src={magnifier}
              style={{ width: "26px", height: "26px" }}
              alt=''
              onClick={click}
            />
          </div>
        </div>
        <div className='navbarButtonClick'>
          <div className='navbarImgClick'>
            <img
              src={explore}
              style={{ width: "26px", height: "26px" }}
              alt=''
            />
          </div>{" "}
        </div>
        <div className='navbarButtonClick'>
          <div className='navbarImgClick'>
            <img src={reels} style={{ width: "26px", height: "26px" }} alt='' />
          </div>{" "}
        </div>
        <div className='navbarButtonClick'>
          <div className='navbarImgClick'>
            <img
              src={messages}
              style={{ width: "26px", height: "26px" }}
              alt=''
            />
          </div>{" "}
        </div>
        <div className='navbarButtonClick'>
          <div className='navbarImgClick'>
            <img
              src={messages}
              style={{ width: "26px", height: "26px" }}
              alt=''
            />
          </div>
        </div>
        <div className='navbarButtonClick'>
          <div className='navbarImgClick'>
            <img
              src={explore}
              style={{ width: "26px", height: "26px" }}
              alt=''
            />
          </div>
        </div>
        <div className='navbarButtonClick'>
          <div className='navbarImgClick'>
            <img
              src={explore}
              style={{ width: "26px", height: "26px" }}
              alt=''
            />
          </div>
        </div>

        <div className='more'></div>
      </div>
      <div className='navbarSearch'>
        <div className='mainOne'>
          <div className='navbarSearchTitle'>Search</div>
          <input type='text' className='navbarInput' placeholder='Search' />
        </div>
        <div className='mainTwo'>
          <div className='recent'>Recent</div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
