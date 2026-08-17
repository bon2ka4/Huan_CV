import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import Experience from './components/Experience';
import Footer from './components/Footer';
import { projectsData } from './data';
import { Gamepad2, Sparkles, Filter } from 'lucide-react';

const GameViewer = lazy(() => import('./components/GameViewer'));

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
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent inline-flex items-center gap-3">
                <Gamepad2 className="w-8 h-8 text-cyan-400" />
                Dự Án Thực Chiến
              </h2>
            </div>

            {/* Projects Vertical Stack */}
            <div className="flex flex-col space-y-12 max-w-6xl mx-auto">
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
        <Suspense fallback={
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md">
            <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
          </div>
        }>
          <GameViewer
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}

    </div>
  );
}
