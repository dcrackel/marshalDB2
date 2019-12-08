export const addToCounter = (store, amount) => {
    const counter = store.state.counter + amount;
    store.setState({ counter });
  };

  export const storePerson = (store, person) => {
    store.setState({ person });
  };