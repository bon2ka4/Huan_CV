# KẾ HOẠCH TỔNG THỂ: XÂY DỰNG CV & PORTFOLIO CHO UNITY DEVELOPER TRÊN GITHUB PAGES

**Mục tiêu:** Tạo ra một trang CV/Portfolio tĩnh (Static Web), tốc độ load cao, có khả năng nhúng trực tiếp các bản build Game Demo (Unity WebGL) để nhà tuyển dụng trải nghiệm ngay trên trình duyệt.
**Tech Stack:** ReactJS (Vite), TailwindCSS, framer-motion (hiệu ứng), host trên GitHub Pages.

---

## 🤖 QUY TRÌNH GIT DÀNH RIÊNG CHO AI AGENT (AI INSTRUCTIONS)

*(Ghi chú cho AI Agent đang đọc file này: Bắt buộc tuân thủ quy trình sau khi tương tác với Git và Source Code)*

1. **Auto-Tracking:** Quá trình code hoàn thiện ở mỗi Component hoặc chức năng, Agent tự động phân tích file thay đổi.
2. **Auto-Commit Message:** Agent tự động tạo nội dung commit (Commit Message) ngắn gọn, chuẩn xác dựa trên logic vừa code.
3. **Strict Authorization (Cấp Quyền):** TRƯỚC KHI thực hiện lệnh `git push`, Agent **BẮT BUỘC** phải dừng lại và hỏi người dùng bằng thông báo: 
   > *"Bón Đại Ca, em đã chuẩn bị xong code và commit: '[Nội dung commit]'. Đại ca có cho phép em push source lên GitHub không?"*
4. **Execution:** Chỉ khi Bón Đại Ca gõ đồng ý (Ví dụ: "ok", "push đi", "triển"), Agent mới được phép chạy lệnh `git push`.

---

## GIAI ĐOẠN 1: CHUẨN BỊ TÀI NGUYÊN (ASSETS & TOOLS)

### 1. Phía Unity (Game Demo)
- [ ] Mở các project muốn show (VD: Marble Match).
- [ ] Chuyển nền tảng sang WebGL (File -> Build Settings -> WebGL).
- [ ] Tối ưu hóa trước khi build:
  - Nén Texture & Audio.
  - Xóa các Scene không cần thiết.
  - Player Settings -> Publishing Settings: Bật nén **Brotli** hoặc **Gzip** để giảm dung lượng tải.
- [ ] Build ra thư mục (Gồm các folder `Build`, `TemplateData` và file `index.html`). Đặt tên thư mục không dấu (vd: `demo-marble-match`).

### 2. Phía Web & GitHub Repository
- [ ] Cài đặt NodeJS (phiên bản mới nhất LTS) và Git.
- [ ] Tạo sẵn một Public Repository trên GitHub với tên: `[tên-tài-khoản-github].github.io`.
- [ ] Clone Repo vừa tạo về máy bằng lệnh: `git clone [link-repo]`.

---

## GIAI ĐOẠN 2: KHỞI TẠO DỰ ÁN & KIẾN TRÚC THƯ MỤC

### 1. Khởi tạo
- [ ] Mở Terminal tại thư mục Repo vừa clone, chạy lệnh: `npm create vite@latest . -- --template react` (dấu `.` để tạo trực tiếp trong thư mục hiện tại).
- [ ] Cài đặt package cơ bản: `npm install`
- [ ] Cài đặt Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer` và cấu hình file `tailwind.config.js`.

### 2. Tổ chức thư mục (Directory Structure)
Sắp xếp cấu trúc dự án như sau:

```text
/
├── public/                 # Chứa tài nguyên tĩnh (không đi qua bundler)
│   ├── images/             # Ảnh thumbnail, avatar
│   └── games/              # Copy các thư mục build Unity WebGL vào đây
│       └── demo-marble/    
├── src/
│   ├── components/
│   │   ├── GameViewer.jsx  # Component hiển thị iframe nhúng game
│   │   ├── ProjectCard.jsx # Thẻ hiển thị thông tin dự án
│   │   ├── Skills.jsx      # Section show kỹ năng tối ưu, core tech
│   │   └── Hero.jsx        # Mặt tiền trang CV
│   ├── data.js             # BỘ NÃO QUẢN LÝ DỮ LIỆU CV
│   ├── App.jsx             # Gom các section lại
│   └── index.css           # Cấu hình base của Tailwind
├── package.json
└── PLAN.md                 # Tệp quản lý dự án (chính là file này)