export const personalData = {
  name: "HOÀNG QUANG HUÂN",
  title: "UNITY DEVELOPER",
  subtitle: "Unity Developer với gần 4 năm kinh nghiệm thực chiến, chuyên tối ưu và phát triển các dòng game Casual và Hybrid-casual.",
  bio: "Với tư duy linh hoạt và khả năng thích nghi cao, tôi luôn sẵn sàng đối mặt với những thay đổi nhanh của dự án và thị trường. Niềm đam mê lớn nhất của tôi trong công việc là không ngừng tìm tòi, học hỏi những công nghệ, kỹ thuật làm game mới mẻ để mang lại trải nghiệm mượt mà nhất cho người chơi.",
  location: "An Khánh, Hà Nội",
  address: "46 ngõ 131 thôn An Bình, An Khánh, Hà Nội",
  phone: "+84 944617420",
  email: "hoangquanghuan9x@gmail.com",
  avatar: "./images/avatar.webp"
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
      { name: "Custom Editors & Tooling" },
      { name: "Scriptable Objects Architecture" }
    ]
  },
  {
    category: "Kiến trúc Game (Game Architecture)",
    icon: "Layers",
    skills: [
      { name: "Finite State Machine (FSM)" },
      { name: "Hệ thống Modular (Modular Systems)" },
      { name: "Event-Driven Architecture" },
      { name: "Singleton & Service Locator Patterns" }
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
    hasWebglDemo: true,
    webglPath: "./webgl/block-blaster/index.html",
    apkUrl: "https://drive.google.com/file/d/1iamqKlDwC0encpjV8lTVyY3dJjrNrcCc/view?usp=sharing",
    tagline: "Game giải đố chiến thuật màu sắc: Chọn khối tròn phù hợp để tự động phá huỷ các khối vuông phía trên, quản lý slot giới hạn và phá giải các blocker thông minh.",
    thumbnail: "./images/block_blaster.webp",
    features: [
      "Lập trình Core Gameplay (Chọn màu & Tự phá khối): Xây dựng logic người chơi chọn khối tròn màu để tự động kích hoạt cơ chế bắn phá chính xác các khối vuông cùng màu phía trên.",
      "Cơ chế Quản lý Slot chứa giới hạn: Lập trình hệ thống giới hạn slot chứa khối tròn, thuật toán kiểm soát chiếm chỗ khi chọn sai màu và phát hiện trạng thái hết slot / Game Over.",
      "Hệ thống Blocker thông minh & Cấp độ thử thách: Phát triển các loại khối chặn (blocker) độc đáo buộc người chơi tính toán trước nhiều bước để mở đường; thiết kế kiến trúc nạp cấp độ thử thách tăng dần.",
      "Tối ưu hóa hiệu năng & Hiệu ứng phá khối (Juicy VFX): Lập trình hiệu ứng nổ phá khối cực mãn nhãn, âm thanh sống động, áp dụng Object Pooling cho khối tròn, khối vuông và hiệu ứng hạt giúp game luôn mượt mà 60 FPS."
    ],
    techStack: ["Unity 2D/3D", "C# Gameplay", "Auto-Destroy System", "Slot Management", "Smart Blockers", "Object Pooling", "Juicy VFX & Sound"]
  },
  {
    id: "block-match-3d",
    title: "Block Match 3D",
    role: "Code Chính",
    hasWebglDemo: false,
    webglPath: "./webgl/block-match-3d/index.html",
    apkUrl: "https://drive.google.com/file/d/1HXdWy5Y4gtXK3Rur8bWiOVceeZZu5auc/view?usp=sharing",
    tagline: "Game giải đố Match-3D kết hợp cơ chế Đoàn tàu (Train Slots) và cốt truyện vượt khó: Thu thập khối màu nạp vào các toa tàu, vượt chướng ngại vật tường đếm số để trang hoàng phòng ốc ấm cúng.",
    thumbnail: "./images/block_match_3d.webp",
    features: [
      "Lập trình Core Gameplay (Match-3 & Train Slot System): Xây dựng logic chọn khối 3D trên bàn cờ, cơ chế di chuyển mượt mà vào khay chứa 7 ô và thuật toán tự động nạp khối màu vào các toa tàu chạy trên đường ray theo số lượng yêu cầu.",
      "Hệ thống Chướng ngại vật (Numbered Wall Layers): Lập trình logic các lớp tường chặn số đếm (7, 5, 15...) buộc người chơi tính toán chiến thuật bóc tách từng lớp khối theo thứ tự ưu tiên.",
      "Cơ chế Kiểm soát Game Over & Quản lý Khay: Thiết kế thuật toán phát hiện trạng thái hết slot chứa khi khay bị đầy mà chưa khớp được màu toa tàu, xử lý Fail State chính xác.",
      "Tích hợp Cốt truyện & Meta Decor (Room Renovation): Xây dựng hệ thống phân cảnh cốt truyện giúp đỡ nhân vật, quản lý tài nguyên thưởng sau màn chơi để mở khóa nội thất, lò sưởi và trang trí phòng khách.",
      "Tối ưu hóa hiệu năng & Hiệu ứng (Zero GC & DoTween): Áp dụng Object Pooling cho hàng trăm khối 3D, toa tàu và hiệu ứng hạt văng nổ, đảm bảo duy trì 60 FPS ổn định trên mọi thiết bị mobile."
    ],
    techStack: ["Unity 3D", "C# Gameplay", "Train Slot System", "Numbered Blockers", "Home Decor Meta", "Object Pooling", "DoTween & VFX"]
  }
];

export const experienceData = [
  {
    period: "Tháng 06/2022 - Hiện tại",
    role: "Developer Unity",
    company: "Công ty CSC Mobi"
  }
];
