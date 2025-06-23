/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full">
      {/* Mobile Navbar */}
      <div className="md:hidden">
        <div
          className="flex justify-between items-center absolute top-0 left-0"
          style={{
            width: "390px",
            height: "60px",
            padding: "12px 16px",
            gap: "158px",
          }}
        >
          {/* Mobile Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-white font-semibold"
              style={{
                fontFamily: "Satoshi Variable, sans-serif",
                fontSize: "16px",
                fontWeight: "600",
                color: "#FAFAFF",
              }}
            >
              cometchat
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3">
            {/* Login Link */}
            <button
              className="text-white transition-colors"
              style={{
                fontFamily: "Satoshi Variable, sans-serif",
                fontSize: "14px",
                fontWeight: "600",
                color: "#FAFAFF",
                opacity: "0.84",
                letterSpacing: "0.02em",
              }}
            >
              Login
            </button>

            {/* Dark Theme Toggle Button */}
            <button
              className="flex justify-center items-center rounded-lg transition-colors"
              style={{
                width: "40px",
                height: "36px",
                padding: "10px 12px",
                background: "rgba(250, 250, 255, 0.02)",
                border: "1px solid rgba(250, 250, 255, 0.1)",
                borderRadius: "10px",
              }}
            >
              {/* Moon Icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  opacity: "0.8",
                  color: "#FAFAFF",
                }}
              >
                <path
                  d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-white font-bold text-xl">
                cometchat
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center space-x-8">
              <a
                href="#platform"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Platform
              </a>
              <a
                href="#solutions"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Solutions
              </a>
              <a
                href="#developers"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Developers
              </a>
              <a
                href="#resources"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Resources
              </a>
              <a
                href="#pricing"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Pricing
              </a>
            </div>

            {/* Desktop Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Log in
              </button>
              <button className="relative px-4 py-2 bg-[#6852D6] text-white text-sm font-medium rounded-lg hover:bg-[#5B47C9] transition-colors overflow-hidden">
                <span className="relative z-10">Schedule a demo</span>
                {/* Button highlight effect */}
                <div
                  className="absolute w-8 h-8 -top-2 left-6 opacity-60"
                  style={{
                    background: "#D8D2F4",
                    filter: "blur(15px)",
                    borderRadius: "50%",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;