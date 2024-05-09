import styled from "styled-components";

export const ReadMeContainer = styled.div`
  margin-top: 48px;
  @media screen and (max-width: 768px) {
    top: 48px;
    position: relative;
    left: -138px;
  }
`;
export const ReadMeUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 40px;
`;
export const ReadMeLi = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Letter = styled.div`
  border-radius: 100px;
  width: 44px;
  height: 44px;
  background: rgba(84, 190, 150, 0.2);
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  color: #54be96;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Star = styled.svg`
  width: 16px;
  height: 16px;
`;
export const StarDiv = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
export const LiDiv = styled.div`
  display: flex;
  gap: 12px;
`;
export const Response = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(25, 26, 21, 0.5);
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export const MakeAnAppointment = styled.button`
  border-radius: 30px;
  padding: 14px 32px;
  width: 227px;
  height: 48px;
  @media screen and (max-width: 768px) {
    margin-bottom: 58px;
  }
`;
