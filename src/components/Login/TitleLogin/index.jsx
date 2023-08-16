import { NavLink } from "react-router-dom";
import "./style.css";
import React from "react";
import { PATHS } from "../../../router/paths";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

class TitleLogin extends React.Component {
  render() {
    return (
      <div className="titlelogindiv">
              <span className="backpara">  
              <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
                <NavLink to={PATHS.LOGIN} replace={true} className="back">BACK</NavLink></span>
        <h2 className="titlelogin">Register Individual Account!</h2>
        <p className="gamerslogin">
          For the purpose of gamers regulation, your details are required.
        </p>
      </div>
    );
  }
}

export default TitleLogin;
