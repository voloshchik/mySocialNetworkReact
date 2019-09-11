import React from "react";

import "./App.css";

import Header from "./componens/Header";

import Profile from "./componens/Profile.jsx";
import Navbar from "./componens/Navbar";
const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
