import { createMemoryRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import Sale from "./Pages/Sale";
import Signup from "./Pages/Signup";

export const PageRouter = createMemoryRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "sale",
        element: <Sale />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);
