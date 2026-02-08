import {
  Award,
  GraduationCap,
  FileCheck,
  Lightbulb,
  ExternalLink,
} from "lucide-react";

const typeConfig = {
  degree: {
    icon: GraduationCap,
    color: "blue",
    label: "Academic Degree",
  },
  certification: {
    icon: Award,
    color: "emerald",
    label: "Certification",
  },
  patent: {
    icon: FileCheck,
    color: "amber",
    label: "Granted Patent",
  },
  project_outcome: {
    icon: Lightbulb,
    color: "violet",
    label: "Project Outcome",
  },
};

const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconBg: "bg-blue-100",
    iconText: "text-blue-600",
    badge: "bg-blue-50 text-blue-700 border-blue-200",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
  violet: {
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconBg: "bg-violet-100",
    iconText: "text-violet-600",
    badge: "bg-violet-50 text-violet-700 border-violet-200",
  },
};

export default function Evidence({ data }) {
  return (
    <section id="evidence" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <Award size={14} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-600">
              Evidence & Recognition
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Credentials & Outcomes
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Academic qualifications, intellectual property, and measurable
            project outcomes supporting exceptional ability.
          </p>
        </div>

        {/* Evidence Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, i) => {
            const config = typeConfig[item.type] || typeConfig.project_outcome;
            const colors = colorClasses[config.color] || colorClasses.blue;
            const Icon = config.icon;

            return (
              <div
                key={i}
                className={`group p-6 rounded-2xl bg-white border border-slate-100 hover:${colors.border} hover:shadow-md transition-all duration-300 flex flex-col`}
              >
                {/* Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-11 h-11 rounded-xl ${colors.iconBg} ${colors.iconText} flex items-center justify-center`}
                  >
                    <Icon size={22} />
                  </div>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full border ${colors.badge}`}
                  >
                    {config.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>

                {/* Issuer & Date */}
                <p className="text-sm font-medium text-blue-600 mb-1">
                  {item.issuer}
                </p>
                <p className="text-xs text-slate-400 mb-4">{item.date}</p>

                {/* Extra Info */}
                {item.gpa && (
                  <p className="text-xs font-semibold text-slate-500 mb-3">
                    GPA: {item.gpa} / 4.0
                  </p>
                )}
                {item.patentNumber && (
                  <p className="text-xs text-slate-500 mb-3">
                    Patent No.{" "}
                    <span className="font-mono font-semibold">
                      {item.patentNumber}
                    </span>{" "}
                    · App No.{" "}
                    <span className="font-mono">{item.applicationNumber}</span>
                  </p>
                )}

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mt-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
