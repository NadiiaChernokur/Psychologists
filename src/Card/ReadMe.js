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
import sprite from "../sprite.svg";

const ReadMeButton = ({ array, doctor }) => {
  const [modal, setModal] = useState(false);
  const ShowModal = () => {
    setModal(true);
  };
  const CloseModal = () => {
    setModal(false);
  };
  return (
    <ReadMeContainer>
      {array.map((el, index) => (
        <ReadMeUl>
          <ReadMeLi key={index}>
            <LiDiv>
              <Letter>
                <p>{el.reviewer.charAt(0)}</p>
              </Letter>
              <div>
                <p>{el.reviewer}</p>
                <StarDiv>
                  <Star>
                    <svg width="16" height="16">
                      <use href={`${sprite}#star`}></use>
                    </svg>
                  </Star>
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
      {modal && <Appointment doctor={doctor} close={CloseModal} />}
    </ReadMeContainer>
  );
};
export default ReadMeButton;
