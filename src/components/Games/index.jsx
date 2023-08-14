import React from "react";
import SideBar from "./SideBar";
import "./style.css";
import Header from "./Header";
import PageContent from "./PageContent";
import { useThemeContext } from "../contexts/ThemeContext";
const Games = () => {
  const { theme } = useThemeContext();
  return (
    <div id="games" className={theme}>
      <Header />
      <div className="main">
        <SideBar /> <PageContent />
      </div>
    </div>
  );
};

export default Games;
