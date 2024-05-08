import styled from "styled-components";
import foto from "../../src/imagemain.jpg";
export const MainPageContainer = styled.main`
  background: linear-gradient(to right, #ebfcf8, rgba(84, 190, 150, 0.2));
  width: 100vw;
  height: 88vh;
  padding: 12vh 10vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LeftContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const RigchtContainer = styled.div`
  width: 40%;
  height: 110%;
  position: relative;
`;
export const Text = styled.h2`
  font-size: clamp(30px, 5vw, 80px);
  line-height: 102%;
  letter-spacing: -0.02em;
  color: #191a15;
`;
export const TextSpan = styled.span`
  font-style: italic;
  color: #54be96;
`;
export const Text2 = styled.p`
  font-size: clamp(8px, 5vw, 18px);
  line-height: 133%;
  letter-spacing: -0.02em;
  color: #191a15;
  width: 80%;
`;
export const MainButton = styled.button`
  border-radius: 30px;
  width: 235px;
  padding: 18px 50px;
  display: flex;
  gap: 18px;
`;
export const Img = styled.div`
  background-image: url(${foto});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Blue = styled.div`
  background-color: #4535af;
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 5px;
  position: absolute;
  top: 38%;
  left: -6%;
  rotate: 62deg;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Question = styled.svg`
  rotate: -66deg;
`;
export const Orange = styled.div`
  background-color: #fbc75e;
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 5px;
  position: absolute;
  top: 15%;
  right: -6%;
  rotate: 108deg;
`;
export const Amount = styled.div`
  background-color: #54be96;
  box-sizing: border-box;
  width: 311px;
  height: 118px;
  padding: 32px;
  top: 70%;
  left: -18%;
  border-radius: 10px;
  position: absolute;
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 16px;
`;
export const Chek = styled.div`
  background-color: #fbfbfb;
  width: 54px;
  height: 54px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Experienced = styled.div`
  white-space: nowrap;
  font-size: clamp(10px, 5vw, 14px);
`;
export const ExperiencedPsych = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: rgba(251, 251, 251, 0.5);
`;
export const ExperiencedNamber = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: #fbfbfb;
`;
