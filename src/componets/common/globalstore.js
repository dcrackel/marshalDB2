import React from "react";
import useGlobalHook from "use-global-hook";
import auth0 from "auth0-js";
import * as actions from "./actions/globalactions";

const initialState = {
  person: {
    id: "",
    name: "",
    type: "",
    branchid: "",
    branch: "",
    regionid: "",
    region: ""
  },
  authstatus: {
    loginflag: false
  },
  auth0: new auth0.WebAuth({
    domain: process.env.REACT_APP_AUTH0_DOMAIN,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL,
    responseType: "token id_token",
    scope: "openid profile email"
  }),
  session: {},
  profile: {},
  authranks: null,
  error: ""
  
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
