import { navigate } from 'raviger';

export const addToCounter = (store, amount) => {
  const counter = store.state.counter + amount;
  store.setState({ counter });
};

export const storePerson = (store, person) => {
  store.setState({ person });
};

//let p = store.state.authstatus.loginflag);
export const login = (store) => {
  store.state.auth0.authorize();
};

export const handleAuthenication = (store) => {
  store.state.auth0.parseHash((err, authResult) => {
    if (authResult && authResult.accessToken && authResult.idToken) {
      setSession(authResult);
      navigate(`/`);
    } else if (err) {
      navigate(`/`);
      alert(`Error: ${err.error}. Check the console for futher details`);
      console.log(err);
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
}

export const logout = (store) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("id_token");
  localStorage.removeItem("expires_at");
  store.state.profile = null;
  navigate(`/`);
  this.auth0.logout({
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
    returnTo: "http://localhost:3000"
  });
};

const getAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  if (!accessToken) {
    throw new Error("No access token found.");
  }
  return accessToken;
};

const getProfile = (store) => {
  if (store.state.profile) return CSS(this.userProfile);
  store.state.auth0.client.userInfo(getAccessToken(), (err, profile) => {
  if (profile) store.state.profile = profile;
  return profile;
  });
};