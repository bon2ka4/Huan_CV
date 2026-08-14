import React from 'react';
import { skillsData } from '../data';
import { Cpu, Zap, Boxes, Sparkles, CheckCircle2, ShieldAlert, Workflow } from 'lucide-react';

const iconMap = {
  Cpu: Cpu,
  Zap: Zap,
  Boxes: Boxes,
  Sparkles: Sparkles,
  Workflow: Workflow
};

export default function Skills() {
  if (!skillsData || skillsData.length === 0) return null;

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/60">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Kỹ Năng Chuyên Môn
          </h2>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Cpu;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-8 relative group transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top Accent Gradient Line */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover:via-cyan-400 transition-all duration-300" />

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">
                      {cat.category}
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">
                      {cat.skills.length} kĩ năng chính
                    </span>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="text-sm font-medium text-slate-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
