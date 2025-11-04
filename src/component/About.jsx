import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaUserAlt, FaLightbulb, FaHeart } from "react-icons/fa";

const About = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-purple-100 to-pink-50 text-gray-800 overflow-hidden">
      {/* Background video overlay */}
      <div className="absolute inset-0 bg-[url('/fashion-bg.jpg')] bg-cover bg-center opacity-10"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 space-y-12">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-purple-700 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About <span className="text-pink-500">SnapStyle</span>
        </motion.h1>

        <motion.p
          className="max-w-3xl text-lg md:text-xl text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          SnapStyle is your personal <span className="text-purple-700 font-semibold">AI-powered stylist</span>.
          We help you discover outfits that match your mood, occasion, and personality —
          turning fashion into a smart and effortless experience.
        </motion.p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 px-4">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <FaRobot className="text-5xl text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-purple-700">AI-Powered Fashion</h3>
            <p className="text-gray-700">
              Our advanced AI analyzes styles and trends to give you personalized outfit recommendations.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <FaUserAlt className="text-5xl text-pink-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-pink-600">Personalized for You</h3>
            <p className="text-gray-700">
              Every recommendation is tailored to your preferences, body type, and lifestyle.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <FaLightbulb className="text-5xl text-yellow-500 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-3 text-yellow-600">Smart Styling Ideas</h3>
            <p className="text-gray-700">
              From party looks to everyday wear, SnapStyle keeps your wardrobe fresh and inspiring.
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="mt-16 text-lg md:text-xl text-gray-700 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <FaHeart className="text-3xl text-pink-500 mx-auto mb-4" />
          <p>
            We believe fashion is more than just clothing — it’s a way to express yourself.
            SnapStyle empowers you to look and feel your best, every single day.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
