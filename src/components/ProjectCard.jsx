import React from 'react';
import { Gamepad2, Github, ExternalLink, Check, Play, Sparkles, Layers } from 'lucide-react';

export default function ProjectCard({ project, onPlayDemo }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-800 flex flex-col group hover:border-cyan-500/40 transition-all duration-300">
      
      {/* Thumbnail & Image Overlay Container */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
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

          {project.hasWebglDemo ? (
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/90 text-slate-950 flex items-center gap-1.5 shadow-lg shadow-emerald-500/30 animate-pulse">
              <Sparkles className="w-3.5 h-3.5" />
              Playable WebGL
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/80 text-slate-400 border border-slate-800">
              Demo Info
            </span>
          )}
        </div>

        {/* Hover Quick Play Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/60 backdrop-blur-xs transition-opacity duration-300">
          <button
            onClick={() => onPlayDemo(project)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-xl shadow-cyan-500/30 scale-95 group-hover:scale-100 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            {project.hasWebglDemo ? "Chơi Game Ngay" : "Xem Chi Tiết & Video"}
          </button>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <h3 className="font-heading font-bold text-2xl text-white group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-300 text-sm mt-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Key Technical Highlights */}
          <div className="mt-4 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
              Điểm nổi bật về Kỹ thuật:
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

          {/* Action Buttons */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={() => onPlayDemo(project)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-xs text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-md shadow-cyan-500/20 transition-all duration-200"
            >
              <Gamepad2 className="w-4 h-4" />
              {project.hasWebglDemo ? "Chơi Demo WebGL" : "Xem Chi Tiết"}
            </button>

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl glass-card text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
