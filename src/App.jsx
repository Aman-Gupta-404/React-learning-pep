import { createContext, useState } from "react";
import "./styles.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import User from "./components/user/User";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/:userId" element={<User />} />
    </Routes>
  );
}

export default App;
