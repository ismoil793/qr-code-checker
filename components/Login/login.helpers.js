import Cookies from "universal-cookie";

const cookies = new Cookies();
const TWO_HOURS = 1000 * 7200;

export const removeAccessToken = () => {
  cookies.remove("access_token", { path: "/" });
};

export const setAccessToken = (token) => {
  const halfMonthPeriod = new Date();
  halfMonthPeriod.setDate(halfMonthPeriod.getDate() + 15);

  cookies.set("access_token", token, {
    path: "/",
    expires: new Date(halfMonthPeriod - TWO_HOURS),
  });
};
