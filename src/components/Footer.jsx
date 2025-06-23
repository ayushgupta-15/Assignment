import { useState } from 'react';
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Github,
  Plus,
  Minus,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  DATA                                                              */
/* ------------------------------------------------------------------ */
const SECTIONS = [
  {
    title: 'Platform',
    groups: [
      {
        heading: 'Features',
        links: [
          'Chat & Messaging',
          'Voice & Video Calls',
          'Security & Compliance',
          'Extensions',
          'Features at a glance',
          'Webhooks & Bots',
          'Moderation',
          'Analytics & Insights',
        ],
      },
      { heading: 'Implementation', links: ['Widgets', 'UI Kits'] },
      { heading: 'Technologies', links: ['SDKs & APIs'] },
    ],
  },
  {
    title: 'Solutions',
    groups: [
      {
        heading: 'By Use cases',
        links: [
          'Social Community',
          'Marketplace',
          'Healthcare',
          'Education',
          'Virtual Events',
          'On-Demand Service',
          'Dating Apps',
          'Gaming',
        ],
      },
      { heading: 'By Organization Type', links: ['Enterprise', 'Startups'] },
    ],
  },
  {
    title: 'Developers',
    groups: [
      {
        heading: 'Technologies documentation',
        links: [
          'React',
          'Angular',
          'Vue',
          'iOS Swift',
          'Android Kotlin',
          'Android Java',
          'React Native',
          'Ionic/Capacitor',
          'WordPress',
          'Laravel/PHP',
          'Flutter',
          'Next.js',
        ],
      },
      {
        heading: 'Documentation',
        links: [
          'Product updates',
          'Tutorials',
          'Open-source Apps',
          'Product status',
          'Glossary',
        ],
      },
    ],
  },
  {
    title: 'Resources',
    groups: [
      {
        heading: '',
        links: [
          'Customer stories',
          'Give feedback',
          'Community forum',
          'Help center',
          'Partners',
        ],
      },
    ],
  },
  {
    title: 'Competitors',
    groups: [{ heading: '', links: ['SendBird', 'GetStream', 'Applozic', 'Twilio', 'PubNub'] }],
  },
  {
    title: 'Company',
    groups: [{ heading: '', links: ['About us', 'Careers', 'Partners', 'Pricing', 'Chat with us'] }],
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENT                                                         */
/* ------------------------------------------------------------------ */
export default function Footer() {
  /* open section indexes for the mobile accordion */
  const [open, setOpen] = useState(null);

  const toggle = (idx) => setOpen(open === idx ? null : idx);

  return (
    <footer className="bg-background text-gray-12 px-6 lg:px-20 py-16 text-[15px] tracking-wide">
      {/* ---------------------------------------------------------------- */}
      {/* LOGO                                                            */}
      {/* ---------------------------------------------------------------- */}
      <h2 className="mb-10 text-2xl font-bold select-none">
        comet<span className="font-extrabold">chat</span>
      </h2>

      {/* ---------------------------------------------------------------- */}
      {/*  DESKTOP (≥ md) : six-column grid                               */}
      {/* ---------------------------------------------------------------- */}
      <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 gap-10 mb-14">
        {SECTIONS.map(({ title, groups }) => (
          <div key={title}>
            <h3 className="mb-4 text-base font-semibold text-accent">{title}</h3>

            {groups.map(({ heading, links }) => (
              <div key={heading || links[0]} className="mb-3">
                {heading && <p className="mb-1 font-medium text-gray-400">{heading}</p>}

                <ul className="space-y-1">
                  {links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="block text-gray-300 hover:text-accent transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  MOBILE (< md) : accordion list                                 */}
      {/* ---------------------------------------------------------------- */}
      <div className="md:hidden space-y-4 mb-12">
        {SECTIONS.map(({ title, groups }, idx) => {
          const isOpen = open === idx;

          /* flatten links for compact mobile list */
          const flatLinks = groups.flatMap((g) => g.links);

          return (
            <div key={title} className="border-b border-white/10 pb-3">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center text-accent font-semibold py-2"
              >
                {title}
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </button>

              {isOpen && (
                <ul className="mt-3 space-y-2 pl-1">
                  {flatLinks.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="block text-gray-300 hover:text-accent transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  BOTTOM BAR                                                     */}
      {/* ---------------------------------------------------------------- */}
      <div className="border-t border-white/10 pt-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-[14px] font-semibold tracking-wide font-sans">
        {/* Left: Copyright and Legal Links */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-[#FAFAFF] text-center md:text-left">
          <p className="opacity-[0.74]">2023 © CometChat</p>
          <div className="flex justify-center gap-4 md:gap-6">
            <a href="#" className="opacity-[0.84] hover:opacity-100 transition-opacity">
              Terms of Use
            </a>
            <a href="#" className="opacity-[0.84] hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { name: "Facebook", Icon: Facebook },
            { name: "LinkedIn", Icon: Linkedin },
            { name: "Instagram", Icon: Instagram },
            { name: "Twitter", Icon: Twitter },
            { name: "GitHub", Icon: Github },
          ].map(({ name, Icon }, i) => (
            <a
              key={i}
              href="#"
              className="text-[#FAFAFF] opacity-[0.84] hover:opacity-100 p-2 rounded-full hover:bg-white/5 transition-all flex items-center gap-1"
            >
              <Icon size={18} />
              <span className="text-[14px] ">{name}</span> {/* Visible only on mobile */}
            </a>
          ))}
        </div>
      </div>

    </footer>
  );
}
