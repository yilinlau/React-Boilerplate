import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ContactUs from "../pages/ContactUs";
import DashboardIndexPage from "../pages/dashboard/DashboardIndexPage";
import UsersListPage from "../pages/dashboard/UsersListPage";
import PATHS from "./path";

function Router() {
  return (
    <Routes>
      <Route path={PATHS.home} element={<HomePage />} />
      <Route path={PATHS.aboutUs} element={<AboutUsPage />} />
      <Route path={PATHS.contactUs} element={<ContactUs />} />
      <Route path={PATHS.dashboard.index} element={<DashboardIndexPage />} />
      <Route path={PATHS.dashboard.usersList} element={<UsersListPage />} />
    </Routes>
  );
}

export default Router;
