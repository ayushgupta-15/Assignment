import { Facebook, Linkedin, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  const sections = [
    {
      title: "Platform",
      subsections: [
        {
          heading: "Features",
          links: [
            "Chat & Messaging",
            "Voice & Video Calls",
            "Security & Compliance",
            "Extensions",
            "Features at a glance",
            "Webhooks & Bots",
            "Moderation",
            "Analytics & Insights",
          ],
        },
        {
          heading: "Implementation",
          links: ["Widgets", "UI Kits"],
        },
        {
          heading: "Technologies",
          links: ["SDKs & APIs"],
        },
      ],
    },
    {
      title: "Solutions",
      subsections: [
        {
          heading: "By Use Cases",
          links: [
            "Social Community",
            "Marketplace",
            "Healthcare",
            "Education",
            "Virtual Events",
            "On-Demand Service",
            "Dating Apps",
            "Gaming",
          ],
        },
        {
          heading: "By Organization Type",
          links: ["Enterprise", "Startups"],
        },
      ],
    },
    {
      title: "Developers",
      subsections: [
        {
          heading: "Technologies documentation",
          links: [
            "React",
            "Angular",
            "Vue",
            "iOS Swift",
            "Android Kotlin",
            "Android Java",
            "React Native",
            "Ionic/Capacitor",
            "WordPress",
            "Laravel/PHP",
            "Flutter",
            "Next.js",
          ],
        },
        {
          heading: "Documentation",
          links: [
            "Product updates",
            "Tutorials",
            "Open-source Apps",
            "Product status",
            "Glossary",
          ],
        },
      ],
    },
    {
      title: "Resources",
      subsections: [
        {
          heading: "",
          links: [
            "Customer stories",
            "Give feedback",
            "Community forum",
            "Help center",
            "Partners",
          ],
        },
      ],
    },
    {
      title: "Competitors",
      subsections: [
        {
          heading: "",
          links: ["SendBird", "GetStream", "Applozic", "Twilio", "PubNub"],
        },
      ],
    },
    {
      title: "Company",
      subsections: [
        {
          heading: "",
          links: ["About us", "Careers", "Partners", "Pricing", "Chat with us"],
        },
      ],
    },
  ];

  return (
    <footer className="bg-background text-white px-6 lg:px-20 py-14 text-sm tracking-wide">
      {/* Logo */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white">
          comet<span className="font-extrabold">chat</span>
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-12 text-[15px]">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-accent font-semibold text-base mb-4">{section.title}</h3>
            {section.subsections.map((sub, i) => (
              <div key={i} className="mb-3">
                {sub.heading && <p className="text-gray-400 font-medium mb-1">{sub.heading}</p>}
                <ul className="space-y-1">
                  {sub.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-gray-300 hover:text-accent transition-colors block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px]">
        <div className="flex gap-6 items-center">
          <p className="text-gray-400">
            2023 © comet<span className="font-bold text-white">chat</span>
          </p>
          <a href="#" className="hover:text-accent text-gray-400">Terms of Use</a>
          <a href="#" className="hover:text-accent text-gray-400">Privacy Policy</a>
        </div>

        <div className="flex gap-4">
          {[Facebook, Linkedin, Instagram, Twitter, Github].map((Icon, i) => (
            <a
              href="#"
              key={i}
              className="text-gray-400 hover:text-accent p-2 rounded-full hover:bg-white/5 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
