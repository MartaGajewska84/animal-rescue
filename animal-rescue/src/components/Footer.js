import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy;{`${new Date().getFullYear()} `}
        <span>Animal Rescue</span>
      </h5>
      <h5>All rights reserved</h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-primary-1);
  color: var(--clr-primary-5);
  h5 {
    margin: 0.1rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
    span {
      margin-right: 0.5rem;
    }
  }
`;

export default Footer;
