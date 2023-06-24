import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from '../assets/background-photo.png';

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article>
        <h1>Adopt your best friend</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
          felis erat. In non lacinia nulla. Aliquam gravida ipsum vel.
        </p>
        <Link to="/animals" className="btn">
          Adopt now
        </Link>
      </article>
      <article className="img-container">
        <img src={background} alt="pets" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }
  
  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    margin-bottom: 1rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .img-container {
      display: block;
    }
    img {
      width: 100%;
    }
  }
`;

export default Hero;
