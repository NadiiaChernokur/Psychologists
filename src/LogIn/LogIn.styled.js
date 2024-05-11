import styled from 'styled-components';

export const LoginModalBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
`;

export const LoginModalContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-radius: 30px;
  background: #fbfbfb;
  margin: 10% auto;
  box-sizing: border-box;
  width: 565px;
  height: 509px;
  padding: 64px;
  position: relative;
`;
export const LoginH = styled.h3`
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #191a15;
  margin-bottom: 20px;
`;
export const LoginParagraf = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 40px;
  width: 90%;
`;
export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const LoginField = styled.div`
  display: flex;
  flex-direction: column;
`;
export const LoginInput = styled.input`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
`;
export const LoginInputPass = styled.input`
  border: 1px solid rgba(25, 26, 21, 0.1);
  border-radius: 12px;
  padding: 16px 18px;
  width: 398px;
`;
export const LoginFieldPassword = styled.div`
  position: relative;
  width: 414px;
`;
export const LoginButton = styled.button`
  border-radius: 30px;
  padding: 16px 196px;
  margin-top: 20px;
`;
export const Out = styled.button`
  position: absolute;
  right: 29px;
  top: 26px;
  background: none;
  padding: 0;
`;
