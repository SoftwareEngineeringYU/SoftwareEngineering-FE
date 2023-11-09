import React from "react";
import StyledApp from "StyledApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "pages/Wrapper";
import { Home } from "pages/home/Home";
import Category from "pages/Category";
import { SignIn, SignUp } from "pages/auth";
import { MyPage, MyReviews, OrderHistory, EditInfo } from "pages/mypage";
import sampleProductlist from "assets/sampleProductList.json";
import ProductDetail from "pages/productDtail/ProductDetail";

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
        path: "category",
        element: <Category selectedCategory={sampleProductlist} />,

        
      },
      {
        path: "product",
        element: <ProductDetail />,
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
