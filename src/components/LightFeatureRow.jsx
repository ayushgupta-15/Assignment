import {
  CheckCircle2,       // closest to “check-verified”
  CodeSquare,
  SunMedium,          // closest to “sun-setting-01”
} from "lucide-react"

const CARDS = [
  {
    icon: CheckCircle2,
    title: "Affiliate partner program",
    desc:
      "Bring value to your customers with a world-class in-app messaging solution. Earn commissions for every customer you refer to CometChat.",
  },
  {
    icon: CodeSquare,
    title: "Technology partner program",
    desc:
      "Development teams can use our plug and play user-solution to-build-top-ela chat-solutions for -- their clients using our SDKs and APIs. It's simple, safe and secure!",
  },
  {
    icon: SunMedium,
    title: "Start up growth program",
    desc:
      "We help incubators, accelerators, co-working --space that foster an ecosystem of start-ups. This program also enables VCs to accelerate the growth of their portfolio companies.",
  },
]

export default function LightFeatureRow() {
  return (
    <section className="w-full bg-[#FAFAFF] px-16 py-12">
      <div className="flex flex-col lg:flex-row gap-16 max-w-[1312px] mx-auto">
        {CARDS.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col gap-3 max-w-[395px]">
            {/* icon bubble */}
            <div className="w-9 h-9 rounded-full bg-[#6852D61F] flex items-center justify-center">
              {Icon && <Icon size={18} className="text-[#6852D6]" />}
            </div>

            {/* title + text */}
            <h4 className="text-lg font-semibold text-[#14131D]">{title}</h4>
            <p className="text-[#14131D] text-base leading-[120%] opacity-75">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}