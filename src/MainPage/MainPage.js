import {
  Amount,
  Blue,
  Chek,
  Experienced,
  Img,
  LeftContainer,
  MainButton,
  MainPageContainer,
  Orange,
  RigchtContainer,
  Text,
  Text2,
  TextSpan,
} from "./MainPage.styled";

const MainPage = () => {
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
        <MainButton>Get started</MainButton>
      </LeftContainer>
      <RigchtContainer>
        <Img></Img>
        <Blue></Blue>
        <Orange></Orange>
        <Amount>
          <Chek></Chek>
          <Experienced>
            <p>Experienced psychologists</p>
            <p>15,000</p>
          </Experienced>
        </Amount>
      </RigchtContainer>
    </MainPageContainer>
  );
};
export default MainPage;
