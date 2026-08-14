export const personalData = {
  name: "HOÀNG QUANG HUÂN",
  title: "UNITY DEVELOPER",
  subtitle: "Unity Developer với gần 4 năm kinh nghiệm thực chiến, chuyên tối ưu và phát triển các dòng game Casual và Hybrid-casual.",
  bio: "Với tư duy linh hoạt và khả năng thích nghi cao, tôi luôn sẵn sàng đối mặt với những thay đổi nhanh của dự án và thị trường. Niềm đam mê lớn nhất của tôi trong công việc là không ngừng tìm tòi, học hỏi những công nghệ, kỹ thuật làm game mới mẻ để mang lại trải nghiệm mượt mà nhất cho người chơi.",
  location: "An Khánh, Hà Nội",
  address: "46 ngõ 131 thôn An Bình, An Khánh, Hà Nội",
  phone: "+84 944617420",
  email: "hoangquanghuan9x@gmail.com",
  avatar: "./images/avatar.png",
  stats: [
    { label: "Năm kinh nghiệm", value: "4+" },
    { label: "Dòng Game chuyên sâu", value: "Casual & Hybrid" },
    { label: "Dự án Quốc tế", value: "Tripledot & CSC" },
    { label: "Target FPS Mượt mà", value: "60 FPS" }
  ]
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
    category: "Game Engines & Core Tech",
    icon: "Cpu",
    skills: [
      { name: "Unity Engine (2D/3D)", level: "Expert" },
      { name: "C# Game Logic & OOP", level: "Senior" },
      { name: "Casual & Hybrid-casual Gameplay", level: "Senior" },
      { name: "UI Canvas & Layout Optimization", level: "Senior" }
    ]
  },
  {
    category: "Tối ưu hóa & Tích hợp (Optimization & SDKs)",
    icon: "Zap",
    skills: [
      { name: "Fix bugs & Tối ưu hiệu năng Game", level: "Expert" },
      { name: "Tích hợp Ads SDKs & Analytics Tracking", level: "Senior" },
      { name: "Localization (Đa ngôn ngữ)", level: "Senior" },
      { name: "Memory Management & Object Pooling", level: "Senior" }
    ]
  },
  {
    category: "Tính năng Hệ thống (Game Features)",
    icon: "Boxes",
    skills: [
      { name: "Core Gameplay Loop & Mechanics", level: "Senior" },
      { name: "Hệ thống Booster & Daily Rewards", level: "Senior" },
      { name: "Level Design & Game Content Expansion", level: "Senior" },
      { name: "Thích ứng & Học hỏi Công nghệ mới", level: "Expert" }
    ]
  }
];

export const projectsData = [
  {
    id: "marble-match",
    title: "Marble Match Project",
    tagline: "Dự án hợp tác cùng đối tác quốc tế Tripledot Studios.",
    category: "Casual / Puzzle",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    features: [
      "Đảm nhiệm vai trò chính trong việc bảo trì, tối ưu hóa và fix lỗi.",
      "Thêm nội dung (content) mới theo yêu cầu của đối tác Tripledot Studios.",
      "Tối ưu hóa trải nghiệm chơi mượt mà trên đa dạng thiết bị."
    ],
    techStack: ["Unity", "C#", "Tripledot Collaboration", "Performance Fixes"],
    webglPath: "/games/demo-marble/index.html",
    hasWebglDemo: false
  },
  {
    id: "plant-series",
    title: "Plant Game Series (Merge Plant & Kingdom)",
    tagline: "Dòng Game chiến thuật Merge Casual hợp thời đại.",
    category: "Hybrid-Casual / Merge",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
    features: [
      "Đảm nhiệm vai trò chính trong bảo trì, tối ưu hóa và fix lỗi hệ thống.",
      "Cập nhật nội dung mới, bổ sung nhân vật và tính năng gameplay.",
      "Tích hợp SDK Quảng cáo, Analytics Tracking và hệ thống làm giàu tài nguyên."
    ],
    techStack: ["Unity", "C#", "Merge Gameplay", "SDK Integration", "UI Systems"],
    webglPath: "/games/demo-plant/index.html",
    hasWebglDemo: false
  },
  {
    id: "puzzle-screw",
    title: "Screw & Rescue Puzzle Games",
    tagline: "Game Giải Đố Vật Lý hấp dẫn với độ tương tác cao.",
    category: "Casual Puzzle / Physics",
    thumbnail: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80",
    features: [
      "Xây dựng cơ chế core gameplay giải đố tháo ốc vít và cứu hộ.",
      "Xử lý logic tương tác vật lý và hiển thị UI mượt mà.",
      "Tích hợp các tính năng bổ trợ (Booster, Quà tặng hàng ngày)."
    ],
    techStack: ["Unity", "C#", "Physics 2D/3D", "Booster Systems"],
    webglPath: "/games/demo-puzzle/index.html",
    hasWebglDemo: false
  },
  {
    id: "system-support",
    title: "Game Core Systems & SDK Integration",
    tagline: "Hệ thống hỗ trợ và hạ tầng kỹ thuật cho các dòng game tại CSC Mobi.",
    category: "Architecture & Integration",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&auto=format&fit=crop&q=80",
    features: [
      "Tích hợp các gói SDK: Ads (Quảng cáo), Tracking phân tích dữ liệu người dùng.",
      "Cấu hình Localization hỗ trợ đa ngôn ngữ thị trường quốc tế.",
      "Xây dựng luồng UI ngoài gameplay: Daily Login, Booster Shop, Popup Manager."
    ],
    techStack: ["Unity", "C#", "Ads SDK", "Tracking", "Localization"],
    webglPath: "/games/demo-sdk/index.html",
    hasWebglDemo: false
  }
];

export const experienceData = [
  {
    period: "Tháng 06/2022 - Hiện tại",
    role: "Developer Unity",
    company: "Công ty CSC Mobi",
    description: "Đảm nhiệm vai trò chính bảo trì, tối ưu, fix lỗi và phát triển content cho dòng game Plant và dự án Marble Match hợp tác với Tripledot Studios. Hỗ trợ phát triển UI, SDK (Ads, Tracking, Localization) và các tính năng ngoài luồng core gameplay."
  }
];
