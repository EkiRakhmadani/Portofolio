import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";

import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";

const Layout = () => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />

      <div className="app_container" border border-info>
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main" border border-warning>
          <HomeScreen />
        </Container>
      </div>
    </>
  );
};

export default Layout;
