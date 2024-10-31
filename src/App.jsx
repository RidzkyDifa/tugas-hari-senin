import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ContainerForm from "./Component/Form";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <ContainerForm />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
