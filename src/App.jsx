import React from "react";
import { FaTshirt, FaShoppingBag } from "react-icons/fa";
import { GiRocketFlight } from "react-icons/gi";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const App = () => {
  const navigate = useNavigate()
  return (
    <div className="relative min-h-screen text-gray-900 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="src/AdobeStock_499783221_Video_4K_Preview.mov" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">

        <nav className="flex justify-between items-center px-8 py-4 text-white">
          <h1 className="text-3xl font-extrabold drop-shadow-lg">SnapStyle</h1>
          <ul className="flex space-x-6 font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-pink-300 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                className="hover:text-pink-300 transition-all duration-300"
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-pink-300 transition-all duration-300"
              >
                About
              </Link>
            </li>
          </ul>
          <button
            className="flex items-center gap-2 border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300"
            onClick={() => navigate("/login")}
          >
            <AiOutlineLogin className="text-lg" /> Log In
          </button>
        </nav>


        <section className="flex flex-col md:flex-row justify-center items-center py-16 px-8">
          <div className="md:w-1/2 space-y-6 text-white">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
              Your Personal <br /> AI Stylist
            </h2>
            <div className="space-x-4">
              <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-pink-200 transition-all duration-300 shadow-lg hover:scale-105" onClick={() => navigate("/Signup")}>
                Sign In
              </button>
              <button className="border border-white px-6 py-3 rounded-full text-white font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 shadow-lg hover:scale-105" onClick={()=>navigate("/ExploreStylist")}>
                Explore Stylist
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="w-64 h-64 bg-white/60 rounded-full flex items-center justify-center animate-bounce">
              <span className="text-purple-700 font-semibold text-xl">👗 Fashion AI</span>
            </div>
          </div>
        </section>


        <section className="grid md:grid-cols-3 gap-8 px-8 pb-20 text-center">
          <div className="p-6 rounded-2xl bg-white/70 shadow-lg backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-2xl">
            <FaTshirt className="text-5xl text-purple-700 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Daily Outfit Recommendations</h3>
            <p className="text-gray-800">Save time deciding what to wear 👕</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 shadow-lg backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-2xl">
            <GiRocketFlight className="text-5xl text-purple-700 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Occasion-Based Styling</h3>
            <p className="text-gray-800">Party, casual, or office looks 💃</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/70 shadow-lg backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-2xl">
            <FaShoppingBag className="text-5xl text-purple-700 mx-auto mb-3" />
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Smart Shopping Suggestions</h3>
            <p className="text-gray-800">Fill wardrobe gaps 🛍️</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
