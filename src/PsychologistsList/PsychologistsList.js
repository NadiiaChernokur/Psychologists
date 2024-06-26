import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import {
  Container,
  Filter,
  PsychologistsListButton,
  PsychologistsListSelect,
} from './PsychologistsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPsychologist,
  getPsychologistSort,
  updateArray,
} from '../redux/operetion';

const PsychologistsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(3);
  const [lastPage, setLastPage] = useState(false);
  const [sortPsych, setSortPsych] = useState(false);
  const [sortArrayPsych, setSortArrayPsych] = useState([]);
  const psychArray = useSelector(state => state.psychologists);
  const psychSortArray = useSelector(state => state.psychologistsSort);

  useEffect(() => {
    if (psychSortArray.length > 0) {
      const firstThreeElements = psychSortArray.slice(0, page);

      setSortArrayPsych(firstThreeElements);
    }
  }, [page, psychSortArray]);

  useEffect(() => {
    if (sortPsych) {
      return;
    }
    if (!sortPsych) {
      dispatch(updateArray());
    }

    dispatch(getPsychologist(page));
  }, [dispatch, page, sortPsych]);

  const addPage = () => {
    if (psychArray.length === 32 || sortArrayPsych.length === 32) {
      setLastPage(true);
      return;
    }

    setPage(prev => prev + 3);
  };
  const handleOptionChange = event => {
    const selectedValue = event.target.value;
    setLastPage(false);
    setPage(3);
    setSortPsych(true);
    dispatch(getPsychologistSort(selectedValue));
  };

  return (
    <Container>
      <Filter>Filters</Filter>
      <PsychologistsListSelect onChange={handleOptionChange}>
        <option>Show all</option>
        <option>A to Z</option>
        <option>Z to A</option>
        <option>Less than 10$</option>
        <option>Greater than 10$</option>
        <option>Popular</option>
        <option>Not popular</option>
      </PsychologistsListSelect>
      {<Card array={sortPsych ? sortArrayPsych : psychArray} />}
      {!lastPage && (
        <PsychologistsListButton onClick={addPage}>
          Load more
        </PsychologistsListButton>
      )}
    </Container>
  );
};
export default PsychologistsList;
