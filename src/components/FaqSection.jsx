import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How does your platform support in-app communication?",
    answer:
      "Our SDKs, APIs, and No-Code widgets help integrate chat, video, and messaging seamlessly within your app.",
  },
  {
    question: "Is your product suitable for non-technical teams?",
    answer:
      "Absolutely. With our no-code tools, anyone can integrate and manage features without writing a single line of code.",
  },
  {
    question: "Can we customize the components?",
    answer:
      "Yes, the UI kits and APIs are highly flexible and can be extended as per your branding or feature needs.",
  },
  {
    question: "Do you offer analytics?",
    answer:
      "Yes, you can track usage metrics, chat engagement, and response time via our analytics dashboard.",
  },
  {
    question: "What support options are available?",
    answer:
      "We offer 24/7 support, dedicated onboarding, and integration guidance depending on your plan.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-[#FAFAFF] w-full px-6 lg:px-0 py-24 relative overflow-hidden">
      {/* Gradient Blurs */}
      <div className="absolute w-[534px] h-[457px] top-48 left-[-185px] opacity-30 blur-[180px] bg-gradient-to-br from-[#FCB8A8] via-[#B968A4] to-[#756CF7] z-0" />
      <div className="absolute w-[544px] h-[469px] top-24 right-[-100px] opacity-20 blur-[200px] bg-gradient-to-br from-[#FCB8A8] via-[#B968A4] to-[#756CF7] z-0" />

      {/* Heading */}
      <div className="relative z-10 text-center flex flex-col items-center gap-4 mb-16">
        <p className="text-[#FF7129] text-xl font-semibold">FAQ’s</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#14131D] max-w-xl">
          We want to help you with all your doubts
        </h2>
      </div>

      {/* FAQ List */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="bg-white/5 backdrop-blur border border-black/5 rounded-2xl p-6 transition-all duration-300"
            >
              <button
                className="flex justify-between items-center w-full"
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <h3 className="text-lg md:text-xl font-semibold text-[#14131D]">
                  {faq.question}
                </h3>
                {isOpen ? (
                  <ChevronUp className="text-[#14131D] opacity-75" />
                ) : (
                  <ChevronDown className="text-[#14131D] opacity-75" />
                )}
              </button>

              {isOpen && (
                <p className="mt-4 text-[#14131D] opacity-75 text-base leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
