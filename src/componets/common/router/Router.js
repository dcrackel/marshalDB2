import React from "react";
import Standard from "../../landingpages/Standard"
import Callback from "../../landingpages/Callback"
import Admin from "../../landingpages/Admin"
//import Contact from "./components/Contact";
//import About from "./components/About";

const routes = {
  "/": () => <Standard />,
  "/callback": () => <Callback  />,
  "/admin": () => <Admin  />
  //,
  //"/about": () => <About />,
  //"/contact": () => <Contact />
};
export default routes;
