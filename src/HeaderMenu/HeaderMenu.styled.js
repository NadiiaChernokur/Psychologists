import styled from "styled-components";

export const HeaderMenuBackground = styled.div`
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  overflow: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const HeaderMenuContainer = styled.div`
  border: 1px solid rgba(239, 237, 232, 0.2);
  border-bottom-left-radius: 30px;
  background: #02382a;
  box-sizing: border-box;
  width: 260px;
  height: 332px;
  padding: 64px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const MenuPages = styled.div`
  width: 50px;
`;

export const MenuButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
  /* color: #191a15; */

  gap: 8px;
`;
export const MenuNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;
export const MenuP = styled.p`
  color: #d9fcf3;
`;
export const MenuPeg = styled.p`
  border: 1px solid #d9fcf3;
  border-radius: 30px;
  padding: 14px 39px;
  /* background: #54be96; */
  color: #d9fcf3;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  letter-spacing: -0.01em;
`;
