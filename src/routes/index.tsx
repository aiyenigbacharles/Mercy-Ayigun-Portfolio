import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Expertise } from "@/components/portfolio/Expertise";
import { Tools } from "@/components/portfolio/Tools";
import { Work } from "@/components/portfolio/Work";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ThemeProvider } from "@/components/portfolio/ThemeProvider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mercy Ayigun | Virtual Assistant" },
      {
        name: "description",
        content:
          "Mercy Ayigun is a Virtual Assistant helping businesses streamline operations, manage schedules, and stay organized so you can focus on growth.",
      },
      { property: "og:title", content: "Mercy Ayigun | Virtual Assistant" },
      {
        property: "og:description",
        content:
          "Virtual Assistant helping businesses streamline operations, manage schedules, and stay organized.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Divider() {
  return <div className="mx-auto h-px max-w-5xl bg-[#EEEEEE] dark:bg-[#222]" />;
}

function Index() {
  return (
    <ThemeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white dark:bg-[#0F0F0F] text-ink dark:text-[#AAA] antialiased"
      >
        <Nav />
        <main>
          <Hero />
          <Divider />
          <About />
          <Divider />
          <Expertise />
          <Divider />
          <Tools />
          <Divider />
          <Work />
          <Divider />
          <Testimonials />
          <Divider />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </ThemeProvider>
  );
}
