import { useState } from 'react';
import { PERSONAL_INFO } from '../data';
import { Github, Linkedin, Mail, Phone, MapPin, Copy, Check, ArrowRight, ExternalLink } from 'lucide-react';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper segment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand/Summary sector */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                CONTACT PORTAL // SECURE LINK
              </span>
              <h3 className="text-2xl font-display font-medium text-white">
                Initiate a Connection
              </h3>
              <p className="text-sm text-neutral-400 mt-3 leading-relaxed max-w-sm">
                Open to discuss generalist AI internships, technical strategy pipelines, or custom full-stack solutions. Feel free to reach out.
              </p>
            </div>

            {/* Structured Location specifications */}
            <div className="mt-8 space-y-2 text-xs sm:text-sm text-neutral-500 font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-neutral-600" />
                <span>Thane, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Direct copyable active block (Takes 7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/20 border border-neutral-850 p-6 sm:p-8 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-400 mb-3">
                <Mail className="h-4 w-4 text-sky-400" />
                <span>DIRECT DISPATCH ADDRESS</span>
              </div>

              {/* Copyable input group */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-neutral-950 p-2 rounded-lg border border-neutral-800">
                <span className="text-xs sm:text-sm font-mono text-neutral-300 px-3 py-1.5 overflow-hidden text-ellipsis whitespace-nowrap flex-1">
                  {PERSONAL_INFO.email}
                </span>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 py-1.5 px-4 rounded text-xs font-mono text-neutral-200 transition-colors pointer-events-auto"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400 animate-scale-up" />
                      COPIED!
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      COPY ADDRESS
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick outbound client links */}
            <div className="mt-8 pt-6 border-t border-neutral-900 flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                <span>GITHUB</span>
                <ExternalLink className="h-3 w-3 text-neutral-600" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                <span>LINKEDIN</span>
                <ExternalLink className="h-3 w-3 text-neutral-600" />
              </a>

              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
                <span>X (FORMERLY TWITTER)</span>
                <ExternalLink className="h-3 w-3 text-neutral-600" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower compliance tier */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-center gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            <span>© {new Date().getFullYear()} ROHIT KUSHWAHA. ALL RIGHTS SPECIFIED.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
