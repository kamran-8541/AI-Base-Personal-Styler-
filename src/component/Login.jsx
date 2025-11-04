import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="src/component/AdobeStock_1737972709_Video_4K_Preview.mov" type="video/mp4" />
      </video>

    
      <div className="absolute inset-0 bg-black/50"></div>

      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center text-white"
      >
        <h2 className="text-3xl font-bold mb-6">Welcome Back 👋</h2>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white text-purple-700 font-semibold py-2 rounded-lg hover:bg-pink-200 transition-all"
          >
            Login
          </motion.button>
        </form>

        <p className="mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold hover:text-yellow-200 transition-all"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
