import "./style.css";
import React from "react";

class TitleLogin extends React.Component {
  render() {
    return (
      <div className="titlelogindiv">
        <h2 className="titlelogin">Register Individual Account!</h2>
        <p className="gamerslogin">
          For the purpose of gamers regulation, your details are required.
        </p>
      </div>
    );
  }
}

export default TitleLogin;
