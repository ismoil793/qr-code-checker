import {
  API_createCategory,
  API_deleteCategory,
  API_getCategories,
  // API_getCategory,
  API_updateCategory,
} from "../../api/requests/category";
import * as action from "../types/actionTypes";
import logRequestError from "./errorHandler";
import { notifyError } from "../../components/NotifyButton";

// export const fetchCategory = (id) => async (dispatch) => {
//   await API_getCategory(id)
//     .then((res) => {
//       dispatch({
//         type: action.FETCH_CATEGORY,
//         payload: res.data,
//       });
//     })
//     .catch((e) => logRequestError(e));
// };

export const fetchAllCategories = () => async (dispatch) => {
  await API_getCategories()
    .then((res) => {
      dispatch({
        type: action.FETCH_CATEGORIES,
        payload: res.data.data,
      });
    })
    .catch((e) => logRequestError(e));
};

export const createCategory = (data) => async (dispatch) => {
  await API_createCategory(data)
    .then((res) => {
      dispatch({
        type: action.CREATE_CATEGORY,
        payload: res.data,
      });
    })
    .catch((e) => logRequestError(e));
};

export const clearCategory = () => async (dispatch) => {
  dispatch({
    type: action.CLEAR_CATEGORY,
  });
};

export const updateCategory = (id, data) => async (dispatch) => {
  await API_updateCategory(id, data)
    .then((res) => {
      dispatch({
        type: action.UPDATE_CATEGORY,
        payload: res.data,
      });
    })
    .catch((e) => logRequestError(e));
};

export const deleteCategory = (id) => async (dispatch) => {
  await API_deleteCategory(id)
    .then((res) => {
      dispatch({
        type: action.DELETE_CATEGORY,
        payload: res.data,
      });
      notifyError("Удалено");
    })
    .catch((e) => logRequestError(e));
};
