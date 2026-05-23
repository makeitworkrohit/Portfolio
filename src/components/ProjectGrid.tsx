import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { 
  Github, Sparkles, Sliders, ChevronDown, ChevronUp, Volume2, Database, 
  ArrowRight, ArrowLeft, User, Mail, MapPin, Check, X, FileText, 
  UploadCloud, Phone, Clock, HelpCircle, Layers, CheckSquare, ExternalLink, ShieldCheck 
} from 'lucide-react';

interface ProjectGridProps {
  isDarkMode: boolean;
}

export default function ProjectGrid({ isDarkMode }: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  // Interactive diagnostic states for the simulated showcases
  const [civicVoiceSimul, setCivicVoiceSimul] = useState<boolean>(false);
  const [civicTranscribing, setCivicTranscribing] = useState<boolean>(false);
  const [civicTranscriptionResult, setCivicTranscriptionResult] = useState<string>('');
  const [civicComplaints, setCivicComplaints] = useState<{ id: string; msg: string; type: string }[]>([]);
  const [currCivicCard, setCurrCivicCard] = useState<number>(0);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const [astRadiusInput, setAstRadiusInput] = useState<number>(18);
  const [astSensitivityText, setAstSensitivityText] = useState<string>('SENSITIVE (High efficacy)');

  const handleAstRadiusChange = (radiusValue: number) => {
    setAstRadiusInput(radiusValue);
    if (radiusValue < 12) {
      setAstSensitivityText('RESISTANT (Zero efficacy)');
    } else if (radiusValue < 16) {
      setAstSensitivityText('INTERMEDIATE (Partial efficacy)');
    } else {
      setAstSensitivityText('SENSITIVE (High efficacy)');
    }
  };

  const categories = ['All', 'AI / Fullstack', 'Mobile & Biotech'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  const triggerCivicSimulation = () => {
    if (civicTranscribing) return;
    setCivicTranscribing(true);
    setCivicVoiceSimul(true);
    setCivicTranscriptionResult('');

    const phrases = [
      "There is a severe water leak at Main Avenue road, please dispatch maintenance teams immediately.",
      "The street lamp near sector 4 street corner is broken and flickering, causing safety hazards.",
      "Garbage collection truck has missed our community container for 3 consecutive days."
    ];
    const categoriesList = ["Water Infrastructure", "Power Grid", "Municipal Hygiene"];

    const randomIndex = Math.floor(Math.random() * phrases.length);
    const selectedPhrase = phrases[randomIndex];
    const selectedCat = categoriesList[randomIndex];

    setTimeout(() => {
      setCivicTranscriptionResult(selectedPhrase);
      setCivicTranscribing(false);
      
      const newComplaint = {
        id: Math.random().toString(36).substring(3, 7).toUpperCase(),
        msg: selectedPhrase,
        type: selectedCat
      };
      setCivicComplaints(prev => [newComplaint, ...prev].slice(0, 3));
    }, 1200);
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const civicSteps = [
    {
      title: "Hero Landing Page",
      badge: "Step 1 of 8: Landing Page",
      desc: "Minimalist onboarding page designed to bypass administrative friction.",
      actionLabel: "View Live Simulation",
    },
    {
      title: "Targeted Profile Creation",
      badge: "Step 2 of 8: Profile Mapping",
      desc: "Validates basic identity metrics and maps geographic region targets.",
      actionLabel: "Verify Profile Logic",
    },
    {
      title: "Audio Intake & Vernacular Upload",
      badge: "Step 3 of 8: Problem Voice Input",
      desc: "Accepts vernacular spoken streams or typed Hindi/English transcripts.",
      actionLabel: "Analyze Speech Pipeline",
    },
    {
      title: "Dynamic Intent Identification",
      badge: "Step 4 of 8: Intent Classification",
      desc: "Strips noise from input text to isolate the underlying complaint category.",
      actionLabel: "Confirm Domain Logic",
    },
    {
      title: "Automatic Complaint Drafting",
      badge: "Step 5 of 8: Complaint Draft",
      desc: "Drafts formal custom petitions from disorganized verbal statements.",
      actionLabel: "Copy Draft Form",
    },
    {
      title: "State Portal Target Redirection",
      badge: "Step 6 of 8: Precision Guidance",
      desc: "Redirects dynamically to official state-level portal endpoints.",
      actionLabel: "Access Official Redirection",
    },
    {
      title: "Mandatory Document Checklist",
      badge: "Step 7 of 8: Document Verification",
      desc: "Highlights mandatory document attachments customized to the category.",
      actionLabel: "Fulfill Attachment Rules",
    },
    {
      title: "Local Helpline Directory",
      badge: "Step 8 of 8: Emergency Desk Map",
      desc: "Displays local physical office locations and helpline phone networks.",
      actionLabel: "Acquire Urgent Helpline",
    }
  ];

  return (
    <section 
      id="projects" 
      className={`py-24 border-b transition-colors duration-300 ${
        isDarkMode 
          ? 'border-neutral-900 bg-neutral-950/30 text-neutral-300' 
          : 'border-zinc-200 bg-zinc-100/40 text-zinc-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono mb-3 uppercase tracking-wider border ${
              isDarkMode 
                ? 'bg-neutral-900 border-neutral-800 text-neutral-400' 
                : 'bg-zinc-200/80 border-zinc-300 text-zinc-650'
            }`}>
              <Sparkles className="h-3.5 w-3.5 text-sky-500 animate-pulse" />
              CURATED DEVELOPMENT PORTFOLIO
            </div>
            <h2 className={`text-3xl sm:text-4xl font-display font-bold tracking-tight ${
              isDarkMode ? 'text-white' : 'text-zinc-950'
            }`}>
              Selected Technical Initiatives
            </h2>
            <p className={`text-sm sm:text-base max-w-xl mt-3 leading-relaxed ${
              isDarkMode ? 'text-neutral-400' : 'text-zinc-600'
            }`}>
              Simplified breakdowns of custom AI-integrated apps and biosystems. Explore the user scope alongside the system mechanics.
            </p>
          </div>

          {/* Filter options */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all active:scale-95 cursor-pointer ${
                  selectedCategory === cat
                    ? isDarkMode 
                      ? 'bg-neutral-100 text-neutral-950 font-semibold shadow' 
                      : 'bg-zinc-950 text-white font-semibold shadow'
                    : isDarkMode 
                      ? 'bg-neutral-900/60 text-neutral-400 border border-neutral-800 hover:text-white' 
                      : 'bg-white text-zinc-550 border border-zinc-200 hover:text-zinc-900'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={`group rounded-xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isExpanded 
                    ? isDarkMode 
                      ? 'border-neutral-700 bg-neutral-900/60 shadow-glow-active' 
                      : 'border-zinc-300 bg-white shadow-md'
                    : isDarkMode 
                      ? 'border-neutral-850 bg-neutral-900/30 hover:border-neutral-700 hover:bg-neutral-900/55' 
                      : 'border-zinc-200/80 bg-white hover:border-zinc-300 hover:shadow-sm'
                }`}
              >
                {/* Header Decoration Bar */}
                <div className={`px-5 py-3 border-b flex items-center justify-between text-[11px] font-mono ${
                  isDarkMode 
                    ? 'border-neutral-800/60 text-neutral-500 bg-neutral-950/20' 
                    : 'border-zinc-150 text-zinc-500 bg-zinc-50'
                }`}>
                  <span className="flex items-center gap-1.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${
                      isDarkMode ? 'bg-neutral-600 group-hover:bg-sky-400' : 'bg-zinc-400 group-hover:bg-indigo-500'
                    } transition-colors`}></span>
                    {project.category}
                  </span>
                  <span>{project.period}</span>
                </div>

                {/* Content block */}
                <div className="p-6 sm:p-7 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h3 className={`text-xl sm:text-2xl font-display font-semibold transition-colors ${
                        isDarkMode ? 'text-neutral-100 group-hover:text-white' : 'text-zinc-900 group-hover:text-black'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-xs sm:text-sm mt-1.5 font-mono ${
                        isDarkMode ? 'text-sky-400' : 'text-indigo-600'
                      }`}>
                        {project.tagline}
                      </p>
                    </div>

                    <div className="relative group shrink-0">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 rounded-lg blur opacity-70 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative inline-flex items-center gap-1.5 px-4.5 py-2.5 rounded-lg border text-xs font-mono font-bold tracking-wider transition-all duration-200 shadow-lg active:scale-95 ${
                          isDarkMode 
                            ? 'bg-neutral-105 border-white text-neutral-950 hover:bg-white hover:text-black' 
                            : 'bg-zinc-950 border-zinc-900 text-white hover:bg-zinc-850'
                        }`}
                        title="Inspect Open Source Code Repo"
                      >
                        <Github className="h-4 w-4 shrink-0" />
                        <span>VIEW CODE REPOSITORY</span>
                      </a>
                    </div>
                  </div>

                  {/* Highlights section */}
                  {project.metrics && (
                    <div className={`grid grid-cols-3 gap-3 my-6 p-3 rounded-lg ${
                      isDarkMode 
                        ? 'bg-neutral-950/40 text-neutral-200' 
                        : 'bg-zinc-50 text-zinc-800'
                    }`}>
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="flex flex-col min-w-0">
                          <span className={`text-[10px] font-mono uppercase truncate ${
                            isDarkMode ? 'text-neutral-500' : 'text-zinc-400'
                          }`} title={metric.label}>{metric.label}</span>
                          <span className="text-[11px] md:text-[9px] min-[360px]:text-[11px] min-[390px]:text-xs sm:text-sm font-mono font-bold mt-1 truncate block" title={metric.value}>
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Accessible Paraphrased Bullet Lists */}
                  <ul className="space-y-3.5 mt-5">
                    {project.bullets.map((bullet, idx) => {
                      const isCommon = bullet.startsWith('For Common Users:');
                      const isDev = bullet.startsWith('For Developers:');
                      const cleanedBullet = bullet.replace(/^(For Common Users:|For Developers:)/, '').trim();

                      return (
                        <li key={idx} className="text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed">
                          {isCommon && (
                            <span className="px-1.5 py-0.5 mt-0.5 rounded text-[10px] font-mono bg-emerald-550/10 text-emerald-500 border border-emerald-500/15 shrink-0">
                              HUMAN CRUX
                            </span>
                          )}
                          {isDev && (
                            <span className="px-1.5 py-0.5 mt-0.5 rounded text-[10px] font-mono bg-sky-500/10 text-sky-500 border border-sky-500/15 shrink-0">
                              DEV SYS
                            </span>
                          )}
                          {!isCommon && !isDev && (
                            <span className="text-neutral-500 mt-1 select-none">•</span>
                          )}
                          <span className={isDarkMode ? 'text-neutral-300' : 'text-zinc-700'}>
                            {cleanedBullet}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Stack specification elements */}
                  <div className={`flex flex-wrap gap-1.5 mt-6 pt-5 border-t ${
                    isDarkMode ? 'border-neutral-800/50' : 'border-zinc-200/50'
                  }`}>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 text-[10px] sm:text-xs font-mono rounded ${
                          isDarkMode 
                            ? 'bg-neutral-950/80 border border-neutral-800 text-neutral-400' 
                            : 'bg-zinc-100 border border-zinc-200 text-zinc-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Adaptive live sandbox module */}
                  {isExpanded && (
                    <div className={`mt-6 pt-5 border-t rounded-lg p-5 transition-all duration-300 ${
                      isDarkMode 
                        ? 'border-neutral-800 bg-neutral-950/50' 
                        : 'border-zinc-200 bg-zinc-50'
                    }`}>
                      {project.id !== 'civicassist' && (
                        <div className="flex items-center gap-2 mb-3 text-xs font-mono">
                          <Sliders className="h-4 w-4 text-sky-500" />
                          <span className={isDarkMode ? 'text-neutral-300' : 'text-zinc-800'}>
                            REAL-TIME SANDBOX ENVIRONMENT
                          </span>
                        </div>
                      )}

                      {/* Playground 1 */}
                      {project.id === 'civicassist' && (
                        <div className="space-y-6 text-xs font-mono">
                          {/* Rich explanatory banner */}
                          <p className={`text-xs sm:text-sm leading-relaxed ${
                            isDarkMode ? 'text-neutral-400' : 'text-zinc-650'
                          }`}>
                            Interactive steps showing how AI streamlines grievance routing.
                          </p>

                          {/* Screenshot Flashcards Deck */}
                          <div className={`relative border rounded-xl overflow-hidden p-3 sm:p-5 ${
                            isDarkMode ? 'bg-neutral-900/90 border-neutral-800' : 'bg-white border-zinc-200 shadow-xs'
                          }`}>
                            
                            {copiedText && (
                              <div className="absolute top-4 right-4 bg-emerald-600 text-white text-[10px] font-mono font-bold px-2 py-1 rounded shadow-md animate-pulse z-40">
                                Copied {copiedText}!
                              </div>
                            )}

                            {/* Carousel Main Container */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                              
                              {/* Left Column: Interactive UI Mockup representing the screenshot */}
                              <div className="md:col-span-6 flex flex-col justify-center w-full max-w-sm sm:max-w-md md:max-w-none mx-auto">
                                <div className={`w-full p-1.5 rounded-lg border bg-neutral-950 shadow-inner relative overflow-hidden flex flex-col justify-between ${
                                  isDarkMode ? 'border-neutral-850' : 'border-zinc-300'
                                }`}>
                                  
                                  {/* Browser window chrome dots */}
                                  <div className="flex items-center gap-1 px-2 py-1 border-b border-white/5 bg-neutral-900/60 mb-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    <span className="text-[9.5px] md:text-[7.5px] text-zinc-550 ml-1.5 font-sans truncate pr-4 max-w-[200px]">
                                      https://civicassist.gov.in/app
                                    </span>
                                  </div>

                                  {/* Render Current Active Screenshot Step Mockup */}
                                  <div className="transition-all duration-300">
                                    {currCivicCard === 0 && (
                                      <div className="bg-white text-zinc-900 rounded border border-zinc-200 overflow-hidden font-sans shadow-sm">
                                        <div className="flex items-center justify-between px-3 py-1.5 bg-white border-b border-zinc-150 text-[10px]">
                                          <div className="flex items-center gap-1.5 font-black text-blue-800">
                                            <span className="w-2.5 h-2.5 bg-blue-700 rounded-sm"></span>
                                            CIVIC ASSIST
                                          </div>
                                          <div className="hidden sm:flex gap-1.5 text-zinc-400 text-[10px] md:text-[8px] font-medium">
                                            <span className="text-blue-700 font-bold border-b border-blue-700">HOME</span>
                                            <span>HOW</span>
                                            <span>HELP</span>
                                          </div>
                                          <span className="px-2 py-0.5 bg-blue-800 text-white rounded text-[10px] md:text-[8px] font-bold">LOGIN</span>
                                        </div>
                                        <div className="p-4 text-center bg-gray-50/50 min-h-[140px] flex flex-col justify-center items-center">
                                          <div className="flex h-3 w-7 rounded-xs overflow-hidden mb-1.5 shadow-xs border border-zinc-200">
                                            <div className="bg-orange-400 flex-1"></div>
                                            <div className="bg-white flex-1 flex items-center justify-center text-blue-700 font-bold text-[11px] md:text-[9px] md:text-[7px] md:text-[5px]">❆</div>
                                            <div className="bg-emerald-600 flex-1"></div>
                                          </div>
                                          <h4 className="text-xs sm:text-[13px] font-black leading-tight text-zinc-900">
                                            Your Voice. <br />The Right Portal. <span className="text-blue-700 font-black">Instantly.</span>
                                          </h4>
                                          <p className="text-[10.5px] md:text-[8.5px] text-zinc-500 mt-1 max-w-[180px] leading-relaxed mx-auto">
                                            Civic Assist uses AI to simplify your complaint, identify the issue, and direct you to the exact government portal.
                                          </p>
                                          <button className="mt-2.5 px-2.5 py-1 bg-blue-800 text-white rounded font-bold text-[10px] md:text-[8px] flex items-center gap-1 hover:bg-blue-700 cursor-pointer">
                                            GET STARTED <ArrowRight className="h-2 w-2" />
                                          </button>
                                        </div>
                                      </div>
                                    )}

                                    {currCivicCard === 1 && (
                                      <div className="bg-zinc-50 text-zinc-900 rounded border border-zinc-200 overflow-hidden font-sans p-2 select-none shadow-sm">
                                        <div className="bg-white p-2.5 rounded border border-zinc-200 min-h-[135px]">
                                          <h4 className="text-[10px] font-bold text-zinc-900 leading-none">Update Profile</h4>
                                          <p className="text-[11px] md:text-[9px] md:text-[7px] text-zinc-500 mb-1.5 mt-0.5">We need your location to suggest the right complaint portal</p>
                                          
                                          <div className="space-y-1 text-[9.5px] md:text-[7.5px]">
                                            <div>
                                              <label className="block text-[10px] md:text-[8px] md:text-[6px] text-zinc-400 font-semibold uppercase">FULL NAME</label>
                                              <div className="flex items-center gap-1.5 border border-zinc-200 rounded px-1.5 py-0.5 bg-white">
                                                <User className="h-2 w-2 text-zinc-400" />
                                                <span className="text-zinc-800 font-semibold">rohit</span>
                                              </div>
                                            </div>
                                            
                                            <div className="grid grid-cols-2 gap-1.5">
                                              <div>
                                                <label className="block text-[10px] md:text-[8px] md:text-[6px] text-zinc-400 font-semibold uppercase">STATE</label>
                                                <div className="flex items-center gap-1 border border-zinc-200 rounded px-1 py-0.5 bg-white text-zinc-700">
                                                  <MapPin className="h-2 w-2 text-zinc-400" />
                                                  <span className="truncate">Maharashtra</span>
                                                </div>
                                              </div>
                                              <div>
                                                <label className="block text-[10px] md:text-[8px] md:text-[6px] text-zinc-400 font-semibold uppercase">CITY</label>
                                                <div className="flex items-center gap-1 border border-zinc-200 rounded px-1 py-0.5 bg-white text-zinc-700">
                                                  <MapPin className="h-2 w-2 text-zinc-400" />
                                                  <span className="truncate">Mumbai</span>
                                                </div>
                                              </div>
                                            </div>
                                          </div>

                                          <button className="w-full mt-2.5 py-1 bg-blue-800 text-white rounded font-bold text-[10px] md:text-[8px] text-center hover:bg-blue-700 cursor-pointer">
                                            UPDATE PROFILE
                                          </button>
                                        </div>
                                      </div>
                                    )}

                                    {currCivicCard === 2 && (
                                      <div className="bg-zinc-50 text-zinc-900 rounded border border-zinc-200 overflow-hidden font-sans p-2 shadow-sm">
                                        <div className="border border-zinc-200 bg-white p-2.5 rounded min-h-[135px] flex flex-col justify-between">
                                          <div>
                                            <div className="flex justify-between items-center text-[9.5px] md:text-[7.5px] text-zinc-400 mb-1">
                                              <span className="font-bold uppercase">File Your Complaint</span>
                                              <span>Mumbai, Maharashtra</span>
                                            </div>
                                            <h4 className="text-[10px] font-bold text-zinc-850 mb-1">Describe Your Problem</h4>
                                            
                                            <div className="border border-zinc-200 rounded p-1.5 bg-gray-50 text-[10px] md:text-[8px] font-medium leading-relaxed text-zinc-700 min-h-[40px]">
                                              मेरे घर पे बिजली नहीं आ रही है पिछले 10 दिन से मैं क्या करूँ, मुझे बताईए
                                            </div>
                                          </div>

                                          <div>
                                            <div className="flex items-center justify-between my-1">
                                              <div className="h-[1px] bg-zinc-200 flex-1"></div>
                                              <span className="text-[10px] md:text-[8px] md:text-[6px] text-zinc-400 px-1.5 font-mono">OR</span>
                                              <div className="h-[1px] bg-zinc-200 flex-1"></div>
                                            </div>

                                            <div className="grid grid-cols-1 gap-1">
                                              <div className="w-full py-0.5 border border-zinc-350 rounded text-zinc-650 text-[11px] md:text-[9px] md:text-[7px] font-bold flex items-center justify-center gap-1">
                                                <span>🎙️ RECORD VOICE</span>
                                              </div>
                                              <div className="w-full py-0.5 bg-blue-800 text-white rounded font-bold text-[11px] md:text-[9px] md:text-[7px] flex items-center justify-center gap-0.5">
                                                <span>PROCESS WITH AI</span>
                                                <ArrowRight className="h-2 w-2" />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {currCivicCard === 3 && (
                                      <div className="bg-zinc-50 text-zinc-900 rounded border border-zinc-200 p-2 shadow-sm min-h-[145px] flex flex-col justify-center">
                                        <div className="border border-zinc-200 bg-white p-2.5 rounded">
                                          <h4 className="text-[9.5px] font-bold text-zinc-800 mb-1.5">Is this your concern?</h4>
                                          
                                          <div className="border-l-2 border-blue-700 bg-blue-50/40 p-2 text-[9.5px] md:text-[7.5px] space-y-1">
                                            <div>
                                              <span className="block text-[10px] md:text-[8px] md:text-[6px] text-zinc-400 font-bold uppercase tracking-wider">SIMPLIFIED COMPLAINT</span>
                                              <span className="text-zinc-800 font-semibold">बिजली पिछले 10 दिनों से नहीं आ रही है।</span>
                                            </div>
                                            <div>
                                              <span className="block text-[10px] md:text-[8px] md:text-[6px] text-zinc-400 font-bold uppercase tracking-wider">CATEGORY</span>
                                              <span className="text-blue-750 font-bold font-mono">Electricity</span>
                                            </div>
                                          </div>

                                          <div className="grid grid-cols-2 gap-1.5 mt-2.5">
                                            <div className="py-1 bg-blue-800 text-white rounded text-[9.5px] md:text-[7.5px] font-bold text-center flex items-center justify-center gap-0.5">
                                              <Check className="h-2 w-2" /> YES, PROCEED
                                            </div>
                                            <div className="py-1 border border-zinc-200 text-zinc-655 rounded text-[9.5px] md:text-[7.5px] font-bold text-center flex items-center justify-center gap-0.5">
                                              <X className="h-2 w-2" /> RE-ENTER
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {currCivicCard === 4 && (
                                      <div className="bg-zinc-50 text-zinc-900 rounded border border-zinc-200 p-2 shadow-sm font-sans min-h-[145px]">
                                        <div className="border border-zinc-200 bg-white p-2 rounded">
                                          <div className="flex justify-between items-center text-[11px] md:text-[9px] text-zinc-900">
                                            <h4 className="font-bold">Your Complaint Draft</h4>
                                            <span className="text-[9.5px] md:text-[7.5px] text-blue-750 font-bold">✏️ Edit</span>
                                          </div>
                                          
                                          <div className="space-y-1.5 text-[11px] md:text-[9px] md:text-[7px] mt-1.5">
                                            <div className="p-1 border border-zinc-150 bg-gray-50/50 rounded flex justify-between items-center">
                                              <div>
                                                <span className="block text-[11px] md:text-[9px] md:text-[7px] md:text-[5px] text-zinc-400 font-bold">SUBJECT</span>
                                                <span className="font-medium text-zinc-805 leading-none">बिजली आपूर्ति बाधित: 10 दिनों से समस्या</span>
                                              </div>
                                              <button 
                                                onClick={() => handleCopyText("बिजली आपूर्ति बाधित: 10 दिनों से समस्या", "Subject")}
                                                className="px-1.5 py-0.5 bg-blue-50 text-blue-700 font-bold rounded text-[10px] md:text-[8px] md:text-[6px] hover:bg-blue-100 cursor-pointer"
                                              >
                                                COPY
                                              </button>
                                            </div>
                                            <div className="p-1 border border-zinc-150 bg-gray-50/50 rounded flex justify-between items-center">
                                              <div className="max-w-[75%]">
                                                <span className="block text-[11px] md:text-[9px] md:text-[7px] md:text-[5px] text-zinc-400 font-bold">DESCRIPTION</span>
                                                <span className="font-sans text-zinc-650 leading-tight block truncate">आदरणीय महोदय/महोदया, हमारे यहाँ बिजली बाधित है...</span>
                                              </div>
                                              <button 
                                                onClick={() => handleCopyText("आदरणीय महोदय/महोदया, मैं आपको सूचित करना चाहता हूँ कि हमारे यहाँ बिजली...", "Description")}
                                                className="px-1.5 py-0.5 bg-blue-50 text-blue-700 font-bold rounded text-[10px] md:text-[8px] md:text-[6px] hover:bg-blue-100 cursor-pointer"
                                              >
                                                COPY
                                              </button>
                                            </div>
                                            <div className="grid grid-cols-3 gap-1 bg-zinc-100/40 p-1 rounded font-mono text-[9.5px] md:text-[7.5px] md:text-[5.5px] text-zinc-550">
                                              <div><strong>CATEGORY</strong><br />Electricity</div>
                                              <div><strong>STATE</strong><br />Maharashtra</div>
                                              <div><strong>NAME</strong><br />rohit</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {currCivicCard === 5 && (
                                      <div className="bg-zinc-50 text-zinc-900 rounded border border-zinc-200 p-2 shadow-sm font-sans text-[10px] md:text-[8px] min-h-[145px] flex flex-col justify-center">
                                        <div className="border border-zinc-200 bg-white p-2 rounded">
                                          <span className="text-[10.5px] md:text-[8.5px] md:text-[6.5px] text-zinc-405 font-bold uppercase block leading-none">RECOMMENDED PORTAL</span>
                                          <h4 className="text-[11px] md:text-[9px] font-extrabold text-zinc-900 leading-tight mt-0.5">Maharashtra Grievance Portal (Aaple Sarkar)</h4>
                                          
                                          <button className="w-full mt-1.5 py-0.5 bg-blue-800 text-white font-bold text-[9.5px] md:text-[7.5px] rounded flex items-center justify-center gap-1">
                                            GO TO PORTAL <ExternalLink className="h-2 w-2" />
                                          </button>

                                          <span className="block text-[11px] md:text-[9px] md:text-[7px] font-bold text-zinc-800 border-t border-zinc-150 pt-1.5 mt-1.5 mb-1">Step-by-Step Guidance</span>
                                          <div className="space-y-[2px] text-[10.5px] md:text-[8.5px] md:text-[6.5px] text-zinc-500 font-medium">
                                            <div className="flex gap-1"><strong>01</strong> <span>Visit Aaple Sarkar Grievance Portal</span></div>
                                            <div className="flex gap-1"><strong>02</strong> <span>Register and click 'File Grievance'</span></div>
                                            <div className="flex gap-1"><strong>03</strong> <span>Paste details & upload document criteria</span></div>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {currCivicCard === 6 && (
                                      <div className="bg-zinc-50 text-zinc-900 rounded border border-zinc-200 p-2 shadow-sm min-h-[145px]">
                                        <div className="border border-zinc-200 bg-white p-2 rounded">
                                          <h4 className="text-[11px] md:text-[9px] font-bold text-zinc-800 mb-1 flex items-center gap-1">
                                            <CheckSquare className="h-2.5 w-2.5 text-emerald-500" /> Required Attachments
                                          </h4>
                                          
                                          <div className="space-y-1 text-[10.5px] md:text-[8.5px] md:text-[6.5px]">
                                            <div className="flex flex-wrap items-center justify-between gap-1 p-1 border border-red-200 bg-red-50/30 rounded text-red-950 font-medium">
                                              <span>⚠️ Electric Bill Copy (required)</span>
                                              <span className="text-[11px] md:text-[9px] md:text-[7px] md:text-[5px] px-1 bg-red-100 text-red-700 font-bold rounded leading-none">REQUIRED</span>
                                            </div>
                                            <div className="flex flex-wrap items-center justify-between gap-1 p-1 border border-zinc-200 bg-gray-50 rounded text-zinc-750">
                                              <span>📄 Identity Proof (Aadhaar or PAN)</span>
                                              <span>Optional</span>
                                            </div>
                                          </div>

                                          <div className="mt-2 border border-dashed border-zinc-300 rounded p-2 text-center text-[10px] md:text-[8px] md:text-[6px] text-zinc-400 bg-zinc-50/50 flex flex-col items-center justify-center min-h-[30px]">
                                            <UploadCloud className="h-3 w-3 text-zinc-300 mb-0.5" />
                                            <span>Upload attachment (PDF, PNG)</span>
                                          </div>
                                        </div>
                                      </div>
                                    )}

                                    {currCivicCard === 7 && (
                                      <div className="bg-zinc-50 text-zinc-900 rounded border border-zinc-200 p-2 shadow-sm font-sans min-h-[145px]">
                                        <div className="border border-zinc-200 bg-white p-2 rounded">
                                          <h4 className="text-[11px] md:text-[9px] font-bold text-zinc-950 flex items-center gap-1 mb-1">
                                            <Phone className="h-3 w-3 text-indigo-500" /> Local Helpline Offices
                                          </h4>
                                          
                                          <div className="grid grid-cols-2 gap-1.5 text-[10px] md:text-[8px] md:text-[6px]">
                                            <div className="p-1.5 border border-zinc-150 rounded bg-gray-50/50">
                                              <strong className="text-zinc-850 block leading-tight">BMC Main</strong>
                                              <span className="text-blue-700 font-bold">022-22694727</span>
                                              <span className="text-zinc-400 block text-[11px] md:text-[9px] md:text-[7px] md:text-[5px]">Mon-Sat, 10-6PM</span>
                                            </div>
                                            <div className="p-1.5 border border-zinc-150 rounded bg-gray-50/50">
                                              <strong className="text-zinc-850 block leading-tight">MSEDCL Desk</strong>
                                              <span className="text-emerald-700 font-bold">1912</span>
                                              <span className="text-zinc-400 block text-[11px] md:text-[9px] md:text-[7px] md:text-[5px]">24/7 Hotline</span>
                                            </div>
                                          </div>

                                          <div className="mt-1.5 p-1 bg-amber-50/50 border border-amber-200 rounded text-[9.5px] md:text-[7.5px] md:text-[5.5px] text-amber-900 text-center font-bold">
                                            📍 Office: BMC General Administration, Fort, Mumbai - 400001
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>

                                </div>
                              </div>

                              {/* Right Column: Title, Badge, Description and Index controls */}
                              <div className="md:col-span-6 flex flex-col justify-between">
                                <div className="space-y-2.5">
                                  <div className="flex items-center justify-between gap-2 overflow-hidden">
                                    <span className={`px-1.5 py-0.5 rounded text-[10.5px] md:text-[8.5px] min-[360px]:text-[11px] md:text-[9px] sm:text-[10px] font-mono font-bold tracking-wide uppercase truncate max-w-[130px] min-[380px]:max-w-[180px] min-[450px]:max-w-none ${
                                      isDarkMode ? 'bg-neutral-800 text-neutral-300' : 'bg-zinc-200 text-zinc-700'
                                    }`} title={civicSteps[currCivicCard].badge}>
                                      <span className="hidden min-[450px]:inline">Step {currCivicCard + 1} of 8: </span>
                                      {civicSteps[currCivicCard].badge.replace(/^Step \d+ of \d+:\s*/, '')}
                                    </span>
                                    <span className="text-[10px] font-mono text-neutral-500 shrink-0 font-medium select-none ml-1">
                                      {currCivicCard + 1} / 8
                                    </span>
                                  </div>

                                  <h4 className={`text-sm sm:text-base font-display font-semibold ${
                                    isDarkMode ? 'text-white' : 'text-zinc-900'
                                  }`}>
                                    {civicSteps[currCivicCard].title}
                                  </h4>

                                  <p className={`text-xs leading-relaxed ${
                                    isDarkMode ? 'text-neutral-450' : 'text-zinc-600 font-normal'
                                  }`}>
                                    {civicSteps[currCivicCard].desc}
                                  </p>
                                </div>

                                {/* Flashcard Navigation Buttons */}
                                <div className="flex flex-wrap items-center justify-between gap-1.5 pt-4 mt-4 border-t border-neutral-800/20">
                                  <button
                                    onClick={() => setCurrCivicCard(prev => Math.max(0, prev - 1))}
                                    className={`px-2 py-1 text-[10px] sm:px-3 sm:py-1 sm:text-xs font-mono rounded flex items-center gap-1 select-none transition-colors cursor-pointer ${
                                      currCivicCard === 0
                                        ? 'opacity-40 cursor-not-allowed text-neutral-500'
                                        : isDarkMode 
                                          ? 'bg-neutral-805 hover:bg-neutral-700 text-neutral-300 hover:text-white' 
                                          : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-750'
                                    }`}
                                    disabled={currCivicCard === 0}
                                  >
                                    <ArrowLeft className="h-3 w-3 shrink-0" />
                                    <span className="hidden min-[360px]:inline">PREV</span>
                                  </button>

                                  {/* Dot Indicators */}
                                  <div className="flex gap-1 min-[380px]:gap-1.5 items-center justify-center shrink-0">
                                    {civicSteps.map((_, i) => (
                                      <button
                                        key={i}
                                        onClick={() => setCurrCivicCard(i)}
                                        className={`w-1 h-1 min-[380px]:w-1.5 min-[380px]:h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                                          i === currCivicCard
                                            ? 'w-2.5 min-[380px]:w-3.5 bg-sky-500'
                                            : isDarkMode ? 'bg-neutral-700 hover:bg-neutral-550' : 'bg-zinc-300 hover:bg-zinc-400'
                                        }`}
                                        title={`Go to step ${i + 1}`}
                                      />
                                    ))}
                                  </div>

                                  <button
                                    onClick={() => setCurrCivicCard(prev => Math.min(7, prev + 1))}
                                    className={`px-2 py-1 text-[10px] sm:px-3 sm:py-1 sm:text-xs font-mono rounded flex items-center gap-1 select-none transition-colors cursor-pointer ${
                                      currCivicCard === 7
                                        ? 'opacity-40 cursor-not-allowed text-neutral-500'
                                        : isDarkMode 
                                          ? 'bg-neutral-805 hover:bg-neutral-700 text-neutral-300 hover:text-white' 
                                          : 'bg-zinc-200 hover:bg-zinc-300 text-zinc-750'
                                    }`}
                                    disabled={currCivicCard === 7}
                                  >
                                    <span className="hidden min-[360px]:inline">NEXT</span>
                                    <ArrowRight className="h-3 w-3 shrink-0" />
                                  </button>
                                </div>

                              </div>
                            </div>

                          </div>

                        </div>
                      )}

                      {/* Playground 2 */}
                      {project.id === 'ast-smart-analyzer' && (
                        <div className="space-y-4 text-xs font-mono">
                          <p className={`text-xs sm:text-sm leading-relaxed ${
                            isDarkMode ? 'text-neutral-400' : 'text-zinc-650'
                          }`}>
                            Adjust the range indicator to simulate zone measurement calibrations. Pathologists use these visual gauges to assess antibiotic sensitivity indices automatically.
                          </p>

                          <div className={`border rounded-lg p-4 space-y-4 ${
                            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-zinc-200'
                          }`}>
                            <div className="flex items-center justify-between border-b border-neutral-800/10 pb-2">
                              <span className="text-[10px] text-neutral-500 font-bold uppercase">Interactive Area Calibrator</span>
                              <span className="inline-block px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-500 text-[10px] border border-indigo-500/15">CAL_SYS_ACTIVE</span>
                            </div>

                            <div className="space-y-2">
                              <div className="flex justify-between text-xs">
                                <span className={isDarkMode ? 'text-neutral-400' : 'text-zinc-650'}>Calibrate Scan Radius:</span>
                                <span className={`font-bold ${isDarkMode ? 'text-white' : 'text-zinc-950'}`}>{astRadiusInput} mm</span>
                              </div>
                              <input
                                type="range"
                                min="8"
                                max="30"
                                value={astRadiusInput}
                                onChange={(e) => handleAstRadiusChange(Number(e.target.value))}
                                className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                              />
                            </div>

                            <div className="p-3 bg-neutral-950 rounded border border-neutral-800 flex items-center gap-4 text-neutral-300">
                              <div className="relative h-12 w-12 bg-neutral-900 rounded-full border border-dashed border-neutral-700 flex items-center justify-center overflow-hidden shrink-0">
                                <div
                                  className="absolute bg-sky-500/20 border border-sky-400/50 rounded-full transition-all duration-200"
                                  style={{
                                    width: `${astRadiusInput * 1.5}px`,
                                    height: `${astRadiusInput * 1.5}px`,
                                  }}
                                ></div>
                                <div className="h-1.5 w-1.5 bg-neutral-200 rounded-full z-10"></div>
                              </div>

                              <div className="text-[11px] leading-relaxed">
                                <div className="text-neutral-500 text-[11px] md:text-[9px] font-bold">AUTOMATED INTERPRETATIONIndex:</div>
                                <div className={`font-bold uppercase ${
                                  astRadiusInput < 12 
                                    ? 'text-red-400' 
                                    : astRadiusInput < 16 
                                      ? 'text-yellow-400' 
                                      : 'text-emerald-400'
                                }`}>
                                  {astSensitivityText}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Bottom expandable footer button */}
                <button
                  onClick={() => toggleExpand(project.id)}
                  className={`w-full border-t py-4 px-6 text-xs font-mono flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
                    isDarkMode 
                      ? 'border-neutral-800 hover:bg-neutral-900/80 text-neutral-400 hover:text-white' 
                      : 'border-zinc-200 hover:bg-zinc-50 text-zinc-550 hover:text-zinc-950'
                  }`}
                >
                  {isExpanded ? (
                    <>
                      COLLAPSE INTERACTIVE ENVIRONMENT <ChevronUp className="h-3.5 w-3.5" />
                    </>
                  ) : (
                    <>
                      RUN INTERACTIVE MODULES <ChevronDown className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
