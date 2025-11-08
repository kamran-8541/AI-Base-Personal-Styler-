import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { Navbar } from "./component/NavBar";
const App = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen text-gray-900 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute mt-[10vh] inset-0 w-full h-full object-cover"
      >
        <source src="src/V1.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center  px-4">
          <h2 className="text-8xl absolute top-[40%] left-[5%]  font-semibold leading-tight">
            Your Virtual <br className="md:hidden" />{" "}
          </h2>
          <span className="font-light absolute top-[40%] right-[13%] text-5xl text-8xl font-semibold leading-tight">AI Stylist</span>
        </div>
      </div>
    </div>
  );
};

export default App;
