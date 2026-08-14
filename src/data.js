export const personalData = {
  name: "HOÀNG QUANG HUÂN",
  title: "UNITY DEVELOPER",
  subtitle: "Unity Developer với gần 4 năm kinh nghiệm thực chiến, chuyên tối ưu và phát triển các dòng game Casual và Hybrid-casual.",
  bio: "Với tư duy linh hoạt và khả năng thích nghi cao, tôi luôn sẵn sàng đối mặt với những thay đổi nhanh của dự án và thị trường. Niềm đam mê lớn nhất của tôi trong công việc là không ngừng tìm tòi, học hỏi những công nghệ, kỹ thuật làm game mới mẻ để mang lại trải nghiệm mượt mà nhất cho người chơi.",
  location: "An Khánh, Hà Nội",
  address: "46 ngõ 131 thôn An Bình, An Khánh, Hà Nội",
  phone: "+84 944617420",
  email: "hoangquanghuan9x@gmail.com",
  avatar: "./images/avatar.png"
};

export const educationData = {
  school: "Học Viện Kỹ Thuật Quân Sự",
  period: "2016 - 2024",
  degree: "Kỹ Sư Khoa học máy tính K15",
  major: "Chuyên ngành Game và Mô phỏng",
  description: "Tích lũy kiến thức chuyên sâu về Kỹ thuật lập trình Game, Mô phỏng hệ thống và kỹ năng làm việc nhóm."
};

export const skillsData = [
  {
    category: "Lập trình chính (Programming)",
    icon: "Cpu",
    skills: [
      { name: "Unity & C# Gameplay Programming" },
      { name: "Cấu trúc OOP & Clean Code" },
      { name: "Xử lý Vật lý (Physics 2D/3D) & Animation" },
      { name: "UI Canvas & Layout Optimization" }
    ]
  },
  {
    category: "Kiến trúc Game (Architecture)",
    icon: "Boxes",
    skills: [
      { name: "Finite State Machine (FSM) Gameplay & AI" },
      { name: "Hệ thống Modular (Modular Systems)" },
      { name: "ScriptableObject Data Architecture" },
      { name: "Save/Load Data (JSON / PlayerPrefs)" }
    ]
  },
  {
    category: "Tối ưu hóa Mobile (Optimization)",
    icon: "Zap",
    skills: [
      { name: "Tối ưu hiệu năng (FPS) thiết bị cấu hình thấp" },
      { name: "Quản lý bộ nhớ, Zero GC & Object Pooling" },
      { name: "Kiểm soát và giảm dung lượng bản build (Textures, Audio)" },
      { name: "Giảm Draw Calls & Canvas Rebuilds" }
    ]
  },
  {
    category: "Tích hợp SDK (SDKs & Ads)",
    icon: "Sparkles",
    skills: [
      { name: "Firebase (Analytics, Events, Remote Config)" },
      { name: "Ads Mediation (AppLovin MAX, AdMob, IronSource)" },
      { name: "In-App Purchase (IAP) & Quản lý tiền tệ" },
      { name: "Localization (Đa ngôn ngữ)" }
    ]
  },
  {
    category: "Công cụ & Quy trình (Tools & Workflow)",
    icon: "Workflow",
    skills: [
      { name: "Git Workflow (Version Control, Branching)" },
      { name: "Debugging & Profiling (Unity Profiler, Android Logcat)" },
      { name: "Thích ứng nhanh, học hỏi công nghệ mới & Teamwork" }
    ]
  }
];

export const projectsData = [
  {
    id: "block-blaster",
    title: "Block Blaster",
    role: "Code Chính",
    category: "Color Match & Block Puzzle",
    tagline: "Game giải đố chiến thuật màu sắc kết hợp cơ chế bắn phá khối tự động (Auto-Blast), quản lý khay chứa giới hạn và vượt chướng ngại vật đa dạng.",
    thumbnail: "./images/block_blaster.jpg",
    features: [
      "Đảm nhiệm vai trò code chính Core Gameplay & Cơ chế Auto-Blast: Xây dựng logic chọn bóng màu từ khay dưới (Tray Slots) để tự động kích hoạt đạn bắn phá các cụm khối gạch cùng màu trên bảng giải đố.",
      "Hệ thống Quản lý Khay chứa & Thuật toán Game Over: Thiết kế thuật toán quản lý số lượng ô chứa giới hạn ở khay, xử lý logic hết nước đi (Out of moves / Fail state) khi khay đầy.",
      "Hệ thống Chướng ngại vật (Blockers & Level System): Lập trình logic các khối đặc thù (Khối khóa, rào chắn, màn che, khối đổi màu...) và kiến trúc nạp cấu hình level hand-crafted.",
      "Tối ưu hóa hiệu năng & Hiệu ứng bắt mắt (Juicy VFX): Xử lý hiệu ứng hạt nổ vỡ mãn nhãn, tia laser bắn mượt mà, áp dụng Object Pooling cho toàn bộ bóng, khối gạch và hạt VFX giúp game luôn đạt 60 FPS ổn định."
    ],
    techStack: ["Unity 2D/3D", "C# Gameplay", "Auto-Blast Mechanics", "Tray Slot System", "Object Pooling", "DoTween & VFX", "Level Architecture"]
  }
];

export const experienceData = [
  {
    period: "Tháng 06/2022 - Hiện tại",
    role: "Developer Unity",
    company: "Công ty CSC Mobi"
  }
];
