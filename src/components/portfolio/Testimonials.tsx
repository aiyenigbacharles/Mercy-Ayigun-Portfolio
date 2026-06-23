import { FadeUp, FadeUpGroup, fadeItem } from "./FadeUp";
import { motion } from "framer-motion";

const items = [
  {
    body: "I hired Mercy as an Executive Assistant to help with my company's organization, schedule planning, client record keeping and restructuring. She did an excellent, super efficient and reliable job. Her attention to detail was amazing. I highly recommend her.",
    name: "Emmanuel",
    role: "CEO, KEMT Studio",
  },
  {
    body: "Working with Mercy as my virtual assistant has been fantastic. She pays attention to the little things, works hard, and always strives for excellence. Managing my hectic schedule and tasks with her has been a breeze. Her work is top-notch, and she is quick to respond. Highly recommended!",
    name: "Miriam T.",
    role: "Client",
  },
  {
    body: "The work was solid and involved consistent daily tasks for 10 days. Thank you again for your efforts. We appreciate you!",
    name: "Steve Kantor",
    role: "USA",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F9F9F9] dark:bg-[#161616] px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <h2 className="text-center font-display text-3xl tracking-tight leading-tight text-[#D0302A] md:text-5xl">
            Client Testimonials
          </h2>
        </FadeUp>
        <FadeUpGroup className="mt-10 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-8">
          {items.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeItem}
              className="rounded-2xl border border-[#EEEEEE] dark:border-[#2A2A2A] bg-white dark:bg-[#1A1A1A] p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-t-2 border-t-[#D0302A]"
            >
              <div
                className="font-display leading-none text-[#D0302A]/25"
                style={{ fontSize: "52px" }}
                aria-hidden
              >
                &ldquo;
              </div>
              <p className="-mt-2 text-[15px] italic leading-relaxed text-[#555] dark:text-[#AAA]">
                {t.body}
              </p>
              <div className="my-5 h-px w-full bg-[#EEEEEE] dark:bg-[#2A2A2A]" />
              <p className="text-base font-bold text-[#111] dark:text-white">{t.name}</p>
              <p className="mt-1 text-sm text-[#D0302A]">{t.role}</p>
            </motion.div>
          ))}
        </FadeUpGroup>
      </div>
    </section>
  );
}
