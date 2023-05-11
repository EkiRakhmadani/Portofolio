import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./_app.css";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";

const App = () => {
  return <LoginScreen />;
};

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />

      <div className="app_container" border border-info>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main" border border-warning>
          {children}
        </Container>
      </div>
    </>
  );
};

export default App;
