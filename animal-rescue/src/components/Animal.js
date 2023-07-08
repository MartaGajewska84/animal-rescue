import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Animal = ({ image, name, id }) => {
  //console.log(image[0].url);
  return (
    <Wrapper>
      <div className="container">
        <img src={image[0].url} alt={name} />
        <h4>{name}</h4>
        <Link to={`/animals/${id}`} className="btn center">
          Details
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    display: grid;
    img {
      width: 40%;
      border-radius: 50%;
      margin-bottom: 1rem;
      align-self: center;
      justify-self: center;
    }
    h4 {
      text-align: center;
      margin-bottom: 1.5rem;
    }
    .center {
      align-self: center;
      justify-self: center;
      margin-bottom: 2rem;
    }
    @media (min-width: 992px) {
    img {
      width: 60%;
    }
  }
`;

export default Animal;
