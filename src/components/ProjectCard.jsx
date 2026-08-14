import React from 'react';
import { Gamepad2, Check, Play, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onPlayDemo }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col group hover:border-cyan-500/40 transition-all duration-300">
      
      {/* Thumbnail & Image Overlay Container */}
      <div className="relative h-52 w-full overflow-hidden bg-slate-900">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-xs font-medium glass-panel border border-slate-700 text-cyan-300">
            {project.category}
          </span>

          {project.hasWebglDemo && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 text-slate-950 flex items-center gap-1.5 shadow-lg shadow-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Playable WebGL
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-300 text-xs mt-1.5 leading-relaxed">
            {project.tagline}
          </p>

          {/* Key Technical Highlights */}
          <div className="mt-4 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
              Vai trò & Chi tiết kỹ thuật:
            </span>
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-4 pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
