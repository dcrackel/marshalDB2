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
      //store.state.history.push("/");
      navigate(`/`);
    } else if (err) {
      //store.state.history.push("/");
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