import React, { useEffect } from "react";
import { preLoaderAnim } from "../../animations";
import "./style.css";
const Preload = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>please</span>
        <span>wait,</span>
      </div>
    </div>
  );
};

export default Preload;
