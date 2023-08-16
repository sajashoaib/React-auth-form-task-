import React, { Component } from "react";
import Login from "../../components/Login";
import "./style.css";

class LoginPage extends Component {
  render() {
    return (
      <div className="g">
        <Login onLogin={this.props.onLogin}></Login>
      </div>
    );
  }
}

export default LoginPage;
