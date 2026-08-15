import React, { useState } from 'react';
import { X, Maximize2, RotateCcw, Gamepad2, Info, Sparkles, ExternalLink } from 'lucide-react';

export default function GameViewer({ project, onClose }) {
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!project) return null;

  const toggleFullscreen = () => {
    const iframeElem = document.getElementById('webgl-iframe');
    if (!iframeElem) return;

    if (iframeElem.requestFullscreen) {
      iframeElem.requestFullscreen();
    } else if (iframeElem.webkitRequestFullscreen) {
      iframeElem.webkitRequestFullscreen();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container (Smartphone Frame for Portrait Mobile Game) */}
      <div className="relative w-full max-w-[460px] sm:max-w-[490px] h-[92vh] max-h-[860px] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden shadow-cyan-500/10">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Gamepad2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                {project.title}
                {project.hasWebglDemo && (
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                    WebGL Active
                  </span>
                )}
              </h3>
              <p className="text-xs text-slate-400 font-mono hidden sm:block">
                Path: {project.webglPath}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {project.hasWebglDemo && (
              <>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="Toàn màn hình"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              title="Đóng Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* WebGL Viewer / Main Content */}
        <div className="relative flex-1 h-[78vh] sm:h-[82vh] bg-slate-950 flex items-center justify-center p-0 overflow-hidden">
          
          {project.hasWebglDemo ? (
            <>
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950 text-slate-300 z-10 space-y-4">
                  <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin" />
                  <p className="text-sm font-mono text-cyan-400 animate-pulse">
                    Đang nạp Unity WebGL Engine...
                  </p>
                  <p className="text-xs text-slate-500">
                    Vui lòng chờ giây lát trong khi trình duyệt khởi tạo WebGL
                  </p>
                </div>
              )}

              <iframe
                id="webgl-iframe"
                src={project.webglPath}
                title={project.title}
                className="w-full h-full border-0 bg-black"
                onLoad={() => setLoading(false)}
                allow="fullscreen; autoplay; encrypted-media"
              />
            </>
          ) : (
            /* Fallback / Guidance Overlay when WebGL files haven't been copied into public/games/ yet */
            <div className="p-8 max-w-xl text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 mx-auto flex items-center justify-center text-cyan-400">
                <Sparkles className="w-8 h-8" />
              </div>
              
              <h4 className="font-heading font-bold text-2xl text-white">
                Sẵn sàng nhúng bản Build Unity WebGL!
              </h4>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                Để phát trực tiếp game <strong>{project.title}</strong> trên trang CV này, bạn chỉ cần copy thư mục build WebGL của Unity vào đường dẫn:
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-left font-mono text-xs text-cyan-300 space-y-2">
                <div>📁 public/games/{project.id}/</div>
                <div className="text-slate-400 pl-4">├── Build/</div>
                <div className="text-slate-400 pl-4">├── TemplateData/</div>
                <div className="text-slate-400 pl-4">└── index.html</div>
              </div>

              <div className="pt-2 text-xs text-slate-400">
                💡 Cập nhật thuộc tính <code className="text-cyan-400">hasWebglDemo: true</code> trong file <code className="text-cyan-400">src/data.js</code> để kích hoạt trình phát WebGL tự động.
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls Info */}
        <div className="px-5 py-2.5 border-t border-slate-800 bg-slate-950/90 shrink-0 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              Điều khiển: Chuột trái / Phím mũi tên
            </span>
          </div>
          <div>
            Nền tảng: <span className="text-slate-200 font-mono">Unity WebGL (URP)</span>
          </div>
        </div>

      </div>
    </div>
  );
}
