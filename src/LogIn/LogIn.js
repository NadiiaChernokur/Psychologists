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

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Використовуємо yup для резолвінгу
  });

  const onSubmit = (data) => {
    console.log(data); // Дані з форми, якщо вони пройшли валідацію
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
          </LoginField>
          <LoginField>
            <LoginInput
              type="password"
              {...register("password")}
              placeholder="Password"
            />
          </LoginField>
          <LoginButton type="submit">Log In</LoginButton>
        </LoginForm>
      </LoginModalContainer>
    </LoginModalBackground>
  );
};
export default LogIn;
