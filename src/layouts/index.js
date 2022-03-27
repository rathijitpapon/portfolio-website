import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import Loading from "../views/Loading";
import Home from "../views/Home";
import Contact from "../views/Contact";
import About from "../views/About";
import Projects from "../views/Projects";

const MainLayout = () => {
  return (
    <div>
        <Routes>
          <Route exact path="/" element={<Loading/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/project" element={<Projects/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route path="*" element={<Navigate replace to="/home"/>} />
        </Routes>
    </div>
  );
};

export default MainLayout;
