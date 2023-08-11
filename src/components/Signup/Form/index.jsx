import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import LoginPage from '../../../pages/LoginPage';
import './style.css';
import { useAuthContext } from '../../contexts/AuthContext';
import * as Yup from "yup"
import{yupResolver} from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';

const formSchema = Yup.object({
       password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
   
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
   
})
const Form = () => {
  const { login, isLooading } = useAuthContext();
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(formSchema)
  });



const onSubmit = async (data,event) => {
    event.preventDefault();
    console.log(data)
    login(data)
    // if (data.password === data.rePassword)
    //     signup(
    //         {
    //             name: data.name,
    //             email: data.email,
    //             password: data.password
    //         }
    //     );
    // else {
    //     alert("please correct password")
    // }
}
console.log(errors)



  // const [data, setData] = useState({
  //   email: " ",
  //   password: " "
  // });
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   login(data)
  // };
  // const handelChangeInput = ({ target: { value, name } }) => {
  //   setData(prevState => ({ ...prevState, [name]: value }))
  // }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  // const [errors, setErrors] = useState({
  //   email: '',
  //   password: '',
  // });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   let newErrors = { ...errors };

  //   switch (name) {
  //     case 'email':
  //       newErrors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  //         ? ''
  //         : 'Invalid email address';
  //       break;
  //     case 'password':
  //       newErrors.password =
  //         value.length >= 6 ? '' : 'Password must be at least 6 characters long';
  //       break;
  //     default:
  //       break;
  //   }

  //   setErrors(newErrors);

  //   if (name === 'email') {
  //     setEmail(value);
  //   } else if (name === 'password') {
  //     setPassword(value);
  //   }
  // };

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
      <form className="formsignup" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input type="text"
           name="email" 
           id='email'
          //  value={data.email} 
          //  onChange={handelChangeInput} 
          {... register("email")}

           
           />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="password-input">
          <label htmlFor="password">Enter Your Password:</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            // name="password"
            // value={data.password}
            // onChange={handelChangeInput}
            {... register("password")}

            placeholder="•••••••••"
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="password-icon"
            onClick={togglePasswordVisibility}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button  type='submit'>{isLooading ? 'loading...':'login'}</button>

      </form>
    </div>
  );
};

export default Form;
