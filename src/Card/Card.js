import { useEffect, useState } from "react";
import {
  About,
  CardImg,
  CardInformation,
  Experience,
  ExperienceContainer,
  ExperienceDiv,
  ExperienceSpan,
  FavButton,
  List,
  Name,
  Online,
  OnlineD,
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
import sprite from "../sprite.svg";
import { useDispatch } from "react-redux";
import {
  addFavorite,
  getPsychologist,
  getPsychologists,
  removeFavoriteItem,
} from "../redux/operetion";

const Card = ({ array }) => {
  console.log(array.length);
  const dispatch = useDispatch();
  const [clicks, setClicks] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoritesPsych")) || [];

    setFavorites(storedFavorites);
  }, []);

  const handleClick = (index) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [index]: !prevClicks[index],
    }));
  };
  const addToFavorite = (name) => {
    console.log(name);
    const updatedFavorites = [...favorites];
    const index = updatedFavorites.indexOf(name);
    console.log(index);
    if (index !== -1) {
      updatedFavorites.splice(index, 1);
      dispatch(removeFavoriteItem(name));
    } else {
      updatedFavorites.push(name);
      dispatch(addFavorite(name));
    }
    setFavorites(updatedFavorites);
    localStorage.setItem("favoritesPsych", JSON.stringify(updatedFavorites));
  };
  const isFavorite = (PName) => {
    console.log(favorites);
    console.log(PName);
    return favorites.includes(PName);
  };
  return (
    <UlList>
      {array.map((el, index) => (
        <List key={el.name}>
          <OnlineD>
            <Online width="14" height="14">
              <use href={`${sprite}#Group`}></use>
            </Online>
            <CardImg src={el.avatar_url} alt={el.name}></CardImg>
          </OnlineD>
          <CardInformation>
            <Rating>
              <PsychP>Psychologist</PsychP>
              <RatingDiv>
                <svg width="22" height="22">
                  <use href={`${sprite}#star`}></use>
                </svg>
                <RatingP>Rating: {el.rating}</RatingP>
                <Price>
                  Price / 1 hour:<PriceSpan> {el.price_per_hour}$</PriceSpan>
                </Price>
                <FavButton onClick={() => addToFavorite(el.name)}>
                  {isFavorite(el.name) ? (
                    <svg width="22" height="22">
                      <use href={`${sprite}#hart`}></use>
                    </svg>
                  ) : (
                    <svg width="22" height="22">
                      <use href={`${sprite}#hartoff`}></use>
                    </svg>
                  )}
                </FavButton>
              </RatingDiv>
            </Rating>
            <Name>{el.name}</Name>
            <ExperienceDiv>
              <ExperienceContainer>
                <Experience>
                  Experience: <ExperienceSpan>{el.experience}</ExperienceSpan>
                </Experience>
                <Experience>
                  License:
                  <ExperienceSpan> {el.license}</ExperienceSpan>
                </Experience>
              </ExperienceContainer>
              <ExperienceContainer>
                <Experience>
                  Specialization:
                  <ExperienceSpan> {el.specialization}</ExperienceSpan>
                </Experience>
                <Experience>
                  Initial_consultation:
                  <ExperienceSpan> {el.initial_consultation}</ExperienceSpan>
                </Experience>
              </ExperienceContainer>
            </ExperienceDiv>
            <About>{el.about}</About>
            {!clicks[index] && (
              <ReadMe onClick={() => handleClick(index)}>Read more</ReadMe>
            )}

            {clicks[index] && <ReadMeButton array={el.reviews} doctor={el} />}
          </CardInformation>
        </List>
      ))}
    </UlList>
  );
};
export default Card;
