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
      store.state.setSession(authResult);
      store.state.history.push("/");
    } else if (err) {
      //store.state.history.push("/");
      alert(`Error: ${err.error}. Check the console for futher details`);
      console.log(err);
    }
  });
};