import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import ProductGallery from "@/pages/ProductGallery/ProductGallery";
import Login from "@/pages/Login/Login";
import RootLayout from "@/components/layout/RootLayout";
import ProductPage from "@/pages/ProductPage/ProductPage";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "products",
        children: [
          {
            index: true,
            element: <ProductGallery />,
          },
          ,
          {
            path: ":product_id",
            element: <ProductPage />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <>404</>,
      },
    ],
  },
];

export default routes;
