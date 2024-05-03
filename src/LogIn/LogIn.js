import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
    <div>
      <div>
        <h3>Log In</h3>
        <p></p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input {...register("email")} />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div>
            <label>Password</label>
            <input type="password" {...register("password")} />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};
export default LogIn;
