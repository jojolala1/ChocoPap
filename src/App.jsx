import Navbar from "./components/navbar";
import Pricing from "./pages/Pricing";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Boutique from "./pages/Boutique";
import { createBrowserRouter, Link, NavLink, Outlet, RouterProvider } from "react-router-dom";
import ErrorElement from "./pages/ErrorElement";


const router = createBrowserRouter([
  {
      path: '/',
      element: 
          <div  className="d-flex flex-column divApp">
              <Navbar />
              <Outlet />
              <Footer />
          </div>,
      errorElement:<ErrorElement/>,

      children: [
          {
              path: '/',
              element: <Home />,
          },
          {
              path: 'boutique',
              element: <Boutique />,
          },
      ],
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
