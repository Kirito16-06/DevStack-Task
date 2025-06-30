
import { useState, useEffect } from "react";
import AdminLogin from "@/components/AdminLogin";
import Admin from "./Admin";

const AdminAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const loggedIn = localStorage.getItem("isAdminLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return <Admin onLogout={handleLogout} />;
};

export default AdminAuth;
