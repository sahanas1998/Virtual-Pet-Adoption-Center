import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import NotFound from "../layout/NotFound";
import Landing from "../pages/Landing";
import TermAndCondition from "../pages/TermAndCondition"
import PrivacyAndPolicy  from "../pages/PrivacyAndPolicy"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Landing />} />
      <Route path="/termandcondition" element={<TermAndCondition />} />
      <Route path="/privacyandpolicy" element={<PrivacyAndPolicy />} />
    </Route>
  )
);

const Root = () => {
  return <RouterProvider router={router} />;
};

export default Root;
