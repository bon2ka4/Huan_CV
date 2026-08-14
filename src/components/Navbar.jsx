import React, { useState, useEffect } from 'react';
import { Gamepad2, Code2, Cpu, FolderKanban, Briefcase, Menu, X, Phone, Mail, Download } from 'lucide-react';
import { personalData } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleExportPDF = () => {
    window.print();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Tổng quan", href: "#hero", icon: Code2 },
    { name: "Kỹ năng", href: "#skills", icon: Cpu },
    { name: "Dự án", href: "#projects", icon: FolderKanban },
    { name: "Kinh nghiệm & Học vấn", href: "#experience", icon: Briefcase },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'py-3 glass-panel shadow-lg shadow-cyan-950/20' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base text-white tracking-wider">HOÀNG QUANG HUÂN</span>
            <span className="text-[10px] text-cyan-400 font-mono -mt-0.5 tracking-widest uppercase">Unity Developer</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 glass-card px-4 py-1.5 rounded-full">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 transition-all duration-200"
              >
                <Icon className="w-4 h-4 text-cyan-500/70" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Phone Contact Badge & Export PDF */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass-card text-xs font-semibold text-slate-200 border border-slate-800">
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{personalData.phone}</span>
          </div>

          <button
            onClick={handleExportPDF}
            className="no-print flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-md shadow-cyan-500/20 transition-all duration-200 cursor-pointer active:scale-95"
          >
            <Download className="w-4 h-4" />
            Tải CV (PDF)
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800/80 px-4 pt-3 pb-6 mt-3 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-800/70 hover:text-cyan-400"
              >
                <Icon className="w-5 h-5 text-cyan-400" />
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
