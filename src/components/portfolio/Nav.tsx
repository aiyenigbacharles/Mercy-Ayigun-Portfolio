import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Mail, Phone, Linkedin } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 bg-white dark:bg-[#0F0F0F] transition-all ${
          scrolled ? "border-b border-[#EEEEEE] dark:border-[#222] shadow-[0_1px_0_rgba(0,0,0,0.02)]" : ""
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-6">
          <a href="#top" className="font-display text-lg text-[#111] dark:text-white tracking-tight">
            Mercy Ayigun
          </a>
          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm text-[#555] dark:text-[#AAA] transition-colors hover:text-[#D0302A] dark:hover:text-[#D0302A] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-[#D0302A] after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={toggle}
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme"
              className="rounded-full p-2 text-[#111] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="rounded-full p-2 text-[#111] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="p-2 text-[#111] dark:text-white"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay menu */}
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col bg-white dark:bg-[#0F0F0F] md:hidden pt-20">
          <nav className="flex flex-col items-center justify-center flex-1 gap-2 px-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="w-full text-center py-4 font-display text-3xl italic text-[#111] dark:text-white hover:text-[#D0302A] dark:hover:text-[#D0302A] transition-colors border-b border-[#EEEEEE] dark:border-[#222] last:border-0"
              >
                {l.label}
              </a>
            ))}
          </nav>
          {/* Contact icons at bottom of menu */}
          <div className="flex items-center justify-center gap-6 pb-12 pt-6">
            <a
              href="mailto:mercyayigunofficial@gmail.com"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-[#D0302A]/10 text-[#D0302A] hover:bg-[#D0302A]/20 transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://wa.me/2348077838687"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-[#D0302A]/10 text-[#D0302A] hover:bg-[#D0302A]/20 transition"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/mercy-ayigun/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-11 h-11 rounded-full bg-[#D0302A]/10 text-[#D0302A] hover:bg-[#D0302A]/20 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
