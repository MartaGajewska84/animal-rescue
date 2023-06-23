import styled from 'styled-components';
import aboutImg from '../assets/background-photo.png';
import background from '../assets/background.png'

const AboutPage = () => {
  return (
    <Wrapper className="section section-center">
      <img src={background} alt="animals" />
      <article>
        <div className="title">
          <h2>our story</h2>
          <div className="underline"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis
          rhoncus tincidunt. Morbi luctus nisl eu laoreet dignissim. Proin
          faucibus nibh augue, ut hendrerit elit auctor in. Nulla in venenatis.
          Vivamus metus felis, convallis at facilisis sit amet, congue vitae
          odio. Morbi vehicula quam diam, non posuere purus porttitor et.
          Quisque nec magna est. Aliquam ex massa, pharetra ac imperdiet non,
          vulputate in ante. Fusce aliquet gravida eros ut rutrum. Integer
          vestibulum hendrerit mauris vel eleifend. Phasellus imperdiet elit
          vitae dui volutpat iaculis vel at tortor. Aliquam mi nulla, imperdiet
          egestas suscipit in, accumsan vel augue. Duis blandit dolor sed libero
          elementum ultrices. Quisque convallis lacinia libero.
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
