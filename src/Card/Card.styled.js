import styled from "styled-components";
export const List = styled.li`
  max-width: 1184px;
  /* min-height: 358px; */
  padding: 24px;
  background-color: #fbfbfb;
  border-radius: 24px;
  box-sizing: border-box;
  margin: auto;
  display: flex;
  gap: 24px;
`;
export const UlList = styled.ul`
  /* background-color: rgba(84, 190, 150, 0.2); */
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const CardImg = styled.img`
  border: 2px solid rgba(84, 190, 150, 0.2);
  border-radius: 30px;
  width: 120px;
  height: 120px;
  padding: 12px;
  box-sizing: border-box;
`;
export const CardInformation = styled.div`
  width: 86%;
  box-sizing: border-box;
`;
export const Rating = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const RatingDiv = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #191a15;
`;
export const RatingP = styled.p`
  border-right: 2px solid rgba(84, 190, 150, 0.2);
  padding-right: 16px;
  margin-right: 16px;
`;
export const PriceSpan = styled.span`
  color: #38cd3e;
`;
export const Price = styled.p`
  margin-right: 28px;
`;
export const Psych = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`;
export const PsychP = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`;
export const Name = styled.p`
  font-weight: 500;
  font-size: 24px;
  line-height: 100%;
  color: #191a15;
  margin-bottom: 24px;
`;
export const ExperienceDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 24px;
`;
export const ExperienceContainer = styled.div`
  display: flex;
  gap: 4px;
`;
export const Experience = styled.p`
  background: #f3f3f3;
  border-radius: 24px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #8a8a89;
`;
export const ExperienceSpan = styled.span`
  color: #191a15;
`;

export const About = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 125%;
  color: rgba(25, 26, 21, 0.5);
  margin-bottom: 14px;
`;
export const ReadMe = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #191a15;
  background-color: none;
  padding: 0;
  border: none;
  border-radius: 0;
  border-bottom: 1.5px solid #191a15;
  background: none;
`;
export const Online = styled.svg`
  position: absolute;
  right: 14px;
  top: 12px;
`;
export const OnlineD = styled.div`
  position: relative;
`;
