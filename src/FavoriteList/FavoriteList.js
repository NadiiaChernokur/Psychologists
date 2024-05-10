import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavoriteItem } from "../redux/operetion";
import sprite from "../sprite.svg";
import ReadMeButton from "../Card/ReadMe";
import {
  UlList,
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
} from "../Card/Card.styled";
import { FavContainer } from "./FavoriteList.styled";
import EmptyFavoriteList from "../EmptyFavoriteList/EmptyFavoriteList";

const FavoriteList = () => {
  const [array, setArray] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [clicks, setClicks] = useState({});
  const favArray = useSelector((state) => state.favoriteArray);
  const dispatch = useDispatch();

  useEffect(() => {
    setArray(favArray);
  }, [favArray]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("favoritesPsych")) || [];
    setFavorites(local);
    return;
  }, []);

  const removeToFavirite = (name) => {
    dispatch(removeFavoriteItem(name));
    const updatedFavorites = favorites.filter((item) => item !== name);
    setFavorites(updatedFavorites);
    localStorage.setItem("favoritesPsych", JSON.stringify(updatedFavorites));
  };

  const handleClick = (index) => {
    setClicks((prevClicks) => ({
      ...prevClicks,
      [index]: !prevClicks[index],
    }));
  };
  return (
    <FavContainer>
      {favorites.length > 0 ? (
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
                      Price / 1 hour:
                      <PriceSpan> {el.price_per_hour}$</PriceSpan>
                    </Price>
                    <FavButton onClick={() => removeToFavirite(el.name)}>
                      <svg width="22" height="22">
                        <use href={`${sprite}#hart`}></use>
                      </svg>
                    </FavButton>
                  </RatingDiv>
                </Rating>
                <Name>{el.name}</Name>
                <ExperienceDiv>
                  <ExperienceContainer>
                    <Experience>
                      Experience:{" "}
                      <ExperienceSpan>{el.experience}</ExperienceSpan>
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
                      <ExperienceSpan>
                        {" "}
                        {el.initial_consultation}
                      </ExperienceSpan>
                    </Experience>
                  </ExperienceContainer>
                </ExperienceDiv>
                <About>{el.about}</About>
                {!clicks[index] && (
                  <ReadMe onClick={() => handleClick(index)}>Read more</ReadMe>
                )}

                {clicks[index] && (
                  <ReadMeButton array={el.reviews} doctor={el} />
                )}
              </CardInformation>
            </List>
          ))}
        </UlList>
      ) : (
        <EmptyFavoriteList />
      )}
    </FavContainer>
  );
};

export default FavoriteList;
