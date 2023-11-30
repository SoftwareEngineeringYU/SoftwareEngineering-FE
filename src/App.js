import React from "react";
import StyledApp from "StyledApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "pages/Wrapper";
import { Home } from "pages/home/Home";
import Category from "pages/Category";
import { SignIn, SignUp } from "pages/auth";
import { MyPage, MyReviews, OrderHistory, EditInfo } from "pages/mypage";
import ProductDetail from "pages/productDtail/ProductDetail";
import Add_product from "pages/admin/AddProduct";
import Cart from "pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      
      {
        path: "category/:categoryName",
        element: <Category />,
      },
      {
        path: "product/:productId",
        element: <ProductDetail />,
      },
      {
        path: "add_product",
        element: <Add_product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "mypage",
        element: <MyPage />,

        children: [
          {
            path: "orderhistory",
            element: <OrderHistory />,
          },
          {
            path: "myreviews",
            element: <MyReviews />,
          },
          {
            path: "editinfo",
            element: <EditInfo />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <StyledApp>
      <RouterProvider router={router} />
    </StyledApp>
  );
}

export default App;
