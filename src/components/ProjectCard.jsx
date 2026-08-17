import React from 'react';
import { Gamepad2, Check, Play, Award, Download } from 'lucide-react';

export default function ProjectCard({ project, onPlayDemo }) {
  return (
    <div className="glass-card rounded-3xl overflow-hidden border border-slate-800/80 group hover:border-cyan-500/40 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/10">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        
        {/* Left Column: Image Banner, Role Badge & Action Buttons */}
        <div className="lg:col-span-5 relative w-full min-h-[320px] sm:min-h-[380px] lg:min-h-full overflow-hidden bg-slate-900 flex flex-col justify-end">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          {/* Top Role Badge */}
          <div className="absolute top-4 right-4 z-10">
            {project.role && (
              <div className="relative">
                {/* Glowing Aura */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 rounded-2xl blur-md opacity-75 animate-pulse" />
                
                <span className="relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-extrabold bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 text-slate-950 flex items-center gap-2 shadow-2xl border border-amber-200/90 tracking-wider uppercase">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 stroke-[2.5]" />
                  {project.role}
                </span>
              </div>
            )}
          </div>

          {/* Action Buttons (Overlayed on bottom of the image) */}
          <div className="relative p-5 sm:p-6 flex flex-wrap items-center gap-3 z-10">
            {project.hasWebglDemo && (
              <button
                onClick={() => onPlayDemo(project)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-xl shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                Chơi Thử Demo
              </button>
            )}

            {project.apkUrl && (
              <a
                href={project.apkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-slate-950/85 border border-slate-700/80 hover:border-cyan-400 hover:bg-slate-900/95 hover:text-cyan-300 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Tải Game APK
              </a>
            )}
          </div>

        </div>

        {/* Right Column: Project Details, Features & Tech Stack */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-slate-950/40">
          
          <div className="space-y-4">
            
            {/* Project Header */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 p-[1px] shadow-lg shadow-orange-500/20 shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
                    <Gamepad2 className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                  </div>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent tracking-tight">
                  {project.title}
                </h3>
              </div>
              
              <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed font-light">
                {project.tagline}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
                Vai trò & Chi tiết kỹ thuật:
              </span>
              <div className="space-y-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Tech Stack Pills */}
          <div className="pt-5 border-t border-slate-800/80">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  #{tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
