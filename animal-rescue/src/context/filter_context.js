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
    type: 'all',
    gender: 'all',
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
  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
