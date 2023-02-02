import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout"
import VerifCheckout from "./pages/verification";
import CheckoutPage from "./pages/checkout";
import DetailPage from "./pages/detail";
import ProductListPage from "./pages/productList";
import store from "./store";

const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <ProductListPage />
    },
    {
      path: 'detail/:id',
      element: <DetailPage />
    },
    {
      path: 'checkout',
      element: <CheckoutPage />
    },
    {
      path: 'verification',
      element: <VerifCheckout />
    }
  ]
}])

const MateriRestRouter = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
};

export default MateriRestRouter;
