import * as React from 'react';
import { Fingerprint, Sparkles, Quote } from 'lucide-react';

export default function ParticleHero() {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const [imgHasError, setImgHasError] = React.useState(false);
  
  // 3D Tilt State
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left; // X position inside the element
    const y = e.clientY - rect.top;  // Y position inside the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt angles (maximum 15 degrees)
    // For flipped card, we reverse tiltY calculation to maintain natural perspective shift
    const multiplier = isFlipped ? -1 : 1;
    const tiltX = ((y - centerY) / centerY) * 12; // tilt around X axis
    const tiltY = ((x - centerX) / centerX) * -12 * multiplier; // tilt around Y axis
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 }); // reset tilt smoothly
  };

  const toggleFlip = (e: React.MouseEvent) => {
    // Prevent flip if clicking on links or interactive buttons inside
    const target = e.target as HTMLElement;
    if (target.closest('.no-flip')) {
      return;
    }
    setIsFlipped(!isFlipped);
  };

  // Base card 3D transformation
  const cardTransform = isHovering
    ? `rotateX(${tilt.x}deg) rotateY(${tilt.y + (isFlipped ? 180 : 0)}deg) scale(1.03)`
    : `rotateX(0deg) rotateY(${isFlipped ? 180 : 0}deg) scale(1)`;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-1">
      <style>{`
        .card-perspective {
          perspective: 1500px;
        }
        .card-preserve-3d {
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
        }
        .card-backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .card-face-back {
          transform: rotateY(180deg);
        }
        
        /* High-tech scanlines effect */
        .scanlines-overlay {
          background: linear-gradient(
            rgba(18, 16, 16, 0) 50%, 
            rgba(0, 0, 0, 0.25) 50%
          ), linear-gradient(
            90deg, 
            rgba(255, 0, 0, 0.04), 
            rgba(0, 255, 0, 0.01), 
            rgba(0, 0, 255, 0.04)
          );
          background-size: 100% 4px, 6px 100%;
        }

        /* Ambient glowing dots */
        .tech-mesh {
          background-image: radial-gradient(rgba(14, 165, 233, 0.15) 1px, transparent 1px);
          background-size: 16px 16px;
        }
      `}</style>

      {/* Outer 3D Perspective Wrapper */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleFlip}
        className="card-perspective w-full h-[380px] md:h-[420px] lg:h-[450px] relative select-none cursor-pointer group"
      >
        {/* Tilting Solid Card */}
        <div 
          className="card-preserve-3d w-full h-full relative rounded-2xl bg-neutral-950/40 border border-neutral-800/40"
          style={{ 
            transform: cardTransform,
            boxShadow: isHovering 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(14, 165, 233, 0.2)' 
              : '0 10px 30px -10px rgba(0, 0, 0, 0.5)'
          }}
        >
          
          {/* ==================== FRONT FACE ==================== */}
          <div className="card-backface-hidden absolute inset-0 w-full h-full bg-neutral-950 rounded-2xl overflow-hidden border border-neutral-800/80">
            {/* Portrait Image */}
            {!imgHasError ? (
              <img
                src="/rohit_portrait.png"
                alt="Rohit Kushwaha Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-105 contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={() => setImgHasError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-neutral-900 to-neutral-950 p-4 text-center">
                <Fingerprint className="w-16 h-16 text-sky-500/45 animate-pulse mb-4" />
                <p className="text-xs font-mono text-neutral-500">Portrait Missing</p>
              </div>
            )}
          </div>

          {/* ==================== BACK FACE ==================== */}
          <div className="card-face-back card-backface-hidden absolute inset-0 w-full h-full bg-neutral-950 rounded-2xl overflow-hidden border border-sky-500/15 flex flex-col items-center justify-center p-8 text-center group/back">
            {/* Background elements */}
            <div className="absolute inset-0 tech-mesh opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 scanlines-overlay opacity-30 pointer-events-none"></div>
            
            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-sky-500/30"></div>
            <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-sky-500/30"></div>
            <div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-sky-500/30"></div>
            <div className="absolute bottom-4 right-4 w-1.5 h-1.5 rounded-full bg-sky-500/30"></div>

            {/* Inner Content */}
            <div className="z-10 flex flex-col items-center space-y-6">
              <div className="w-12 h-12 rounded-full bg-sky-500/5 border border-sky-500/20 flex items-center justify-center mb-2 group-hover/back:scale-110 group-hover/back:border-sky-500/40 transition-all duration-500">
                <Sparkles className="w-5 h-5 text-sky-400" />
              </div>
              
              <div className="relative max-w-[250px]">
                <Quote className="absolute -top-3 -left-5 w-4 h-4 text-neutral-800" />
                <p className="text-sm md:text-base font-mono text-neutral-300 leading-relaxed tracking-wide">
                  The best way to <span className="text-sky-400 font-semibold drop-shadow-[0_0_8px_rgba(56,189,248,0.4)]">predict the future</span> is to <span className="text-emerald-400 font-semibold drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">invent it</span>.
                </p>
                <Quote className="absolute -bottom-3 -right-5 w-4 h-4 text-neutral-800 rotate-180" />
              </div>

              <div className="pt-6 border-t border-neutral-800/60 w-3/4 mx-auto mt-4">
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                  Easter Egg Unlocked
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
