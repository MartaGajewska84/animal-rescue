import styled from 'styled-components';

const Contacts = () => {
  return (
    <Wrapper>
      <div className="section-center contact">
        <h3>Join our newsletter</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            tincidunt velit vitae libero volutpat, vel auctor justo mollis.
            Curabitur et.
          </p>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--clr-primary-5);

  .contact {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input {
    border-right: none;
    color: var(--clr-grey-3);
    border-top-left-radius: var(--radius);
    border-bottom-left-radius: var(--radius);
  }
  .form-input::placeholder {
    color: var(--clr-primary-1);
    text-transform: capitalize;
  }
`;

export default Contacts;
