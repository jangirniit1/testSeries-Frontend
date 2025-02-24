import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const data = { name, email, mobile, password, confirmPassword };
      console.log("Sending Data:", data);
      const response = await axios.post(
        "http://localhost:5000/api/register",
        data
      );

      if (response.data.message) {
        alert("Registration Successful");
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration Error: ", error);
    }

    if (error.response) {
      setError(error.response.data.error || "Registration failed");
    } else if (error.request) {
      setError("Network error. Please check your connection.");
    } else {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        {error && <p className="text-red-500 text-center mb-3">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mobile No."
          className="w-full p-2 border rounded mb-3"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
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

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border rounded mb-3"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded mb-2"
        >
          Register
        </button>

        <Link to="/login">
          <button
            type="button"
            className="w-full bg-gray-300 text-black p-2 rounded"
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Registration;
