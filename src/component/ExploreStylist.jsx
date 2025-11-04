import React from "react";
import { motion } from "framer-motion";
import { FaTshirt, FaUserTie, FaUmbrellaBeach, FaGlassCheers } from "react-icons/fa";

const ExploreStylist = () => {
  const outfits = [
    {
      title: "Casual Chic",
      desc: "Pastel T-shirt with white sneakers and denim jeans.",
      icon: <FaTshirt className="text-4xl text-purple-700 mb-4" />,
      mood: "Everyday Comfort",
      color: "from-pink-100 to-purple-200",
    },
    {
      title: "Office Elegance",
      desc: "Crisp blazer, formal shirt and tailored trousers.",
      icon: <FaUserTie className="text-4xl text-indigo-700 mb-4" />,
      mood: "Professional Vibes",
      color: "from-blue-100 to-indigo-200",
    },
    {
      title: "Vacation Mode",
      desc: "Light linen shirt, shorts and sunglasses for sunny days.",
      icon: <FaUmbrellaBeach className="text-4xl text-orange-600 mb-4" />,
      mood: "Beach Relaxation",
      color: "from-yellow-100 to-orange-200",
    },
    {
      title: "Evening Glam",
      desc: "Shimmer dress with elegant heels and pearl accessories.",
      icon: <FaGlassCheers className="text-4xl text-pink-600 mb-4" />,
      mood: "Party Ready",
      color: "from-rose-100 to-pink-200",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4 drop-shadow-md">
          Explore Your Virtual Wardrobe
        </h1>
        <p className="text-gray-600 text-lg">
          Discover AI-curated outfits designed to match your mood, style, and occasion ✨
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {outfits.map((item, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-3xl shadow-xl bg-gradient-to-br ${item.color} backdrop-blur-md hover:scale-105 hover:shadow-2xl transition-all duration-300`}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col items-center text-center">
              {item.icon}
              <h2 className="text-2xl font-semibold text-purple-800 mb-2">{item.title}</h2>
              <p className="text-gray-700 mb-3">{item.desc}</p>
              <span className="text-sm font-medium text-gray-500 mb-5">
                {item.mood}
              </span>
              <button className="px-6 py-2 bg-purple-700 text-white rounded-full hover:bg-pink-500 transition-all duration-300">
                Try This Look
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 bg-gradient-to-r from-purple-700 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
          >
          Start Styling
        </motion.button>
      </div>
    </div>
  );
};

export default ExploreStylist;
