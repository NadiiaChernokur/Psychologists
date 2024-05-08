import styled from "styled-components";
export const HeaderContainer = styled.header`
  background-color: bisque;
  width: 100vw;
  height: 10vh;
  padding: 4vh 10vw;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  justify-content: space-between;
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
`;
export const Buttons = styled.div`
  display: flex;
  gap: 1vw;
  box-sizing: border-box;
`;
export const Button = styled.button`
  border-radius: 30px;
  padding: 1.3vh 2vw;
`;
export const OutletDiv = styled.div`
  background: rgba(84, 190, 150, 0.2);
`;
