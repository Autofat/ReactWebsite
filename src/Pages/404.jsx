import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="text-center justify-center items-center min-h-screen flex flex-col">
      <h1 className="text-3xl text-blue-600 font-bold mb-2">Oops!</h1>
      <p className="font-medium text-slate-600 mb-8">
        {error.statusText || error.message}
      </p>
      <p className="font-medium text-slate-600 mb-8">
        Sorry, an unexpected error has occurred.
      </p>
    </div>
  );
};

export default ErrorPage;
