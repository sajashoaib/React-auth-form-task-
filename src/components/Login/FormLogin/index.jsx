import "./style.css";
import React, { useState } from "react";
import OrBeforeAfterLogin from "../OrBeforeAfterLogin";
import { useAuthContext } from "../../contexts/AuthContext";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../../router/paths";

const formSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  rePassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please re-enter your password"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  checked: Yup.boolean().oneOf(
    [true],
    "You must accept the terms and conditions"
  ),
});

const FormLogin = () => {
  const { signup, isLooading } = useAuthContext();
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
    if (data.password === data.rePassword)
      signup({
        name: data.name,
        email: data.email,
        password: data.password,
      });
    else {
      alert("please correct password");
    }
  };
  console.log(errors);

  const handleSubmitt = async (event, data) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <div className="form-container">
      <form className="formlogin" onSubmit={handleSubmit(onSubmit)}>
              <div>
          <label className="labellogin">Username*</label>
          <input
            className="inputlogin"
            type="text"
            {...register("name")}
            placeholder="Enter email Name"
          />
          {errors.name && <span>{errors.name.message}</span>}
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
            placeholder="Enter email address"
            {...register("email")}
            required
          />
          {errors.email && <span>{errors.email.message}</span>}
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
            placeholder="Password"
            {...register("password")}
          />
          <div
            style={{
              height: "5px",
              transition: "width 0.3s ease",
            }}
          ></div>
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        {/* /************************************************************ */}

        <div>
          <label htmlFor="rePassword">Repeat Password*</label>
          <input
            className="inputlogin"
            type="password"
            id="rePassword"
            placeholder="Repeat password"
            {...register("rePassword")}
          />
          {errors.rePassword && <span>{errors.rePassword.message}</span>}
        </div>
        {/* /************************************************************* */}
        <div className="checkbox-container">
          <input
            className="checkbox-input"
            type="checkbox"
            id="checked"
            {...register("checked")}
          />
          <label htmlFor="checked" className="checkbox-label">
            I agree to the terms and conditions
          </label>
          {errors.checked && (
            <span className="error">{errors.checked.message}</span>
          )}{" "}
        </div>
        <button
          className="regster-account"
          type="button"
          onClick={handleSubmitt}
        >
          Register Account{" "}
        </button>
        <OrBeforeAfterLogin />
        <button className="btn_lg" type="submit">
          {" "}
          {isLooading ? "loading..." : "Signup"}
        </button>
      </form>
    </div>
  );
};

export default FormLogin;
