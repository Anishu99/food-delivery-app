import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err: any = useRouteError();
  return (
    <div>
      Oops!!ErrorPage
      <h3>
        {err.status}_ {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorPage;
