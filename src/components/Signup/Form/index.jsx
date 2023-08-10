import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LoginPage from '../../../pages/LoginPage';
import './style.css';
import { useAuthContext } from '../../contexts/AuthContext';

const Form = () => {
  const { login, isLooading } = useAuthContext();
  const [data, setData] = useState({
    email: " ",
    password: " "
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    login(data)
  };
  const handelChangeInput = ({ target: { value, name } }) => {
    setData(prevState => ({ ...prevState, [name]: value }))
  }















  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    switch (name) {
      case 'email':
        newErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ''
          : 'Invalid email address';
        break;
      case 'password':
        newErrors.password =
          value.length >= 6 ? '' : 'Password must be at least 6 characters long';
        break;
      default:
        break;
    }

    setErrors(newErrors);

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (email && password && !errors.email && !errors.password) {
  //     // Valid form, submit data or perform other actions
  //     console.log('Form is valid');
  //   } else {
  //     // Invalid form, display error messages or prevent form submission
  //     console.log('Form is invalid');
  //   }
  // };

  return (
    <div>
      <form className="formsignup" onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={data.email} onChange={handelChangeInput} />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div className="password-input">
          <label htmlFor="password">Enter Your Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            value={data.password}
            onChange={handelChangeInput}
            placeholder="•••••••••"
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="password-icon"
            onClick={togglePasswordVisibility}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <button  type='submit'>{isLooading ? 'loading...':'login'}</button>

      </form>
    </div>
  );
};

export default Form;
