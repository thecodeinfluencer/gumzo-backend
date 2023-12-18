export default function handleError(tag, error) {
  const message = error?.message;
  const resMessage = error?.response?.data?.message;
  const resErrMessage = error?.response?.data?.error?.message;
  const status = error?.status || 500;

  console.log(
    tag,
    status || "",
    message || "",
    resMessage || "",
    resErrMessage || ""
  );
}
