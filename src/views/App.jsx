import React from "react";
import { BrowserRouter } from "react-router-dom";
import Component from "../components/Layout/Content";
import Menu from "../components/Layout/Menu";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Component />
      </BrowserRouter>
    </div>
  );
}
