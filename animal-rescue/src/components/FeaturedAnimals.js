import styled from 'styled-components';
import pet1 from '../assets/pet1.png';
import pet2 from '../assets/pet2.png';
import pet3 from '../assets/pet3.png';

const FeaturedAnimals = () => {
  return (
    <Wrapper className="section-center">
      <div className="pets">
        <img src={pet1} className='pet'/>
        <img src={pet2} className='pet' />
        <img src={pet3} className='pet' />
      </div>
      <div className="single-pet">
        <img src={pet2} className='pet'/>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 4rem;
  .pets {
    display: none;
    overflow: hidden;
  }
  
  .pet {
    transition: transform 0.5s ease;
  }
  .pet:hover  {
    transform: scale(1.1);
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
      gap: 1.5rem;
    }
  }
`;

export default FeaturedAnimals;
