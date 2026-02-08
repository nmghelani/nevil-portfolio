import { Linkedin, Github, Mail, ArrowUp } from "lucide-react";

export default function Footer({ data, links }) {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white mb-2">
              {data.copyright}
            </p>
            <p className="text-sm text-slate-400 italic">{data.tagline}</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={`mailto:${links.email}`}
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200 ml-2"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {data.copyright}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
