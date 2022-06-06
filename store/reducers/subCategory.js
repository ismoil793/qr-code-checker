import * as actions from "../types/actionTypes";

const initialState = {
  subCategory: {},
  subCategories: [],
};

const subCategoryReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.FETCH_SUB_CATEGORIES:
      return { ...state, subCategories: action.payload };

    case actions.CREATE_SUB_CATEGORY:
      return { ...state, subCategory: action.payload };

    case actions.UPDATE_SUB_CATEGORY:
      return { ...state, subCategory: action.payload };

    case actions.DELETE_SUB_CATEGORY:
      return { ...state };

    case actions.CLEAR_SUB_CATEGORY:
      return { ...state, subCategory: {} };

    default:
      return state;
  }
};

export default subCategoryReducer;
