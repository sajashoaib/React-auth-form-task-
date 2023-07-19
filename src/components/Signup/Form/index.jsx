import './style.css'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LoginPage from '../../../pages/LoginPage';

class Form extends React.Component {
   constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false,
            errors: {
              email: '',
              password: '',
            },
        };
    }


    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    }
    

    handleChange = (e) => {
        const { name, value } = e.target;
        let errors = { ...this.state.errors };
    
        switch (name) {
          case 'email':
            errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
              ? ''
              : 'Invalid email address';
            break;
          case 'password':
            errors.password =
              value.length >= 6 ? '' : 'Password must be at least 6 characters long';
            break;
          default:
            break;
        }
    
        this.setState({
          [name]: value,
          errors,
        });
      };
    
      handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, errors } = this.state;
    
        if (email && password && !errors.email && !errors.password) {
          // Valid form, submit data or perform other actions
          console.log('Form is valid');
        } else {
          // Invalid form, display error messages or prevent form submission
          console.log('Form is invalid');
        }
      };
























    render() {
        const { password, showPassword, errors,email} = this.state;

      
        return (
            <div>
                <form className='formsignup '  onSubmit={this.handleSubmit} >
                <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

                    <div className="password-input">
                        <label htmlFor="password">Enter Your Password:</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            placeholder='•••••••••'
                        />
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                            className="password-icon"
                            onClick={this.togglePasswordVisibility}
                        />
                       {errors.password && <span>{errors.password}</span>}

                    </div>      

          <button>Login</button>
                </form> 
                
            </div>
        );
    }
};



export default Form;
