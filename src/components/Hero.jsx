import { useMemo } from "react";
import { FaEnvelope } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

/* helper: create X random star coords (only once) */
function useRandomStars(n = 120) {
  return useMemo(
    () =>
      Array.from({ length: n }, () => ({
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        size:
          Math.random() > 0.9
            ? 4
            : Math.random() > 0.7
              ? 3
              : Math.random() > 0.4
                ? 2
                : 1,
        color:
          Math.random() > 0.6
            ? "#6852D6"
            : Math.random() > 0.3
              ? "#54535B"
              : "#B968A4",
        brightness: Math.random() * 0.7 + 0.3,
      })),
    [n],
  );
}

export default function HeroSection() {
  const stars = useRandomStars();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0A0914] min-h-screen">
      {/* ======================== MOBILE VERSION (390px) ====================== */}
      <div className="block md:hidden">
        {/* Mobile Container */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-0"
          style={{
            width: "390px",
            height: "733px",
            background: "#0A0914",
          }}
        >
          {/* ======================== MOBILE BACKGROUND EFFECTS ====================== */}

          {/* Mobile Blur Effects */}
          <div
            className="absolute"
            style={{
              width: "761.68px",
              height: "266.33px",
              left: "-235.5px",
              top: "448.71px",
              background:
                "linear-gradient(285.43deg, rgba(148, 78, 110, 0.08) 37.49%, rgba(109, 53, 0, 0.048) 85.53%)",
              filter: "blur(43.843px)",
              transform: "matrix(0.99, -0.14, 0.12, 0.99, 0, 0)",
            }}
          />

          <div
            className="absolute"
            style={{
              width: "511.53px",
              height: "413px",
              left: "115.27px",
              top: "248.09px",
              background: "rgba(23, 35, 101, 0.6)",
              mixBlendMode: "soft-light",
              filter: "blur(58.4574px)",
              transform: "matrix(0.97, -0.24, 0.24, 0.97, 0, 0)",
            }}
          />

          <div
            className="absolute"
            style={{
              width: "754.93px",
              height: "333.7px",
              left: "-348.32px",
              top: "390.7px",
              background:
                "linear-gradient(285.43deg, rgba(148, 78, 110, 0.16) 37.49%, rgba(109, 53, 0, 0.096) 85.53%)",
              mixBlendMode: "screen",
              filter: "blur(43.843px)",
              transform: "matrix(0.97, -0.24, 0.24, 0.97, 0, 0)",
            }}
          />

          <div
            className="absolute"
            style={{
              width: "772.06px",
              height: "317.36px",
              left: "-106.61px",
              top: "413.71px",
              background: "rgba(29, 23, 101, 0.3)",
              filter: "blur(58.4574px)",
              transform: "matrix(0.97, -0.24, 0.24, 0.97, 0, 0)",
            }}
          />

          {/* ======================== MOBILE COMET OBJECTS ====================== */}

          {/* Mobile Comet 1 - Left Side */}
          <div
            className="absolute"
            style={{
              width: "120px",
              height: "120px",
              left: "-60px",
              top: "435px",
            }}
          >
            {/* Main comet gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(222.05deg, #FFE5D8 -18.07%, #FFD2BB -5.13%, #604BC5 86.41%)",
              }}
            />
            {/* Blur layers */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(222.05deg, #FFE5D8 -18.07%, #FFD2BB -5.13%, #604BC5 86.41%)",
                filter: "blur(45px)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(222.05deg, #FFE5D8 -18.07%, #FFD2BB -5.13%, #604BC5 86.41%)",
                filter: "blur(150px)",
              }}
            />
            {/* Highlight */}
            <div
              className="absolute"
              style={{
                left: "90.59%",
                right: "-31.17%",
                top: "40.35%",
                bottom: "26.71%",
                background: "#FBD3CD",
                filter: "blur(15.75px)",
                transform: "rotate(-180deg)",
              }}
            />
            {/* Shadow */}
            <div
              className="absolute"
              style={{
                left: "6.64%",
                right: "39.57%",
                top: "45.7%",
                bottom: "5.03%",
                background: "#604BC5",
                mixBlendMode: "multiply",
                opacity: "0.4",
                filter: "blur(37.5px)",
              }}
            />
          </div>

          {/* Mobile Comet 2 - Right Side */}
          <div
            className="absolute"
            style={{
              width: "200px",
              height: "200px",
              right: "-309.24px",
              top: "658.06px",
              transform: "matrix(-0.97, -0.26, -0.26, 0.97, 0, 0)",
            }}
          >
            {/* Main comet gradient */}
            <div
              className="absolute"
              style={{
                left: "122.47%",
                right: "-122.47%",
                top: "25.88%",
                bottom: "-25.88%",
                background:
                  "linear-gradient(227.49deg, #FCB8A8 1.76%, rgba(252, 184, 168, 0.12) 55.61%, rgba(252, 184, 168, 0) 72.49%), linear-gradient(55.5deg, #5343A5 15.38%, rgba(83, 67, 165, 0.05) 42.82%, rgba(83, 67, 165, 0) 53.67%), #B968A4",
                transform: "matrix(-0.97, -0.26, -0.26, 0.97, 0, 0)",
              }}
            />
            {/* Blur layers */}
            <div
              className="absolute"
              style={{
                left: "122.47%",
                right: "-122.47%",
                top: "25.88%",
                bottom: "-25.88%",
                background:
                  "linear-gradient(227.49deg, #FCB8A8 1.76%, rgba(252, 184, 168, 0.12) 55.61%, rgba(252, 184, 168, 0) 72.49%), linear-gradient(55.5deg, #5343A5 15.38%, rgba(83, 67, 165, 0.05) 42.82%, rgba(83, 67, 165, 0) 53.67%), #B968A4",
                filter: "blur(23.4375px)",
                transform: "matrix(-0.97, -0.26, -0.26, 0.97, 0, 0)",
              }}
            />
            <div
              className="absolute"
              style={{
                left: "122.47%",
                right: "-122.47%",
                top: "25.88%",
                bottom: "-25.88%",
                background:
                  "linear-gradient(227.49deg, #FCB8A8 1.76%, rgba(252, 184, 168, 0.12) 55.61%, rgba(252, 184, 168, 0) 72.49%), linear-gradient(55.5deg, #5343A5 15.38%, rgba(83, 67, 165, 0.05) 42.82%, rgba(83, 67, 165, 0) 53.67%), #B968A4",
                filter: "blur(78.1249px)",
                transform: "matrix(-0.97, -0.26, -0.26, 0.97, 0, 0)",
              }}
            />
            {/* Highlight */}
            <div
              className="absolute"
              style={{
                left: "21.89%",
                right: "37.52%",
                top: "40.71%",
                bottom: "26.36%",
                background: "#FFD2BB",
                filter: "blur(16.0156px)",
                transform: "matrix(0.97, 0.26, 0.26, -0.97, 0, 0)",
              }}
            />
            {/* Shadow */}
            <div
              className="absolute"
              style={{
                left: "105.06%",
                right: "-58.85%",
                top: "69.74%",
                bottom: "-19.01%",
                background: "#B968A4",
                mixBlendMode: "multiply",
                opacity: "0.4",
                filter: "blur(19.5312px)",
                transform: "matrix(-0.97, -0.26, -0.26, 0.97, 0, 0)",
              }}
            />
          </div>

          {/* ======================== MOBILE STAR FIELD ====================== */}

          {/* Mobile Stars - Simplified for performance */}
          <div
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ left: "50px", top: "150px", background: "#6852D6" }}
          />
          <div
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ left: "120px", top: "80px", background: "#B15324" }}
          />
          <div
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ left: "200px", top: "120px", background: "#B15324" }}
          />
          <div
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ left: "300px", top: "200px", background: "#B15324" }}
          />
          <div
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ left: "350px", top: "100px", background: "#B15324" }}
          />
          <div
            className="absolute w-[3px] h-[3px] rounded-full"
            style={{ left: "80px", top: "180px", background: "#45368D" }}
          />
          <div
            className="absolute w-[3px] h-[3px] rounded-full"
            style={{ left: "250px", top: "250px", background: "#45368D" }}
          />
          <div
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ left: "180px", top: "300px", background: "#6852D6" }}
          />
          <div
            className="absolute w-[3px] h-[3px] rounded-full"
            style={{ left: "100px", top: "400px", background: "#6852D6" }}
          />
          <div
            className="absolute w-[3px] h-[3px] rounded-full opacity-50"
            style={{ left: "320px", top: "350px", background: "#6852D6" }}
          />
          <div
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ left: "280px", top: "450px", background: "#6852D6" }}
          />
          <div
            className="absolute w-[3px] h-[3px] rounded-full"
            style={{ left: "150px", top: "500px", background: "#6852D6" }}
          />
          <div
            className="absolute w-[3px] h-[3px] rounded-full"
            style={{ left: "220px", top: "550px", background: "#6852D6" }}
          />
          <div
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ left: "60px", top: "600px", background: "#6852D6" }}
          />
          <div
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{ left: "340px", top: "580px", background: "#6852D6" }}
          />

          {/* ======================== MOBILE GRADIENTS ====================== */}

          {/* Bottom gradient */}
          <div
            className="absolute right-0 bottom-0"
            style={{
              width: "390px",
              height: "120px",
              background:
                "linear-gradient(180deg, rgba(10, 9, 20, 0) 0%, #0A0914 100%)",
            }}
          />

          {/* ======================== MOBILE CONTENT ====================== */}

          {/* Mobile Title */}
          <div
            className="absolute flex flex-col gap-3"
            style={{
              width: "349px",
              left: "20px",
              top: "100px",
            }}
          >
            <h1
              style={{
                fontFamily: "'Satoshi Variable'",
                fontWeight: "600",
                fontSize: "32px",
                lineHeight: "106%",
                color: "#FAFAFF",
              }}
            >
              Join the CometChat partner universe
            </h1>
            <p
              style={{
                fontFamily: "'Satoshi Variable'",
                fontWeight: "500",
                fontSize: "18px",
                lineHeight: "120%",
                letterSpacing: "0.005em",
                color: "#FAFAFF",
                opacity: "0.74",
              }}
            >
              Create value for your clients, leveraging our world-class
              technology. Partner with us and grow your business!
            </p>
          </div>

          {/* Mobile Form Container */}
          <div
            className="absolute"
            style={{
              width: "350px",
              height: "391px",
              left: "20px",
              top: "278px",
              background: "rgba(250, 250, 255, 0.08)",
              border: "1px solid rgba(250, 250, 255, 0.04)",
              backdropFilter: "blur(50px)",
              borderRadius: "24px",
              padding: "20px",
            }}
          >
            {/* Form Title */}
            <h2
              style={{
                fontFamily: "'Satoshi Variable'",
                fontWeight: "600",
                fontSize: "22px",
                lineHeight: "106%",
                color: "#FAFAFF",
                marginBottom: "24px",
              }}
            >
              Become a partner
            </h2>

            {/* Form Fields */}
            <div className="space-y-5">
              {/* Full Name Field */}
              <div className="flex flex-col gap-1.5">
                <label
                  style={{
                    fontFamily: "'Satoshi Variable'",
                    fontWeight: "640",
                    fontSize: "16px",
                    lineHeight: "112%",
                    letterSpacing: "0.005em",
                    color: "#FAFAFF",
                    opacity: "0.74",
                  }}
                >
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Type your name here…"
                  className="w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                  style={{
                    height: "44px",
                    background: "rgba(250, 250, 255, 0.02)",
                    border: "1px solid rgba(250, 250, 255, 0.1)",
                    borderRadius: "14px",
                    padding: "13px 16px",
                    fontFamily: "'Satoshi Variable'",
                    fontWeight: "640",
                    fontSize: "16px",
                    lineHeight: "112%",
                    letterSpacing: "0.005em",
                    color: "#FAFAFF",
                    opacity: "0.64",
                  }}
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-1.5">
                <label
                  style={{
                    fontFamily: "'Satoshi Variable'",
                    fontWeight: "640",
                    fontSize: "16px",
                    lineHeight: "112%",
                    letterSpacing: "0.005em",
                    color: "#FAFAFF",
                    opacity: "0.74",
                  }}
                >
                  Email address
                </label>
                <div className="relative flex items-center">
                  <FaEnvelope
                    className="absolute left-4 opacity-74"
                    size={16}
                    style={{ color: "#FAFAFF" }}
                  />
                  <input
                    type="email"
                    placeholder="Type your email…"
                    className="w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                    style={{
                      height: "44px",
                      background: "rgba(250, 250, 255, 0.02)",
                      border: "1px solid rgba(250, 250, 255, 0.1)",
                      borderRadius: "14px",
                      padding: "13px 16px 13px 48px",
                      fontFamily: "'Satoshi Variable'",
                      fontWeight: "640",
                      fontSize: "16px",
                      lineHeight: "112%",
                      letterSpacing: "0.005em",
                      color: "#FAFAFF",
                      opacity: "0.64",
                    }}
                  />
                </div>
              </div>

              {/* Company Field */}
              <div className="flex flex-col gap-1.5">
                <label
                  style={{
                    fontFamily: "'Satoshi Variable'",
                    fontWeight: "640",
                    fontSize: "16px",
                    lineHeight: "112%",
                    letterSpacing: "0.005em",
                    color: "#FAFAFF",
                    opacity: "0.74",
                  }}
                >
                  Companies name
                </label>
                <input
                  type="text"
                  placeholder="Type you company's name"
                  className="w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200"
                  style={{
                    height: "44px",
                    background: "rgba(250, 250, 255, 0.02)",
                    border: "1px solid rgba(250, 250, 255, 0.1)",
                    borderRadius: "14px",
                    padding: "13px 16px",
                    fontFamily: "'Satoshi Variable'",
                    fontWeight: "640",
                    fontSize: "16px",
                    lineHeight: "112%",
                    letterSpacing: "0.005em",
                    color: "#FAFAFF",
                    opacity: "0.64",
                  }}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              className="relative flex justify-center items-center mt-6 hover:bg-[#5B47C9] transition-all duration-200"
              style={{
                width: "157px",
                height: "44px",
                background: "#6852D6",
                borderRadius: "12px",
                padding: "12px 16px",
                border: "none",
                cursor: "pointer",
              }}
            >
              {/* Button Highlight */}
              <div
                className="absolute opacity-80"
                style={{
                  width: "40px",
                  height: "40px",
                  left: "50%",
                  top: "-15px",
                  transform: "translateX(-50%)",
                  background: "#D8D2F4",
                  filter: "blur(20px)",
                  borderRadius: "50%",
                }}
              />
              {/* Button Text */}
              <span
                className="relative z-10"
                style={{
                  fontFamily: "'Satoshi Variable'",
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "140%",
                  letterSpacing: "0.02em",
                  color: "#FCFCFE",
                }}
              >
                Submit application
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ======================== DESKTOP VERSION (hidden on mobile) ====================== */}
      <div className="hidden md:block">
        {/* ======================== BACKGROUND TEXTURE & MASKS ====================== */}
        <div className="absolute inset-0 w-full h-full bg-[#D9D9D9] opacity-0" />

        {/* ======================== LARGE BLUR EFFECTS ====================== */}
        <div
          className="absolute w-[1381px] h-[483px] -left-[60px] top-[348px] opacity-80"
          style={{
            background:
              "linear-gradient(285.43deg, rgba(148, 78, 110, 0.08) 37.49%, rgba(109, 53, 0, 0.048) 85.53%)",
            filter: "blur(43.843px)",
            transform: "matrix(0.99, -0.14, 0.12, 0.99, 0, 0)",
          }}
        />

        <div
          className="absolute w-[927px] h-[749px] left-[575px] -top-[15px]"
          style={{
            background: "rgba(23, 35, 101, 0.6)",
            mixBlendMode: "soft-light",
            filter: "blur(58.4574px)",
            transform: "matrix(0.97, -0.24, 0.24, 0.97, 0, 0)",
          }}
        />

        <div
          className="absolute w-[1369px] h-[605px] -left-[265px] top-[243px]"
          style={{
            background:
              "linear-gradient(285.43deg, rgba(148, 78, 110, 0.16) 37.49%, rgba(109, 53, 0, 0.096) 85.53%)",
            mixBlendMode: "screen",
            filter: "blur(43.843px)",
            transform: "matrix(0.97, -0.24, 0.24, 0.97, 0, 0)",
          }}
        />

        <div
          className="absolute w-[1400px] h-[575px] left-[173px] top-[285px]"
          style={{
            background: "rgba(29, 23, 101, 0.3)",
            filter: "blur(58.4574px)",
            transform: "matrix(0.97, -0.24, 0.24, 0.97, 0, 0)",
          }}
        />

        {/* ======================== COMET OBJECTS ====================== */}

        {/* Large Comet - Right Side (400px) */}
        <div
          className="absolute transform"
          style={{
            left: "1605.54px",
            top: "442.26px",
            width: "480px",
            height: "270px",
            transform: "matrix(-0.97, -0.26, -0.26, 0.97, 0, 0)",
          }}
        >
          {/* Comet head (circular) */}
          <div
            className="absolute"
            style={{
              right: "0px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, #FCB8A8 0%, #B968A4 60%, #5343A5 100%)",
              filter: "blur(3px)",
            }}
          />
          {/* Comet tail (elliptical) */}
          <div
            className="absolute"
            style={{
              right: "90px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "360px",
              height: "60px",
              borderRadius: "50%",
              background:
                "linear-gradient(90deg, rgba(252, 184, 168, 0.8) 0%, rgba(252, 184, 168, 0.4) 50%, rgba(252, 184, 168, 0) 100%)",
              filter: "blur(12px)",
            }}
          />
          {/* Blur layer 1 */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse 400px 200px at 80% 50%, rgba(252, 184, 168, 0.3) 0%, rgba(185, 104, 164, 0.2) 50%, transparent 80%)",
              filter: "blur(100px)",
            }}
          />
          {/* Blur layer 2 */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse 300px 150px at 80% 50%, rgba(252, 184, 168, 0.4) 0%, rgba(185, 104, 164, 0.3) 50%, transparent 80%)",
              filter: "blur(30px)",
            }}
          />
          {/* Highlight */}
          <div
            className="absolute"
            style={{
              right: "10px",
              top: "30%",
              width: "30px",
              height: "25px",
              borderRadius: "50%",
              background: "#FFD2BB",
              filter: "blur(20.5px)",
            }}
          />
          {/* Shadow */}
          <div
            className="absolute"
            style={{
              right: "-20px",
              bottom: "10%",
              width: "40px",
              height: "35px",
              borderRadius: "50%",
              background: "#B968A4",
              mixBlendMode: "multiply",
              opacity: "0.4",
              filter: "blur(25px)",
            }}
          />
        </div>

        {/* Medium Comet - Left Side (240px) */}
        <div
          className="absolute"
          style={{
            left: "168px",
            top: "467px",
            width: "300px",
            height: "180px",
          }}
        >
          {/* Comet head (circular) */}
          <div
            className="absolute"
            style={{
              left: "0px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "75px",
              height: "75px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 40% 40%, #FFB590 0%, #FF7F3E 50%, #45368D 100%)",
              filter: "blur(2px)",
            }}
          />
          {/* Comet tail (elliptical) */}
          <div
            className="absolute"
            style={{
              left: "60px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "225px",
              height: "45px",
              borderRadius: "50%",
              background:
                "linear-gradient(90deg, rgba(255, 181, 144, 0.7) 0%, rgba(255, 127, 62, 0.4) 50%, rgba(255, 127, 62, 0) 100%)",
              filter: "blur(6px)",
            }}
          />
          {/* Blur layer 1 */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse 250px 150px at 25% 50%, rgba(255, 181, 144, 0.4) 0%, rgba(69, 54, 141, 0.2) 70%, transparent 90%)",
              filter: "blur(200px)",
            }}
          />
          {/* Blur layer 2 */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse 180px 110px at 25% 50%, rgba(255, 181, 144, 0.5) 0%, rgba(69, 54, 141, 0.3) 70%, transparent 90%)",
              filter: "blur(60px)",
            }}
          />
          {/* Highlight */}
          <div
            className="absolute"
            style={{
              right: "10px",
              top: "30%",
              width: "20px",
              height: "15px",
              borderRadius: "50%",
              background: "#FFC1A1",
              filter: "blur(21px)",
            }}
          />
          {/* Shadow */}
          <div
            className="absolute"
            style={{
              left: "15px",
              bottom: "20%",
              width: "25px",
              height: "20px",
              borderRadius: "50%",
              background: "#45368D",
              mixBlendMode: "multiply",
              opacity: "0.3",
              filter: "blur(50px)",
            }}
          />
        </div>

        {/* Small Comet - Center (120px) */}
        <div
          className="absolute"
          style={{
            left: "694px",
            top: "478px",
            width: "150px",
            height: "90px",
          }}
        >
          {/* Comet head (circular) */}
          <div
            className="absolute"
            style={{
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 35% 35%, #FFE5D8 0%, #FFD2BB 50%, #604BC5 100%)",
              filter: "blur(1px)",
            }}
          />
          {/* Comet tail (elliptical) */}
          <div
            className="absolute"
            style={{
              right: "38px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "105px",
              height: "22px",
              borderRadius: "50%",
              background:
                "linear-gradient(90deg, rgba(255, 229, 216, 0.6) 0%, rgba(255, 210, 187, 0.3) 60%, rgba(255, 210, 187, 0) 100%)",
              filter: "blur(3px)",
            }}
          />
          {/* Blur layer 1 */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse 120px 80px at 70% 50%, rgba(255, 229, 216, 0.3) 0%, rgba(96, 75, 197, 0.2) 70%, transparent 90%)",
              filter: "blur(100px)",
            }}
          />
          {/* Blur layer 2 */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse 90px 60px at 70% 50%, rgba(255, 229, 216, 0.4) 0%, rgba(96, 75, 197, 0.3) 70%, transparent 90%)",
              filter: "blur(30px)",
            }}
          />
          {/* Highlight */}
          <div
            className="absolute"
            style={{
              right: "0px",
              top: "25%",
              width: "12px",
              height: "10px",
              borderRadius: "50%",
              background: "#FBD3CD",
              filter: "blur(10.5px)",
            }}
          />
          {/* Shadow */}
          <div
            className="absolute"
            style={{
              left: "8px",
              bottom: "15%",
              width: "15px",
              height: "12px",
              borderRadius: "50%",
              background: "#604BC5",
              mixBlendMode: "multiply",
              opacity: "0.4",
              filter: "blur(25px)",
            }}
          />
        </div>

        {/* Small Comet - Near Form (180px) */}
        <div
          className="absolute"
          style={{
            width: "210px",
            height: "120px",
            left: "-60px",
            top: "335px",
          }}
        >
          {/* Comet head (circular) */}
          <div
            className="absolute"
            style={{
              left: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, #FFE5D8 0%, #FFD2BB 40%, #604BC5 100%)",
              filter: "blur(2px)",
            }}
          />
          {/* Comet tail (elliptical) */}
          <div
            className="absolute"
            style={{
              left: "60px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "135px",
              height: "30px",
              borderRadius: "50%",
              background:
                "linear-gradient(90deg, rgba(255, 229, 216, 0.8) 0%, rgba(255, 210, 187, 0.4) 50%, rgba(255, 210, 187, 0) 100%)",
              filter: "blur(5px)",
            }}
          />
          {/* Blur layer 1 */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse 170px 100px at 30% 50%, rgba(255, 229, 216, 0.3) 0%, rgba(96, 75, 197, 0.2) 70%, transparent 90%)",
              filter: "blur(150px)",
            }}
          />
          {/* Blur layer 2 */}
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "50%",
              background:
                "radial-gradient(ellipse 120px 70px at 30% 50%, rgba(255, 229, 216, 0.4) 0%, rgba(96, 75, 197, 0.3) 70%, transparent 90%)",
              filter: "blur(45px)",
            }}
          />
          {/* Highlight */}
          <div
            className="absolute"
            style={{
              right: "5px",
              top: "30%",
              width: "18px",
              height: "15px",
              borderRadius: "50%",
              background: "#FBD3CD",
              filter: "blur(15.75px)",
            }}
          />
          {/* Shadow */}
          <div
            className="absolute"
            style={{
              left: "12px",
              bottom: "20%",
              width: "20px",
              height: "18px",
              borderRadius: "50%",
              background: "#604BC5",
              mixBlendMode: "multiply",
              opacity: "0.4",
              filter: "blur(37.5px)",
            }}
          />
        </div>

        {/* ======================== PLANET OBJECTS ====================== */}

        {/* Large Planet - Top Right */}
        <motion.div
          className="absolute left-[1244px] top-[188px] opacity-60"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative w-12 h-12">
            {/* Outer glow */}
            <div
              className="absolute w-[60px] h-[60px] -left-[6px] -top-[6px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(104, 82, 214, 0.6) 0%, rgba(104, 82, 214, 0.2) 50%, transparent 100%)",
                filter: "blur(22px)",
              }}
            />
            {/* Main planet with proper sphere shape */}
            <div
              className="absolute w-12 h-12 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 25% 25%, #FCB8A8 0%, #B968A4 40%, #756CF7 80%, #4A3B8C 100%)",
                boxShadow:
                  "inset -3px -3px 6px rgba(0, 0, 0, 0.3), inset 2px 2px 3px rgba(255, 255, 255, 0.1)",
              }}
            />
            {/* Surface highlights */}
            <div
              className="absolute w-3 h-3 rounded-full left-2 top-1"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)",
                filter: "blur(1px)",
              }}
            />
          </div>
        </motion.div>

        {/* Large Planet - Top Left */}
        <motion.div
          className="absolute left-[52px] top-[127px] opacity-20"
          animate={{
            rotate: [0, -360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="relative w-[75px] h-[75px]">
            {/* Outer glow */}
            <div
              className="absolute w-[90px] h-[90px] -left-[7px] -top-[7px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(104, 82, 214, 0.4) 0%, rgba(104, 82, 214, 0.1) 50%, transparent 100%)",
                filter: "blur(30px)",
              }}
            />
            {/* Main planet */}
            <div
              className="absolute w-[75px] h-[75px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #FCB8A8 0%, #B968A4 30%, #756CF7 70%, #4A3B8C 100%)",
                boxShadow:
                  "inset -6px -6px 12px rgba(0, 0, 0, 0.4), inset 3px 3px 6px rgba(255, 255, 255, 0.1)",
              }}
            />
            {/* Surface details */}
            <div
              className="absolute w-4 h-4 rounded-full left-4 top-3"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)",
                filter: "blur(1px)",
              }}
            />
            <div
              className="absolute w-3 h-3 rounded-full right-3 bottom-4"
              style={{
                background:
                  "radial-gradient(circle, rgba(185, 104, 164, 0.6) 0%, transparent 70%)",
              }}
            />
          </div>
        </motion.div>

        {/* Small Planet - Center Left */}
        <motion.div
          className="absolute left-[236px] top-[214px] opacity-40"
          animate={{
            rotate: [0, 360],
            y: [0, -5, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="relative w-[27px] h-[27px]">
            {/* Outer glow */}
            <div
              className="absolute w-[36px] h-[36px] -left-[4px] -top-[4px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(104, 82, 214, 0.5) 0%, rgba(104, 82, 214, 0.2) 50%, transparent 100%)",
                filter: "blur(12px)",
              }}
            />
            {/* Main planet */}
            <div
              className="absolute w-[27px] h-[27px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 25% 25%, #FCB8A8 0%, #B968A4 40%, #756CF7 80%, #4A3B8C 100%)",
                boxShadow:
                  "inset -2px -2px 3px rgba(0, 0, 0, 0.3), inset 1px 1px 2px rgba(255, 255, 255, 0.1)",
              }}
            />
            {/* Highlight */}
            <div
              className="absolute w-2 h-2 rounded-full left-2 top-1"
              style={{
                background: "rgba(255, 255, 255, 0.4)",
                filter: "blur(0.5px)",
              }}
            />
          </div>
        </motion.div>

        {/* Small Planet - Center */}
        <motion.div
          className="absolute left-[847px] top-[188px] opacity-40"
          animate={{
            rotate: [0, -360],
            x: [0, 3, 0],
          }}
          transition={{
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            x: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
        >
          <div className="relative w-[18px] h-[18px]">
            {/* Outer glow */}
            <div
              className="absolute w-[24px] h-[24px] -left-[3px] -top-[3px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(104, 82, 214, 0.5) 0%, rgba(104, 82, 214, 0.2) 50%, transparent 100%)",
                filter: "blur(8px)",
              }}
            />
            {/* Main planet */}
            <div
              className="absolute w-[18px] h-[18px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #FCB8A8 0%, #B968A4 40%, #756CF7 80%, #4A3B8C 100%)",
                boxShadow:
                  "inset -1px -1px 2px rgba(0, 0, 0, 0.3), inset 0.5px 0.5px 1px rgba(255, 255, 255, 0.1)",
              }}
            />
            {/* Surface feature */}
            <div
              className="absolute w-1 h-1 rounded-full right-1 top-1"
              style={{
                background: "rgba(255, 255, 255, 0.3)",
                filter: "blur(0.5px)",
              }}
            />
          </div>
        </motion.div>

        {/* Additional Planets */}
        {/* Medium Planet - Top Center */}
        <motion.div
          className="absolute left-[45%] top-[100px] opacity-50"
          animate={{
            rotate: [0, 360],
            y: [0, -8, 0],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 },
          }}
        >
          <div className="relative w-9 h-9">
            <div
              className="absolute w-[48px] h-[48px] -left-[6px] -top-[6px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(185, 104, 164, 0.4) 0%, rgba(185, 104, 164, 0.1) 50%, transparent 100%)",
                filter: "blur(18px)",
              }}
            />
            <div
              className="absolute w-9 h-9 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, #FF7F3E 0%, #B968A4 50%, #45368D 100%)",
                boxShadow:
                  "inset -2px -2px 4px rgba(0, 0, 0, 0.4), inset 1px 1px 3px rgba(255, 255, 255, 0.1)",
              }}
            />
          </div>
        </motion.div>

        {/* Small Planet - Right Side */}
        <motion.div
          className="absolute right-[15%] top-[250px] opacity-35"
          animate={{
            rotate: [0, -360],
            x: [0, 5, 0],
          }}
          transition={{
            rotate: { duration: 18, repeat: Infinity, ease: "linear" },
            x: {
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            },
          }}
        >
          <div className="relative w-4 h-4">
            <div
              className="absolute w-[20px] h-[20px] -left-[2px] -top-[2px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(117, 108, 247, 0.5) 0%, rgba(117, 108, 247, 0.2) 50%, transparent 100%)",
                filter: "blur(6px)",
              }}
            />
            <div
              className="absolute w-4 h-4 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, #756CF7 0%, #604BC5 60%, #251F7A 100%)",
                boxShadow: "inset -1px -1px 2px rgba(0, 0, 0, 0.3)",
              }}
            />
          </div>
        </motion.div>

        {/* Tiny Planet - Left Side */}
        <motion.div
          className="absolute left-[20%] top-[300px] opacity-45"
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            rotate: { duration: 14, repeat: Infinity, ease: "linear" },
            scale: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            },
          }}
        >
          <div className="relative w-3 h-3">
            <div
              className="absolute w-[16px] h-[16px] -left-[2px] -top-[2px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(252, 184, 168, 0.6) 0%, rgba(252, 184, 168, 0.2) 50%, transparent 100%)",
                filter: "blur(5px)",
              }}
            />
            <div
              className="absolute w-3 h-3 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 25% 25%, #FCB8A8 0%, #FF7F3E 70%, #604BC5 100%)",
              }}
            />
          </div>
        </motion.div>

        {/* Very Small Planet - Top Right */}
        <motion.div
          className="absolute right-[25%] top-[150px] opacity-40"
          animate={{
            rotate: [0, -360],
            y: [0, 4, 0],
          }}
          transition={{
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            y: {
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            },
          }}
        >
          <div className="relative w-2 h-2">
            <div
              className="absolute w-[12px] h-[12px] -left-[2px] -top-[2px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(104, 82, 214, 0.6) 0%, transparent 70%)",
                filter: "blur(4px)",
              }}
            />
            <div
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: "#6852D6",
              }}
            />
          </div>
        </motion.div>

        {/* Medium Planet - Bottom Left */}
        <motion.div
          className="absolute left-[10%] bottom-[200px] opacity-30"
          animate={{
            rotate: [0, 360],
            x: [0, -6, 0],
          }}
          transition={{
            rotate: { duration: 22, repeat: Infinity, ease: "linear" },
            x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 },
          }}
        >
          <div className="relative w-10 h-10">
            <div
              className="absolute w-[50px] h-[50px] -left-[5px] -top-[5px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(255, 127, 62, 0.4) 0%, rgba(255, 127, 62, 0.1) 50%, transparent 100%)",
                filter: "blur(22px)",
              }}
            />
            <div
              className="absolute w-10 h-10 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 25% 25%, #FFB590 0%, #FF7F3E 40%, #45368D 80%, #251F7A 100%)",
                boxShadow:
                  "inset -3px -3px 6px rgba(0, 0, 0, 0.4), inset 2px 2px 3px rgba(255, 255, 255, 0.1)",
              }}
            />
            <div
              className="absolute w-2 h-2 rounded-full left-2 top-1"
              style={{
                background: "rgba(255, 255, 255, 0.3)",
                filter: "blur(0.5px)",
              }}
            />
          </div>
        </motion.div>

        {/* ======================== ORBITAL RINGS ====================== */}
        <motion.div
          className="absolute w-[1211px] h-[260px] right-[-800px] top-[281px] opacity-30"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            transform: "matrix(-0.98, 0.18, 0.2, 0.98, 0, 0)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Additional smaller orbital ring */}
        <motion.div
          className="absolute w-[800px] h-[180px] right-[-600px] top-[320px] opacity-20"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "50%",
            transform: "matrix(-0.95, 0.25, 0.25, 0.95, 0, 0)",
          }}
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* ======================== SPECIAL EFFECTS ====================== */}

        {/* Heavy Blur Layer */}
        <div
          className="absolute w-[200px] h-[200px] right-[-150px] bottom-[100px]"
          style={{
            background:
              "radial-gradient(46.41% 46.41% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)",
            backgroundBlendMode: "multiply",
            border: "28px solid rgba(255, 255, 255, 0.1)",
            filter: "blur(8.32215px)",
            backdropFilter: "blur(8.32215px)",
            transform: "scaleX(-1)",
            borderRadius: "50%",
          }}
        />

        {/* Star Element */}
        <div
          className="absolute w-2 h-2 left-[96px] bottom-[100px]"
          style={{
            background: "#FAFAFF",
            transform: "rotate(-65.21deg)",
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
        />

        {/* ======================== VIGNETTE & GRADIENTS ====================== */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(270deg, #000000 -17.84%, rgba(0, 0, 0, 0) 11.68%), linear-gradient(270deg, rgba(0, 0, 0, 0) 90.82%, #000000 106.47%)",
            mixBlendMode: "soft-light",
          }}
        />

        {/* Bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-[233px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 9, 20, 0) 0%, #0A0914 100%)",
          }}
        />

        {/* Top gradient fade */}
        <div
          className="absolute inset-x-0 top-0 h-[102px]"
          style={{
            background:
              "linear-gradient(3.14deg, #0A0914 2.27%, rgba(10, 9, 20, 0) 97.07%)",
          }}
        />

        {/* ======================== RANDOM STARS ====================== */}
        {stars.map((s, i) => (
          <motion.div
            key={i}
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              backgroundColor: s.color,
            }}
            className="absolute rounded-full"
            animate={{
              opacity: [s.brightness * 0.4, s.brightness, s.brightness * 0.4],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: Math.random() * 4 + 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 6,
            }}
          />
        ))}

        {/* ======================== ADDITIONAL STAR CLUSTERS ====================== */}
        {/* Star cluster - Top area */}
        {Array.from({ length: 25 }, (_, i) => (
          <motion.div
            key={`cluster-top-${i}`}
            className="absolute rounded-full"
            style={{
              top: Math.random() * 25 + "%",
              left: Math.random() * 100 + "%",
              width: Math.random() > 0.8 ? 2 : 1,
              height: Math.random() > 0.8 ? 2 : 1,
              backgroundColor: Math.random() > 0.5 ? "#6852D6" : "#B968A4",
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}

        {/* Star cluster - Bottom area */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={`cluster-bottom-${i}`}
            className="absolute rounded-full"
            style={{
              bottom: Math.random() * 30 + "%",
              left: Math.random() * 100 + "%",
              width: Math.random() > 0.7 ? 2 : 1,
              height: Math.random() > 0.7 ? 2 : 1,
              backgroundColor: Math.random() > 0.4 ? "#54535B" : "#6852D6",
            }}
            animate={{
              opacity: [0.3, 0.9, 0.3],
              scale: [0.6, 1.2, 0.6],
            }}
            transition={{
              duration: Math.random() * 3.5 + 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* ======================= CONTENT WRAPPER ======================== */}
        <div className="mx-auto max-w-7xl px-6 lg:px-20 pb-24 flex flex-col lg:flex-row items-center justify-start gap-16 relative z-10 min-h-screen">
          {/* --------- Left text block --------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-xl space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-white">
              <span style={{ fontFamily: "Alata, sans-serif" }}>Join the</span>{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CometChat
              </span>{" "}
              <span>
                <p> partner universe</p>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed opacity-74">
              Create value for your clients, leveraging our world-class
              technology. Partner with us and grow your business!
            </p>
          </motion.div>

          {/* --------- Right glass form --------- */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.2 }}
            className="w-full max-w-md relative z-20"
            style={{
              background: "rgba(250, 250, 255, 0.08)",
              border: "1px solid rgba(250, 250, 255, 0.04)",
              backdropFilter: "blur(50px)",
              borderRadius: "24px",
              padding: "32px",
            }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              Become a partner
            </h2>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              {/* Full name */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300 font-medium opacity-74">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Type your name here…"
                  className="w-full rounded-xl py-3 px-4 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 opacity-64"
                  style={{
                    background: "rgba(250, 250, 255, 0.02)",
                    border: "1px solid rgba(250, 250, 255, 0.1)",
                    borderRadius: "14px",
                  }}
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300 font-medium opacity-74">
                  Email address
                </label>
                <div className="relative">
                  <FaEnvelope
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 opacity-74"
                    size={16}
                  />
                  <input
                    type="email"
                    placeholder="Type your email…"
                    className="pl-10 w-full rounded-xl py-3 pr-4 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 opacity-64"
                    style={{
                      background: "rgba(250, 250, 255, 0.02)",
                      border: "1px solid rgba(250, 250, 255, 0.1)",
                      borderRadius: "14px",
                    }}
                  />
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="text-sm text-gray-300 font-medium opacity-74">
                  Companies name
                </label>
                <input
                  type="text"
                  placeholder="Type you company's name"
                  className="w-full rounded-xl py-3 px-4 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 opacity-64"
                  style={{
                    background: "rgba(250, 250, 255, 0.02)",
                    border: "1px solid rgba(250, 250, 255, 0.1)",
                    borderRadius: "14px",
                  }}
                />
              </div>

              <button
                type="submit"
                className="relative w-full inline-flex justify-center items-center gap-2 py-3 px-4 font-semibold text-white transition-all duration-200 hover:bg-[#5B47C9]"
                style={{
                  background: "#6852D6",
                  borderRadius: "12px",
                }}
              >
                <span>Submit application</span>
                {/* Highlight effect */}
                <div
                  className="absolute w-10 h-10 -top-4 left-10 opacity-80"
                  style={{
                    background: "#D8D2F4",
                    filter: "blur(20px)",
                    borderRadius: "50%",
                  }}
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}