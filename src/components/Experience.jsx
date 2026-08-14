import React from 'react';
import { experienceData, educationData } from '../data';
import { Briefcase, Building2, GraduationCap, Award, CheckCircle2, Rocket } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-950">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            KINH NGHIỆM LÀM VIỆC & HỌC VẤN
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Hành Trình Thực Chiến & Bằng Cấp
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Kinh nghiệm phát triển Game tại CSC Mobi, hợp tác với Tripledot Studios & nền tảng học vấn kỹ sư phần mềm.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto mb-12 glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">HỌC VẤN CHUYÊN NGÀNH</span>
                <h3 className="font-heading font-bold text-xl text-white">{educationData.school}</h3>
              </div>
            </div>

            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-300">
              {educationData.period}
            </span>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-semibold text-emerald-400">
              {educationData.degree} — <span className="text-slate-300 font-normal">{educationData.major}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {educationData.description}
            </p>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                <div>
                  <span className="text-xs font-mono font-semibold text-cyan-400 px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30">
                    {exp.period}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white mt-2">
                    {exp.role}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-slate-300 font-medium glass-panel px-3 py-1.5 rounded-xl border border-slate-800">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  {exp.company}
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {exp.description}
              </p>

              {/* Responsibilities bullet points from CV */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold block">
                  Vai trò & Nhiệm vụ chính:
                </span>
                
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Đảm nhiệm vai trò chính trong việc bảo trì, tối ưu, fix lỗi và thêm content cho các dự án <strong>Plant Series</strong> (Merge Plant, Zombie Kingdom,...).</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Được làm việc cùng với đối tác quốc tế <strong>Tripledot Studios</strong> với vai trò chính trong việc bảo trì, tối ưu, fix lỗi và phát triển content cho dự án <strong>Marble Match</strong>.</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Đảm nhiệm vai trò support các dự án khác: UI, tích hợp SDK, tích hợp Ads, Analytics Tracking, Localization (Đa ngôn ngữ), và các tính năng ngoài luồng core gameplay (Booster, Daily rewards,...).</span>
                </div>

                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Đảm nhiệm vai trò code chính cho các dự án game mới và game demo.</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
