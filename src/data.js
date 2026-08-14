export const personalData = {
  name: "Bón (Huấn)",
  title: "Senior Unity Developer & Game Architect",
  subtitle: "Chuyên gia phát triển Mobile Games, WebGL và tối ưu hóa hiệu năng hệ thống (GPU Instancing, Memory Management & GC Free).",
  bio: "Với hơn 5+ năm kinh nghiệm trong ngành Game Development, tôi tập trung vào kiến trúc phần mềm sạch (SOLID, Composition), tối ưu hóa GPU/Memory cho các tựa game Mobile & WebGL quy mô lớn. Đam mê tạo ra các trải nghiệm chơi game mượt mà với 60 FPS ổn định.",
  location: "Việt Nam",
  avatar: "./images/avatar.jpg",
  stats: [
    { label: "Năm kinh nghiệm", value: "5+" },
    { label: "Game dự án đã phát triển", value: "12+" },
    { label: "Lượt tải tích luỹ", value: "5M+" },
    { label: "Target FPS Mobile/WebGL", value: "60 FPS" }
  ],
  socials: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    email: "mailto:huan.unitydev@example.com",
    telegram: "https://t.me/"
  }
};

export const skillsData = [
  {
    category: "Core Engine & C#",
    icon: "Cpu",
    skills: [
      { name: "C# Modern (Span<T>, Memory<T>)", level: "Senior" },
      { name: "Unity Engine Architecture", level: "Expert" },
      { name: "Assembly Definitions (.asmdef)", level: "Senior" },
      { name: "Scriptable Object Architecture", level: "Senior" }
    ]
  },
  {
    category: "Hiệu năng & Tối ưu hóa (Optimization)",
    icon: "Zap",
    skills: [
      { name: "GPU Instancing & Draw Call Reduction", level: "Expert" },
      { name: "Zero-GC Allocation & Object Pooling", level: "Expert" },
      { name: "Profiler & Memory Profiler Deep-Dive", level: "Senior" },
      { name: "Addressables & Asset Bundle Management", level: "Senior" }
    ]
  },
  {
    category: "Kiến trúc & Frameworks",
    icon: "Boxes",
    skills: [
      { name: "Composition Over Inheritance", level: "Senior" },
      { name: "SOLID & Design Patterns", level: "Senior" },
      { name: "UniTask & Async/Await Game Loop", level: "Senior" },
      { name: "UI Canvas Rebuild Optimization", level: "Expert" }
    ]
  },
  {
    category: "Graphics & Shaders",
    icon: "Sparkles",
    skills: [
      { name: "HLSL / URP Shader Graph", level: "Advanced" },
      { name: "Mobile Shader Optimization (Half precision)", level: "Advanced" },
      { name: "VFX Graph & Particle Systems", level: "Advanced" },
      { name: "Post-Processing & Custom Render Passes", level: "Advanced" }
    ]
  }
];

export const projectsData = [
  {
    id: "marble-match",
    title: "Marble Match Master",
    tagline: "Game Puzzle Marble Shooter 3D với hiệu năng 60 FPS mượt mà trên Mobile & WebGL.",
    category: "3D Casual / Puzzle",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    features: [
      "Tối ưu GPU Instancing cho hàng ngàn viên bi cùng lúc trên màn hình.",
      "Hệ thống Object Pooling xử lý va chạm & hiệu ứng nổ bi không gây sụt FPS.",
      "Tích hợp Addressables nén tài nguyên tối ưu dung lượng WebGL build.",
      "Custom URP Shader hiệu ứng pha lê óng ánh mượt mà."
    ],
    techStack: ["Unity 2022.3 URP", "C#", "Object Pooling", "GPU Instancing", "Addressables"],
    webglPath: "/games/demo-marble/index.html", // Đường dẫn tương đối đến thư mục WebGL build
    hasWebglDemo: true, // Đã có/chuẩn bị sẵn bản demo playable
    githubUrl: "https://github.com/",
    playstoreUrl: null
  },
  {
    id: "cyber-runner",
    title: "Cyberpunk Endless Runner",
    tagline: "Game Chạy Vô Tận đồ họa Sci-Fi với hiệu ứng Neon Shader sống động.",
    category: "3D Action / Runner",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
    features: [
      "Map Generation tự động ngẫu nhiên theo Chunk không tạo rác bộ nhớ (Zero GC).",
      "Dynamic obstacle spawning với pooling thông minh.",
      "Shaders tối ưu cho thiết bị cấu hình thấp."
    ],
    techStack: ["Unity 2021", "C#", "Custom Shader", "UniTask", "VFX Graph"],
    webglPath: "/games/demo-runner/index.html",
    hasWebglDemo: false, // Hiện tại hiển thị modal preview video/thông báo
    githubUrl: "https://github.com/",
    playstoreUrl: "https://play.google.com/"
  },
  {
    id: "tactics-rpg",
    title: "Shadow Tactics Arena",
    tagline: "Game Chiến Thuật Turn-based với hệ thống AI State Machine linh hoạt.",
    category: "2D / Strategy RPG",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80",
    features: [
      "Hệ thống đường đi A* Grid Pathfinding tự viết bằng C# ReadOnlySpan.",
      "Tách rời Logic Game và View theo mô hình MVP / Command Pattern.",
      "UI Canvas tổ chức phân lớp tối ưu Canvas.SendWillRenderCanvases."
    ],
    techStack: ["Unity 2022", "C#", "A* Pathfinding", "ScriptableObjects", "UI Toolkit"],
    webglPath: "/games/demo-tactics/index.html",
    hasWebglDemo: false,
    githubUrl: "https://github.com/",
    playstoreUrl: null
  }
];

export const experienceData = [
  {
    period: "2023 - Hiện tại",
    role: "Senior Unity Developer / Technical Lead",
    company: "Game Studio X",
    description: "Chịu trách nhiệm kiến trúc phần mềm, quy chuẩn code (Coding Standard), kiểm soát memory leak và tối ưu hóa hiệu năng các dự án Game Mobile/WebGL chủ lực."
  },
  {
    period: "2021 - 2023",
    role: "Mid-level Unity Developer",
    company: "Global Game Tech",
    description: "Phát triển gameplay mechanics, tích hợp SDK (Ads, Analytics, In-App Purchase), tối ưu hóa Draw Call và Shader cho các tựa game Mid-Core 3D."
  },
  {
    period: "2019 - 2021",
    role: "Junior Game Developer",
    company: "Indie Game Lab",
    description: "Xây dựng 2D Casual games, xử lý Physics 2D, làm việc chặt chẽ với Art Team để import và tối ưu hóa Texture Atlases & Animations."
  }
];
