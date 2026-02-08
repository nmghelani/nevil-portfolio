import {
  Building2,
  ShieldCheck,
  Zap,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const iconMap = {
  Building2,
  ShieldCheck,
  Zap,
  GraduationCap,
};

export default function ProposedEndeavor({ data }) {
  const { headline, subtitle, paragraphs, impactPoints } = data;

  return (
    <section id="endeavor" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Vision & Focus
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            {headline}
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        {/* Narrative */}
        <div className="max-w-4xl mx-auto space-y-6 mb-20">
          {paragraphs.map((p, i) => (
            <p
              key={i}
              className="text-base sm:text-lg text-slate-600 leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        {/* Impact Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {impactPoints.map((point, i) => {
            const Icon = iconMap[point.icon] || Building2;
            return (
              <div
                key={i}
                className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
