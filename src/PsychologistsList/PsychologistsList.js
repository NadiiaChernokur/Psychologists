import { useEffect } from "react";
import Card from "../Card/Card";
import {
  Container,
  PsychologistsListButton,
  PsychologistsListSelect,
} from "./PsychologistsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getPsychologist } from "../redux/operetion";

const PsychologistsList = () => {
  const dispatch = useDispatch();
  const psychArray = useSelector((state) => state.psychologists);
  console.log(psychArray);
  const page = 3;
  useEffect(() => {
    console.log("88888888");
    // if (psychArray.length > 0) {
    //   return;
    // }

    dispatch(getPsychologist(page));
  }, [dispatch]);
  return (
    <Container>
      <PsychologistsListSelect>
        <option>A to Z</option>
        <option>Z to A</option>
        <option>Less than 10$</option>
        <option>Greater than 10$</option>
        <option>Popular</option>
        <option>Not popular</option>
        <option>Show all</option>
      </PsychologistsListSelect>
      {/* {<Card array={psychArray} />} */}
      <PsychologistsListButton>Load more</PsychologistsListButton>
    </Container>
  );
};
export default PsychologistsList;