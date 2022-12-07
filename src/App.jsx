import "./App.css";
import Navbar from "./component/Navbar";
import NavbarClicked from "./component/NavbarClicked";
import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import UserProfile from "./component/UserProfile";
import ProRouter from "./component/ProRouter";
export const NavbarChange = createContext();
export const instance = axios.create({
  baseURL: "https://dummyjson.com/users",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});
export const instanceTwo = axios.create({
  baseURL: "https://dummyjson.com/posts",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

function App() {
  const [navbar, setNavbar] = useState(false);

  return (
    <NavbarChange.Provider value={{ navbar, setNavbar }}>
      <div className="App">
        {navbar ? <NavbarClicked /> : <Navbar />}
        <div className="www">
          {" "}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<ProRouter />} />
          </Routes>
        </div>
      </div>
    </NavbarChange.Provider>
  );
}

export default App;
