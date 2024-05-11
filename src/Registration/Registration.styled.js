import styled from 'styled-components';

export const RegistrationModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

export const RegistrationModalContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 30px;
  background: #fbfbfb;
  margin: 10% auto;
  box-sizing: border-box;
  width: 565px;
  height: 579px;
  padding: 64px;
  position: relative;
`;
export const RegistrationLoginH = styled.h3`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #191a15;
  margin-bottom: 20px;
`;
export const RegistrationParagraf = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 40px;
  width: 90%;
`;
export const RegistrationForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RegistrationInput = styled.input`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  width: 100%;
`;
export const RegistrationButton = styled.button`
  border-radius: 30px;
  padding: 16px 189px;
  margin-top: 20px;
`;

export const PasswordDiv = styled.div`
  position: relative;
`;

export const PasswordSvg = styled.svg`
  position: absolute;
  top: 16px;
  right: 0;
`;
