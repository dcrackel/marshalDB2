import React from "react";
import Standard from "../landingpages/Standard"
import Callback from "../landingpages/Callback"
//import Contact from "./components/Contact";
//import About from "./components/About";

const routes = {
  "/": () => <Standard />,
  "/callback": () => <Callback />
  //,
  //"/about": () => <About />,
  //"/contact": () => <Contact />
};
export default routes;
