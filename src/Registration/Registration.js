import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  PasswordDiv,
  PasswordSvg,
  RegistrationButton,
  RegistrationForm,
  RegistrationInput,
  RegistrationLoginH,
  RegistrationModalBackground,
  RegistrationModalContainer,
  RegistrationParagraf,
} from './Registration.styled';
import { createUser } from '../redux/operetion';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Out } from '../LogIn/LogIn.styled';
import sprite from '../sprite.svg';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

const Registration = () => {
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
    const resultAction = await dispatch(createUser(data));

    localStorage.setItem('emailPsych', JSON.stringify(data.email));
    if (resultAction.payload === 'This address already exists. Log in') {
      toast('This address already exists. Log in');
      return;
    } else {
      navigate('/login');
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
    <RegistrationModalBackground onClick={handleBackgroundClick}>
      <ToastContainer toastStyle={{ background: '#fc0317', color: 'white' }} />
      <RegistrationModalContainer>
        <Out onClick={modalClose}>
          <svg width="32" height="32">
            <use href={`${sprite}#out`}></use>
          </svg>
        </Out>
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
              {...register('name')}
              placeholder="Name"
            />
            {errors.name && (
              <span style={{ color: '#f71b2e' }}>{errors.name.message}</span>
            )}
          </div>
          <div>
            <RegistrationInput
              type="email"
              {...register('email')}
              placeholder="Email"
            />
            {errors.email && (
              <span style={{ color: '#f71b2e' }}>{errors.email.message}</span>
            )}
          </div>
          <PasswordDiv>
            <RegistrationInput
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
          </PasswordDiv>
          <RegistrationButton type="submit">Sign Up</RegistrationButton>
        </RegistrationForm>
      </RegistrationModalContainer>
    </RegistrationModalBackground>
  );
};
export default Registration;
