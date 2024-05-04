import { useState } from "react";
import {
  About,
  CardImg,
  CardInformation,
  Experience,
  ExperienceContainer,
  ExperienceDiv,
  ExperienceSpan,
  List,
  Name,
  Price,
  PriceSpan,
  PsychP,
  Rating,
  RatingDiv,
  RatingP,
  ReadMe,
  UlList,
} from "./Card.styled";
import ReadMeButton from "./ReadMe";

const Card = () => {
  const [click, setClick] = useState(false);
  const HandleClick = () => {
    setClick(true);
  };
  return (
    <UlList>
      <List>
        <CardImg src="" alt=""></CardImg>
        <CardInformation>
          <Rating>
            <PsychP>Psychologist</PsychP>
            <RatingDiv>
              <svg width="22" height="22"></svg>
              <RatingP>Rating: 4.8</RatingP>
              <Price>
                Price / 1 hour:<PriceSpan>160$</PriceSpan>{" "}
              </Price>
              <svg width="22" height="22"></svg>
            </RatingDiv>
          </Rating>
          <Name>Dr. Lisa Anderson</Name>
          <ExperienceDiv>
            <ExperienceContainer>
              <Experience>
                Experience: <ExperienceSpan>20 years</ExperienceSpan>
              </Experience>
              <Experience>
                License:
                <ExperienceSpan>
                  Licensed Psychologist (License #54321)
                </ExperienceSpan>
              </Experience>
            </ExperienceContainer>
            <ExperienceContainer>
              <Experience>
                Specialization:
                <ExperienceSpan> Relationship Counseling </ExperienceSpan>
              </Experience>
              <Experience>
                Initial_consultation:
                <ExperienceSpan>
                  Free 60-minute initial consultation
                </ExperienceSpan>
              </Experience>
            </ExperienceContainer>
          </ExperienceDiv>
          <About>
            Dr. Mark Thompson is a highly experienced and licensed psychologist
            specializing in Relationship Counseling. With 20 years of practice,
            he has helped individuals navigate and improve their relationships,
            leading to better well-being and personal growth. Dr. Thompson is
            known for his expertise and ability to provide invaluable insights
            to his clients. His approach to therapy is tailored to each
            individual's unique needs, ensuring a supportive and effective
            counseling experience.
          </About>
          {!click && <ReadMe onClick={HandleClick}>Read more</ReadMe>}

          {click && <ReadMeButton />}
        </CardInformation>
      </List>
    </UlList>
  );
};
export default Card;
