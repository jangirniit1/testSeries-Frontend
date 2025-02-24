import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home/Main";
import Login from "./User/Login";
import Registration from "./User/Registration";
import RootLayout from "./Layouts/RootLayout";
import Quiz from "./Test/Quiz";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  const ProtectRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RootLayout
          isLoggedIn={isLoggedIn}
          handleLoginLogout={handleLoginLogout}
        />
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login setIsLoggedIn={setIsLoggedIn} />,
        },
        {
          path: "/register",
          element: <Registration />,
        },
        {
          path: "/quiz/:examType",
          element: (
            <ProtectRoute>
              <Quiz />
            </ProtectRoute>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
