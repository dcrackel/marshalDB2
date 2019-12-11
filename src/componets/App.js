import React from 'react';
import './App.css';
import Header from './header/Header';
import Personcard from './personcard/Personcard'
import AuthorizationCards from './authorization/AuthorizationCards'

function App() {
  return (
    <div className="App">
      <Header />
      <Personcard />
      <AuthorizationCards />
    </div>
  );
}

export default App;
