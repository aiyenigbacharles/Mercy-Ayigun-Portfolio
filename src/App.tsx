import { motion } from "framer-motion";
import { ThemeProvider } from "./components/portfolio/ThemeProvider";
import { Nav } from "./components/portfolio/Nav";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Expertise } from "./components/portfolio/Expertise";
import { Tools } from "./components/portfolio/Tools";
import { Work } from "./components/portfolio/Work";
import { Testimonials } from "./components/portfolio/Testimonials";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";

function Divider() {
  return <div className="mx-auto h-px max-w-5xl bg-[#EEEEEE] dark:bg-[#222]" />;
}

export default function App() {
  return (
    <ThemeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white dark:bg-[#0F0F0F] antialiased"
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
