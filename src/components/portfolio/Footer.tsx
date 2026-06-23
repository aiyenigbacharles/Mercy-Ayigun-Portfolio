import { Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-hairline dark:border-[#222] bg-white dark:bg-[#0A0A0A] py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 text-center">
        <p className="font-display text-base text-ink dark:text-white tracking-tight">Mercy Ayigun</p>
        <p className="text-sm text-body dark:text-[#AAA]">Virtual Assistant | Your Strategic Partner</p>
        <div className="my-2 flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/mercy-ayigun/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-brand transition-opacity hover:opacity-70"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:mercyayigunofficial@gmail.com"
            aria-label="Email"
            className="text-brand transition-opacity hover:opacity-70"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://wa.me/2348077838687"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Phone / WhatsApp"
            className="text-brand transition-opacity hover:opacity-70"
          >
            <Phone size={20} />
          </a>
        </div>
        <p className="text-xs text-[#888]">© 2026 Mercy Ayigun. All rights reserved.</p>
      </div>
    </footer>
  );
}
