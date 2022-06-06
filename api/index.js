import * as axios from "axios";
// import Cookies from "universal-cookie";
import keys from "./constants";
import { notifyError, notifyWarn } from "../components/NotifyButton";

const httpClient = axios.create({
  baseURL: keys.BASE_URL,
});

httpClient.interceptors.request.use(
  (config) =>
    // const cookie = new Cookies();

    // let token = cookie.get("access_token");
    // let device_token = cookie.get('device_token');
    // let device_type = cookie.get('device_type');

    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    // if (device_token) {
    //     config.headers['Device-Token'] = device_token
    // }
    // if (device_type) {
    //     config.headers['Device-Type'] = device_type
    // }

    config,
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => {
    // eslint-disable-next-line no-unused-vars
    const { status, data, statusText } = response;

    return response;
  },
  ({ response }) => {
    // eslint-disable-next-line no-unused-vars
    const { status, data, statusText } = response || { status: false };
    // const cookies = new Cookies();

    if (!response) {
      notifyError("Ошибка соединения!");
      // return connectionError("Ошибка соединения!", this);
    }

    if (parseInt(status, 10) === 401 || parseInt(status, 10) === 403) {
      // cookies.remove("access_token", { path: '/' });
      // cookies.remove("refresh_token", { path: '/' });
      // cookies.remove("user_id", { path: '/' })
    }

    if (parseInt(status, 10) === 400) {
      notifyError("Неверные данные, убедитесь что все поля заполнены");
    }

    if (parseInt(status, 10) === 404) {
      notifyWarn(data.message);
    }

    if (parseInt(status, 10) === 429) {
      notifyWarn(
        "Вы делаете слишком много запросов на сервер. Пожалуйста подождите 1 минуту и продолжите."
      );
    }

    if (parseInt(status, 10) === 500) {
      notifyError("Произошла ошибка на сервере");
    }

    return Promise.reject(response);
  }
);

export const httpGet = (params) =>
  httpClient.request({
    method: "get",
    ...params,
  });

export const httpPost = (params) =>
  httpClient.request({
    method: "post",
    ...params,
  });

export const httpDelete = (params) =>
  httpClient.request({
    method: "delete",
    ...params,
  });
