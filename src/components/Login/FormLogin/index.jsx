import './style.css'
import React from 'react';
import OrBeforeAfterLogin from '../OrBeforeAfterLogin';
class FormLogin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repeatPassword: '',
            strength: '',
            lineColor: '#C4C4C4',
            lineLength: 0,
            isAgreed: false,

            errors: {
                username: '',
                phone: '',
                email: '',
                password: '',
                repeatPassword: '',
                isAgreed: '',

            },

        };
    }

    handleChanges = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
        const password = event.target.value;
        this.setState({ password }, () => {
            this.updateStrength();
            this.updateLineColor();
        });
    };

    handleChangess = (event) => {
        const { name, value, } = event.target;
        this.setState({ [name]: value }, () => {
            this.validateField(name, value);
        });

    };



    validateField = (fieldName, value) => {
        let { emailValid, passwordValid, repeatPasswordValid } = this.state;

        switch (fieldName) {
            case 'email':
                emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                break;
            case 'password':
                passwordValid = value.length >= 6;
                break;
            case 'repeatPassword':
                repeatPasswordValid = value === this.state.password;
                break;
            default:
                break;
        }

        this.setState(
            {
                emailValid,
                passwordValid,
                repeatPasswordValid
            },
            this.validateForm
        );
    };



    updateStrength = () => {
        const { password } = this.state;
        let strength = '';

        if (password.length < 6) {
            strength = 'Weak';
        } else if (password.length < 10) {
            strength = 'Medium';
        } else {
            strength = 'Strong';
        }

        this.setState({ strength });
    };

    updateLineColor = () => {
        const { strength } = this.state;
        let lineColor = '#C4C4C4';
        let lineLength = 0;

        if (strength === 'Weak') {
            lineColor = 'red';
            lineLength = 20;
        } else if (strength === 'Medium') {
            lineColor = 'orange';
            lineLength = 50;
        } else if (strength === 'Strong') {
            lineColor = 'green';
            lineLength = 100;
        }

        this.setState({ lineColor, lineLength });
    };

    /********************************************************************************************* */

    handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        this.setState((prevState) => ({
            [name]: newValue,
            errors: {
                ...prevState.errors,
                [name]: '',
            },
        }));
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { username, phone, email, password, repeatPassword, isAgreed } = this.state;


        const errors = {};
        if (!username) {
            errors.username = 'Username is required';
        }
        if (!phone) {
            errors.phone = 'Phone is required';
        } else if (!/^\d{10}$/.test(phone)) {
            errors.phone = 'Phone must be a 10-digit number';
        }
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email format';
        }
        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        if (password !== repeatPassword) {
            errors.repeatPassword = 'Passwords do not match';
        }

        if (!isAgreed) {
            errors.isAgreed = 'Please agree to the terms and conditions';
        }

        this.setState({ errors });

        if (Object.keys(errors).length === 0) {
            console.log('Form submitted!');
        }
    };


    render() {
        const { username, phone, repeatPassword, email, lineColor, lineLength, isAgreed, errors } = this.state;

        return (

            <div class="form-container">
                <form className="formlogin" onSubmit={this.handleSubmit} >
                    <div>
                        <label className="labellogin">Username*</label>
                        <input
                            className='inputlogin'
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.handleChange}
                            placeholder="Enter email Name" />
                        {errors.username && <span>{errors.username}</span>} </div>
                    {/* /********************************************************************************* */}
                    <div>
                        <label className="labellogin">Phone*</label>
                        <input
                            className='inputlogin'
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={this.handleChange}
                            placeholder="Enter email phone" />
                        {errors.phone && <span>{errors.phone}</span>}   </div>
                    {/* /********************************************************************************* */}
                    <div>
                        <label className="labellogin" htmlFor="email">Email address*</label>
                        <input
                            className='inputlogin'
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email address"
                            value={email}
                            onChange={this.handleChangess}
                            required />
                        {errors.email && <span>{errors.email}</span>}</div>

                    {/* /********************************************************************************* */}
                    <div>
                        <label className="labellogin" htmlFor="password">Create password*</label>
                        <input

                            className='inputlogin'
                            type="password"
                            id="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChanges}
                            placeholder="Password" />
                        <div
                            style={{
                                height: '5px',
                                backgroundColor: lineColor,
                                width: `${lineLength}%`,
                                transition: 'width 0.3s ease'
                            }}></div>
                        {errors.password && <span>{errors.password}</span>} </div>
                    {/* /********************************************************************************* */}

                    <div>
                        <label htmlFor="repeatPassword">Repeat Password*</label>
                        <input
                            className='inputlogin'
                            type="password"
                            id="repeatPassword"
                            name="repeatPassword"
                            value={repeatPassword}
                            onChange={this.handleChange}
                            placeholder='Repeat password' />
                        {errors.repeatPassword && <span>{errors.repeatPassword}</span>} </div>
                    {/* /********************************************************************************* */}
                    <div className='checkbox-container'>
                        <label className='checkbox-label'>
                            I agree to the terms and conditions
                            <input
                                className=' checkbox-input'
                                type="checkbox"
                                name="isAgreed"
                                checked={isAgreed}
                                onChange={this.handleInputChange} />
                        </label>
                        {errors.isAgreed && <p className="error">{errors.isAgreed}</p>}
                    </div>
                    <button className="regster-account" type="submit">Register Account</button>
                    <OrBeforeAfterLogin />
                </form>
                <button className="btn_lg">Login</button>
            </div>
        );
    }
};



export default FormLogin;
