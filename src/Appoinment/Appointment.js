import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  AppoinmentInput,
  AppointmentForm,
  AppointmentH2,
  AppointmentImg,
  AppointmentModalBackground,
  AppointmentModalContainer,
  AppointmentPsych,
  AppointmentText,
  InputTime,
  Send,
  TextArea,
  TimeDiv,
} from './Appointment.styled';
import { Out } from '../LogIn/LogIn.styled';
import sprite from '../sprite.svg';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  number: yup.number().required(),
  time: yup.string().required(),
  comment: yup.string().required().min(10),
});

const Appointment = ({ doctor, close }) => {
  const {
    register,
    handleSubmit,
    reset,
    // eslint-disable-next-line no-empty-pattern
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [close]);

  const onSubmit = data => {
    toast(
      'Your data has been successfully received. You will definitely be contacted'
    );
    reset();
  };
  const modalClose = () => {
    close();
  };
  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      close();
    }
  };
  return (
    <AppointmentModalBackground onClick={handleBackgroundClick}>
      <ToastContainer toastStyle={{ background: '#03ad20', color: 'white' }} />
      <AppointmentModalContainer>
        <Out onClick={modalClose}>
          <svg width="32" height="32">
            <use href={`${sprite}#out`}></use>
          </svg>
        </Out>
        <AppointmentH2>Make an appointment with a psychologists</AppointmentH2>
        <AppointmentText>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </AppointmentText>
        <AppointmentPsych>
          <AppointmentImg
            src={doctor.avatar_url}
            alt={doctor.name}
          ></AppointmentImg>
          <div>
            <p>Your psychologists</p>
            <p>{doctor.name}</p>
          </div>
        </AppointmentPsych>
        <AppointmentForm onSubmit={handleSubmit(onSubmit)}>
          <AppoinmentInput
            type="name"
            {...register('name')}
            placeholder="Name"
          />
          {errors.name && (
            <span style={{ color: '#f71b2e' }}>{errors.name.message}</span>
          )}

          <TimeDiv>
            <InputTime
              type="number"
              {...register('number')}
              placeholder="+380000000000"
            />
            {/* {errors.number && (
              <span style={{ color: '#f71b2e' }}>{errors.number.message}</span>
            )} */}
            <InputTime type="time" {...register('time')} placeholder="00:00" />
            {/* {errors.time && (
              <span style={{ color: '#f71b2e' }}>{errors.time.message}</span>
            )} */}
          </TimeDiv>

          <AppoinmentInput
            type="email"
            {...register('email')}
            placeholder="Email"
          />
          {errors.email && (
            <span style={{ color: '#f71b2e' }}>{errors.email.message}</span>
          )}
          <TextArea
            type="textarea"
            {...register('comment')}
            placeholder="Comment"
          />
          {errors.comment && (
            <span style={{ color: '#f71b2e' }}>{errors.comment.message}</span>
          )}
          <Send type="submit">Send</Send>
        </AppointmentForm>
      </AppointmentModalContainer>
    </AppointmentModalBackground>
  );
};
export default Appointment;
