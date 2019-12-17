import { navigate } from "raviger";

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

//let p = store.state.authstatus.loginflag);
export const login = store => {
  store.state.auth0.authorize();
};

export const handleAuthenication = store => {
  store.state.auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      setSession(authResult);
      navigate(`/admin`);
    } else if (err) {
      if (authResult) {
        alert(`Error: ${err.error}. Check the console for futher details`);
        console.log(err);
        console.log(store.state + authResult);
        navigate(`/`);
      }
    }
  });
};

export const setSession = authResult => {
  const expiresAt = JSON.stringify(
    authResult.expiresIn * 1000 + new Date().getTime()
  );
  localStorage.setItem("access_token", authResult.accessToken);
  localStorage.setItem("id_token", authResult.idToken);
  localStorage.setItem("expires_at", expiresAt);
};

export const isAuthenticated = () => {
  const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
  return new Date().getTime() < expiresAt;
};

export const logout = store => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
  store.state.profile = null;
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
  if (!store.state.profile) {
    let decoded = parseJwt(getIdToken());
    storeProfile(store, decoded);
  }
  return store.state.profile;
};
