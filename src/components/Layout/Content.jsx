import React from "react";
import { Switch, Route } from "react-router-dom";
import Error404 from "../../views/examples/404Error";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import "./Content.css";

export default function Content() {
  return (
    <main className="Content">
      <Switch> 
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/param/:id">
          <Param />
        </Route>
        <Route path="*">
          <Error404/>
        </Route>
      </Switch>
    </main>
  )
}
