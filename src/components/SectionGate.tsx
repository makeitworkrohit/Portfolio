import * as React from 'react';
import { useState, useEffect } from 'react';
import { Play, Check, Terminal, Cpu, Loader2 } from 'lucide-react';

interface SectionGateProps {
  sectionId: string;
  commandText: string;
  buttonLabel?: string;
  onUnlocked: () => void;
  isUnlocked: boolean;
}

export default function SectionGate({
  sectionId,
  commandText,
  buttonLabel = 'RUN QUERY',
  onUnlocked,
  isUnlocked,
}: SectionGateProps) {
  const [typedText, setTypedText] = useState('');
  const [typingComplete, setTypingComplete] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  // Intersection observer to trigger typing animation when viewed
  const [isInView, setIsInView] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Typing animation
  useEffect(() => {
    if (!isInView || isUnlocked) return;

    let index = 0;
    setTypedText('');
    setTypingComplete(false);

    const interval = setInterval(() => {
      if (index < commandText.length) {
        setTypedText((prev) => prev + commandText.charAt(index));
        index++;
      } else {
        setTypingComplete(true);
        clearInterval(interval);
      }
    }, 40); // speed of typing

    return () => clearInterval(interval);
  }, [isInView, commandText, isUnlocked]);

  // Simulation run action
  const handleRun = () => {
    if (isRunning || isUnlocked) return;
    setIsRunning(true);
    setProgress(0);

    const duration = 1200; // 1.2s simulation loading
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const progressInterval = setInterval(() => {
      currentStep++;
      const currentPercent = Math.min(100, Math.floor((currentStep / steps) * 100));
      setProgress(currentPercent);

      if (currentStep >= steps) {
        clearInterval(progressInterval);
        setIsRunning(false);
        onUnlocked();
      }
    }, intervalTime);
  };

  if (isUnlocked) return null;

  return (
    <div
      ref={containerRef}
      id={`section-gate-${sectionId}`}
      className="max-w-4xl mx-auto my-12 px-4"
    >
      <div className="bg-neutral-950 border border-neutral-850 rounded-xl p-6 sm:p-8 font-mono shadow-glow relative overflow-hidden">
        {/* Decorative Grid & Corner Elements for aesthetic visual */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-neutral-800"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-neutral-800"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-neutral-800"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-neutral-800"></div>

        {/* Console Header */}
        <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-5 text-[11px] text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-red-500"></span>
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            <span className="ml-2">GATEWAY_VALIDATION_PROTOCOL.sh</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-neutral-600">
            <Terminal className="h-3.5 w-3.5" />
            <span>PORT 3000</span>
          </div>
        </div>

        {/* Text Typing Area */}
        <div className="min-h-[48px] flex items-start gap-2 sm:gap-3 bg-neutral-900/65 border border-neutral-900 p-3 sm:p-4 rounded-lg overflow-hidden">
          <span className="text-sky-400 select-none font-bold text-xs sm:text-sm">$</span>
          <div className="flex-1 text-[10px] min-[360px]:text-[11px] min-[400px]:text-xs sm:text-sm text-neutral-200 leading-relaxed font-mono overflow-hidden">
            <span className="break-all whitespace-pre-wrap">{typedText}</span>
            {!typingComplete && (
              <span className="inline-block w-1.5 h-3.5 sm:w-2 sm:h-4 ml-0.5 bg-sky-400 animate-pulse align-middle"></span>
            )}
          </div>
        </div>

        {/* Active controls */}
        {typingComplete && (
          <div className="mt-6 flex flex-col sm:flex-row items-center sm:justify-between gap-4 animate-fade-in">
            <div className="text-[11px] text-neutral-500 flex items-center gap-2">
              <Cpu className="h-3.5 w-3.5 text-neutral-600 animate-pulse" />
              <span>Click to run compilation pipeline & render module visualizer</span>
            </div>

            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg text-xs tracking-wider border font-mono font-bold uppercase transition-all shadow-md cursor-pointer ${
                isRunning
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-500 cursor-not-allowed'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-950 border-white hover:shadow-cyan-950/40 active:scale-95'
              }`}
            >
              {isRunning ? (
                <>
                  <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  COMPILING {progress}%
                </>
              ) : (
                <>
                  <Play className="h-3 w-3 fill-current" />
                  {buttonLabel}
                </>
              )}
            </button>
          </div>
        )}

        {/* Loading Progress Bar simulation */}
        {isRunning && (
          <div className="mt-4 w-full h-1 bg-neutral-900 rounded-full overflow-hidden">
            <div
              className="h-full bg-sky-400 transition-all duration-100 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}
      </div>
    </div>
  );
}
