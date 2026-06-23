import {
  Mic, FileText, Calendar, Plane, Mail, TrendingUp, CheckSquare,
  type LucideIcon,
} from "lucide-react";
import { FadeUp } from "./FadeUp";

type Sample = { title: string; icon: LucideIcon; description: string };

const samples: Sample[] = [
  {
    title: "Podcast Pitch Package",
    icon: Mic,
    description:
      "Secured podcast bookings for a pediatrician and parenting coach by researching relevant shows, crafting personalized pitches, and managing outreach. Deliverables included a curated podcast list, customized email pitches, and a tracking sheet, expanding the client's reach to a broader audience of parents and caregivers.",
  },
  {
    title: "SOP Development",
    icon: FileText,
    description:
      "Developed a comprehensive Standard Operating Procedure for a client, establishing clear guidelines for social media management, Substack newsletter creation, video editing, podcast management, and inbox and calendar management, streamlining processes and enhancing operational efficiency.",
  },
  {
    title: "Calendar Management",
    icon: Calendar,
    description:
      "Managed a client's schedule using Google Calendar, scheduling important meetings, blocking planning sessions, setting reminders for critical calls, and utilizing color-coding for easy event tracking, ensuring seamless organization and efficient time management.",
  },
  {
    title: "Travel Management",
    icon: Plane,
    description:
      "Planned a client's vacation and business trip, booking flights via Kayak, accommodations through Airbnb, and creating a detailed travel itinerary covering restaurant reservations, budget planning, and car rental services, ensuring a seamless, hassle-free experience.",
  },
  {
    title: "Email Management",
    icon: Mail,
    description:
      "Effectively managed a client's inbox by sorting, prioritizing, and responding to emails, creating filters and labels for streamlined organization, and setting up automated responses for frequently asked questions. Achieved significant reductions in inbox clutter and improved response time.",
  },
  {
    title: "Lead Generation",
    icon: TrendingUp,
    description:
      "Generated high-quality leads using Apollo.io for a fintech startup, increasing the sales pipeline by 25%. Researched and collected contact information of potential clients via Google and LinkedIn, and organized leads in Google Sheets for easy tracking.",
  },
  {
    title: "Project Management",
    icon: CheckSquare,
    description:
      "Planned and executed a high-end 200-guest wedding event with a $4,000 budget using Trello. Coordinated team and vendor communications via WhatsApp and Slack, and utilized Google Sheets for data tracking and Canva for visual materials.",
  },
];

export function Work() {
  return (
    <section id="work" className="px-5 py-16 md:px-6 md:py-24 dark:bg-[#0F0F0F]">
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <h2 className="text-center font-display text-3xl tracking-tight leading-tight text-[#D0302A] md:text-5xl">
            Work Samples
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-center text-[15px] text-[#555] dark:text-[#AAA] leading-relaxed">
            A few notable projects from my portfolio, showcasing my diverse skill set.
          </p>
        </FadeUp>

        {/* MOBILE: compact stacked cards */}
        <div className="mt-10 space-y-4 md:hidden">
          {samples.map((s, i) => {
            const Icon = s.icon;
            return (
              <FadeUp key={s.title}>
                <div className="rounded-2xl border border-[#EEEEEE] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-5 border-l-4 border-l-[#D0302A]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[#D0302A]/10 flex-shrink-0">
                      <Icon className="text-[#D0302A]" size={18} />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#D0302A]">
                      Project {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl text-[#111] dark:text-white mb-2">{s.title}</h3>
                  <p className="text-[14px] text-[#555] dark:text-[#AAA] leading-relaxed">{s.description}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>

        {/* DESKTOP: alternating layout */}
        <div className="mt-20 space-y-20 hidden md:block">
          {samples.map((s, i) => {
            const Icon = s.icon;
            const reversed = i % 2 === 1;
            return (
              <FadeUp key={s.title}>
                <div
                  className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                    reversed ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="rounded-2xl border-l-4 border-[#D0302A] bg-[#F5F5F5] dark:bg-[#1A1A1A] p-12 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                    <Icon size={44} className="mx-auto text-[#D0302A]" strokeWidth={1.5} />
                    <h3 className="mt-6 font-display text-2xl tracking-tight text-[#111] dark:text-white md:text-3xl">
                      {s.title}
                    </h3>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#D0302A]">
                      Project {String(i + 1).padStart(2, "0")}
                    </p>
                    <h4 className="mt-3 font-display text-2xl tracking-tight leading-tight text-[#111] dark:text-white md:text-3xl">
                      {s.title}
                    </h4>
                    <p className="mt-5 leading-relaxed text-[#555] dark:text-[#AAA]">{s.description}</p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
