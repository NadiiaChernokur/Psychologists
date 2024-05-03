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

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Registration = () => {
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
          </div>
          <div>
            <RegistrationInput {...register("email")} placeholder="Email" />
          </div>
          <div>
            <RegistrationInput
              type="password"
              {...register("password")}
              placeholder="Password"
            />
          </div>
          <RegistrationButton type="submit">Sign Up</RegistrationButton>
        </RegistrationForm>
      </RegistrationModalContainer>
    </RegistrationModalBackground>
  );
};
export default Registration;
