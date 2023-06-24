import { useState } from 'react';
import styled from 'styled-components';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { randomReviewers } from '../utils/constants';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, photo, review } = randomReviewers[index];

  const checkNumber = (number) => {
    if (number > randomReviewers.length - 1) {
      return 0;
    }
    if (number < 0) {
      return randomReviewers.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  return (
    <Wrapper className="section-center">
      <div>
        <h3>
          <span>/</span>reviews
        </h3>
      </div>
      <div className="border">
        <div>
          <div className="img-container">
            <img src={photo} />
          </div>
          <h5>{name}</h5>
          <p>{review}</p>
          <div></div>
        </div>
        <div className="btns">
          <button className="btn" onClick={prevPerson}>
            <FaAngleDoubleLeft />
          </button>
          <button className="btn" onClick={nextPerson}>
            <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;
  .img-container {
    width: 150px;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }

  h3 {
    margin-bottom: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  .btns {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 992px) {
    max-width: 60%;
  }
`;

export default Reviews;
