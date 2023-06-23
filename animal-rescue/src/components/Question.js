import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import styled from 'styled-components';

const Question = ({ id, question, answer, activeId, toggleQuestion }) => {
  const isActive = id === activeId
  return (
    <Wrapper>
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
  padding: 1rem 1.5rem;
  border: 2px solid var(--clr-grey-special);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);

  header {
    display: flex;
    justify-content: space-between;
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
      color: var(--clr-primary-3)
    }
  }
`;

export default Question;
