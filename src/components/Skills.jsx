import { Code2, Brain } from 'lucide-react';

export default function Skills({ data }) {
  const { technicalCore, advancedSpecializations } = data;

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <Code2 size={14} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-600">
              Skills & Knowledge
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Technical Expertise
          </h2>
        </div>

        {/* Technical Core */}
        <div className="mb-20">
          <h3 className="text-lg font-semibold text-slate-900 mb-8 flex items-center gap-2">
            <Code2 size={20} className="text-blue-600" />
            Technical Core
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalCore.map((group, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, j) => (
                    <span
                      key={j}
                      className="inline-flex px-3 py-1.5 text-sm font-medium text-slate-700 bg-white rounded-lg border border-slate-200 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced Specializations */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-8 flex items-center gap-2">
            <Brain size={20} className="text-emerald-600" />
            Advanced Specializations
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {advancedSpecializations.map((spec, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
              >
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500" />

                <div className="relative z-10">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {spec.name}
                  </h4>
                  <p className="text-xs font-medium text-blue-400 mb-4">
                    {spec.credential}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {spec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
