import React from "react";
import { motion } from "framer-motion";
import { FaTshirt, FaShoppingBag, FaUserTie, FaCrown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Explore = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 overflow-hidden">
      {/* Subtle background image */}
      <div className="absolute inset-0 bg-[url('/fashion-pattern.png')] bg-cover bg-center opacity-10"></div>

      {/* Header Section */}
      <div className="relative z-10 text-center py-20 px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-purple-800 drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Your Style 🌟
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Dive into AI-powered fashion inspiration. Discover looks tailored to your mood, event, and personality.
        </motion.p>
      </div>

      {/* Category Cards */}
      <div className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-10 pb-24">
        {[
          {
            icon: <FaTshirt className="text-5xl text-purple-600 mb-4" />,
            title: "Casual Vibes",
            desc: "Everyday comfort meets modern style.",
            color: "from-purple-300 to-pink-200",
          },
          {
            icon: <FaUserTie className="text-5xl text-blue-600 mb-4" />,
            title: "Formal Fits",
            desc: "Dress to impress with tailored elegance.",
            color: "from-blue-200 to-purple-300",
          },
          {
            icon: <FaCrown className="text-5xl text-yellow-500 mb-4" />,
            title: "Party Glam",
            desc: "Sparkle and shine for your next big night.",
            color: "from-yellow-200 to-pink-300",
          },
          {
            icon: <FaShoppingBag className="text-5xl text-pink-600 mb-4" />,
            title: "Streetwear Edge",
            desc: "Bold, trendy, and effortlessly cool.",
            color: "from-pink-200 to-purple-300",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl bg-gradient-to-br ${item.color} p-8 text-center shadow-lg backdrop-blur-md hover:shadow-2xl transform transition-all`}
          >
            {item.icon}
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{item.title}</h3>
            <p className="text-gray-700 mb-4">{item.desc}</p>
            <Link
              to="/stylist"
              className="px-5 py-2 bg-white text-purple-700 rounded-full font-semibold shadow hover:bg-purple-600 hover:text-white transition-all"
            >
              Explore Now
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <motion.div
        className="relative z-10 text-center pb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-purple-800 mb-4">
          Ready for a Fashion Revolution?
        </h2>
        <p className="text-gray-700 mb-6">
          Let SnapStyle’s AI curate your next outfit in seconds.
        </p>
        <Link
          to="/Signup"
          className="bg-purple-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-500 transition-all duration-300 shadow-lg"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  );
};

export default Explore;
