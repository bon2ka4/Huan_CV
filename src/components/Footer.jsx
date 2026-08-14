import React from 'react';
import { personalData } from '../data';
import { Gamepad2, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-12 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-heading font-bold text-base text-white">BÓN.UNITY</span>
              <p className="text-xs text-slate-400">Senior Unity Developer & Game Architect</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalData.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalData.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalData.socials.email}
              className="p-2 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Lên đầu trang</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 text-center text-xs text-slate-500 flex items-center justify-center gap-1">
          <span>© {new Date().getFullYear()} {personalData.name}. Built with React, TailwindCSS & Unity WebGL.</span>
        </div>
      </div>
    </footer>
  );
}
