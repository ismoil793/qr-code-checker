import { httpDelete, httpGet, httpPost } from "../index";

export const API_getCategory = (id, params = {}) =>
  httpGet({
    url: `/api/get-categories/${id}`,
    params,
  });

export const API_getCategories = (params = {}) =>
  httpGet({
    url: "/api/get-categories",
    params,
  });

export const API_createCategory = (data) =>
  httpPost({
    url: "/api/create-category",
    data,
  });

export const API_updateCategory = (id, data) =>
  httpPost({
    url: `/api/update-category/${id}`,
    data,
  });

export const API_deleteCategory = (id) =>
  httpDelete({
    url: `/api/delete-category/${id}`,
  });
