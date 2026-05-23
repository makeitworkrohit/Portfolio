import { useState } from 'react';
import { SKILLS_DATA, CERTIFICATIONS } from '../data';
import { 
  Cpu, Server, Command, MessageSquare, Award, Orbit, Info,
  Sparkles, Bot, Zap, Database, Globe, Key, Code, 
  Terminal, Coffee, Github, Send, Cloud, Layers, GitMerge, FileText, Users, Search, GitBranch
} from 'lucide-react';

interface SkillsGridProps {
  isDarkMode: boolean;
}

export default function SkillsGrid({ isDarkMode }: SkillsGridProps) {
  const [hoveredSkill, setHoveredSkill] = useState<{ name: string; subtype?: string } | null>(null);

  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'AI & Automation Tools':
        return <Cpu className="h-4.5 w-4.5 text-sky-400 font-bold" />;
      case 'Databases & APIs':
        return <Server className="h-4.5 w-4.5 text-emerald-400 font-bold" />;
      case 'Programming Languages':
        return <CodeIcon className="h-4.5 w-4.5 text-amber-400 font-bold" />;
      case 'Tools & Cloud':
        return <Command className="h-4.5 w-4.5 text-purple-400 font-bold" />;
      default:
        return <MessageSquare className="h-4.5 w-4.5 text-pink-400 font-bold" />;
    }
  };

  const getSkillIcon = (skillName: string, className = "h-8 w-8") => {
    const iconProps = `${className} transition-all duration-300`;
    switch (skillName) {
      case 'Claude':
        return <Bot className={`${iconProps}`} />;
      case 'ChatGPT':
        return <Sparkles className={`${iconProps}`} />;
      case 'OpenAI API':
        return <Cpu className={`${iconProps}`} />;
      case 'n8n':
        return <GitBranch className={`${iconProps}`} />;
      case 'Zapier':
        return <Zap className={`${iconProps}`} />;
      case 'MongoDB':
        return <Database className={`${iconProps}`} />;
      case 'REST APIs':
        return <Globe className={`${iconProps}`} />;
      case 'JWT Auth':
        return <Key className={`${iconProps}`} />;
      case 'JavaScript':
        return <Code className={`${iconProps}`} />;
      case 'Python':
        return <Terminal className={`${iconProps}`} />;
      case 'Java':
        return <Coffee className={`${iconProps}`} />;
      case 'Git & GitHub':
        return <Github className={`${iconProps}`} />;
      case 'Postman':
        return <Send className={`${iconProps}`} />;
      case 'Vercel':
        return <Cloud className={`${iconProps}`} />;
      case 'Render':
        return <Layers className={`${iconProps}`} />;
      case 'Structured Thinking':
        return <GitMerge className={`${iconProps}`} />;
      case 'Product Documentation':
        return <FileText className={`${iconProps}`} />;
      case 'Team Collaboration':
        return <Users className={`${iconProps}`} />;
      case 'Research':
        return <Search className={`${iconProps}`} />;
      default:
        return <MessageSquare className={`${iconProps}`} />;
    }
  };

  // Luxury 3D Solid profile lookup for each technology skillset
  const getSkill3DStyle = (name: string) => {
    switch (name) {
      case 'Claude':
        return {
          baseColor: 'from-[#f59e0b] to-[#d97706]', // Anthropic copper
          sideColor1: '#b45309',
          sideColor2: '#78350f',
          iconColor: 'text-[#fffbeb]',
          accentGlow: 'rgba(217, 119, 6, 0.25)',
        };
      case 'ChatGPT':
        return {
          baseColor: 'from-[#10b981] to-[#047857]', // OpenAI Green
          sideColor1: '#059669',
          sideColor2: '#064e3b',
          iconColor: 'text-white',
          accentGlow: 'rgba(16, 185, 129, 0.25)',
        };
      case 'OpenAI API':
        return {
          baseColor: 'from-[#06b6d4] to-[#0d9488]', // Cyan core
          sideColor1: '#0891b2',
          sideColor2: '#115e59',
          iconColor: 'text-white',
          accentGlow: 'rgba(6, 182, 212, 0.25)',
        };
      case 'n8n':
        return {
          baseColor: 'from-[#f43f5e] to-[#be123c]', // n8n Red rose
          sideColor1: '#e11d48',
          sideColor2: '#881337',
          iconColor: 'text-white',
          accentGlow: 'rgba(244, 63, 94, 0.25)',
        };
      case 'Zapier':
        return {
          baseColor: 'from-[#ff5a00] to-[#ea580c]', // Zapier Orange
          sideColor1: '#c2410c',
          sideColor2: '#7c2d12',
          iconColor: 'text-white',
          accentGlow: 'rgba(234, 88, 12, 0.25)',
        };
      case 'MongoDB':
        return {
          baseColor: 'from-[#10b981] to-[#15803d]', // Leaf green solid
          sideColor1: '#166534',
          sideColor2: '#064e3b',
          iconColor: 'text-white',
          accentGlow: 'rgba(16, 185, 129, 0.25)',
        };
      case 'REST APIs':
        return {
          baseColor: 'from-[#3b82f6] to-[#1d4ed8]', // Architectural blue
          sideColor1: '#1e40af',
          sideColor2: '#1e3a8a',
          iconColor: 'text-white',
          accentGlow: 'rgba(59, 130, 246, 0.25)',
        };
      case 'JWT Auth':
        return {
          baseColor: 'from-[#fbbf24] to-[#b45309]', // Secure gold/brass
          sideColor1: '#d97706',
          sideColor2: '#78350f',
          iconColor: 'text-white',
          accentGlow: 'rgba(245, 158, 11, 0.25)',
        };
      case 'JavaScript':
        return {
          baseColor: 'from-[#facc15] to-[#ca8a04]', // JS Gold
          sideColor1: '#a16207',
          sideColor2: '#713f12',
          iconColor: 'text-zinc-950',
          accentGlow: 'rgba(250, 204, 21, 0.25)',
        };
      case 'Python':
        return {
          baseColor: 'from-[#38bdf8] to-[#1d4ed8]', // Python blue/yellow dual feel
          sideColor1: '#0284c7',
          sideColor2: '#172554',
          iconColor: 'text-yellow-300',
          accentGlow: 'rgba(56, 189, 248, 0.25)',
        };
      case 'Java':
        return {
          baseColor: 'from-[#ea580c] to-[#a16207]', // Java Coffee orange-brown
          sideColor1: '#854d0e',
          sideColor2: '#451a03',
          iconColor: 'text-[#fed7aa]',
          accentGlow: 'rgba(161, 98, 7, 0.25)',
        };
      case 'Git & GitHub':
        return {
          baseColor: 'from-[#4b5563] to-[#1f2937]', // Charcoal metal block
          sideColor1: '#111827',
          sideColor2: '#030712',
          iconColor: 'text-white',
          accentGlow: 'rgba(75, 85, 99, 0.25)',
        };
      case 'Postman':
        return {
          baseColor: 'from-[#ff6c37] to-[#e04f1a]', // Postman Orange coin
          sideColor1: '#c83b0f',
          sideColor2: '#7c1c04',
          iconColor: 'text-white',
          accentGlow: 'rgba(255, 108, 55, 0.25)',
        };
      case 'Vercel':
        return {
          baseColor: 'from-[#525252] to-[#171717]', // High-end dark coin
          sideColor1: '#0a0a0a',
          sideColor2: '#000000',
          iconColor: 'text-white',
          accentGlow: 'rgba(23, 23, 23, 0.25)',
        };
      case 'Render':
        return {
          baseColor: 'from-[#8b5cf6] to-[#6d28d9]', // Lavender purple solid
          sideColor1: '#5b21b6',
          sideColor2: '#2e1065',
          iconColor: 'text-white',
          accentGlow: 'rgba(139, 92, 246, 0.25)',
        };
      case 'Structured Thinking':
        return {
          baseColor: 'from-[#ec4899] to-[#be123c]', // Pink magenta solid
          sideColor1: '#9d174d',
          sideColor2: '#4c0519',
          iconColor: 'text-white',
          accentGlow: 'rgba(236, 72, 153, 0.25)',
        };
      case 'Product Documentation':
        return {
          baseColor: 'from-[#0ea5e9] to-[#0369a1]', // Sky blue paper
          sideColor1: '#0284c7',
          sideColor2: '#0c4a6e',
          iconColor: 'text-white',
          accentGlow: 'rgba(14, 165, 233, 0.25)',
        };
      case 'Team Collaboration':
        return {
          baseColor: 'from-[#f43f5e] to-[#e11d48]', // Multi-node pink
          sideColor1: '#be123c',
          sideColor2: '#4c0519',
          iconColor: 'text-white',
          accentGlow: 'rgba(244, 63, 94, 0.25)',
        };
      case 'Research':
        return {
          baseColor: 'from-[#14b8a6] to-[#0f766e]', // Research teal solid
          sideColor1: '#0d9488',
          sideColor2: '#115e59',
          iconColor: 'text-white',
          accentGlow: 'rgba(20, 184, 166, 0.25)',
        };
      default:
        return {
          baseColor: 'from-[#6b7280] to-[#374151]', // Sleek slate
          sideColor1: '#4b5563',
          sideColor2: '#1f2937',
          iconColor: 'text-white',
          accentGlow: 'rgba(107, 114, 128, 0.2)',
        };
    }
  };

  return (
    <section 
      id="skills" 
      className={`py-24 border-b transition-colors duration-300 overflow-hidden ${
        isDarkMode 
          ? 'border-neutral-900 bg-neutral-950/20 text-neutral-300' 
          : 'border-zinc-200 bg-white text-zinc-750'
      }`}
    >
      <style>{`
        @keyframes large3DFloat {
          0% {
            transform: translateY(0px) rotateX(16deg) rotateY(-12deg) rotateZ(4deg);
          }
          50% {
            transform: translateY(-16px) rotateX(10deg) rotateY(-6deg) rotateZ(-2deg);
          }
          100% {
            transform: translateY(0px) rotateX(16deg) rotateY(-12deg) rotateZ(4deg);
          }
        }
        @keyframes largeShadowPulse {
          0%, 100% {
            transform: scale(1) rotateX(75deg);
            opacity: 0.45;
            filter: blur(4px);
          }
          50% {
            transform: scale(0.65) rotateX(75deg);
            opacity: 0.15;
            filter: blur(7px);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono mb-3 uppercase tracking-wider border ${
            isDarkMode 
              ? 'bg-neutral-900 border-neutral-800 text-neutral-400' 
              : 'bg-zinc-100 border-zinc-200 text-zinc-600'
          }`}>
            <Orbit className="h-4.5 w-4.5 text-sky-500 animate-spin" style={{ animationDuration: '6s' }} />
            ENGINEER TOOLKIT SPECIFICATION
          </div>
          <h2 className={`text-3xl sm:text-4xl font-display font-bold tracking-tight ${
            isDarkMode ? 'text-white' : 'text-zinc-950'
          }`}>
            Skillsets & Core Competencies
          </h2>
          <p className={`text-sm sm:text-base mt-3 leading-relaxed ${
            isDarkMode ? 'text-neutral-400' : 'text-zinc-650'
          }`}>
            A comprehensive list of core engineering frameworks, specialized databases, interface architectures, and analytical capabilities. Hover to view precise context.
          </p>
        </div>

        {/* Master layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main skills group list (takes up 2 columns) */}
          <div className="lg:col-span-2 space-y-8">
            {SKILLS_DATA.map((group) => (
              <div 
                key={group.categoryName} 
                className={`rounded-xl p-6 sm:p-7 border shadow-sm transition-all ${
                  isDarkMode 
                    ? 'bg-neutral-900/30 border-neutral-850 hover:border-neutral-800' 
                    : 'bg-zinc-50 border-zinc-250 hover:border-zinc-300 shadow-sm'
                }`}
              >
                <div className={`flex items-center gap-2.5 mb-6 border-b pb-3.5 ${
                  isDarkMode ? 'border-neutral-800/60' : 'border-zinc-200'
                }`}>
                  {getCategoryIcon(group.categoryName)}
                  <h3 className={`text-xs sm:text-sm font-mono uppercase tracking-wide font-bold ${
                    isDarkMode ? 'text-neutral-200' : 'text-zinc-900'
                  }`}>
                    {group.categoryName}
                  </h3>
                </div>

                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {group.skills.map((skill, idx) => {
                    const isHovered = hoveredSkill?.name === skill.name;
                    const style3D = getSkill3DStyle(skill.name);
                    return (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill({ name: skill.name, subtype: skill.subtype })}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`p-3 sm:p-5 rounded-xl border transition-all duration-300 select-none cursor-pointer flex flex-col items-center justify-between group text-center min-h-[200px] sm:min-h-[220px] ${
                          isHovered
                            ? isDarkMode
                              ? 'border-neutral-600 bg-neutral-900/85 shadow-[0_12px_24px_rgba(0,0,0,0.45)] scale-[1.03]'
                              : 'border-zinc-350 bg-white shadow-[0_12px_24px_rgba(0,0,0,0.12)] scale-[1.03]'
                            : isDarkMode
                              ? 'border-neutral-850 bg-neutral-950/45 hover:border-neutral-800'
                              : 'border-zinc-200 bg-white hover:border-zinc-300'
                        }`}
                      >
                        {/* 3D Floating Medallion viewport */}
                        <div className="relative w-full h-24 flex flex-col items-center justify-center overflow-visible select-none pb-2 mt-1">
                          
                          {/* Floating perspective core */}
                          <div 
                            className="relative pointer-events-none transition-all duration-500 ease-out"
                            style={{
                              perspective: '800px',
                              transformStyle: 'preserve-3d',
                              animation: `large3DFloat 3.8s ease-in-out infinite`,
                              animationDelay: `${idx * 160}ms`,
                              transform: isHovered 
                                ? 'translateY(-12px) scale(1.15) rotateX(8deg) rotateY(-4deg)' 
                                : undefined
                            }}
                          >
                            {/* Layered Solid Exrusion coin */}
                            <div 
                              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${style3D.baseColor} flex items-center justify-center relative`}
                              style={{
                                transformStyle: 'preserve-3d',
                                boxShadow: isHovered 
                                  ? `0 1px 0 ${style3D.sideColor1}, 0 2px 0 ${style3D.sideColor1}, 0 3px 0 ${style3D.sideColor1}, 0 4px 0 ${style3D.sideColor1}, 0 5px 0 ${style3D.sideColor1}, 0 6px 0 ${style3D.sideColor2}, 0 7px 0 ${style3D.sideColor2}, 0 8px 0 ${style3D.sideColor2}, 0 10px 15px rgba(0,0,0,0.45), inset 0 1.5px 1px rgba(255,255,255,0.45), inset 0 -1.5px 2px rgba(0,0,0,0.3)`
                                  : `0 1px 0 ${style3D.sideColor1}, 0 2px 0 ${style3D.sideColor1}, 0 3px 0 ${style3D.sideColor1}, 0 4px 0 ${style3D.sideColor1}, 0 5px 0 ${style3D.sideColor2}, 0 6px 0 ${style3D.sideColor2}, 0 7px 8px rgba(0,0,0,0.35), inset 0 1.5px 1px rgba(255,255,255,0.4), inset 0 -1.5px 2px rgba(0,0,0,0.35)`,
                                transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                              }}
                            >
                              {/* Overlay glare */}
                              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/5 to-white/20 opacity-80 pointer-events-none"></div>
                              
                              {/* Inner 3D relief relief icon */}
                              <div 
                                className={`${style3D.iconColor} filter drop-shadow-[0_1.5px_0.5px_rgba(0,0,0,0.45)] drop-shadow-[0_2.5px_1.5px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-350`}
                              >
                                {getSkillIcon(skill.name, "h-7 w-7 sm:h-8 w-8")}
                              </div>
                            </div>
                          </div>

                          {/* Ground dynamic ambient shadow */}
                          <div 
                            className="absolute bottom-0 w-11 h-2 rounded-full bg-black/25 dark:bg-black/55 pointer-events-none"
                            style={{
                              animation: `largeShadowPulse 3.8s ease-in-out infinite`,
                              animationDelay: `${idx * 160}ms`,
                              transform: 'rotateX(75deg)',
                              boxShadow: `0 0 12px ${style3D.accentGlow}`
                            }}
                          />
                        </div>

                        {/* Title block */}
                        <div className="w-full text-center mt-2 flex-grow flex flex-col justify-center">
                          <span 
                            className={`text-xs sm:text-sm font-mono font-bold transition-colors block truncate w-full ${
                              isDarkMode ? 'text-neutral-200 group-hover:text-white' : 'text-zinc-850 group-hover:text-black'
                            }`}
                            title={skill.name}
                          >
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-500 block mt-0.5 truncate max-w-full">
                            {skill.subtype || 'Core skill'}
                          </span>
                        </div>

                        {/* Loading bar tracker */}
                        <div className={`w-full h-1 mt-4 rounded-full overflow-hidden shrink-0 ${
                          isDarkMode ? 'bg-neutral-900' : 'bg-zinc-150'
                        }`}>
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              isHovered 
                                ? 'bg-sky-400' 
                                : isDarkMode ? 'bg-neutral-700' : 'bg-zinc-350'
                            }`}
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Certificates & Secondary info sidebar */}
          <div className="space-y-6">
            
            {/* Live Context Card */}
            <div className={`border p-6 sm:p-7 rounded-xl relative overflow-hidden min-h-[180px] flex flex-col justify-between group shadow-sm ${
              isDarkMode 
                ? 'bg-neutral-950 border-neutral-850' 
                : 'bg-zinc-100/50 border-zinc-250'
            }`}>
              <div className="absolute top-0 right-0 h-28 w-28 bg-sky-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-sky-500/10 transition-colors"></div>
              
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-neutral-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className={`text-xs font-mono uppercase tracking-wider font-bold ${
                    isDarkMode ? 'text-neutral-400' : 'text-zinc-905'
                  }`}>
                    Micro-Domain Focus
                  </h4>
                  <p id="skill-context-desc" className={`text-xs sm:text-sm mt-3 leading-relaxed ${
                    isDarkMode ? 'text-neutral-400' : 'text-zinc-600'
                  }`}>
                    {hoveredSkill 
                      ? `"${hoveredSkill.name}" focus optimization: ${hoveredSkill.subtype || 'general technical implementation'}.`
                      : 'Select or hover over any individual competency element to isolate diagnostic metadata tags.'
                    }
                  </p>
                </div>
              </div>

              {hoveredSkill && (
                <div className="mt-4 pt-3 border-t border-neutral-800/10 text-[10px] font-mono text-sky-500 animate-pulse font-bold">
                  FOCUS OVERRIDE ENGAGED
                </div>
              )}
            </div>

            {/* Certifications Card */}
            <div className={`border p-6 sm:p-7 rounded-xl ${
              isDarkMode 
                ? 'bg-neutral-900/30 border-neutral-850' 
                : 'bg-zinc-50 border-zinc-250'
            }`}>
              <div className={`flex items-center gap-2 mb-5 border-b pb-3.5 ${
                isDarkMode ? 'border-neutral-800/60' : 'border-zinc-200'
              }`}>
                <Award className="h-4.5 w-4.5 text-amber-500" />
                <h3 className={`text-xs sm:text-sm font-mono uppercase tracking-wider font-bold ${
                  isDarkMode ? 'text-neutral-200' : 'text-zinc-900'
                }`}>
                  Verifications & Certs
                </h3>
              </div>

              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.name} className="flex flex-col gap-0.5">
                    <span className={`text-xs sm:text-sm font-bold leading-tight ${
                      isDarkMode ? 'text-neutral-200' : 'text-zinc-800'
                    }`}>
                      {cert.name}
                    </span>
                    <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mt-1.5">
                      <span>{cert.issuer}</span>
                      {cert.year && <span>{cert.year}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
