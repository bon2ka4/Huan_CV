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
  },
  {
    id: "my-seat",
    title: "My Seat: Last Person",
    role: "Code Chính",
    hasWebglDemo: false,
    webglPath: "./webgl/my-seat/index.html",
    apkUrl: "https://drive.google.com/file/d/1xkXUMCb7ZoNX1N07ct9v1Lh_Bcf5HqgZ/view?usp=sharing",
    tagline: "Game giải đố suy luận logic chỗ ngồi: Phân tích manh mối ngữ cảnh để xếp từng nhân vật vào đúng vị trí ghế và tìm ra người cuối cùng ngồi xuống trong lớp học, xe buýt, quán café.",
    thumbnail: "./images/my_seat.webp",
    features: [
      "Lập trình Hệ thống Giải đố Suy luận theo Luật (Rule-based Logic Engine): Xây dựng engine phân tích tập luật và manh mối (Clues System), tự động đối soát logic vị trí tương quan giữa các nhân vật và đồ vật trên bàn/ghế.",
      "Cơ chế Kéo-Thả (Drag & Drop) & Biểu cảm Nhân vật Đa trạng thái: Lập trình tương tác gắp thả nhân vật mượt mà, hệ thống animation biểu cảm phong phú (vui vẻ khi xếp đúng, khóc lóc/tức giận và trừ Tim khi xếp sai luật).",
      "Kiến trúc Môi trường Đa dạng & Data-Driven Levels: Thiết kế cấu trúc nạp dữ liệu màn chơi linh hoạt qua ScriptableObjects, dễ dàng mở rộng nhiều bối cảnh khác nhau (Lớp học, Xe buýt, Quán cafe, Công viên).",
      "Hệ thống Trợ giúp Thông minh (Hints & Eraser Tools): Xây dựng tính năng gợi ý vị trí logic (Hint Bulb) và công cụ sửa lỗi (Eraser) hỗ trợ người chơi vượt qua các màn giải đố hóc búa.",
      "Tối ưu hóa Hiệu năng & UI Canvas: Tối ưu hóa Canvas Rebuilds, phân tách các layer UI tĩnh/động và áp dụng Object Pooling cho các icon, nhân vật và hiệu ứng hạt VFX giúp game chạy mượt 60 FPS."
    ],
    techStack: ["Unity 2D/3D", "C# Logic Programming", "Rule-based Engine", "Drag & Drop System", "Multi-State Characters", "ScriptableObjects", "Object Pooling"]
  },
  {
    id: "alien-portal",
    title: "Alien Portal",
    role: "Code Chính",
    hasWebglDemo: false,
    webglPath: "./webgl/alien-portal/index.html",
    apkUrl: "https://drive.google.com/file/d/1OV5tYHwgW-qfry03km_4-U-qaUoL_-eY/view?usp=sharing",
    tagline: "Game giải đố chiến thuật không gian: Điều hướng các sinh vật ngoài hành tinh qua mạng lưới cổng dịch chuyển (Portals), khớp màu với hạm đội UFO và quản lý hàng chờ khay chứa giới hạn.",
    thumbnail: "./images/alien_portal.webp",
    features: [
      "Lập trình Core Gameplay (Portal Dispatching & UFO Color Matching): Xây dựng cơ chế chạm để điều hướng Alien (Tap-to-send), thuật toán kiểm tra khớp màu với chiếc UFO đang trực (On-duty UFO) và logic nạp Alien lên đĩa bay.",
      "Hệ thống Đồ thị Cổng Dịch Chuyển & Tìm đường (Portal Graph & Pathfinding): Thiết kế cấu trúc đồ thị liên kết các node cổng và bệ Alien, thuật toán tìm đường (Pathfinding) tự động phát hiện đường đi thông suốt hoặc xử lý trạng thái tắc nghẽn.",
      "Cơ chế Hàng Chờ Chiến Lược (Queue System) & Xử Lý Thất Bại: Lập trình hệ thống khay chờ 6 slots chứa các Alien sai màu, thuật toán kiểm soát lấp đầy và xử lý trạng thái thua cuộc (Fail State) khi hàng chờ bị tràn.",
      "Hệ thống Hạm Đội UFO Di Chuyển (UFO Fleet Rotation): Lập trình chuỗi đĩa bay UFO di chuyển liên tục theo hàng ngang, tự động đổi ca khi nạp đủ số lượng Alien tương ứng.",
      "Tối ưu hóa Hiệu năng & Hoạt họa Mượt mà (Zero GC & Pooling): Áp dụng Object Pooling cho hàng trăm Alien tí hon, cổng portal phát sáng và hiệu ứng chùm sáng tia UFO, tối ưu Draw Calls đạt 60 FPS mượt mà."
    ],
    techStack: ["Unity 2D/3D", "C# Gameplay", "Portal Graph System", "Pathfinding Algorithm", "UFO Color Matching", "Queue Management", "Object Pooling"]
  },
  {
    id: "nut-sort-factory",
    title: "Nut Sort Factory",
    role: "Code Chính",
    hasWebglDemo: false,
    webglPath: "./webgl/nut-sort-factory/index.html",
    apkUrl: "https://drive.google.com/file/d/1nlYAUN-1ZtagUc2f0DJ6JankD9HhF1Qa/view?usp=sharing",
    tagline: "Game giải đố phân loại đai ốc trên băng chuyền động lực: Thao tác đưa các đai ốc (Nuts) vào đúng bulong tương ứng, quản lý tải trọng băng chuyền và giải phóng các cột ốc bí ẩn.",
    thumbnail: "./images/nut_sort_factory.webp",
    features: [
      "Lập trình Core Gameplay (Conveyor Movement & Nut-to-Bolt Routing): Xây dựng hệ thống băng chuyền chuyển động liên tục (Conveyor Belt Physics/Spline System), cơ chế nhặt đai ốc và thuật toán tự động dẫn hướng đai ốc đến đúng trụ bulong cùng màu/hình dạng.",
      "Cơ chế Thử thách Đa dạng (Mystery Layers & Mixed Towers): Lập trình các lớp đai ốc ẩn dấu hỏi (Hidden Mystery Nuts), trụ bulong yêu cầu đa màu theo thứ tự nghiêm ngặt và hệ thống khóa bulong liên hoàn (Locked Bolts).",
      "Quản lý Giới hạn Băng Chuyền (Conveyor Capacity & Jam Detection): Thiết kế bộ đếm tải trọng ô chứa trên băng chuyền (0/12 Slots), thuật toán phát hiện tắc nghẽn (Belt Jam) và kích hoạt trạng thái Game Over khi hết chỗ lưu thông.",
      "Hệ thống Power-Up & Cứu Nguy (Nut Blast & Extra Slot): Xây dựng tính năng kích nổ phá hủy nhanh trụ bulong (Nut Blast) và mở rộng ô đệm băng chuyền (Extra Slot) giúp giải phóng đường đi trong các màn chơi khó.",
      "Tối ưu hóa Hiệu năng 3D & Spline Path (Zero GC & Pooling): Áp dụng Object Pooling cho toàn bộ các loại ốc 3D, bulong và hiệu ứng lắp ráp; tối ưu tính toán đường cong Spline Path giúp game chạy 60 FPS mượt mà trên mobile."
    ],
    techStack: ["Unity 3D", "C# Gameplay", "Conveyor Spline System", "Color & Shape Matching", "Belt Capacity Management", "Object Pooling", "DoTween & Juicy VFX"]
  }
];

export const experienceData = [
  {
    period: "Tháng 06/2022 - Hiện tại",
    role: "Developer Unity",
    company: "Công ty CSC Mobi"
  }
];
