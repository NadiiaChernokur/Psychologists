import React from "react";
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
} from "./LogIn.styled";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/operetion";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LogIn = () => {
  const stateError = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(login(data));
    console.log(stateError);
  };
  return (
    <LoginModalBackground>
      <LoginModalContainer>
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
