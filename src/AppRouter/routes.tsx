import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Route>,
  ),
);
