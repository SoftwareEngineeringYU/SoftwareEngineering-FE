import React from "react";
import StyledApp from "StyledApp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wrapper from "pages/Wrapper";
import { Home } from "pages/home/Home";
import Category from "pages/Category";
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
        path: "category",
        element: <Category selectedCategory={sampleProductlist} />,
        children: [
          {
            path: "product/:id",
            element: <ProductDetail />,
          },
        ],
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

// {
//   path: "/",
//   element: <Wrapper />,
//   children: [
//     {
//       path: "/",
//       element: <Home />,
//       children: [
//         {
//           path: "category",
//           element: <Category />,
//         },
//         {
//           path: "signin",
//           element: <Home />,
//         },
//         {
//           path: "signup",
//           element: <Home />,
//         },
//         {
//           path: "mypage",
//           element: <MyPage />,
//           default: <OrderHistory />,
//           children: [
//             {
//               path: "orderhistory",
//               element: <OrderHistory />,
//             },
//             {
//               path: "reviews",
//               element: <MyReviews />,
//             },
//             {
//               path: "editinfo",
//               element: <EditInfo />,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// },
