import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const Question = ({ id, question, answer, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  return (
    <Wrapper className="border">
      <header>
        <h4>{question}</h4>
        <button className="plus-minus-btn" onClick={() => toggleQuestion(id)}>
          <IconContext.Provider value={{ className: 'icon' }}>
            {isActive ? <FaMinusCircle /> : <FaPlusCircle />}
          </IconContext.Provider>
        </button>
      </header>
      {isActive && <p>{answer}</p>}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  
  header {
    display: flex;
    justify-content: space-between;
  }

  p {
    max-width: 100%;
  }

  .plus-minus-btn {
    background: transparent;
    border-color: transparent;
    cursor: pointer;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
    &:hover {
      color: var(--clr-primary-3);
    }
  }

  @media (min-width: 992px) {
    max-width: 100%;
  }
  
  }
`;

export default Question;
