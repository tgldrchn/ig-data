import house from "./assets/house.png";
import magnifier from "./assets/magnifier.png";
import explore from "./assets/explore.png";
import reels from "./assets/reels.png";
import messages from "./assets/messenger.jpeg";
import instagram from "./assets/instagram.png";
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
    <div className="navbar" id="navbar">
      <div className="buttonLogo">
        <img
          src={instagram}
          style={{
            width: "103px",
            height: "39px",
            marginLeft: "20px",
            marginTop: "15px",
          }}
          alt=""
        />
      </div>
      <div className="navbarButtonContainer">
        <div className="navbarButton">
          <div className="navbarImg">
            <img src={house} style={{ width: "22px", height: "22px" }} alt="" />
          </div>
          <span className="buttonName">Home</span>
        </div>
        <div className="navbarButton" onClick={click}>
          <div className="navbarImg">
            <img
              src={magnifier}
              style={{ width: "22px", height: "22px" }}
              alt=""
            />
          </div>
          <span className="buttonName">Search</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <img
              src={explore}
              style={{ width: "22px", height: "22px" }}
              alt=""
            />
          </div>{" "}
          <span className="buttonName">Explore</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <img src={reels} style={{ width: "22px", height: "22px" }} alt="" />
          </div>{" "}
          <span className="buttonName">Reels</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <img
              src={messages}
              style={{ width: "22px", height: "22px" }}
              alt=""
            />
          </div>{" "}
          <span className="buttonName">Messages</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <img
              src={messages}
              style={{ width: "22px", height: "22px" }}
              alt=""
            />
          </div>
          <span className="buttonName">Notifications</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <img
              src={explore}
              style={{ width: "22px", height: "22px" }}
              alt=""
            />
          </div>
          <span className="buttonName">Create</span>
        </div>
        <div className="navbarButton">
          <div className="navbarImg">
            <img
              src={explore}
              style={{ width: "22px", height: "22px" }}
              alt=""
            />
          </div>
          <span className="buttonName">Profile</span>
        </div>
      </div>
      <div className="more"></div>
    </div>
  );
};
export default Navbar;
