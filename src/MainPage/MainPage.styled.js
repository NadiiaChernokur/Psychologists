import styled from 'styled-components';
import foto from '../../src/imagemain.jpg';
import retina from '../../src/image@2x.jpg';
export const MainPageContainer = styled.main`
  background: linear-gradient(to right, #ebfcf8, rgba(84, 190, 150, 0.2));
  width: 100vw;
  height: 88vh;
  padding: 12vh 10vw;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    min-width: 672px;
    height: 100%;
    gap: 82px;
  }
  @media screen and (max-width: 480px) {
    max-width: 360px;
  }
`;
export const LeftContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    order: 2;
    gap: 44px;
    width: 100%;
    align-items: center;
  }
`;
export const RigchtContainer = styled.div`
  width: 40%;
  height: 110%;
  position: relative;
  @media screen and (max-width: 768px) {
    order: 1;
    width: 324px;
    height: 369px;
  }
  @media screen and (max-width: 480px) {
    width: 384px;
    height: 460px;
  }
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
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
export const MainButton = styled.button`
  border-radius: 30px;
  padding: 18px 50px;
  display: flex;
  gap: 18px;
  align-items: center;
  font-size: 20px;
  width: 235px;
  &:hover {
    background: #36a379;
  }
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 480px) {
    white-space: nowrap;
    font-size: 30px;
  }
`;
export const Img = styled.div`
  background-image: url(${foto});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    background-image: url(${retina});
  }
  @media screen and (max-width: 480px) {
    width: 382px;
    height: 428px;
  }
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
  @media screen and (max-width: 768px) {
    width: 8.5vw;
    height: 8.5vw;
  }
  @media screen and (max-width: 480px) {
    width: 10vw;
    height: 10vw;
  }
`;

export const Question = styled.svg`
  rotate: -66deg;
`;
export const Users = styled.svg`
  rotate: -106deg;
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
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 8.5vw;
    height: 8.5vw;
  }
  @media screen and (max-width: 480px) {
    width: 10vw;
    height: 10vw;
  }
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
  @media screen and (max-width: 768px) {
    top: 84%;
    left: -31%;
  }
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
