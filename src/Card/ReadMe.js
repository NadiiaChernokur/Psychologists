import { useState } from "react";
import {
  Letter,
  LiDiv,
  MakeAnAppointment,
  ReadMeContainer,
  ReadMeLi,
  ReadMeUl,
  Response,
  Star,
  StarDiv,
} from "./ReadMe.styled";
import Appointment from "../Appoinment/Appointment";

const ReadMeButton = ({ array, doctor }) => {
  console.log(doctor);
  const [modal, setModal] = useState(false);
  const ShowModal = () => {
    setModal(true);
  };
  return (
    <ReadMeContainer>
      {array.map((el, index) => (
        <ReadMeUl>
          <ReadMeLi key={index}>
            <LiDiv>
              <Letter></Letter>
              <div>
                <p>{el.reviewer}</p>
                <StarDiv>
                  <Star></Star>
                  <p>{el.rating}</p>
                </StarDiv>
              </div>
            </LiDiv>
            <Response>{el.comment}</Response>
          </ReadMeLi>
        </ReadMeUl>
      ))}
      <MakeAnAppointment onClick={ShowModal}>
        Make an appointment
      </MakeAnAppointment>
      {modal && <Appointment doctor={doctor} />}
    </ReadMeContainer>
  );
};
export default ReadMeButton;
