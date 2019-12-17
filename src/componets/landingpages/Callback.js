import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { usePath, useQueryParams } from "raviger";
import useGlobal from "../common/globalstore.js";
import qs from "qs";

export function useCustomQuery() {
  return useQueryParams(qs.parse, qs.stringify);
}
const CallBack = () => {
  const [globalState, globalActions] = useGlobal();
  const [{ startsWith }, setQuery] = useQueryParams();

  function getQueryVariable(variable) {
    var temp = window.location.href;
    var query = temp.replace("#", "?");
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split("=");
      if (pair[0] === variable) {
        return pair[1];
      }
    }
    return false;
  }

  const doAuthenication = () => {
    globalActions.handleAuthenication();
    //if (/access_token|id_token|error/.test(globalState.state.auth0.location.hash)) {
    //alert("HELLO!!!");
    //   globalActions.handleAuthenication();
    // } else {
    //   throw new Error("Invalid callback URL");
    // }
  };

  //console.log(usePath() + getQueryVariable('access_token') + ' q=' + startsWith + ' query=' );

  doAuthenication();
  return (
    <>
    </>
  );
};

export default CallBack;
