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
  if (action.type === LOAD_ANIMALS) {
    let maxAge = action.payload.map((animal) => animal.age);
    maxAge = Math.max(...maxAge);

    return {
      ...state,
      all_animals: [...action.payload],
      filtered_animals: [...action.payload],
      filters: {
        ...state.filters,
        max_age: maxAge,
        age: maxAge,
      },
    };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_ANIMALS) {
    const { sort, filtered_animals } = state;
    let tempAnimals = [...filtered_animals];
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
    return { ...state, filtered_animals: tempAnimals };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === FILTER_ANIMALS) {
    const { all_animals } = state;
    const { text, type, gender, age } = state.filters;
    let tempAnimals = [...all_animals];
    if (text) {
      tempAnimals = tempAnimals.filter((animal) => {
        return animal.name.toLowerCase().startsWith(text);
      });
    }
    if(type !== 'all') {
      tempAnimals = tempAnimals.filter(animal => animal.type === type)
    }
    if(gender !== 'all') {
      tempAnimals = tempAnimals.filter(animal => animal.gender === gender)
    }
    
    tempAnimals = tempAnimals.filter(animal => animal.age <= age)
    
    
    return { ...state, filtered_animals: tempAnimals };
  }
  
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        type: 'all',
        gender: 'all',
        age: state.filters.max_age,
      },
    };
  }
};

export default filter_reducer;
