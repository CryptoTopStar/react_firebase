import { CssBaseline } from "@mui/material";
import React from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Injector } from "./injector";
import { ForgotPasswordPage } from "./modules/auth/pages/forgotPasswordPage";
import { LoginPage } from "./modules/auth/pages/loginPage";
import { AddPropertyPage } from "./modules/property/pages/AddPropertyPage";
import { PropertyDetailPage } from "./modules/property/pages/PropertyDetailPage";
import { PropertyListPage } from "./modules/property/pages/propertyListPage";
import { CalenderPage } from "./modules/user/pages/calenderPage";
import { CorporatePage } from "./modules/user/pages/corporatePage";
import { DashboardView } from "./modules/user/widgets/DashboardView";
import { HomeView } from "./modules/user/widgets/HomeView";

// VIEW WITHOUT AUTH
const landingPages = [
  "/login",
  "/forgot-password",
];

export default function App() {
  const loc = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const listner = Injector.authManager.isLoggedIn().subscribe(loggedIn => {
      const isLandingPage = landingPages.includes(loc.pathname);
      if (!loggedIn && !isLandingPage) navigate('/', { replace: true });
    });
    return () => listner.unsubscribe();
  }, [navigate]);

  return (
    <div className="App">
      <CssBaseline />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route element={<DashboardView />}>
          <Route path="/home" element={<CalenderPage />} />
          <Route path="/properties" element={<PropertyListPage />} />
          <Route path="/corporate" element={<CorporatePage />} />
          <Route path="/properties/add" element={<AddPropertyPage />} />
          <Route path="/properties/:id" element={<PropertyDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}