
import React, { Component } from 'react';
import Container from "../../components/Container";
import Login from '../../components/Login';
import SignupPage from '../SignupPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './style.css'



class LoginPage extends Component {
  state = {
    isSignUpPage: false
  };
  handleSignClick = () => {
    this.setState({ isSignUpPage: true });
  }
 
    render() {
      const {isSignUpPage} = this.state
          if (isSignUpPage) {
      return <SignupPage/>;
    }
      return (
        <div className="g">
         <span className="backpara"  onClick={this.handleSignClick}>
            <FontAwesomeIcon icon={faArrowLeft} className="back-icon" />
           Back</span>
              <Login onLogin={this.props.onLogin}>

                </Login>
                    
        </div>
       
      );
    }
  
  }


export default LoginPage