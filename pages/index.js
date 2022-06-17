import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  CircularProgress,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Cookies from "universal-cookie";
import { notifyError, notifySuccess } from "../components/NotifyButton";
import { httpPost } from "../api";
import { removeAccessToken } from "../components/Login/login.helpers";

export default function Index() {
  const [messageState, setMessageState] = useState();
  const [successState, setSuccessState] = useState(undefined);
  const router = useRouter();
  const cookies = new Cookies();
  const { qrcode } = router.query;

  useEffect(() => {
    if (!cookies.get("access_token")?.length) {
      router.push(`/login?qrcode=${qrcode || ""}`);
    } else if (qrcode && qrcode.length) {
      httpPost({
        url: `/api/access/${qrcode}`,
      })
        .then((response) => {
          const { success, message } = response?.data || {};
          if (success) {
            notifySuccess(message);
          } else {
            notifyError(message);
          }
          setMessageState(message);
          setSuccessState(success);
        })
        .catch((err) => {
          const { response, data } = err;
          notifyError(
            response?.data?.msg || data?.msg || data?.message || "Ошибка!"
          );
        });
    }
  }, [router]);

  if (successState === undefined) {
    return (
      <div className="loader-wrap">
        {!qrcode?.length ? (
          <h1>QR-Code не указан</h1>
        ) : (
          <CircularProgress size={50} />
        )}
      </div>
    );
  }

  const handleLogoutClick = async () => {
    await httpPost({
      url: "/api/logout",
    });
    removeAccessToken();
    router.push(`/login?qrcode=${qrcode || ""}`);
  };

  return (
    <div>
      <div>
        <div className="user-info">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                KAIS Kitchen
              </Typography>
              <Typography variant="h6" component="div">
                {localStorage.getItem("kitchenUser")}&nbsp;
              </Typography>
              <AccountCircle />
              <Button
                onClick={handleLogoutClick}
                className="btn-logout"
                variant="contained"
                color="error"
              >
                Выйти
              </Button>
            </Toolbar>
          </AppBar>
        </div>
        <div className="success-animation">
          {successState ? (
            <svg
              className="checkmark"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 52 52"
            >
              <circle
                className="checkmark__circle"
                cx="26"
                cy="26"
                r="25"
                fill="none"
              />
              <path
                className="checkmark__check"
                fill="none"
                d="M14.1 27.2l7.1 7.2 16.7-16.8"
              />
            </svg>
          ) : (
            <div className="checkmark__error">
              <CloseIcon fontSize="large" />
            </div>
          )}

          {successState && <h3>Успех! Доступ в "KAIS Kitchen" одобрен</h3>}
          <h3>{messageState}</h3>
        </div>
      </div>
    </div>
  );
}
