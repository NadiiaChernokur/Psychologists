import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  LoginButton,
  LoginField,
  LoginForm,
  LoginH,
  LoginInput,
  LoginModalBackground,
  LoginModalContainer,
  LoginParagraf,
  Out,
} from "./LogIn.styled";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/operetion";
import sprite from "../sprite.svg";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const LogIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const loginVal = await dispatch(login(data));
    console.log(loginVal.payload);
    console.log(loginVal.error?.message);
    if (loginVal.error?.message === "Rejected") {
      console.log("kkkkkkkkkkkkk");
      toast(loginVal.payload);
    } else {
      navigate("/psychologists");
    }
  };

  const modalClose = () => {
    navigate("/");
  };

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      navigate("/");
    }
  };
  return (
    <LoginModalBackground onClick={handleBackgroundClick}>
      <ToastContainer toastStyle={{ background: "#fc0317", color: "white" }} />
      <LoginModalContainer>
        <Out onClick={modalClose}>
          <svg width="32" height="32">
            <use href={`${sprite}#out`}></use>
          </svg>
        </Out>
        <LoginH>Log In</LoginH>
        <LoginParagraf>
          Welcome back! Please enter your credentials to access your account and
          continue your search for a psychologist.
        </LoginParagraf>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <LoginField>
            <LoginInput {...register("email")} placeholder="Email" />
            {errors.email && (
              <span style={{ color: "#f71b2e" }}>{errors.email.message}</span>
            )}
          </LoginField>
          <LoginField>
            <LoginInput
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            {errors.password && (
              <span style={{ color: "#f71b2e" }}>
                {errors.password.message}
              </span>
            )}
          </LoginField>
          <LoginButton type="submit">Log In</LoginButton>
        </LoginForm>
      </LoginModalContainer>
    </LoginModalBackground>
  );
};
export default LogIn;
