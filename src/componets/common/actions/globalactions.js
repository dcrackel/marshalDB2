import { navigate } from "raviger";
import axios from "axios";

export const addToCounter = (store, amount) => {
  const counter = store.state.counter + amount;
  store.setState({ counter });
};

export const storePerson = (store, person) => {
  store.setState({ person });
};

export const storeProfile = (store, profile) => {
  store.setState({ profile });
};

export const storeAuthRanks = (store, authranks) => {
  store.setState({ authranks });
};

//let p = store.state.authstatus.loginflag);
export const login = store => {
  store.state.auth0.authorize();
  store.state.authstatus.loginflag = true;
};

export const handleAuthenication = store => {
  store.state.auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      setSession(store, authResult);
      handleAuthorization(store);
      navigate(`/admin`);
    } else if (err) {
      if (authResult) {
        //weird issue were 2 auth requests are made, 1 comes back empty, 2nd is corect. this ignores the empty one.
        //this is totally treating the symptoms.
        alert(`Error: ${err.error}. Check the console for futher details`);
        console.log(err);
        console.log(store.state + authResult);
        navigate(`/`);
      }
    }
  });
};

function setSession(store, authResult){
  const expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  );
  localStorage.setItem("access_token", authResult.accessToken);
  localStorage.setItem("id_token", authResult.idToken);
  localStorage.setItem("expires_at", expiresAt);
  let decoded = parseJwt(authResult.idToken);
  let temp = JSON.stringify(decoded);
  localStorage.setItem("profile", JSON.stringify(temp));
  storeProfile(store, decoded);
};

export const isAuthenticated = () => {
  const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
  return new Date().getTime() < expiresAt;
};

export const logout = store => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
  store.state.authstatus.loginflag = false;
  navigate(`/`);
  store.state.auth0.logout({
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    returnTo: "http://localhost:3000"
  });
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token"); //access_token  id_token
  if (!accessToken) {
    throw new Error("No access token found.");
  }
  return accessToken;
};

export const getIdToken = () => {
  const accessToken = localStorage.getItem("id_token"); //access_token  id_token
  if (!accessToken) {
    throw new Error("No access token found.");
  }
  return accessToken;
};

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function(c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export const getProfile = store => {
  if (!store.state.profile){
    const localStoredProfile = localStorage.getItem("profile");
    if (localStoredProfile){ 
      const localProfile = JSON.parse(localStoredProfile);
      storeProfile(store, localProfile);
    }

  }
  return store.state.profile;
};

export const handleAuthorization = store => {
  axios({
    method: "post",
    url: "https://marshaldb.midrealm.org/mid2/login.php",
    headers: {
      "Content-Type": "applicatoin/json"
      //"Access-Control-Allow-Origin": "http://localhost:3000"
    },
    data: { tid: getIdToken() }
  }).then(
    response => {
      console.log(response.data);
      if (
        Object.keys(response.data).length < 1 ||
        Object.keys(response.data).length > 20
      ) {
        alert("Your account must be updated by a Marshal before loggin in");
        logout(store);
      }
      storeAuthRanks(store, response.data);
    },
    error => {
      console.log(error);
    }
  );
};
