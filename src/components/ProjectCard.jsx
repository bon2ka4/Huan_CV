import React from 'react';
import { Gamepad2, Check, Play, Sparkles, Award } from 'lucide-react';

export default function ProjectCard({ project, onPlayDemo }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col group hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
      
      {/* Thumbnail & Image Overlay Container (Top Banner) */}
      <div className="relative w-full h-72 sm:h-80 md:h-96 overflow-hidden bg-slate-900">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-[center_38%] group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        
        {/* Top Badges */}
        <div className="absolute top-4 right-4 z-10">
          {project.role && (
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-cyan-950/90 border border-cyan-400/60 text-cyan-300 flex items-center gap-2 shadow-lg shadow-cyan-500/25 tracking-wide">
              <Award className="w-4 h-4 text-cyan-400" />
              {project.role}
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-[1px] shadow-lg shadow-orange-500/20 shrink-0">
                <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent tracking-tight">
                {project.title}
              </h3>
            </div>
            
            <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Key Technical Highlights */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
              Vai trò & Chi tiết kỹ thuật:
            </span>
            <div className="space-y-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
              >
                #{tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
