import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-xl">
              cometchat
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
          <div className="hidden md:flex items-center space-x-4">
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[#0A0914]/95 backdrop-blur-lg border border-white/10 rounded-lg mx-6 p-4"
          >
            <div className="flex flex-col space-y-4">
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
              <hr className="border-white/10" />
              <button className="text-white/80 hover:text-white transition-colors text-sm font-medium text-left">
                Log in
              </button>
              <button className="w-full px-4 py-2 bg-[#6852D6] text-white text-sm font-medium rounded-lg hover:bg-[#5B47C9] transition-colors">
                Schedule a demo
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
