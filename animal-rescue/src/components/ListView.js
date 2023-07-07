import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAnimalsContext } from '../context/animals_context';

const ListView = () => {
  const { animals } = useAnimalsContext();
  return (
    <Wrapper>
      {animals.map((animal) => {
        const { id, name, type, age, gender, health, image } = animal;
        return (
          <article key={id}>
            <img src={image[0].url} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{health}</p>
              <Link to={`/animals/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
article {
  display: grid;
  margin-bottom: 1rem;
}
  img {
    width: 50%;
    border-radius: 50%;
    margin-bottom: 1rem;
    align-self: center;
    justify-self: center;
  }
  h4 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
    img {
      width: 70%;
      margin-bottom: 2rem;
    }
    h4 {
      text-align: left;
      margin-bottom: 1rem;
    }
`;

export default ListView;
