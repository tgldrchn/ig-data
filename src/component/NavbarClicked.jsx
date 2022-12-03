import house from "./assets/house.png";
import magnifier from "./assets/magnifier.jpg";
import explore from "./assets/explore.png";
import reels from "./assets/reels.png";
import messages from "./assets/messenger.jpeg";
import igLogo from "./assets/igLogo.png";
import { useContext } from "react";
import { NavbarChange } from "../App";
import axios from "axios";
import Users from "./User";
export const instance = axios.create({
  baseURL: `https://dummyjson.com/users`,
  timeout: 2000,
  headers: {
    "Content-type": "application.json; charset=UTF-8",
    "app-id": "63104c3120f6e665ecf628ba",
  },
});

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
  const homeClick = () => {
    setNavbar(false);
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
            <img
              src={house}
              style={{ width: "26px", height: "26px" }}
              alt=''
              onClick={homeClick}
            />
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
          <div className='recent'>
            <Users />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
