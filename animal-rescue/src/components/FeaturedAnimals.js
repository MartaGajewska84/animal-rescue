import styled from 'styled-components';
import pet1 from '../assets/pet1.png';
import pet2 from '../assets/pet2.png';
import pet3 from '../assets/pet3.png';

const FeaturedAnimals = () => {
  return (
    <Wrapper className="section-center">
      <div className="pets">
        <img src={pet1} />
        <img src={pet2} />
        <img src={pet3} />
      </div>
      <div className="single-pet">
        <img src={pet2} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
margin-bottom: 3rem;
  .pets {
    display: none
  }
  .single-pet {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 992px) {
    .single-pet {
      display: none;
    }
    .pets {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    }
  }
`;

export default FeaturedAnimals;
