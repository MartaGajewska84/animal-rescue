import React from 'react';
import styled from 'styled-components';
import Animal from './Animal';

const GridView = ({animals}) => {
  
  
  return (
    <Wrapper>
      <div className="animals-container">
        {animals.map((animal) => {
          return <Animal key={animal.id} {...animal} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .animals-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .animals-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .animals-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;


export default GridView;
