import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Aboutus from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from './ReduxStore/store'

const Applayout=()=>{
return(
  <Provider store={store}>
  <Navbar/>
  <Outlet/>
  <Footer/>
 </Provider>
)
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);