import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  questions & answers                                               */
/* ------------------------------------------------------------------ */
const faqs = [
  {
    question: 'How does your platform support in-app communication?',
    answer:
      'Our SDKs, APIs, and No-Code widgets help integrate chat, video, and messaging seamlessly within your app.',
  },
  {
    question: 'Is your product suitable for non-technical teams?',
    answer:
      'Absolutely. With our no-code tools, anyone can integrate and manage features without writing a single line of code.',
  },
  {
    question: 'Can we customize the components?',
    answer:
      'Yes, the UI kits and APIs are highly flexible and can be extended as per your branding or feature needs.',
  },
  {
    question: 'Do you offer analytics?',
    answer:
      'Yes, you can track usage metrics, chat engagement, and response time via our analytics dashboard.',
  },
  {
    question: 'What support options are available?',
    answer:
      'We offer 24/7 support, dedicated onboarding, and integration guidance depending on your plan.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);                // 1st item opened by default

  return (
    <section
      id="faq"
      className="relative w-full bg-[#FAFAFF] overflow-hidden px-4 sm:px-6 lg:px-0 py-16 sm:py-24"
    >
      {/* -------------------------------------------------------------- */}
      {/*   Decorative blurred blobs (hide on extra-small screens)      */}
      {/* -------------------------------------------------------------- */}
      <div className="hidden sm:block absolute w-[534px] h-[457px] top-48 -left-48 opacity-30 blur-[180px]  bg-gradient-to-br from-[#FCB8A8] via-[#B968A4] to-[#756CF7]" />
      <div className="hidden sm:block absolute w-[544px] h-[469px] -right-40  top-24 opacity-20 blur-[200px] bg-gradient-to-br from-[#FCB8A8] via-[#B968A4] to-[#756CF7]" />

      {/* -------------------------------------------------------------- */}
      {/*  Heading                                                      */}
      {/* -------------------------------------------------------------- */}
      <header className="relative z-10 text-center flex flex-col items-center gap-4 mb-12 sm:mb-16">
        <p className="text-[#FF7129] text-lg sm:text-xl font-semibold">FAQ’s</p>
        <h2 className="font-bold text-[#14131D] leading-tight max-w-xl text-3xl sm:text-4xl md:text-5xl">
          We want to help you with all your doubts
        </h2>
      </header>

      {/* -------------------------------------------------------------- */}
      {/*  Accordion list                                               */}
      {/* -------------------------------------------------------------- */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map(({ question, answer }, idx) => {
          const isOpen = open === idx;
          return (
            <div
              key={idx}
              className={`transition-all duration-300 border border-black/5 backdrop-blur
                          rounded-2xl sm:rounded-[24px]
                          ${isOpen ? 'bg-white/10' : 'bg-white/5'}`}
            >
              {/* toggle button */}
              <button
                onClick={() => setOpen(isOpen ? -1 : idx)}
                className="w-full flex items-center justify-between p-5 sm:p-6"
              >
                <h3
                  className="text-[#14131D] font-semibold text-base sm:text-lg md:text-xl text-left"
                >
                  {question}
                </h3>

                {isOpen ? (
                  <ChevronUp
                    size={22}
                    className="min-w-[22px] text-[#14131D] opacity-75"
                  />
                ) : (
                  <ChevronDown
                    size={22}
                    className="min-w-[22px] text-[#14131D] opacity-75"
                  />
                )}
              </button>

              {/* answer: height-animated using max-height trick */}
              <div
                className={`px-5 sm:px-6 overflow-hidden transition-[max-height,opacity] duration-300
                            ${isOpen ? 'max-h-96 opacity-100 pb-5 sm:pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-[#14131D]/75 text-sm sm:text-base leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
