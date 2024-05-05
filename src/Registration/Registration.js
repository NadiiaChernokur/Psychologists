import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  RegistrationButton,
  RegistrationForm,
  RegistrationInput,
  RegistrationLoginH,
  RegistrationModalBackground,
  RegistrationModalContainer,
  RegistrationParagraf,
} from "./Registration.styled";
import { createUser } from "../redux/operetion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Registration = () => {
  const stateError = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    dispatch(createUser(data));
    console.log(data);

    localStorage.setItem("email", JSON.stringify(data.email));
    if (stateError.includes("Log in")) {
      navigate("/login");
    }
  };
  return (
    <RegistrationModalBackground>
      <RegistrationModalContainer>
        <RegistrationLoginH>Registration</RegistrationLoginH>
        <RegistrationParagraf>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </RegistrationParagraf>

        <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
          <div>
            <RegistrationInput
              type="name"
              {...register("name")}
              placeholder="Name"
            />
            {errors.name && (
              <span style={{ color: "#f71b2e" }}>{errors.name.message}</span>
            )}
          </div>
          <div>
            <RegistrationInput
              type="email"
              {...register("email")}
              placeholder="Email"
            />
            {errors.email && (
              <span style={{ color: "#f71b2e" }}>{errors.email.message}</span>
            )}
          </div>
          <div>
            <RegistrationInput
              type="password"
              {...register("password")}
              placeholder="Password"
            />
            {errors.password && (
              <span style={{ color: "#f71b2e" }}>
                {errors.password.message}
              </span>
            )}
          </div>
          <RegistrationButton type="submit">Sign Up</RegistrationButton>
        </RegistrationForm>
      </RegistrationModalContainer>
    </RegistrationModalBackground>
  );
};
export default Registration;
