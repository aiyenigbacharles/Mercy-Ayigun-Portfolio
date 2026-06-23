import { FadeUp } from "./FadeUp";

export function About() {
  return (
    <section id="about" className="px-5 py-16 md:px-6 md:py-24 dark:bg-[#0F0F0F]">
      <div className="mx-auto max-w-5xl">
        {/* Mobile: photo centered above text */}
        <div className="flex justify-center mb-10 md:hidden">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#D0302A] opacity-10 scale-110" />
            <img
              src="/mercy-about.png"
              alt="Mercy Ayigun portrait"
              className="relative w-52 h-52 rounded-full object-cover ring-4 ring-[#D0302A] shadow-2xl"
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-14 md:items-center">
          <div>
            <FadeUp>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#D0302A]">
                About Me
              </p>
              <h2 className="font-display text-3xl tracking-tight leading-tight text-[#D0302A] md:text-5xl">
                About Mercy
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-[#555] dark:text-[#AAA]">
                <p>
                  I specialize in helping businesses streamline operations, manage
                  schedules, and stay organized, ensuring everything runs smoothly
                  so you can focus on growth. In addition to administrative
                  support, I also offer expertise in social media management and
                  creative graphics services.
                </p>
                <p>
                  With years of experience, I am passionate about delivering
                  efficient, reliable support that takes the stress out of daily
                  management.
                </p>
                <p className="font-semibold text-[#111] dark:text-white">
                  Let's collaborate to elevate your business.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Desktop only: photo on right */}
          <FadeUp delay={0.15} className="hidden md:flex justify-center">
            <img
              src="/mercy-about.png"
              alt="Mercy Ayigun portrait"
              className="w-80 h-80 rounded-full object-cover shadow-xl ring-4 ring-[#D0302A]"
            />
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
