// src/components/PreFooter.jsx
import { useMemo } from 'react';

/* quick helper – sprinkle some tiny stars */
const useStars = (count = 25) =>
  useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        left: Math.random() * 100 + '%',
        top: Math.random() * 100 + '%',
        size: Math.random() > 0.7 ? 3 : 2,
        color: Math.random() > 0.6 ? '#6852D6' : Math.random() > 0.3 ? '#B15324' : 'rgba(250,250,255,.5)',
      })),
    [count]
  );

export default function PreFooter() {
  const stars = useStars();

  return (
    <section className="relative isolate overflow-hidden bg-background w-full">
      {/* ---------- decorative planets / blobs ---------- */}
      {/* big pink-purple planet (top-left on desktop, hidden on xs) */}
      <div
        className="hidden sm:block absolute -left-40 -top-40 w-[420px] h-[420px] rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #FCB8A8 0%, #B968A4 45%, #756CF7 75%)',
          opacity: 0.6,
        }}
      />
      {/* orange/purple planet (bottom-right) – smaller on phones  */}
      <div
        className="absolute right-4 sm:right-24 bottom-4 sm:bottom-12 w-28 h-28 sm:w-40 sm:h-40 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, #FFB590 0%, #FF7F3E 50%, #45368D 100%)',
          opacity: 0.8,
        }}
      />

      {/* ---------- faint orbital ring (desktop only) ---------- */}
      <div
        className="hidden lg:block absolute inset-0 pointer-events-none"
        style={{
          background: 'transparent',
          borderTop: '1px solid rgba(255,255,255,.04)',
          borderRadius: '50%',
          transform: 'translateY(-40%)',
        }}
      />

      {/* ---------- star field ---------- */}
      {stars.map((s, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{ left: s.left, top: s.top, width: s.size, height: s.size, background: s.color }}
        />
      ))}

      {/* ---------- gradient vignette top / bottom ---------- */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0A0914] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0A0914] to-transparent pointer-events-none" />

      {/* ---------- MAIN CONTENT ---------- */}
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-0 py-20 sm:py-28 text-center">
        <h2 className="text-[32px] sm:text-5xl font-semibold leading-tight text-gray-12 mb-6">
          Get started for free
        </h2>
        <p className="text-lg sm:text-xl text-gray-12/75 max-w-lg mx-auto mb-10">
          Build and test for as long as you need. Pick a plan when you're ready.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* outline button */}
          <button className="px-6 py-3 rounded-xl border border-white/10 text-sm font-semibold text-gray-12 hover:bg-white/5 transition-colors">
            Start free trial
          </button>

          {/* filled / gradient button with glow */}
          <button className="relative px-6 py-3 rounded-xl bg-[#6852D6] text-sm font-semibold text-white hover:bg-[#5b47c9] transition-colors overflow-hidden">
            <span className="relative z-10">Schedule a demo</span>
            {/* glow */}
            <div
              className="absolute -left-4 -top-4 w-16 h-16 bg-[#D8D2F4] opacity-70 blur-xl"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
