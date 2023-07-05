import React, { useEffect, useContext, useReducer } from 'react';
import {
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';
import { useAnimalsContext } from '../context/animals_context';

const initialState = {
  filtered_animals: [],
  all_animals: [],
  grid_view: true,
  sort: 'name-a',
  filters: {
    type: 'all',
    gender: 'all',
    age: 0,
  },
};