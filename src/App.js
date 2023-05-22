import { useEffect, useState } from "react";

import Navbar from "./layouts/DashboardLayout/Navbar";
import Sidebar from "layouts/DashboardLayout/Sidebar";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
    }
    setIsLoggedIn(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <div className="page-wrapper d-flex">
      {isLoggedIn && <Sidebar />}
      {isLoggedIn && <Navbar />}
    </div>
  );
}
