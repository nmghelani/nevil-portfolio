import { Linkedin, Github, Mail, MapPin, ArrowDown } from "lucide-react";

export default function Hero({ data }) {
  const { name, title, summary, location, links } = data;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Location Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <MapPin size={14} className="text-blue-400" />
              <span className="text-sm text-slate-400">{location}</span>
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-4">
              {name}
            </h1>

            {/* Title */}
            <p className="text-xl sm:text-2xl text-blue-400 font-medium mb-8">
              {title}
            </p>

            {/* Summary */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-10">
              {summary}
            </p>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white text-sm font-medium rounded-lg border border-white/10 transition-colors"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href={`mailto:${links.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white text-sm font-medium rounded-lg border border-white/10 transition-colors"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>

          {/* Right — Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 opacity-50 blur-lg" />
              <img
                src="/profile.png"
                alt="Nevil Ghelani"
                className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-white/20 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() =>
          document
            .querySelector("#endeavor")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="Scroll to next section"
      >
        <ArrowDown size={20} className="text-slate-400" />
      </button>
    </section>
  );
}
