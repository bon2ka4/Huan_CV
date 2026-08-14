import React from 'react';
import { Gamepad2, Check, Play, Sparkles, Award } from 'lucide-react';

export default function ProjectCard({ project, onPlayDemo }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col lg:flex-row group hover:border-cyan-500/40 transition-all duration-300 shadow-xl">
      
      {/* Thumbnail & Image Overlay Container */}
      <div className="relative lg:w-5/12 min-h-[300px] lg:min-h-[420px] overflow-hidden bg-slate-900 shrink-0">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-transparent to-transparent opacity-50" />
        
        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full text-xs font-medium glass-panel border border-slate-700 text-cyan-300">
            {project.category}
          </span>

          {project.role && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 flex items-center gap-1.5 shadow-lg shadow-cyan-500/20">
              <Award className="w-3.5 h-3.5 text-cyan-400" />
              {project.role}
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
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
