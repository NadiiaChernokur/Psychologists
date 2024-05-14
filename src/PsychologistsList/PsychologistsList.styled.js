import styled from 'styled-components';
export const Container = styled.div`
  margin: auto;
  max-width: 1204px;
  padding: 64px 20px;
  height: 110%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    padding: 32px 20px;
    min-width: 636px;
  }
`;

export const PsychologistsListSelect = styled.select`
  width: 226px;
  border-radius: 14px;
  padding: 16px 18px;
  background: #54be96;
  font-weight: 500;
  font-size: 16px;
  line-height: 125%;
  color: #fbfbfb;
  margin-bottom: 32px;
  &:hover {
    background: #36a379;
  }

  @media screen and (max-width: 480px) {
    width: 310px;
    font-size: 30px;
  }
`;
export const PsychologistsListButton = styled.button`
  border-radius: 30px;
  padding: 14px 48px;
  /* width: 176px; */
  margin: 64px auto;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;
export const Filter = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #8a8a89;
  margin-bottom: 8px;
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
