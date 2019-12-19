import React from "react";
import Header from "../standard/header/Header";
import Personcard from "../standard/personcard/Personcard";
import AuthorizationCards from "../standard/authorization/AuthorizationCards";

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
