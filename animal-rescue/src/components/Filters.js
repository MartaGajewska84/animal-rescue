import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/filter_context';
import { getUniqueValues } from '../utils/helpers';

const Filters = () => {
  const {
    filters: { text, type, gender, min_age, max_age, age },
    updateFilters,
    clearFilters,
    all_animals,
  } = useFilterContext();

  const types = getUniqueValues(all_animals, 'type');
  const genders = getUniqueValues(all_animals, 'gender');

  return (
    <Wrapper>
      <div className="content">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/*search input */}
          <div className="from-control">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="search-input"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/*types input */}
          <div className="form-control">
            <h5>category</h5>
            <div>
              {types.map((t, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="type"
                    type="button"
                    className={`${type === t.toLowerCase() ? 'active' : null}`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
          {/*gender input */}
          <div className="form-control">
            <h5>gender</h5>
            <select
              name="gender"
              value={gender}
              onChange={updateFilters}
              className="gender"
            >
              {genders.map((g, index) => {
                return (
                  <option key={index} value={g}>
                    {g}
                  </option>
                );
              })}
            </select>
          </div>
          {/*age input */}
          <div className="form-control">
            <h5>age</h5>
            <p className="age">{age}</p>
            <input
              type="range"
              name="age"
              onChange={updateFilters}
              min={min_age}
              max={max_age}
              value={age}
            ></input>
          </div>
        </form>
        <button type='button' className='clear-btn' onClick={clearFilters}>clear filters</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-top: 2rem;
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .gender {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .age {
    margin-bottom: 0.25rem;
  }
  .clear-btn {
    background: var(--clr-primary-2);
    color: var(--clr-primary-5);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  .clear-btn:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-1);
  }

  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
