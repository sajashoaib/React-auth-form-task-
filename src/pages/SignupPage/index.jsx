import React, { Component } from "react";
import Container from "../../components/Container";
import Signup from "../../components/Signup";
class SignupPage extends Component {
  render() {
    return (
      <div>
        <Container>
          <Signup />
        </Container>
      </div>
    );
  }
}

export default SignupPage;
