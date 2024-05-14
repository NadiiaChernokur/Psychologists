import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  LoginButton,
  LoginField,
  LoginFieldPassword,
  LoginForm,
  LoginH,
  LoginInput,
  LoginInputPass,
  LoginModalBackground,
  LoginModalContainer,
  LoginParagraf,
  Out,
} from './LogIn.styled';
import { useDispatch } from 'react-redux';
import { login } from '../redux/operetion';
import sprite from '../sprite.svg';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PasswordSvg } from 'Registration/Registration.styled';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.key === 'Escape') {
        navigate('/');
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async data => {
   
    const loginVal = await dispatch(login(data));

    if (loginVal.error?.message === 'Rejected') {
      toast(loginVal.payload);
    } else {
      navigate('/psychologists');
    }
  };

  const modalClose = () => {
    navigate('/');
  };

  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      navigate('/');
    }
  };
  const handleChange = e => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <LoginModalBackground onClick={handleBackgroundClick}>
      <ToastContainer toastStyle={{ background: '#fc0317', color: 'white' }} />
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
            <LoginInput {...register('email')} placeholder="Email" />
            {errors.email && (
              <span style={{ color: '#f71b2e' }}>{errors.email.message}</span>
            )}
          </LoginField>
          <LoginFieldPassword>
            <LoginInputPass
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            {errors.password && (
              <span style={{ color: '#f71b2e' }}>
                {errors.password.message}
              </span>
            )}
            {showPassword ? (
              <PasswordSvg width="20" height="20" onClick={toggleShowPassword}>
                <use href={`${sprite}#eye`}></use>
              </PasswordSvg>
            ) : (
              <PasswordSvg width="20" height="20" onClick={toggleShowPassword}>
                <use href={`${sprite}#eye-off`}></use>
              </PasswordSvg>
            )}
          </LoginFieldPassword>
          <LoginButton type="submit">Log In</LoginButton>
        </LoginForm>
      </LoginModalContainer>
    </LoginModalBackground>
  );
};
export default LogIn;
