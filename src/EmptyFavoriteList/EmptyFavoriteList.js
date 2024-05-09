import img from "../giphy.gif";
import { EmptyContainer } from "./EmptyFavoriteList.styled";

const EmptyFavoriteList = () => {
  return (
    <EmptyContainer>
      <p>You have no saved data yet...</p>
      <img src={img} alt="Example GIF"></img>
    </EmptyContainer>
  );
};

export default EmptyFavoriteList;
