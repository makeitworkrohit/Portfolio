import { useState, useEffect } from 'react';
import { Sparkles, ArrowDown, Linkedin } from 'lucide-react';
import Navbar from './components/Navbar';
import ParticleHero from './components/ParticleHero';
import ProjectGrid from './components/ProjectGrid';
import SkillsGrid from './components/SkillsGrid';
import ExperienceTimeline from './components/ExperienceTimeline';
import ContactFooter from './components/ContactFooter';
import SectionGate from './components/SectionGate';
import { PERSONAL_INFO } from './data';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projectsUnlocked, setProjectsUnlocked] = useState(false);
  const [skillsUnlocked, setSkillsUnlocked] = useState(false);
  const [experienceUnlocked, setExperienceUnlocked] = useState(false);

  // Synchronise body styles on theme toggles
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = '#0a0a0a';
      document.body.style.color = '#e5e5e5';
    } else {
      document.body.style.backgroundColor = '#fafafa';
      document.body.style.color = '#18181b';
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-neutral-950 text-neutral-200 selection:bg-neutral-800 selection:text-white' 
        : 'bg-zinc-50 text-zinc-900 selection:bg-zinc-200 selection:text-black'
    } font-sans antialiased`}>
      
      {/* Structural Glassmorphic Navbar with toggler states */}
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />

      {/* Hero Section Container */}
      <section 
        id="about" 
        className={`group pt-32 pb-20 md:py-36 border-b transition-all duration-700 ${
          isDarkMode 
            ? 'border-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.08),rgba(255,255,255,0))] hover:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.12),rgba(255,255,255,0))]' 
            : 'border-zinc-200 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.04),rgba(255,255,255,0))] hover:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(99,102,241,0.12),rgba(255,255,255,0))]'
        }`}
      >
        <style>{`
          @keyframes heroTextFloat {
            0% { transform: perspective(1000px) translateY(0px) rotateX(1deg) rotateY(-1deg); }
            50% { transform: perspective(1000px) translateY(-8px) rotateX(-1deg) rotateY(1deg); }
            100% { transform: perspective(1000px) translateY(0px) rotateX(1deg) rotateY(-1deg); }
          }
          .hero-text-3d {
            animation: heroTextFloat 7s ease-in-out infinite;
          }
        `}</style>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Column 1: Descriptive introduction hierarchy */}
            <div className="lg:col-span-7 space-y-7 hero-text-3d">
              
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest border transition-all duration-500 ${
                isDarkMode 
                  ? 'bg-neutral-900/80 border-neutral-800 text-neutral-400 group-hover:border-sky-500/50 group-hover:bg-neutral-900' 
                  : 'bg-zinc-250/80 border-zinc-300 text-zinc-650 group-hover:border-indigo-400/50 group-hover:bg-zinc-100'
              }`}>
                <Sparkles className="h-3.5 w-3.5 text-sky-400 animate-pulse" />
                <span>AI INTEGRATIONS &amp; SYSTEMS PIPELINES</span>
              </div>

              <div className="space-y-3">
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-display font-medium tracking-tight leading-none transition-colors duration-500 ${
                  isDarkMode ? 'text-white group-hover:text-sky-100' : 'text-zinc-950 group-hover:text-indigo-950'
                }`}>
                  {PERSONAL_INFO.name}
                </h1>
                <p className={`text-lg sm:text-2xl font-mono font-semibold tracking-tight transition-colors duration-500 ${
                  isDarkMode ? 'text-neutral-400 group-hover:text-sky-400' : 'text-indigo-650 group-hover:text-indigo-600'
                }`}>
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Extremely short cool customized bio bio */}
              <p className={`text-base sm:text-lg leading-relaxed font-sans max-w-xl font-medium ${
                isDarkMode ? 'text-neutral-350' : 'text-zinc-700'
              }`}>
                {PERSONAL_INFO.summary}
              </p>

              {/* Real links and CTA buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  id="hero-cta-projects"
                  href="#projects"
                  onClick={() => setProjectsUnlocked(true)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-mono font-bold active:scale-95 transition-all tracking-wider shadow-md hover:opacity-90 ${
                    isDarkMode 
                      ? 'bg-neutral-100 text-neutral-950' 
                      : 'bg-zinc-905 bg-black text-white'
                  }`}
                >
                  DISCOVER PROJECTS
                  <ArrowDown className="h-3.5 w-3.5" />
                </a>

                {/* LinkedIn Profile link */}
                <a
                  id="hero-linkedin-btn"
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs font-mono tracking-wider transition-all border ${
                    isDarkMode 
                      ? 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-neutral-300' 
                      : 'bg-white hover:bg-zinc-100 border-zinc-250 text-zinc-800'
                  }`}
                >
                  <Linkedin className="h-4 w-4 text-sky-500 shrink-0" />
                  LINKEDIN PROFILE
                </a>
              </div>

              {/* Mini Info Specifications Area */}
              <div className={`grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t max-w-md ${
                isDarkMode ? 'border-neutral-900/60' : 'border-zinc-200/60'
              }`}>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold">LOCATION</span>
                  <span className={`text-xs sm:text-sm font-mono mt-1 ${isDarkMode ? 'text-neutral-300': 'text-zinc-800'}`}>Thane, MH</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold">FOCUS</span>
                  <span className="text-xs sm:text-sm font-mono text-sky-500 font-bold mt-1">AI Interfaces</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase font-bold text-ellipsis overflow-hidden">AVAILABILITY</span>
                  <span className="text-xs sm:text-sm font-mono text-emerald-500 font-bold mt-1">Immediate</span>
                </div>
              </div>

            </div>

            {/* Visual Column 2: 3D Constellation block */}
            <div className="lg:col-span-5 h-[350px] lg:h-[450px]">
              <ParticleHero />
            </div>

          </div>
        </div>
      </section>

      {/* Terminal gate to open Projects */}
      <SectionGate
        sectionId="projects-gate"
        commandText='{ fetching : "Rohit > Professional_Experience > Current_Project" }'
        buttonLabel="RUN PIPELINE"
        isUnlocked={projectsUnlocked}
        onUnlocked={() => setProjectsUnlocked(true)}
      />

      {/* Curated interactive projects section */}
      {projectsUnlocked && (
        <div className="animate-fade-in duration-500">
          <ProjectGrid isDarkMode={isDarkMode} />
        </div>
      )}

      {/* Terminal gate to open Skills */}
      <SectionGate
        sectionId="skills-gate"
        commandText='{ query : "Rohit > Engineering_Toolkit_Specification > Skills_Matrix" }'
        buttonLabel="COMPILE MATRIX"
        isUnlocked={skillsUnlocked}
        onUnlocked={() => setSkillsUnlocked(true)}
      />

      {/* Core competence matrix section */}
      {skillsUnlocked && (
        <div className="animate-fade-in duration-500">
          <SkillsGrid isDarkMode={isDarkMode} />
        </div>
      )}

      {/* Terminal gate to open Experience Timeline */}
      <SectionGate
        sectionId="experience-gate"
        commandText='{ initialize : "Rohit > Professional_Chronology > Work_Education" }'
        buttonLabel="DECRYPT CHRONOLOGY"
        isUnlocked={experienceUnlocked}
        onUnlocked={() => setExperienceUnlocked(true)}
      />

      {/* Chronology & Academic timelines */}
      {experienceUnlocked && (
        <div className="animate-fade-in duration-500">
          <ExperienceTimeline isDarkMode={isDarkMode} />
        </div>
      )}

      {/* Footer Contact panel */}
      <ContactFooter />
    </div>
  );
}
