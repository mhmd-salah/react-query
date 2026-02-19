import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Posts from "../pages/Posts";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/posts" element={<Posts />} />
    </Route>,
  ),
);
