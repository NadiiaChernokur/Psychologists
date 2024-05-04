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

const ReadMeButton = () => {
  const [modal, setModal] = useState(false);
  const ShowModal = () => {
    setModal(true);
  };
  return (
    <ReadMeContainer>
      <ReadMeUl>
        <ReadMeLi>
          <LiDiv>
            <Letter></Letter>
            <div>
              <p>Michael Brown</p>
              <StarDiv>
                <Star></Star>

                <p>4.5</p>
              </StarDiv>
            </div>
          </LiDiv>
          <Response>
            Dr. Davis has been a great help in managing my depression. Her
            insights have been valuable.
          </Response>
        </ReadMeLi>
        <ReadMeLi>
          <LiDiv>
            <Letter></Letter>
            <div>
              <p>Michael Brown</p>
              <StarDiv>
                <Star></Star>
                <p>4.5</p>
              </StarDiv>
            </div>
          </LiDiv>
          <Response>
            Dr. Davis has been a great help in managing my depression. Her
            insights have been valuable.
          </Response>
        </ReadMeLi>
      </ReadMeUl>
      <MakeAnAppointment onClick={ShowModal}>
        Make an appointment
      </MakeAnAppointment>
      {modal && <Appointment />}
    </ReadMeContainer>
  );
};
export default ReadMeButton;
