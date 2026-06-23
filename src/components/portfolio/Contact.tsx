import { Mail, Phone, Linkedin, ArrowUpRight, type LucideIcon } from "lucide-react";
import { FadeUp, FadeUpGroup, fadeItem } from "./FadeUp";
import { motion } from "framer-motion";

type Card = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const cards: Card[] = [
  {
    icon: Mail,
    label: "Email",
    value: "mercyayigunofficial@gmail.com",
    href: "mailto:mercyayigunofficial@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+234 807 783 8687",
    href: "https://wa.me/2348077838687",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mercy Ayigun",
    href: "https://www.linkedin.com/in/mercy-ayigun/",
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="px-5 py-16 md:px-6 md:py-24 dark:bg-[#0F0F0F]">
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <h2 className="text-center font-display text-3xl tracking-tight leading-tight text-[#D0302A] md:text-5xl">
            Let's Work Together
          </h2>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-center text-[15px] text-[#555] dark:text-[#AAA] leading-relaxed">
            Ready to streamline your business? Reach out through any of the channels below.
          </p>
        </FadeUp>

        <FadeUpGroup className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.label}
                variants={fadeItem}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group relative block cursor-pointer rounded-2xl border border-[#EEEEEE] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#D0302A] hover:shadow-xl active:scale-95 border-t-2 border-t-[#D0302A]"
              >
                <ArrowUpRight
                  size={16}
                  className="absolute top-4 right-4 text-[#D0302A] opacity-50 group-hover:opacity-100 transition"
                />
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#D0302A]/10">
                  <Icon size={26} className="text-[#D0302A]" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#888] dark:text-[#AAA]">
                  {c.label}
                </p>
                <p className="mt-2 font-semibold text-[#111] dark:text-white break-all text-sm md:text-base">{c.value}</p>
              </motion.a>
            );
          })}
        </FadeUpGroup>
      </div>
    </section>
  );
}
