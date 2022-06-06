import { httpDelete, httpGet, httpPost } from "../index";

export const API_getSubCategory = (id, params = {}) =>
  httpGet({
    url: `/api/get-sub-categories/${id}`,
    params,
  });

export const API_getSubCategories = (params = {}) =>
  httpGet({
    url: "/api/get-sub-categories",
    params,
  });

export const API_createSubCategory = (data) =>
  httpPost({
    url: "/api/create-sub-category",
    data,
  });

export const API_updateSubCategory = (id, data) =>
  httpPost({
    url: `/api/update-sub-category/${id}`,
    data,
  });

export const API_deleteSubCategory = (id) =>
  httpDelete({
    url: `/api/delete-sub-category/${id}`,
  });
