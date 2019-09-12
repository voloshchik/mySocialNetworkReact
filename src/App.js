import React from "react";

import "./App.css";

import Header from "./componens/Header/Header";

import Profile from "./componens/Profile/Profile";
import Navbar from "./componens/Navbar/Navbar.jsx";
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
