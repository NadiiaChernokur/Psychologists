import styled from "styled-components";
export const HeaderContainer = styled.header`
  background: rgba(84, 190, 150, 0.2);
  padding: 34px 128px;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(25, 26, 21, 0.1);
`;
export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12vw;
  box-sizing: border-box;
`;
export const Logo = styled.h1`
  color: #191a15;
`;
export const LogoSpan = styled.span`
  color: #54be96;
`;
export const HeaderParagraf = styled.p`
  margin: 0;
  letter-spacing: -0.01em;
  color: #191a15;
  font-weight: 400;
`;
export const Pages = styled.div`
  display: flex;
  gap: 4vw;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #191a15;
`;
export const Buttons = styled.div`
  display: flex;
  gap: 1vw;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #191a15;
`;
export const Button = styled.button`
  border-radius: 30px;
  padding: 1.3vh 2vw;
`;
export const OutletDiv = styled.div`
  background: rgba(84, 190, 150, 0.2);
`;

export const LogoutButton = styled.button`
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;
  padding: 14px 39px;
  background: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #191a15;
`;

export const LogoutDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #191a15;
`;
export const Name = styled.p`
  margin-left: -12px;
`;

export const People = styled.svg`
  padding: 12px;
  background: #54be96;
  border-radius: 10px;
`;
