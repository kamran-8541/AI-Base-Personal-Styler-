import React from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
    return <>
        <nav className="flex justify-between bg-[#f2f2f2] shadow-[0_4px_40px_0_rgba(255,255,255,0.15)] items-center px-10 py-6 text-black">
            <div className="flex justify-center items-center gap-[50px]">
                <h1 className="text-3xl font-extrabold">
                    SnapStyle
                </h1>
                <ul className="flex space-x-8 font-medium text-xl mt-2">
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
                            About Us
                        </Link>
                    </li>
                </ul>
            </div>
            <button
                className="flex bg-black items-center gap-2 border  px-5 py-2 rounded-full  hover:text-purple-600 transition-all duration-300"
                onClick={() => navigate("/login")}
            >
                <AiOutlineLogin className="text-lg text-white " /> <p className="text-white">Log In</p>
            </button>
        </nav>
    </>
}