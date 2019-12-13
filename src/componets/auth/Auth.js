import React, { useState, useEffect } from "react";
import globalPersonStore from "../common/globalstore.js";
import * as Auth0 from "auth0-js";

const auth0 = new Auth0.WebAuth({
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: process.env.REACT_APP_AUTH0_REDIRECT_URL,
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  responseType: "id_token token",
  scope: "openid profile email"
});

function Auth() {
  const [authObj, setAuthObj] = useState();
  const [globalState, globalActions] = globalPersonStore();

  const login = () => {
    //if (globalActions.showLogin) {
     // alert("HELLO!!" + globalActions.showLogin);
    //}
    //authObj.authorize();

    return false;
  };

  const parseHash = () => {
    authObj.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        //this.setSession(authResult);
        //this.history.push("/");
        console.log("HURRAY!!!!!");
      } else if (err) {
        //this.history.push("/");
        //alert(`Error: ${err.error}. Check the console for futher details`);
        console.log(err);
      }
    });
  };

  return { login, parseHash };
}

export default Auth;
