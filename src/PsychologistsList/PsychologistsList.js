import { useEffect, useState } from "react";
import Card from "../Card/Card";
import {
  Container,
  PsychologistsListButton,
  PsychologistsListSelect,
} from "./PsychologistsList.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  getPsychologist,
  getPsychologistSort,
  updateArray,
} from "../redux/operetion";

const PsychologistsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(3);
  const [sortPsych, setSortPsych] = useState(false);
  const psychArray = useSelector((state) => state.psychologists);
  const psychSortArray = useSelector((state) => state.psychologistsSort);

  console.log(psychSortArray);

  useEffect(() => {
    console.log("88888888");
    if (!sortPsych) {
      console.log("777777777777");
      dispatch(updateArray());
    }

    dispatch(getPsychologist(page));
  }, [dispatch, page]);

  const addPage = () => {
    setPage((prev) => prev + 3);
  };
  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSortPsych(true);
    dispatch(getPsychologistSort(selectedValue));
  };
  return (
    <Container>
      <PsychologistsListSelect onChange={handleOptionChange}>
        <option>Show all</option>
        <option>A to Z</option>
        <option>Z to A</option>
        <option>Less than 10$</option>
        <option>Greater than 10$</option>
        <option>Popular</option>
        <option>Not popular</option>
      </PsychologistsListSelect>
      {<Card array={sortPsych ? psychSortArray : psychArray} />}
      <PsychologistsListButton onClick={addPage}>
        Load more
      </PsychologistsListButton>
    </Container>
  );
};
export default PsychologistsList;
