import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";
import { notifyError, notifySuccess } from "../components/NotifyButton";
import keys from "../api/constants";

const { API_TOKEN, BASE_URL } = keys;

export default function Index() {
  const [messageState, setMessageState] = useState();
  const [successState, setSuccessState] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    const { qrcode } = router.query;

    if (qrcode && qrcode.length) {
      axios
        .post(
          `${BASE_URL}/api/access/${qrcode}`,
          {},
          {
            headers: {
              Authorization: API_TOKEN,
            },
          }
        )
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
          const { response } = err;
          notifyError(response?.data?.msg || err);
        });
    }
  }, [router]);

  if (successState === undefined) {
    return (
      <div className="loader-wrap">
        <CircularProgress size={50} />
      </div>
    );
  }

  return (
    <div>
      <div>
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

          {successState && <h3>You have an access for KAIS Kitchen</h3>}
          <h3>{messageState}</h3>
        </div>
      </div>
    </div>
  );
}
