import styled from 'styled-components';
import { FaBars, FaPaw } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import { useSidebarContext } from '../context/sidebar_context';

const Navbar = () => {
  const {openSidebar} = useSidebarContext()
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <IconContext.Provider value={{ className: 'icon' }}>
            <Link to="/">
              <FaPaw />
            </Link>
          </IconContext.Provider>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon {
      color: var(--clr-primary-1);
      font-size: 3.5rem;
      &:hover {
        color: var(--clr-primary-3)
      }
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-1);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a:link,
      a:visited {
        color: var(--clr-primary-1);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover,
        &:active {
          border-bottom: 2px solid var(--clr-primary-3);
        }
      }
    }
  }
`;

export default Navbar;
