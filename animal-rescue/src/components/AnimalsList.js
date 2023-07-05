import React from 'react';
import styled from 'styled-components';
import { useAnimalsContext } from '../context/animals_context';
import ListView from './ListView';

const AnimalsList = () => {
  
  return (
    <Wrapper>
      <h3>ready for their forever home</h3>
      <ListView />
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
