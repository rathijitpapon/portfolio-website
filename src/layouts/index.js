import React from "react";
import {Switch, Route} from "react-router-dom";

import Loading from "../views/Loading";
import Home from "../views/Home";

const MainLayout = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Loading} />
        <Route path="/home" component={Home} />
        <Route path="/project" component={Home} />
        <Route path="/learning" component={Home} />
        <Route path="/about" component={Home} />
        <Route path="/contact" component={Home} />
      </Switch>
    </div>
  );
};

export default MainLayout;
