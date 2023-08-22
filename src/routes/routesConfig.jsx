import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Products from "@/pages/Products/Products";
import Login from "@/pages/Login/Login";
import RootLayout from "@/components/layout/RootLayout";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "products",
        element: <Products />
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  },
  
];

export default routes;
