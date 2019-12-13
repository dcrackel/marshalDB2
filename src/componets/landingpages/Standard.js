import React from "react";
import Header from "../header/Header";
import Personcard from "../personcard/Personcard";
import AuthorizationCards from "../authorization/AuthorizationCards";

class Standard extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Personcard />
        <AuthorizationCards />
      </div>
    );
  }
}

export default Standard;
