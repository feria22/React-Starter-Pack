import React from "react";
import Home from "../pages/Home/Home";
export const ROUTES: iRoute[] = [{ title: "HOME", element: Home(), link: "/" }];

interface iRoute {
    title: string;
    element: React.ReactNode;
    link: string;
}
