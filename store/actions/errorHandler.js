import { notifyError } from "../../components/NotifyButton";

export default function logRequestError(e) {
  if (e.data && e.data.message) notifyError(e.data.message);
  // eslint-disable-next-line no-console
  else console.log(e);
}
