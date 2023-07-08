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
  if(action.type === SET_LISTVIEW) {
    return {...state, grid_view: false}
  }
  if(action.type === SET_GRIDVIEW) {
    return {...state, grid_view: true}
  }
  
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_ANIMALS) {
    const {sort, filtered_animals} = state;
    let tempAnimals = [...filtered_animals]
    if (sort === 'name-a') {
      tempAnimals = tempAnimals.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === 'name-z') {
      tempAnimals = tempAnimals.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_animals: tempAnimals  };
  }
  
}

export default filter_reducer