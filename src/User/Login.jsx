import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.user.name);

      setIsLoggedIn(true);
      alert("Login Successfully");
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error);

      if (error.response) {
        setError(error.response.data.error || "Login failed");
      } else if (error.request) {
        setError("Network error. Please check your connection.");
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-lg shadow-lg w-80"
        >
          <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-600 text-sm rounded">
              {error}
            </div>
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Keep me logged in
            </label>
            <a href="#" className="text-blue-600 text-sm">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mb-2"
          >
            Login
          </button>

          <Link to="/register">
            <button
              type="button"
              className="w-full bg-gray-300 text-black p-2 rounded"
            >
              Register
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Login;
