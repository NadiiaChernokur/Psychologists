import styled from 'styled-components';

export const AppointmentModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

export const AppointmentModalContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 30px;
  background: #fbfbfb;
  margin: 10% auto;
  box-sizing: border-box;
  border-radius: 30px;
  width: 599px;
  padding: 64px;
  position: relative;
`;

export const AppointmentH2 = styled.h2`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #191a15;
  margin-bottom: 20px;
`;
export const AppointmentText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 40px;
`;
export const AppointmentPsych = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;
export const AppointmentImg = styled.img`
  border-radius: 15px;
  width: 44px;
  height: 44px;
`;
export const AppointmentForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
`;
export const TimeDiv = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;
export const AppoinmentInput = styled.input`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  padding: 16px 0;
  padding-left: 18px;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: #191a15;
  }
`;
export const InputTime = styled.input`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  width: 232px;
  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: #191a15;
  }
`;
export const Send = styled.button`
  border-radius: 30px;
  padding: 16px 217px;
  margin-top: 24px;
  /* &:hover {
    background: none;
  } */
`;
export const TextArea = styled.textarea`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  padding: 16px 18px;

  &::placeholder {
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    color: #191a15;
  }
`;
