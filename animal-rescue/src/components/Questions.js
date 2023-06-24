import { useState } from 'react';
import styled from 'styled-components';
import { questions } from '../utils/constants';
import { Question } from './index';

const Questions = () => {
  const [activeId, setActiveId] = useState(null);
  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId((currentId) => (currentId = newActiveId));
  };
  return (
    <Wrapper className="section-center">
      <h3><span>/</span>questions and answers about adoption</h3>
      <section>
        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              {...question}
              activeId={activeId}
              toggleQuestion={toggleQuestion}
            />
          );
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  margin-bottom: 4rem;
  h3 {
    margin-bottom: 2rem;
  }
  @media (min-width: 992px) {
    max-width: 60%;
  }
`;

export default Questions;
