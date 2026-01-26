import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./src/components/Header";
import Body from "./src/components/body/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import ErrorPage from "./src/components/ErrorPage";

// rafce to automatically create new component - provided by vs code
const AppLayout = () => {
  return (
    <div className="app">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <ErrorPage /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <ContactUs /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
