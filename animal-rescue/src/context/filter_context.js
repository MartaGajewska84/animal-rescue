import React, { useEffect, useContext, useReducer } from 'react';
import {
  LOAD_ANIMALS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_ANIMALS,
  UPDATE_FILTERS,
  FILTER_ANIMALS,
  CLEAR_FILTERS,
} from '../actions';
import { useAnimalsContext } from '../context/animals_context';
import reducer from '../reducers/filter_reducer';

const initialState = {
  all_animals: [],
  filtered_animals: [],
  grid_view: true,
  sort: 'name-a',
  filters: {
    text: '',
    type: 'all',
    gender: 'all',
    min_age: 0,
    max_age: 0,
    age: 0,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { animals } = useAnimalsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_ANIMALS, payload: animals });
  }, [animals]);

  useEffect(() => {
    dispatch({ type: FILTER_ANIMALS });
    dispatch({ type: SORT_ANIMALS });
  }, [state.sort, state.filters]);

  const setGridView = () => {
    dispatch({ type: SET_GRIDVIEW });
  };
  const setListView = () => {
    dispatch({ type: SET_LISTVIEW });
  };
  const updateSort = (e) => {
    const value = e.target.value;
    console.log(value);
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'type') {
      value = e.target.textContent;
    }
    if (name === 'age') {
      value = Number(value);
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
