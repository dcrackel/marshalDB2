import React from "react";

import useGlobal from "../common/globalstore.js";

const CallBack = () => {
  const [globalState, globalActions] = useGlobal();

  const doAuthenication = () => {
    //globalActions.handleAuthenication();
    if (/access_token|id_token|error/.test(globalState.state.auth0.location.hash)) {
         alert("HELLO!!!");
    //   globalActions.handleAuthenication();
    // } else {
    //   throw new Error("Invalid callback URL");
     }
  };

  doAuthenication();
  return <p>HERE</p>;
};

export default CallBack;
