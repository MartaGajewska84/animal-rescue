import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAnimalsContext } from '../context/animals_context';
import { single_animal_url as url } from '../utils/constants';
import { Loading, Error } from '../components';

const SingleAnimalPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_animal_loading: loading,
    single_animal_error: error,
    single_animal: animal,
    fetchSingleAnimal,
  } = useAnimalsContext();

  useEffect(() => {
    fetchSingleAnimal(`${url}${id}`);
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [error]);

  if (error) {
    return <Error />;
  }

  if (loading || Object.keys(animal).length === 0) {
    return <Loading />;
  }
  const { image, name, type, age, gender, health } = animal;

  const imageUrl = image[0].url;
  return (
    <Wrapper>
      <div className="section section-center">
        <Link to="/animals" className="btn">
          back to animals
        </Link>
        <div className="animal-center">
          <div className="center">
            <img src={imageUrl} alt={name} />
          </div>
          <div>
            <h2>Name: {name}</h2>
            <h4>Type: {type}</h4>
            <h4>Age: {age}</h4>
            <h4>{gender}</h4>
            <p>{health}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .animal-center {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  }
  .center {
    display: grid;
  }

  img {
    width: 60%;
    margin-top: 2rem;

    border-radius: 50%;
    margin-bottom: 1rem;
    align-self: center;
    justify-self: center;
  }

  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .animal-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    img {
      width: 60%;
    }
  }
`;

export default SingleAnimalPage;
