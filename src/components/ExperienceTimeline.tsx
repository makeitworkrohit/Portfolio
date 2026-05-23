import { WORK_EXPERIENCES, EDUCATION_INFO } from '../data';
import { Briefcase, GraduationCap, MapPin, Calendar, Compass, Star } from 'lucide-react';

interface ExperienceTimelineProps {
  isDarkMode: boolean;
}

export default function ExperienceTimeline({ isDarkMode }: ExperienceTimelineProps) {
  return (
    <section 
      id="experience" 
      className={`py-24 border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'border-neutral-900 bg-neutral-950/30 text-neutral-300' 
          : 'border-zinc-200 bg-zinc-50 text-zinc-750'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono mb-3 uppercase tracking-wider border ${
            isDarkMode 
              ? 'bg-neutral-900 border-neutral-800 text-neutral-400' 
              : 'bg-zinc-200 border-zinc-300 text-zinc-650'
          }`}>
            <Compass className="h-3.5 w-3.5 text-sky-500" />
            CHRONOLOGY OF WORK & EDUCATION
          </div>
          <h2 className={`text-3xl sm:text-4xl font-display font-bold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-zinc-950'
          }`}>
            Professional Experience & Academic Foundation
          </h2>
          <p className={`text-sm sm:text-base mt-3 leading-relaxed ${
            isDarkMode ? 'text-neutral-400' : 'text-zinc-650'
          }`}>
            Bridging conceptual design thinking, automated operations modeling, and computer science foundations.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Work Chronology (2/3 cols) */}
          <div className={`lg:col-span-2 space-y-12 relative before:absolute before:top-4 before:bottom-4 before:left-3.5 before:w-[1px] ${
            isDarkMode ? 'before:bg-neutral-800' : 'before:bg-zinc-250'
          }`}>
            {WORK_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative pl-10 group">
                {/* Visual Node */}
                <div className={`absolute left-0 top-1.5 h-7 w-7 rounded-full flex items-center justify-center transition-colors duration-300 z-10 shadow-sm border ${
                  isDarkMode 
                    ? 'bg-neutral-950 border-neutral-800 text-neutral-400 group-hover:border-sky-500/55 group-hover:text-sky-400' 
                    : 'bg-white border-zinc-250 text-zinc-550 group-hover:border-indigo-500 group-hover:text-indigo-600'
                }`}>
                  <Briefcase className="h-3 w-3" />
                </div>

                {/* Content Block */}
                <div className={`rounded-xl p-6 sm:p-7 border transition-all ${
                  isDarkMode 
                    ? 'bg-neutral-900/30 border-neutral-850 hover:border-neutral-800' 
                    : 'bg-white border-zinc-250 hover:border-zinc-300 shadow-sm'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                    <div>
                      <h3 className={`text-lg sm:text-xl font-display font-semibold transition-colors ${
                        isDarkMode ? 'text-neutral-100 group-hover:text-white' : 'text-zinc-900 group-hover:text-black'
                      }`}>
                        {exp.role}
                      </h3>
                      <p className={`text-xs sm:text-sm font-mono font-medium ${
                        isDarkMode ? 'text-sky-400' : 'text-indigo-600'
                      }`}>
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center flex-wrap gap-2 text-[10px] sm:text-xs font-mono text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5 text-neutral-600" />
                        {exp.period}
                      </span>
                      <span className="text-neutral-400 select-none">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-neutral-600" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Multi-perspective Bullet targets */}
                  <ul className="space-y-3.5 mb-6">
                    {exp.bullets.map((bullet, idx) => {
                      const isCommon = bullet.startsWith('For Common Users:');
                      const isDev = bullet.startsWith('For Developers:');
                      const cleanedBullet = bullet.replace(/^(For Common Users:|For Developers:)/, '').trim();

                      return (
                        <li key={idx} className="text-xs sm:text-sm leading-relaxed flex items-start gap-2.5">
                          {isCommon && (
                            <span className="px-1.5 py-0.5 mt-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-500 border border-emerald-500/15 shrink-0">
                              HUMAN EXPERIENCE
                            </span>
                          )}
                          {isDev && (
                            <span className="px-1.5 py-0.5 mt-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-500 border border-sky-500/15 shrink-0">
                              SYSTEM LOGIC
                            </span>
                          )}
                          {!isCommon && !isDev && (
                            <span className="text-neutral-500 mt-1 select-none">•</span>
                          )}
                          <span className={isDarkMode ? 'text-neutral-300' : 'text-zinc-650'}>
                            {cleanedBullet}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Skills associated tags */}
                  <div className={`flex flex-wrap gap-1.5 pt-4 border-t ${
                    isDarkMode ? 'border-neutral-850' : 'border-zinc-150'
                  }`}>
                    <span className="text-[10px] font-mono text-neutral-500 self-center uppercase mr-1">
                      KNOWLEDGE CORNER:
                    </span>
                    {exp.skillsAssociated.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-0.5 rounded text-[10px] sm:text-xs font-mono border ${
                          isDarkMode 
                            ? 'bg-neutral-950 border-neutral-850 text-neutral-450' 
                            : 'bg-zinc-100 border-zinc-200 text-zinc-600'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education Block (1/3 col) */}
          <div className="space-y-6">
            <div className={`border p-6 sm:p-7 rounded-xl relative overflow-hidden ${
              isDarkMode 
                ? 'bg-neutral-900/20 border-neutral-850' 
                : 'bg-white border-zinc-250 shadow-sm'
            }`}>
              <div className="absolute top-0 right-0 h-40 w-40 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none"></div>

              <div className={`flex items-center gap-2 mb-6 border-b pb-3.5 ${
                isDarkMode ? 'border-neutral-850 pb-3' : 'border-zinc-200'
              }`}>
                <GraduationCap className="h-4.5 w-4.5 text-sky-500 font-bold" />
                <h3 className={`text-xs font-mono uppercase tracking-wider font-bold ${
                  isDarkMode ? 'text-neutral-200' : 'text-zinc-900'
                }`}>
                  Academic Credentials
                </h3>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-neutral-550 tracking-wider">
                  INSTITUTION
                </h4>
                <p className={`text-sm sm:text-base font-semibold uppercase mt-1.5 leading-snug ${
                  isDarkMode ? 'text-neutral-100' : 'text-zinc-900'
                }`}>
                  {EDUCATION_INFO.institution}
                </p>

                <h4 className="text-[10px] font-mono text-neutral-555 tracking-wider mt-5">
                  FIELD OF STUDY
                </h4>
                <p className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                  isDarkMode ? 'text-neutral-400' : 'text-zinc-600'
                }`}>
                  {EDUCATION_INFO.degree}
                </p>

                <div className={`grid grid-cols-2 gap-4 mt-6 pt-5 border-t text-[10px] sm:text-xs font-mono ${
                  isDarkMode ? 'border-neutral-850 text-neutral-500' : 'border-zinc-200 text-zinc-500'
                }`}>
                  <div>
                    <span>TIMEFRAME</span>
                    <span className={`block font-bold mt-0.5 ${isDarkMode ? 'text-neutral-350' : 'text-zinc-700'}`}>
                      2022 - 2026
                    </span>
                  </div>
                  <div>
                    <span>CAMPUS</span>
                    <span className={`block font-bold mt-0.5 ${isDarkMode ? 'text-neutral-350' : 'text-zinc-700'}`}>
                      Punjab, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Card */}
            <div className={`border p-6 sm:p-7 rounded-xl flex flex-col justify-between ${
              isDarkMode 
                ? 'bg-neutral-950 border-neutral-850' 
                : 'bg-zinc-50 border-zinc-250 shadow-sm'
            }`}>
              <div className="text-neutral-500 text-[10px] font-mono flex items-center gap-1.5 uppercase font-bold">
                <Star className="h-3.5 w-3.5 text-amber-500 animate-pulse" />
                Engineering Philosophy
              </div>
              <p className={`text-xs sm:text-sm mt-4.5 italic leading-relaxed ${
                isDarkMode ? 'text-neutral-400' : 'text-zinc-650'
              }`}>
                "AI systems succeed not simply through raw param scales, but when bounded by structured systems thinking, ergonomic UI design, and bulletproof process modeling."
              </p>
              <div className="text-[10px] font-mono text-neutral-500 mt-4 pt-3 border-t border-neutral-900/10 text-right">
                — {WORK_EXPERIENCES[1]?.company ? 'Rohit Kushwaha' : 'Rohit'}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
