import { useNavigate } from 'react-router-dom';
import {
  Amount,
  Blue,
  Chek,
  Experienced,
  ExperiencedNamber,
  ExperiencedPsych,
  Img,
  LeftContainer,
  MainButton,
  MainPageContainer,
  Orange,
  Question,
  RigchtContainer,
  Text,
  Text2,
  TextSpan,
  Users,
} from './MainPage.styled';
import sprite from '../sprite.svg';
// import { useSelector } from "react-redux";

const MainPage = () => {
  const navigate = useNavigate();
  // const user = useSelector((state) => state.user);
  const toShowPsychologists = () => {
    navigate('/psychologists');
  };
  return (
    <MainPageContainer>
      <LeftContainer>
        <Text>
          The road to the <TextSpan>depths</TextSpan> of the human soul
        </Text>
        <Text2>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </Text2>
        <MainButton onClick={toShowPsychologists}>
          <p> Get started</p>
          <svg width="16" height="16">
            <use href={`${sprite}#Arrow`}></use>
          </svg>
        </MainButton>
      </LeftContainer>
      <RigchtContainer>
        <Img></Img>
        <Blue>
          <Question width="10" height="17">
            <use href={`${sprite}#question`}></use>
          </Question>
        </Blue>
        <Orange>
          <Users width="25" height="25">
            <use href={`${sprite}#mdi_users`}></use>
          </Users>
        </Orange>
        <Amount>
          <Chek>
            <svg width="30" height="30">
              <use href={`${sprite}#fe_check`}></use>
            </svg>
          </Chek>
          <Experienced>
            <ExperiencedPsych>Experienced psychologists</ExperiencedPsych>
            <ExperiencedNamber>15,000</ExperiencedNamber>
          </Experienced>
        </Amount>
      </RigchtContainer>
    </MainPageContainer>
  );
};
export default MainPage;
