import React from "react";
import { Routes, Route } from "react-router-dom";
import "./_app.css";

import Layout from "./Layout";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import Searching from "./Searching";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="auth" element={<LoginScreen />} />
      <Route path="auth" element={<LoginScreen />} />
      <Route path="search" element={<Searching />} />
    </Routes>
  );
};

export default App;
