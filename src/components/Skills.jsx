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
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Workflow className="w-3.5 h-3.5" />
            TECHNICAL STACK & CORE COMPETENCIES
          </div>
          
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Năng lực Kỹ thuật & Tối ưu hóa
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base">
            Tập trung vào hiệu năng hệ thống, kiến trúc code chuẩn mực và kỹ thuật nén tài nguyên tối ưu trên Unity Engine.
          </p>
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
                <div className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="text-sm font-medium text-slate-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                        skill.level === 'Expert'
                          ? 'bg-cyan-950 border-cyan-500/50 text-cyan-300'
                          : skill.level === 'Senior'
                          ? 'bg-purple-950 border-purple-500/50 text-purple-300'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Optimization Callout */}
        <div className="mt-12 glass-panel rounded-2xl p-6 border border-cyan-500/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-950/60 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base text-white">
                Nguyên tắc Không Đóng Băng Game (Zero GC Spikes)
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Tất cả gameplay loops chính được thiết kế loại bỏ hoàn toàn GC Allocation (`gcAlloc = 0B`), đảm bảo đợt thu gom rác bộ nhớ không gây khựng game.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
