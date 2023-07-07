import {
  LOAD_ANIMALS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_ANIMALS,
  UPDATE_FILTERS,
  FILTER_ANIMALS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  if(action.type === LOAD_ANIMALS) {
    return {...state, all_animals: [...action.payload], filtered_animals: [...action.payload]}
  }
  
}

export default filter_reducer