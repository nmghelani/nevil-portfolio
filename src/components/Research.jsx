import { FlaskConical, ChevronRight } from "lucide-react";

export default function Research({ data }) {
  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <FlaskConical size={14} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-600">
              Independent Research & Technical Prototyping
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Research & Projects
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Self-directed research in autonomous systems, multi-agent
            orchestration, and edge AI — including a granted utility patent.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {data.map((proj, i) => (
            <div
              key={i}
              className="group flex flex-col p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <FlaskConical size={22} />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {proj.title}
              </h3>
              <p className="text-xs font-medium text-blue-600 mb-5">
                {proj.tagline}
              </p>

              <ul className="space-y-3 mb-6">
                {proj.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2.5">
                    <ChevronRight
                      size={14}
                      className="text-blue-500 mt-1 flex-shrink-0"
                    />
                    <span className="text-sm text-slate-600 leading-relaxed">
                      {h}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-4 border-t border-slate-200/70">
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((s, k) => (
                    <span
                      key={k}
                      className="inline-flex px-2 py-0.5 text-xs font-medium text-slate-600 bg-white rounded-md border border-slate-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
