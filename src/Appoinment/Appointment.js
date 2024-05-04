import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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
  TimeDiv,
} from "./Appointment.styled";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Appointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Використовуємо yupResolver
  });

  const onSubmit = (data) => {
    console.log(data); // Дані з форми, якщо вони пройшли валідацію
  };
  return (
    <AppointmentModalBackground>
      <AppointmentModalContainer>
        <AppointmentH2>Make an appointment with a psychologists</AppointmentH2>
        <AppointmentText>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </AppointmentText>
        <AppointmentPsych>
          <AppointmentImg src="" alt="опис_зображення"></AppointmentImg>
          <div>
            <p>Your psychologists</p>
            <p>Dr. Sarah Davis</p>
          </div>
        </AppointmentPsych>
        <AppointmentForm onSubmit={handleSubmit(onSubmit)}>
          <AppoinmentInput
            type="name"
            {...register("name")}
            placeholder="Name"
          />

          <TimeDiv>
            <InputTime
              type="number"
              {...register("number")}
              placeholder="+380000000000"
            />

            <InputTime type="time" {...register("time")} placeholder="00:00" />
          </TimeDiv>

          <AppoinmentInput
            type="email"
            {...register("email")}
            placeholder="Email"
          />

          <AppoinmentInput
            type="textarea"
            {...register("comment")}
            placeholder="Comment"
          />

          <Send type="submit">Send</Send>
        </AppointmentForm>
      </AppointmentModalContainer>
    </AppointmentModalBackground>
  );
};
export default Appointment;
