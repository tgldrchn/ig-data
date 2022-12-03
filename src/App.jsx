import "./App.css";
import Navbar from "./component/Navbar";
import NavbarClicked from "./component/NavbarClicked";
import { createContext } from "react";
import { useState } from "react";
export const NavbarChange = createContext();

function App() {
  const [navbar, setNavbar] = useState(false);

  return (
    <NavbarChange.Provider value={{ navbar, setNavbar }}>
      <div className='App'>
        {navbar ? <NavbarClicked /> : <Navbar />}
        {/* <div className='container'>
        <div className='posts'></div>
        <div className='profile'></div>
      </div> */}
      </div>
    </NavbarChange.Provider>
  );
}

export default App;
