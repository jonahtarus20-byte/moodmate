import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info
      const user = result.user;

      // Save user data in localStorage
      localStorage.setItem("user", JSON.stringify({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }));

      // Redirect to profile page
      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error);
      alert("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80 text-center">
        <h1 className="text-2xl font-bold mb-6 text-blue-700">Welcome to MoodMate</h1>
        <p className="text-gray-600 mb-4">Sign in to continue</p>
        <button
          onClick={handleLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
