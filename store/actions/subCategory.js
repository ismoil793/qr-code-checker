import {
  API_createSubCategory,
  API_deleteSubCategory,
  // API_getSubCategories,
  API_getSubCategory,
  API_updateSubCategory,
} from "../../api/requests/subcategory";
import * as action from "../types/actionTypes";
import logRequestError from "./errorHandler";

export const fetchSubCategory = (categoryID) => async (dispatch) => {
  await API_getSubCategory(categoryID)
    .then((res) => {
      dispatch({
        type: action.FETCH_SUB_CATEGORIES,
        payload: res.data.data,
      });
    })
    .catch((e) => logRequestError(e));
};

// export const fetchAllSubCategories = () => async (dispatch) => {
//   await API_getSubCategories()
//     .then((res) => {
//       dispatch({
//         type: action.FETCH_SUB_CATEGORIES,
//         payload: res.data,
//       });
//     })
//     .catch((e) => logRequestError(e));
// };

export const createSubCategory = (data) => async (dispatch) => {
  await API_createSubCategory(data)
    .then((res) => {
      dispatch({
        type: action.CREATE_SUB_CATEGORY,
        payload: res.data,
      });
    })
    .catch((e) => logRequestError(e));
};

export const clearSubCategory = () => async (dispatch) => {
  dispatch({
    type: action.CLEAR_SUB_CATEGORY,
  });
};

export const updateSubCategory = (id, data) => async (dispatch) => {
  await API_updateSubCategory(id, data)
    .then((res) => {
      dispatch({
        type: action.UPDATE_SUB_CATEGORY,
        payload: res.data,
      });
    })
    .catch((e) => logRequestError(e));
};

export const deleteSubCategory = (id) => async (dispatch) => {
  await API_deleteSubCategory(id)
    .then((res) => {
      dispatch({
        type: action.DELETE_SUB_CATEGORY,
        payload: res.data,
      });
    })
    .catch((e) => logRequestError(e));
};
