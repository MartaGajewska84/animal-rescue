import styled from 'styled-components';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { randomReviewers } from '../utils/constants';

const Reviews = () => {
  return (
    <Wrapper className="section-center">
      <div>
        <h3>
          <span>/</span>reviews
        </h3>
      </div>
      <div className='person'>
        {randomReviewers.map((person) => {
          const { id, name, photo, review } = person;
          return (
            <div>
              <div key={id}>
                <img src={photo} />
                <h5>{name}</h5>
                <p>{review}</p>
                <div></div>
              </div>
              <div>
                <button className="prev-btn">
                  <FaAngleDoubleLeft />
                </button>
                <button className="next-btn">
                  <FaAngleDoubleRight />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .person {
    display: flex;
  }
`;

export default Reviews;
