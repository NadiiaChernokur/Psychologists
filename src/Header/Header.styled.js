import styled from "styled-components";
export const HeaderContainer = styled.header`
  /* background: rgba(84, 190, 150, 0.2); */
  margin: 34px auto;
  /* box-sizing: border-box; */
  max-width: 1204px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  /* border-bottom: 1px solid rgba(25, 26, 21, 0.1); */
  padding: 0 24px;
  @media screen and (max-width: 768px) {
    /* max-width: 580px; */
    min-width: 614px;
    margin-bottom: 0;
    border-bottom: 1px solid rgba(25, 26, 21, 0.1);
    padding-bottom: 36px;
  }
`;
export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 6vw;

  /* justify-content: space-between;
  width: 536px; */
  @media screen and (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const PagesParagraf = styled.p`
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ButtonsParagraf = styled.p`
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;
  padding: 14px 39px;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  color: #191a15;
`;
export const ButtonsParagrafReg = styled.p`
  border: 1px solid rgba(25, 26, 21, 0.2);
  border-radius: 30px;
  padding: 14px 39px;
  background: #54be96;
  color: #fbfbfb;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
`;
export const Button = styled.button`
  border-radius: 30px;
  padding: 1.3vh 2vw;
`;
export const OutletDiv = styled.div`
  /* border-top: 1px solid rgba(25, 26, 21, 0.1); */
  /* display: flex;
  flex-direction: column; */
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
