import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";
import Page404 from "../pages/Page404/Page404";

export default function AppRoutes() {
  return (
    <Routes>
      {ROUTES.map(route=><Route key={route.link} path={route.link} element={route.element} />)}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
