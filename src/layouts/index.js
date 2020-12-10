import React from "react";
import {Switch, Route} from "react-router-dom";

import Loading from "../views/Loading";
import Home from "../views/Home";
import Contact from "../views/Contact";
import About from "../views/About";
import Projects from "../views/Projects";

const MainLayout = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/home" component={Home} />
        <Route path="/project" component={Projects} />
        <Route path="/blog" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default MainLayout;
