import * as actions from "../types/actionTypes";

const initialState = {
  category: {},
  categories: [],
};

const categoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.FETCH_CATEGORIES:
      return { ...state, categories: action.payload };

    case actions.CREATE_CATEGORY:
      return { ...state, category: action.payload };

    case actions.UPDATE_CATEGORY:
      return { ...state, category: action.payload };

    case actions.DELETE_CATEGORY:
      return { ...state };

    case actions.CLEAR_CATEGORY:
      return { ...state, category: {} };

    default:
      return state;
  }
};

export default categoryReducer;
