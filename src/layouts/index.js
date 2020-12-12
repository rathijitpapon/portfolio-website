import React from "react";
// import {Suspense, lazy} from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import Loading from "../views/Loading";
import Home from "../views/Home";
import Contact from "../views/Contact";
import About from "../views/About";
import Projects from "../views/Projects";

// const Home = lazy(() => import("../views/Home"));
// const Contact = lazy(() => import("../views/Contact"));
// const About = lazy(() => import("../views/About"));
// const Projects = lazy(() => import("../views/Projects"));

const MainLayout = () => {
  return (
    <div>
      {/* <Suspense fallback={<Loading />}> */}
        <Switch>
          <Route exact path="/" component={Loading} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={Projects} />
          {/* <Route exact path="/blog" component={Home} /> */}
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Redirect path="*" to="/home" component={Home} />
        </Switch>
      {/* </Suspense> */}
    </div>
  );
};

export default MainLayout;
