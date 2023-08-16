import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { useAuthContext } from "../../contexts/AuthContext";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {  NavLink,useNavigate } from "react-router-dom";
import { PATHS } from "../../../router/paths";

const formSchema = Yup.object({
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
const Form = () => {
  const { login, isLooading } = useAuthContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data, event) => {
    event.preventDefault();
    console.log(data);
    login(data);
  };
  console.log(errors);

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleNavigation = () => {
    navigate(PATHS.SIGNUP);
  };

  return (
    <div>
      <form className="formsignup" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input type="text" name="email" id="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="password-input">
          <label htmlFor="password">Enter Your Password:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password")}
            placeholder="•••••••••"
          />
          <FontAwesomeIcon
            icon={showPassword ? faEyeSlash : faEye}
            className="password-icon"
            onClick={togglePasswordVisibility}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button type="submit">{isLooading ? "loading..." : "login"}</button>

        <p className="registerpara">
          Don't have an account?
          <span>
            <NavLink to={PATHS.SIGNUP} replace={true} className="register">
              Register
            </NavLink>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;
