import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export function notifyError(msg, duration = 2000) {
  const notyf = new Notyf({
    types: [
      {
        type: "error",
        backgroundColor: "#e94627",
      },
    ],
    duration,
    position: { x: "right", y: window.innerWidth <= 768 ? "bottom" : "bottom" },
    dismissible: true,
  });

  notyf.open({
    type: "error",
    message: msg,
  });
}

export function notifyWarn(msg, duration = 2000) {
  const notyf = new Notyf({
    types: [
      {
        type: "warning",
        backgroundColor: "#F79800",
        className: "notyf-warning",
      },
    ],
    duration,
    position: { x: "right", y: window.innerWidth <= 768 ? "bottom" : "bottom" },
    dismissible: true,
  });

  notyf.open({
    type: "warning",
    message: msg,
  });
}

export function notifySuccess(msg, duration = 2000) {
  const notyf = new Notyf({
    types: [
      {
        type: "success",
        backgroundColor: "#5DAE4C",
      },
    ],
    duration,
    position: { x: "right", y: window.innerWidth <= 768 ? "bottom" : "bottom" },
    dismissible: true,
  });

  notyf.open({
    type: "success",
    message: msg,
  });
}
