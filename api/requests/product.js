import { httpDelete, httpGet, httpPost } from "../index";

export const API_getProduct = (id, params = {}) =>
  httpGet({
    url: `/api/get-products/${id}`,
    params,
  });

export const API_getProducts = (params = {}) =>
  httpGet({
    url: "/api/get-products",
    params,
  });

export const API_createProduct = (data) =>
  httpPost({
    url: "/api/create-product",
    data,
  });

export const API_updateProduct = (id, data) =>
  httpPost({
    url: `/api/update-product/${id}`,
    data,
  });

export const API_deleteProduct = (id) =>
  httpDelete({
    url: `/api/delete-product/${id}`,
  });
