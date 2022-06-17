import Cookies from "universal-cookie";

const cookies = new Cookies();
const TWO_HOURS = 1000 * 7200;

export const removeAccessToken = () => {
  cookies.remove("access_token", { path: "/" });
};

export const setAccessToken = (token) => {
  const oneDayPeriod = new Date();
  oneDayPeriod.setDate(oneDayPeriod.getDate() + 1);

  cookies.set("access_token", token, {
    path: "/",
    expires: new Date(oneDayPeriod - TWO_HOURS),
  });
};
