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

const categoryThemes = {
  Cpu: {
    iconBg: "bg-cyan-950/80 border-cyan-500/50 text-cyan-400 shadow-lg shadow-cyan-500/25",
    gradientLine: "via-cyan-400",
    hoverTitle: "group-hover:text-cyan-300",
    checkColor: "text-cyan-400"
  },
  Boxes: {
    iconBg: "bg-purple-950/80 border-purple-500/50 text-purple-400 shadow-lg shadow-purple-500/25",
    gradientLine: "via-purple-400",
    hoverTitle: "group-hover:text-purple-300",
    checkColor: "text-purple-400"
  },
  Zap: {
    iconBg: "bg-amber-950/80 border-amber-500/50 text-amber-400 shadow-lg shadow-amber-500/25",
    gradientLine: "via-amber-400",
    hoverTitle: "group-hover:text-amber-300",
    checkColor: "text-amber-400"
  },
  Sparkles: {
    iconBg: "bg-emerald-950/80 border-emerald-500/50 text-emerald-400 shadow-lg shadow-emerald-500/25",
    gradientLine: "via-emerald-400",
    hoverTitle: "group-hover:text-emerald-300",
    checkColor: "text-emerald-400"
  },
  Workflow: {
    iconBg: "bg-rose-950/80 border-rose-500/50 text-rose-400 shadow-lg shadow-rose-500/25",
    gradientLine: "via-rose-400",
    hoverTitle: "group-hover:text-rose-300",
    checkColor: "text-rose-400"
  }
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
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent inline-flex items-center gap-3">
            <Cpu className="w-8 h-8 text-cyan-400" />
            Kỹ Năng Chuyên Môn
          </h2>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((cat, idx) => {
            const IconComponent = iconMap[cat.icon] || Cpu;
            const theme = categoryThemes[cat.icon] || categoryThemes.Cpu;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 sm:p-8 relative group transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top Accent Gradient Line */}
                <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent ${theme.gradientLine} to-transparent opacity-60 group-hover:opacity-100 transition-all duration-300`} />

                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${theme.iconBg}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-heading font-bold text-xl text-white ${theme.hoverTitle} transition-colors`}>
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
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${theme.checkColor}`} />
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
