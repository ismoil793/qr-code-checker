import * as actions from "../types/actionTypes";

const initialState = {
  product: {},
  products: [],
};

const productReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case actions.FETCH_PRODUCTS:
      return { ...state, products: action.payload };

    case actions.CREATE_PRODUCT:
      return { ...state, product: action.payload };

    case actions.UPDATE_PRODUCT:
      return { ...state, product: action.payload };

    case actions.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.prodID),
      };

    case actions.CLEAR_PRODUCT:
      return { ...state, product: {} };

    default:
      return state;
  }
};

export default productReducer;
