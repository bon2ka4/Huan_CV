import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Experience from './components/Experience';
import GameViewer from './components/GameViewer';
import Footer from './components/Footer';
import { projectsData } from './data';
import { Gamepad2, Sparkles, Filter } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', '3D Casual / Puzzle', '3D Action / Runner', '2D / Strategy RPG'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Technical Skills Section */}
      <Skills />

      {/* Projects Showcase & WebGL Demo Section */}
      {projectsData && projectsData.length > 0 && (
        <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
          
          {/* Glow Effects */}
          <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <Gamepad2 className="w-3.5 h-3.5" />
                PLAYABLE WEBGL SHOWCASE
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
                Dự Án Nổi Bật & Demo Playable
              </h2>

              <p className="text-slate-400 text-sm sm:text-base">
                Nhấn nút <strong className="text-cyan-400 font-medium">Chơi Game Demo</strong> ở bất kỳ tựa game nào để chơi trực tiếp bản Unity WebGL ngay trên trình duyệt của bạn.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 ${
                    filter === cat
                      ? 'bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'glass-card text-slate-300 hover:text-white hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onPlayDemo={(p) => setSelectedProject(p)}
                />
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Experience & Achievements Section */}
      <Experience />

      {/* Footer */}
      <Footer />

      {/* Modal Unity WebGL Game Viewer */}
      {selectedProject && (
        <GameViewer
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

    </div>
  );
}
