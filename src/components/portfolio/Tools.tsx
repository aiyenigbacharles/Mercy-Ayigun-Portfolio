import { useRef, useEffect } from "react";
import { FadeUp } from "./FadeUp";

const tools = [
  { name: "Canva", logo: "/logos/canva.png" },
  { name: "Substack", logo: "/logos/substack.png" },
  { name: "Spark", logo: "/logos/spark.png" },
  { name: "Apollo.io", logo: "/logos/apollo.png" },
  { name: "Clockify", logo: "/logos/clockify.png" },
  { name: "CapCut", logo: "/logos/capcut.jpg" },
  { name: "ClickUp", logo: "/logos/clickup.png" },
  { name: "Freshdesk", logo: "/logos/freshdesk.png" },
  { name: "LastPass", logo: "/logos/lastpass.png" },
  { name: "Google Docs", logo: "/logos/google-docs.jpg" },
  { name: "Google Calendar", logo: "/logos/google-calendar.png" },
  { name: "Dropbox", logo: "/logos/dropbox.png" },
  { name: "Calendly", logo: "/logos/calendly.jpg" },
  { name: "Airtable", logo: "/logos/airtable.png" },
  { name: "Notion", logo: "https://cdn.worldvectorlogo.com/logos/notion-2.svg" },
  { name: "Slack", logo: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
  { name: "Trello", logo: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
  { name: "Asana", logo: "https://cdn.worldvectorlogo.com/logos/asana-1.svg" },
  { name: "Zoom", logo: "https://cdn.worldvectorlogo.com/logos/zoom-app.svg" },
  { name: "Zapier", logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg" },
  { name: "Google Drive", logo: "https://cdn.worldvectorlogo.com/logos/google-drive.svg" },
  { name: "Gmail", logo: "https://cdn.worldvectorlogo.com/logos/gmail-icon.svg" },
  { name: "Google Sheets", logo: "https://cdn.worldvectorlogo.com/logos/google-sheets-logo-icon.svg" },
  { name: "Microsoft 365", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-office-2013.svg" },
  { name: "Microsoft Teams", logo: "https://cdn.worldvectorlogo.com/logos/microsoft-teams-1.svg" },
  { name: "Instagram", logo: "https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg" },
  { name: "LinkedIn", logo: "https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg" },
  { name: "ChatGPT", logo: "https://cdn.worldvectorlogo.com/logos/chatgpt-6.svg" },
  { name: "Monday.com", logo: "https://cdn.worldvectorlogo.com/logos/monday-1.svg" },
];

const row1 = tools.slice(0, Math.ceil(tools.length / 2));
const row2 = tools.slice(Math.ceil(tools.length / 2));

function ToolCard({ tool }: { tool: { name: string; logo: string } }) {
  return (
    <div
      style={{ width: "112px", height: "112px", flexShrink: 0 }}
      className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-[#EEEEEE] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-[#D0302A] dark:hover:border-[#D0302A] cursor-default select-none mx-2"
    >
      <div className="relative h-12 w-12 flex items-center justify-center">
        <img
          src={tool.logo}
          alt={tool.name}
          className="h-12 w-12 object-contain"
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = "none";
            const fb = img.nextElementSibling as HTMLElement | null;
            if (fb) fb.style.display = "flex";
          }}
        />
        <div
          style={{ display: "none" }}
          className="absolute inset-0 h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-[#2A2A2A] text-[#D0302A] font-bold text-lg"
        >
          {tool.name.charAt(0)}
        </div>
      </div>
      <span className="text-[11px] font-medium text-[#555] dark:text-[#999] text-center leading-tight px-1">
        {tool.name}
      </span>
    </div>
  );
}

function useMarquee(ref: React.RefObject<HTMLDivElement | null>, speed: number, direction: "left" | "right") {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = direction === "right" ? -el.scrollWidth / 2 : 0;
    let paused = false;
    let rafId: number;

    const step = () => {
      if (!paused) {
        if (direction === "left") {
          x -= speed;
          if (x <= -el.scrollWidth / 2) x = 0;
        } else {
          x += speed;
          if (x >= 0) x = -el.scrollWidth / 2;
        }
        el.style.transform = `translateX(${x}px)`;
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);

    const pause = () => { paused = true; };
    const resume = () => { paused = false; };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, [ref, speed, direction]);
}

function MarqueeRow({ items, direction = "left", speed = 0.5 }: {
  items: typeof tools;
  direction?: "left" | "right";
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  useMarquee(trackRef, speed, direction);

  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full py-2">
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10"
        style={{ background: "linear-gradient(to right, var(--fade-from, white), transparent)" }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10"
        style={{ background: "linear-gradient(to left, var(--fade-from, white), transparent)" }}
      />

      <div
        ref={trackRef}
        className="flex"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {doubled.map((tool, i) => (
          <ToolCard key={`${tool.name}-${i}`} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export function Tools() {
  return (
    <section className="py-24 bg-[#F9F9F9] dark:bg-[#161616] overflow-hidden">
      {/* CSS variable for fade color — changes with dark mode */}
      <style>{`
        .tools-section { --fade-from: #F9F9F9; }
        .dark .tools-section { --fade-from: #161616; }
      `}</style>

      <div className="tools-section">
        <div className="mx-auto max-w-6xl px-6 mb-12">
          <FadeUp>
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#D0302A] mb-3">
              My Toolkit
            </p>
            <h2 className="text-center font-display text-4xl tracking-tight leading-tight text-ink dark:text-white md:text-5xl">
              Tools I Use
            </h2>
            <p className="mt-4 text-center text-body dark:text-[#AAA] text-base max-w-xl mx-auto leading-relaxed">
              A curated set of tools I use daily to keep clients organized, productive, and ahead of the curve.
            </p>
          </FadeUp>
        </div>

        <div className="flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" speed={0.6} />
          <MarqueeRow items={row2} direction="right" speed={0.45} />
        </div>
      </div>
    </section>
  );
}