import React from 'react';
import { NavLink, Route, Switch } from "react-router-dom";


function HomePage() {
  return (
    <div>
      This is what everyone sees. 
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/checkup">Checkup</NavLink>

      <NavLink to="/settings">Settings</NavLink>
      <NavLink to="/home">Home</NavLink>
    </div>
  )
};

export default HomePage;
