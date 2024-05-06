import React from 'react';
import './App.scss';
import {Layout} from "../components/Layout/Layout";
import CurrentUserProvider from "../providers/CurrentUserContext";

function App() {
  return (
      <CurrentUserProvider>
        <Layout/>
      </CurrentUserProvider>
  );
}

export default App;
