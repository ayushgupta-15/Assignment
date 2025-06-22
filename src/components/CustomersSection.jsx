"use client";
import { useEffect, useState } from "react";

export default function CustomersSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  /* Images must live in  /public/logos/  */
  const logos = [
    { name: "AWS", src: "/logos/aws.svg", width: 60, height: 32 },
    { name: "10x Genomics", src: "/logos/10x.svg", width: 120, height: 28 },
    { name: "Microsoft", src: "/logos/microsoft.svg", width: 132, height: 28 },
    { name: "NASSCOM®", src: "/logos/nasscom.svg", width: 122, height: 28 },
    { name: "techstars_", src: "/logos/techstars.svg", width: 115, height: 26 },
    { name: "tekno point", src: "/logos/tekno.svg", width: 146, height: 30 },
    { name: "cisco.", src: "/logos/cisco.svg", width: 78, height: 30 },
    { name: "TRINX", src: "/logos/trinx.svg", width: 40, height: 32 },
    { name: "haker", src: "/logos/haker.svg", width: 60, height: 32 },
  ];

  /* duplicate the array so the track can scroll seamlessly */
  const marqueeLogos = [...logos, ...logos];

  return (
    <section className="relative flex flex-col items-center bg-background py-16">
      {/* ----- title ----- */}
      

      {/* ----- marquee wrapper ----- */}
      <div
        className={`marquee-paused w-full overflow-hidden no-scrollbar transition-all duration-700 ${
          isVisible ? "opacity-60 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="animate-marquee flex gap-20 md:gap-24 lg:gap-28 w-max">
          {marqueeLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`} /* use index to keep duplicates unique */
              className="flex-shrink-0 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              style={{ width: logo.width, height: logo.height }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ----- subtle blobs / dots (optional) ----- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-indigo-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
    </section>
  );
}
