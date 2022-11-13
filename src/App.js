import { createBrowserRouter } from "react-router-dom";
import Private from "./routes/private";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/Admin",
    element:<Private>  <Admin /></Private>
  },


  {
    path: "*",
    element: <Error />,
  },
]);

export { router };
