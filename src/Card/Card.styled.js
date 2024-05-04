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
  background-color: #b2d4c9;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
export const CardImg = styled.img`
  border: 2px solid rgba(84, 190, 150, 0.2);
  border-radius: 30px;
  width: 120px;
  height: 120px;
  box-sizing: border-box;
`;
export const CardInformation = styled.div`
  max-width: 992px;
  box-sizing: border-box;
`;
export const Rating = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const RatingDiv = styled.div`
  display: flex;
`;
export const RatingP = styled.p`
  border-right: 2px solid rgba(84, 190, 150, 0.2);
  padding-right: 16px;
`;
