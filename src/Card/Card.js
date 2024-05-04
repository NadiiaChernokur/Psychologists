import {
  CardImg,
  CardInformation,
  List,
  Rating,
  RatingDiv,
  RatingP,
  UlList,
} from "./Card.styled";

const Card = () => {
  return (
    <UlList>
      <List>
        <CardImg src="" alt=""></CardImg>
        <CardInformation>
          <Rating>
            <p>Psychologist</p>
            <RatingDiv>
              <svg width="22" height="22"></svg>
              <RatingP>Rating: 4.8</RatingP>
              <p>Price / 1 hour: 160$</p>
              <svg width="22" height="22"></svg>
            </RatingDiv>
          </Rating>
          <p>Dr. Lisa Anderson</p>
          <div>
            <p>Experience:</p>
            <p>License: Licensed Psychologist (License #54321)</p>
            <p>Specialization: Relationship Counseling</p>
            <p>Initial_consultation: Free 60-minute initial consultation</p>
          </div>
          <p>
            Dr. Mark Thompson is a highly experienced and licensed psychologist
            specializing in Relationship Counseling. With 20 years of practice,
            he has helped individuals navigate and improve their relationships,
            leading to better well-being and personal growth. Dr. Thompson is
            known for his expertise and ability to provide invaluable insights
            to his clients. His approach to therapy is tailored to each
            individual's unique needs, ensuring a supportive and effective
            counseling experience.
          </p>
          <button>Read more</button>
        </CardInformation>
      </List>
    </UlList>
  );
};
export default Card;
