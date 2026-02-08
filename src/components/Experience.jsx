import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 mb-6">
            <Briefcase size={14} className="text-slate-600" />
            <span className="text-sm font-medium text-slate-600">
              Professional Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Career History
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-slate-200" />

          <div className="space-y-8">
            {data.map((job, i) => (
              <div key={i} className="relative lg:pl-20">
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-5 top-8 w-7 h-7 rounded-full bg-white border-2 border-blue-500 items-center justify-center z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                  {/* Header */}
                  <div className="p-6 sm:p-8 border-b border-slate-100">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {job.role}
                        </h3>
                        <p className="text-lg font-medium text-blue-600 mt-1">
                          {job.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="inline-flex items-center gap-1.5 text-sm text-slate-500">
                          <Calendar size={14} />
                          {job.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm text-slate-400">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Achievements */}
                  <div className="p-6 sm:p-8">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {job.achievements.map((ach, j) => (
                        <li key={j} className="flex gap-3">
                          <ChevronRight
                            size={16}
                            className="text-blue-500 mt-1 flex-shrink-0"
                          />
                          <span className="text-sm text-slate-600 leading-relaxed">
                            {ach}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
