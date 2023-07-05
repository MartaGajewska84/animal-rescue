import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import { animals_url as url } from '../utils/constants';
import reducer from '../reducers/animals_reducer';

import {
  GET_ANIMALS_BEGIN,
  GET_ANIMALS_SUCCESS,
  GET_ANIMALS_ERROR,
  GET_SINGLE_ANIMAL_BEGIN,
  GET_SINGLE_ANIMAL_SUCCESS,
  GET_SINGLE_ANIMAL_ERROR,
} from '../actions';

const initialState = {
  animals_loading: false,
  animals_error: false,
  animals: [],
  single_animal_loading: false,
  single_animal_error: false,
  single_animal: {},
};

const AnimalsContext = React.createContext();

export const AnimalsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchAnimals = async (url) => {
    dispatch({ type: GET_ANIMALS_BEGIN });
    try {
      const response = await axios.get(url);
      const animals = response.data;
      console.log(animals)
      dispatch({ type: GET_ANIMALS_SUCCESS, payload: animals });
    } catch (error) {
      dispatch({ type: GET_ANIMALS_ERROR });
    }
  };

  useEffect(() => {
    fetchAnimals(url);
  }, []);

  return (
    <AnimalsContext.Provider value={{ ...state }}>
      {children}
    </AnimalsContext.Provider>
  );
};

export const useAnimalsContext = () => {
  return useContext(AnimalsContext);
};
