import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import {usePath, useQueryParams} from 'raviger';
import useGlobal from "../common/globalstore.js";
import qs from 'qs'

export function useCustomQuery() {
  return useQueryParams(qs.parse, qs.stringify)
}
const CallBack = () => {
  const [globalState, globalActions] = useGlobal();
  const [{ startsWith }, setQuery] = useQueryParams()

  function getQueryVariable(variable)
  {
          var temp = window.location.href;
          var query = temp.replace('#',"?");
          //console.log('temp: ' + temp1);
          //var query = window.location.search.substring(1);
          console.log("query: " + query)//"app=article&act=news_content&aid=160990"
          var vars = query.split("&");
          console.log("split vars: " + vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
          for (var i=0;i<vars.length;i++) {
                      var pair = vars[i].split("=");
                      console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
          if(pair[0] === variable){return pair[1];}
           }
           return(false);
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
  return <p>HERE <Router></Router></p>;
};

export default CallBack;
