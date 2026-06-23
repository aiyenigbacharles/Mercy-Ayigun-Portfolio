import { useEffect, useState } from "react";
import { FadeUp } from "./FadeUp";

export function Hero() {
  const [pulse, setPulse] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setPulse(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen dark:bg-[#0F0F0F]">
      {/* MOBILE: full-bleed photo hero */}
      <div className="relative md:hidden">
        <div className="relative h-[62vh] w-full overflow-hidden">
          <img
            src="/mercy-hero.png"
            alt="Mercy Ayigun, Virtual Assistant"
            className="h-full w-full object-cover object-top"
          />
          {/* gradient fade into page bg */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white dark:from-[#0F0F0F] to-transparent" />
        </div>
        <div className="relative z-10 px-5 pb-16 pt-2">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#D0302A]">
            Your Strategic Partner
          </p>
          <h1 className="font-display text-[3.2rem] italic leading-none tracking-tight text-[#111] dark:text-white">
            Mercy<br />Ayigun
          </h1>
          <p className="mt-5 text-[15px] leading-[1.7] text-[#555] dark:text-[#AAA]">
            Virtual Assistant helping businesses streamline operations, manage
            schedules, and stay organized, so you can focus on growth.
          </p>
          <a
            href="#contact"
            className={`mt-8 inline-flex items-center rounded-full bg-[#D0302A] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#B02020] hover:shadow-lg ${
              pulse ? "ring-2 ring-[#D0302A] ring-offset-2 dark:ring-offset-[#0F0F0F]" : ""
            }`}
          >
            Work with Me
          </a>
        </div>
      </div>

      {/* DESKTOP: two-column layout */}
      <div className="hidden md:flex min-h-screen items-center px-6 pt-28 pb-16">
        <div className="mx-auto grid w-full max-w-6xl gap-14 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <FadeUp>
              <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-[#D0302A]">
                Your Strategic Partner
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h1 className="font-display text-[clamp(3rem,8vw,5.5rem)] leading-tight tracking-tight italic text-[#111] dark:text-white">
                Mercy<br />Ayigun
              </h1>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-[#555] dark:text-[#AAA]">
                Virtual Assistant helping businesses streamline operations, manage
                schedules, and stay organized, so you can focus on growth.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <a
                href="#contact"
                className={`mt-10 inline-flex items-center rounded-full bg-[#D0302A] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#B02020] hover:shadow-lg hover:scale-105 ${
                  pulse ? "ring-2 ring-[#D0302A] ring-offset-2 dark:ring-offset-[#0F0F0F]" : ""
                }`}
              >
                Work with Me
              </a>
            </FadeUp>
          </div>
          <FadeUp delay={0.15} className="order-1 md:order-2">
            <div className="relative mx-auto w-full max-w-md">
              <img
                src="/mercy-hero.png"
                alt="Mercy Ayigun, Virtual Assistant"
                className="aspect-[4/5] w-full rounded-3xl border-4 border-[#D0302A] object-cover shadow-2xl"
              />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
