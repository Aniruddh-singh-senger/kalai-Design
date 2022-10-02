import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './component/login/Login'
import About from './component/about/About'
import Admin from './component/Admin/Admin'
import Slicing from './component/slicing/Slicing'

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Navbar />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Slicing/*" element={<Slicing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
