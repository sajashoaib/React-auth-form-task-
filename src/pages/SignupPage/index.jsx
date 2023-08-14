import React, { Component } from "react";
import Container from "../../components/Container";
import Signup from "../../components/Signup";
import LoginPage from "../LoginPage";
class SignupPage extends Component {
  state = {
    isLoginPage: false,
  };
  handleLoginClick = () => {
    this.setState({ isLoginPage: true });
  };
  render() {
    const { isLoginPage } = this.state;
    if (isLoginPage) {
      return <LoginPage />;
    }
    return (
      <div>
        <Container>
          <Signup />
          <p className="register" onClick={this.handleLoginClick}>
            Don't have an account? <span> Register</span>
          </p>
        </Container>
      </div>
    );
  }
}

export default SignupPage;
