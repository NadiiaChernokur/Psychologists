import styled from 'styled-components';
export const HeaderContainer = styled.header`
  margin: 34px auto;

  max-width: 1204px;
  align-items: center;
  display: flex;
  justify-content: space-between;

  padding: 0 24px;
  @media screen and (max-width: 768px) {
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
  margin-right: 18px;

  @media screen and (max-width: 768px) {
    justify-content: space-between;
    width: 100%;
  }
`;
export const Logo = styled.h1`
  color: #191a15;
  @media screen and (max-width: 360px) {
    font-size: 28px;
  }
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
  @media screen and (max-width: 768px) {
    color: #d9fcf3;
  }
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
  @media screen and (max-width: 360px) {
    font-size: 34px;
  }
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
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    background: #54be96;
  }
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Name = styled.p`
  margin-left: -12px;
`;

export const PeopleMenu = styled.svg`
  padding: 12px;
  background: #54be96;
  border-radius: 10px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const NameMenu = styled.p`
  margin-left: -12px;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const Namediv = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    gap: 28px;
    align-items: center;
  }
`;

export const People = styled.svg`
  padding: 12px;
  background: #54be96;
  border-radius: 10px;
`;

export const OpenModalSvg = styled.svg`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (max-width: 360px) {
    width: 50px;
    height: 50px;
  }
`;
