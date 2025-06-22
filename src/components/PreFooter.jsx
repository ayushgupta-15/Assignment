"use client"

import { useState, useEffect } from "react"

export default function PreFooter() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      className="relative overflow-hidden text-white flex items-center justify-center"
      style={{
        width: "1440px",
        height: "480px",
        margin: "0 auto",
        backgroundColor: "#0A0914",
      }}
    >
      {/* Stars Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          width: "1389px",
          height: "803px",
          left: "calc(50% - 1389px/2 - 0.5px)",
          top: "-68px",
        }}
      >
        {/* Animated stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Left Pink Gradient Circle */}
      <div
        className="absolute rounded-full opacity-80"
        style={{
          width: "395.23px",
          height: "395.23px",
          left: "-213.32px",
          top: "-67.52px",
          background: "radial-gradient(circle, #FF6B9D 0%, #C44569 50%, rgba(196, 69, 105, 0) 100%)",
          transform: "rotate(-13.38deg)",
          filter: "blur(40px)",
        }}
      />

      {/* Right Orange Gradient Circle */}
      <div
        className="absolute rounded-full opacity-80"
        style={{
          width: "300px",
          height: "300px",
          right: "-100px",
          top: "50px",
          background: "radial-gradient(circle, #FF8A65 0%, #FF7043 50%, rgba(255, 112, 67, 0) 100%)",
          filter: "blur(30px)",
        }}
      />

      {/* Comet Element */}
      <div
        className="absolute opacity-60"
        style={{
          width: "140px",
          height: "140px",
          left: "1262px",
          top: "296px",
        }}
      >
        <div
          className="w-full h-full rounded-full animate-pulse"
          style={{
            background: "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%)",
            filter: "blur(20px)",
          }}
        />
      </div>

      {/* Blur Layer */}
      <div
        className="absolute opacity-40"
        style={{
          width: "208.52px",
          height: "199.84px",
          left: "19.52px",
          top: "128.01px",
          background: "radial-gradient(46.41% 46.41% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
          border: "28px solid rgba(255, 255, 255, 0.1)",
          filter: "blur(8px)",
          transform: "rotate(-4.37deg)",
          borderRadius: "50%",
        }}
      />

      {/* Main Content */}
      <div
        className={`text-center z-10 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Get started for free
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
          Build and test for as long as you need.
          <br />
          Pick a plan when you're ready.
        </p>

        <div className="flex gap-4 justify-center items-center">
          <button
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => console.log("Start free trial clicked")}
          >
            Start free trial
          </button>
          <button
            className="px-8 py-3 font-semibold rounded-lg text-white transition-all duration-300 hover:scale-105 hover:shadow-xl relative overflow-hidden group"
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            }}
            onClick={() => console.log("Schedule a demo clicked")}
          >
            <span className="relative z-10">Schedule a demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>

      {/* Additional floating elements for enhanced visual appeal */}
      <div
        className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-20 right-40 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-bounce"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-40 right-20 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-bounce"
        style={{ animationDelay: "1.5s" }}
      />
    </section>
  )
}
