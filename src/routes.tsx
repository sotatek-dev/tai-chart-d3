import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Page404 = lazy(() => import("./pages/404/404"));
const Dashboard = lazy(() => import("./pages/Dashboard/DashboardPage"));

export default (
  <Routes>
    <Route path={"*"} element={<Page404 />} />
    <Route path={"/"} element={<Dashboard />} />
    <Route path={"/dashboard"} element={<Dashboard />} />
  </Routes>
);
