import './style.css';
import React, { useState} from 'react';
import OrBeforeAfterLogin from '../OrBeforeAfterLogin';
import { useAuthContext } from '../../contexts/AuthContext'
import * as Yup from "yup"

const formSchema = Yup.object({
    name: Yup.string()
        .required('Name is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    rePassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please re-enter your password'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    checkbox: Yup.boolean()
        .oneOf([true], 'You must accept the terms and conditions'),
})

const FormLogin = () => {
    const { signup, isLooading } = useAuthContext();
    const [data, setData] = useState({
        name: '',
        email: "",
        password: '',
        rePassword: '',
        checkbox: false
    });
    const [errors, setErrors] = useState({});



    const [lineColor, setLineColor] = useState('#C4C4C4');
    const [lineLength, setLineLength] = useState(0);


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formdata = await formSchema.validate(data, { abortEarly: false });
            console.log(formdata)

        } catch (error) {

            console.log(error);
            const myErrors = {}
            error.inner.forEach((error) => { myErrors[error.path] = error.message });
            setErrors(myErrors);

        }
        if (data.password === data.rePassword)
            signup(
                {
                    name: data.name,
                    email: data.email,
                    password: data.password
                }
            );
        else {
            alert("please correct password")
        }
    }



    const handleSubmitt = async (event) => {
        event.preventDefault();
        try {
            const formdata = await formSchema.validate(data, { abortEarly: false });
            console.log(formdata)

        } catch (error) {

            console.log(error);
            const myErrors = {}
            error.inner.forEach((error) => { myErrors[error.path] = error.message });
            setErrors(myErrors);

        }
    }

    const handelChangeInput = ({ target: { value, name } }) => {
        setData(prevState => ({ ...prevState, [name]: value }))
    }


    return (
        <div className="form-container">
            <form className="formlogin" onSubmit={handleSubmit}>
                <div>
                    <label className="labellogin">Username*</label>
                    <input
                        className="inputlogin"
                        type="text"
                        name="name"
                        value={data.name}
                        onChange={handelChangeInput}
                        placeholder="Enter email Name"
                    />
                    {errors.name && <span>{errors.name}</span>}
                </div>
                {/* /**************************************************/}

                <div>
                    <label className="labellogin" htmlFor="email">
                        Email address*
                    </label>
                    <input
                        className="inputlogin"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter email address"
                        value={data.email}
                        onChange={handelChangeInput}
                        required
                    />
                    {errors.email && <span>{errors.email}</span>}
                </div>

                {/* /************************************************ */}
                <div>
                    <label className="labellogin" htmlFor="password">
                        Create password*
                    </label>
                    <input
                        className="inputlogin"
                        type="password"
                        id="password"
                        name="password"
                        value={data.password}
                        onChange={handelChangeInput}
                        placeholder="Password"
                    />
                    <div
                        style={{
                            height: '5px',
                            backgroundColor: lineColor,
                            width: `${lineLength}%`,
                            transition: 'width 0.3s ease',
                        }}
                    ></div>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                {/* /************************************************************ */}

                <div>
                    <label htmlFor="rePassword">Repeat Password*</label>
                    <input
                        className="inputlogin"
                        type="password"
                        id="rePassword"
                        name="rePassword"
                        value={data.rePassword}
                        onChange={handelChangeInput}
                        placeholder="Repeat password"
                    />
                    {errors.rePassword && <span>{errors.rePassword}</span>}
                </div>
                {/* /************************************************************* */}
                <div className="checkbox-container">

                    <input
                        className="checkbox-input"
                        type="checkbox"
                        name="checkbox"
                        checked={data.checkbox}
                        onChange={handelChangeInput}
                    />    <label className="checkbox-label">
                        I agree to the terms and conditions
                    </label>

                    {errors.checkbox && <p className="error">{errors.checkbox}</p>}
                </div>
                <button className="regster-account" type="button" onClick={handleSubmitt}>Register Account </button>
                <OrBeforeAfterLogin />
                <button className="btn_lg" type="submit"> {isLooading ? 'loading...' : 'Signup'}</button>


            </form>

        </div>
    );
};

export default FormLogin;
