import Cookies from "universal-cookie";

const cookies = new Cookies();

export const removeAccessToken = () => {
  cookies.remove("access_token", { path: "/" });
};

export const setAccessToken = (token) => {
  const oneDayPeriod = new Date();
  oneDayPeriod.setDate(oneDayPeriod.getDate() + 1);

  cookies.set("access_token", token, {
    path: "/",
    expires: oneDayPeriod,
  });
};
