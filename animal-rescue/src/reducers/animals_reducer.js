import {
  GET_ANIMALS_BEGIN,
  GET_ANIMALS_SUCCESS,
  GET_ANIMALS_ERROR,
  GET_SINGLE_ANIMAL_BEGIN,
  GET_SINGLE_ANIMAL_SUCCESS,
  GET_SINGLE_ANIMAL_ERROR,
} from '../actions';

const animals_reducer = (state, action) => {
  if (action.type === GET_ANIMALS_BEGIN) {
    return { ...state, animals_loading: true };
  }
  if (action.type === GET_ANIMALS_SUCCESS) {
    return { ...state, animals_loading: false, animals: action.payload };
  }
  if (action.type === GET_ANIMALS_ERROR) {
    return { ...state, animals_loading: false, animals_error: true };
  }
  if (action.type === GET_SINGLE_ANIMAL_BEGIN) {
    return {
      ...state,
      single_animal_loading: true,
      single_animal_error: false,
    };
  }
  if ((action.type === GET_SINGLE_ANIMAL_SUCCESS)) {
    return {
      ...state,
      single_animal_loading: false,
      single_animal: action.payload,
    };
  }
  if ((action.type === GET_SINGLE_ANIMAL_ERROR)) {
    return {
      ...state,
      single_animal_loading: false,
      single_animal_error: true,
    };
  }
};

export default animals_reducer;
