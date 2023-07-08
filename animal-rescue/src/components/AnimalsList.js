import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import ListView from './ListView';
import GridView from './GridView'

const AnimalsList = () => {
  const {filtered_animals:animals, grid_view} = useFilterContext();
  if(animals.length < 1) {
    return <h5 style={{textTransform:'none'}}>Sorry, no animals matched your search...</h5>
  }
  if(grid_view === false) {
    return <ListView animals={animals}/>
  }
  return (
    <Wrapper>
      <h3>ready for their forever home</h3>
      <GridView animals={animals} />
    </Wrapper>
  );
  
  
};

const Wrapper = styled.section`
  h3 {
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export default AnimalsList;
