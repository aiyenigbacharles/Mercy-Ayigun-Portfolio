import { Check } from "lucide-react";
import { FadeUp, FadeUpGroup, fadeItem } from "./FadeUp";
import { motion } from "framer-motion";

const expertise = [
  "Administrative and Executive Assistance",
  "Customer Support",
  "Travel Itinerary Planning",
  "Appointment Scheduling",
  "Email Management",
  "Calendar Organization",
  "Meeting Planning and Agenda",
  "Data Entry",
  "Task Management",
  "Project Management",
];

const soft = [
  "Excellent Communication (written and verbal)",
  "Collaboration",
  "Time Management",
  "Problem-Solving",
  "Adaptability",
  "Strong Attention to Detail",
  "Confidentiality and Discretion",
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <motion.li
          key={item}
          variants={fadeItem}
          className="flex items-start gap-3 text-[15px] text-[#111] dark:text-white leading-relaxed py-1"
        >
          <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#D0302A]/10 text-[#D0302A]">
            <Check size={12} strokeWidth={3} />
          </span>
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
  );
}

export function Expertise() {
  return (
    <section id="services" className="bg-[#F9F9F9] dark:bg-[#161616] px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <FadeUp>
          <h2 className="text-center font-display text-3xl tracking-tight leading-tight text-[#D0302A] md:text-5xl">
            What I Bring
          </h2>
        </FadeUp>

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-0">
          {/* Expertise column */}
          <FadeUpGroup className="rounded-2xl bg-white dark:bg-[#1A1A1A] p-6 shadow-sm md:rounded-none md:bg-transparent md:dark:bg-transparent md:shadow-none md:pr-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#D0302A] border-t-2 border-[#D0302A] pt-4">
              Expertise
            </p>
            <List items={expertise} />
          </FadeUpGroup>

          {/* Soft Skills column */}
          <FadeUpGroup className="rounded-2xl bg-white dark:bg-[#1A1A1A] p-6 shadow-sm md:rounded-none md:bg-transparent md:dark:bg-transparent md:shadow-none md:border-l md:border-[#EEEEEE] md:dark:border-[#2A2A2A] md:pl-12">
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-[#D0302A] border-t-2 border-[#D0302A] pt-4">
              Soft Skills
            </p>
            <List items={soft} />
          </FadeUpGroup>
        </div>
      </div>
    </section>
  );
}
