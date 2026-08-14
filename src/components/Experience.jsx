import React from 'react';
import { experienceData, educationData } from '../data';
import { Briefcase, Building2, GraduationCap, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const timelineItems = [
    {
      id: "education",
      type: "education",
      period: educationData.period,
      role: educationData.degree,
      subtitle: educationData.major,
      organization: educationData.school,
      icon: GraduationCap,
      badgeColor: "bg-purple-950 border-purple-500/30 text-purple-400",
      iconBg: "border-purple-400 text-purple-400 shadow-purple-500/20",
      bullets: [
        educationData.description
      ]
    },
    {
      id: "work",
      type: "work",
      period: experienceData[0]?.period || "Tháng 06/2022 - Hiện tại",
      role: experienceData[0]?.role || "Developer Unity",
      organization: experienceData[0]?.company || "Công ty CSC Mobi",
      icon: Briefcase,
      badgeColor: "bg-cyan-950 border-cyan-500/30 text-cyan-400",
      iconBg: "border-cyan-400 text-cyan-400 shadow-cyan-500/20",
      bullets: [
        "Đảm nhiệm vai trò code chính cho các dự án game mới và game demo.",
        "Đảm nhiệm vai trò chính trong việc bảo trì, tối ưu, fix lỗi và thêm content cho các dự án Plant Series (Merge Plant, Zombie Kingdom,...).",
        "Được làm việc cùng với đối tác Tripledot Studios với vai trò chính trong việc bảo trì, tối ưu, fix lỗi và phát triển content cho dự án Marble Match.",
        "Đảm nhiệm vai trò support các dự án khác: UI, tích hợp SDK, tích hợp Ads, Analytics Tracking, Localization (Đa ngôn ngữ), và các tính năng ngoài luồng core gameplay (Booster, Daily rewards,...)."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-slate-950">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            CAREER & EDUCATION
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Kinh Nghiệm và Học Vấn
          </h2>
        </div>

        {/* Straight Linear Top-to-Bottom Timeline Container */}
        <div className="max-w-3xl mx-auto space-y-10 relative before:absolute before:inset-y-0 before:left-5 sm:before:left-6 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 via-purple-500/50 before:to-transparent">
          {timelineItems.map((item) => {
            const IconComp = item.icon;
            return (
              <div key={item.id} className="relative flex items-start group pl-12 sm:pl-16">
                
                {/* Timeline Icon Badge (centered on vertical axis line) */}
                <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-slate-950 border-2 shadow-lg z-10 shrink-0 absolute left-0 top-1.5 ${item.iconBg}`}>
                  <IconComp className="w-5 h-5" />
                </div>

                {/* Timeline Card */}
                <div className="w-full glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/30 transition-all duration-300 space-y-4">
                  
                  {/* Period & Organization Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                    <div>
                      <span className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.period}
                      </span>
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mt-2">
                        {item.role}
                      </h3>
                      {item.subtitle && (
                        <div className="text-xs text-emerald-400 font-medium mt-0.5">
                          {item.subtitle}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium glass-panel px-3 py-1.5 rounded-xl border border-slate-800 self-start sm:self-auto">
                      {item.type === 'work' ? (
                        <Building2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                      )}
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-2.5 pt-1">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
