import styled from 'styled-components';
import { Filters, Sort, AnimalsList } from '../components';

const AnimalsPage = () => {
  return (
    <Wrapper className="page">
      <div className="section-center animals">
        <Filters />
        <div>
          <Sort />
          <AnimalsList />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .animals {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .animals {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default AnimalsPage;
