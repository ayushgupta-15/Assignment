import { Scale, Coins, GraduationCap, Code2, Clock, BarChart3, BookOpen, HelpCircle, HandCoins } from "lucide-react"

const benefits = [
  {
    icon: Scale,
    title: "Free credits",
    description: "Empowering partners to scale.",
  },
  {
    icon: Coins,
    title: "Revenue share",
    description: "Get monthly recurring revenues when you refer clients.",
  },
  {
    icon: GraduationCap,
    title: "Training and mentoring sessions",
    description: "Enabling partners to deliver the best experience.",
  },
  {
    icon: Code2,
    title: "Special developer access",
    description: "Get an all-access account to build unlimited PoCs for your clients.",
  },
  {
    icon: Clock,
    title: "Reduced time",
    description: "Deliver your products much faster with our partners' programs.",
  },
  {
    icon: BarChart3,
    title: "Value addition to your users",
    description: "We need a 2 line text here",
  },
  {
    icon: BookOpen,
    title: "Knowledge sessions",
    description: "Access to product and market sessions.",
  },
  {
    icon: HelpCircle,
    title: "On-demand support",
    description: "Technical assistance for implementation.",
  },
  {
    icon: HandCoins,
    title: "Significant passive income",
    description: "We need a 2 line text here",
  },
]

export default function BenefitsSection() {
  return (
    <section className="px-16 py-12 pb-20" style={{ backgroundColor: "#0A0914" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col gap-3">
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255, 127, 62, 0.12)" }}
              >
                <benefit.icon size={18} style={{ color: "#FF7F3E" }} />
              </div>

              {/* Title and Description */}
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold leading-tight" style={{ color: "#FAFAFF" }}>
                  {benefit.title}
                </h3>
                <p
                  className="text-lg leading-relaxed"
                  style={{
                    color: "#FAFAFF",
                    opacity: 0.74,
                    letterSpacing: "0.005em",
                  }}
                >
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
