# VIỆT NAM ĐA TẦNG — Triển Lãm Số & Đấu Trường Tri Thức MLN131

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Playwright Tests](https://img.shields.io/badge/Playwright-24%2F24%20PASS-brightgreen?logo=playwright)](https://playwright.dev/)
[![License](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)

> **Sản phẩm học thuật số môn Chủ nghĩa xã hội khoa học (MLN131) — Đại học FPT**  
> **Chủ đề 7 — Chương 5:** *Cơ cấu xã hội – giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam*.

---

## 🏛️ Giới thiệu Dự án

**"VIỆT NAM ĐA TẦNG"** là nền tảng triển lãm số đương đại (*Contemporary Interactive Digital Exhibition*) kết hợp đấu trường trắc nghiệm thời gian thực dành cho giảng đường đại học. Dự án chuyển hóa toàn bộ nội dung lý luận hàn lâm của Chương V thành hành trình khám phá trực quan, sinh động, chuẩn mực sư phạm và giàu cảm xúc.

Tất cả luận điểm học thuật đều được đối soát và trích dẫn trực tiếp từ bài giảng chính khóa PPTX Tiết 18, 19, 20 của Giảng viên Đại học FPT, các Văn kiện Đại hội XIII của Đảng, Hiến pháp 2013 và Đề án 1 triệu ha lúa chất lượng cao (Quyết định 1490/QĐ-TTg).

---

## ✨ Điểm nhấn Tính năng & Trải nghiệm

### 1. Hành trình Triển lãm 6 Phân cảnh (6 Scrollytelling Scenes)
- **Phân cảnh 01: Bức tranh Xã hội** — Toàn cảnh bức tranh cơ cấu xã hội Việt Nam đương đại qua bố cục ảnh tư liệu nhiều lớp.
- **Phân cảnh 02: Tọa độ & Tam giác Quan hệ** — Sơ đồ tương tác SVG 3 đỉnh giải mã 3 mặt của quan hệ sản xuất (Sở hữu TLSX, Tổ chức quản lý, Địa vị phân phối) gắn với Điều 53 Hiến pháp 2013 về Đất đai.
- **Phân cảnh 03: Ba Quy luật Biến chuyển** — Thanh tiến trình thị giác chuyển đổi 3 giai đoạn khách quan kèm cảnh báo học thuật chống tư tưởng chủ quan duy ý chí.
- **Phân cảnh 04: Lát cắt Đương đại — 6 Lực lượng Xã hội** — Bộ sưu tập chân dung bất đối xứng phân tích 3 cột Vị trí - Vai trò - Đóng góp của Công nhân, Nông dân, Trí thức, Doanh nhân; làm rõ bản chất giao thoa nhân khẩu học của Phụ nữ và Thanh niên.
- **Phân cảnh 05: Hạt gạo Liên minh — Chuỗi Giá trị Nông sản** — Hành trình tương tác 4 chặng của hạt gạo Việt Nam theo Đề án 1490/QĐ-TTg, minh chứng cho liên minh kinh tế 4 nhà.
- **Phân cảnh 06: Đúc kết Nhận thức & Thử thách** — Ôn tập cá nhân 5 câu chuẩn mực sư phạm và đấu trường thi trắc nghiệm trực tiếp.

### 2. "Đấu Trường Tri Thức" — Real-Time Multiplayer Classroom Game
- **Host Projection Deck (Giảng viên / Máy chiếu):**
  - Tự động sinh mã phòng 5 ký tự và mã **QR Code SVG thuần** sắc nét trên màn chiếu.
  - Quản lý danh sách sinh viên thời gian thực (Lobby), bắt đầu trận, tạm dừng, mở đáp án và kết thúc trận.
  - Thanh đếm ngược thị giác kèm bộ đếm real-time (`Đã nộp: X / Y sinh viên`).
  - Biểu đồ phân bổ phương án của cả lớp và bảng luận cứ học thuật trích dẫn slide PPTX.
  - **Bục vinh danh Top 3 (Podium):** Huy chương Vàng, Bạc, Đồng và bảng xếp hạng tổng.
- **Mobile Player Deck (Sinh viên / Điện thoại 320px–430px):**
  - 4 bàn phím xúc giác tactile hình học lớn (▲ Tam giác Đỏ, ■ Vuông Xanh, ● Tròn Vàng, ◆ Thoi Lục).
  - Tự động khóa phím chống nộp lặp, phản hồi rung cảm ứng.
  - **Hệ số nhân 1.5x ở Vòng 3 (Về đích)** kích thích tinh thần thi đấu.
  - **Tự động khôi phục kết nối (`sessionStorage`):** F5 tải lại trang không mất điểm hay phòng chơi.
- **Server-Authoritative Anti-Cheat Engine:**
  - Đáp án đúng và lời giải thích được ẩn hoàn toàn khỏi client khi câu hỏi đang mở.
  - Tính điểm công bằng: Điểm tốc độ phản xạ mili-giây (500–1.000 điểm) + Thưởng chuỗi đúng (Streak Bonus).
  - Thuật toán phân định thứ hạng tự động khi bằng điểm: `Score DESC` -> `CorrectCount DESC` -> `TotalTimeMs ASC`.

### 3. Thiết kế & Trợ năng Hoàn hảo
- **Typography Tiếng Việt:** 100% phông chữ chuẩn Google Fonts (`Playfair Display`, `Be Vietnam Pro`, `JetBrains Mono`) với bộ ký tự `vietnamese`, xử lý phân tách chữ bằng `Intl.Segmenter` triệt tiêu lỗi đứt dấu thanh.
- **Chế độ Sáng / Tối (Dual Theme):** Nút chuyển đổi mượt mà giữa không gian ban ngày và phòng trưng bày ban đêm.
- **Chuẩn trợ năng WCAG 2.1 AAA:** Tỉ lệ tương phản màu sắc đạt 16.8:1, hỗ trợ phím Tab, Skip-link và chế độ giảm chuyển động (`prefers-reduced-motion`).

---

## 🛠️ Công nghệ Sử dụng

| Tầng công nghệ | Thư viện / Công cụ | Mục đích |
| :--- | :--- | :--- |
| **Framework** | Next.js 14 (App Router) | Nền tảng React hiện đại, SSR/SSG tối ưu SEO và tải trang cực nhanh |
| **Ngôn ngữ** | TypeScript 5 (Strict Mode) | An toàn kiểu dữ liệu 100%, không sử dụng `any` bừa bãi |
| **Giao diện** | Tailwind CSS 3.4 | Hệ thống Utility-first tokens tùy biến cao |
| **Hoạt họa** | Framer Motion | Hiệu ứng chuyển động mượt mà, layout transitions, spring physics |
| **Biểu tượng** | Lucide React | Hệ thống icon véc-tơ tối giản, nhất quán |
| **Kiểm thử** | Playwright Test | 24/24 ca kiểm thử E2E tự động, đa luồng đa thiết bị (1 Host + 3 Players) |
| **Cơ sở dữ liệu** | PostgreSQL / Supabase Realtime | Schema SQL hoàn chỉnh với RLS và triggers tại `supabase/migrations/` |

---

## 🚀 Hướng dẫn Cài đặt & Khởi chạy Cục bộ

### Yêu cầu hệ thống:
- **Node.js** >= 18.18.0
- **npm** >= 9.0.0

### Các bước thực hiện:

1. **Clone kho mã nguồn:**
   ```bash
   git clone https://github.com/nguyendinhthanhh/social-strata-vietnam.git
   cd social-strata-vietnam
   ```

2. **Cài đặt các gói phụ thuộc:**
   ```bash
   npm install
   ```

3. **Biên dịch bản sản xuất (Production Build):**
   ```bash
   npm run build
   ```

4. **Khởi chạy máy chủ cục bộ:**
   ```bash
   npm run start -- -p 3000
   ```
   Hoặc chạy môi trường phát triển:
   ```bash
   npm run dev
   ```

5. Mở trình duyệt truy cập: **`http://localhost:3000`** để trải nghiệm triển lãm và phòng đấu!

---

## 🧪 Kiểm thử Tự động (Automated Testing)

Chạy toàn bộ 24 ca kiểm thử tự động với Playwright:
```bash
npx playwright test
```

Chạy riêng ca kiểm thử Đấu trường Multiplayer (1 Host + 3 Điện thoại độc lập):
```bash
npx playwright test tests/multiplayer.spec.ts
```

Kiểm tra an toàn kiểu dữ liệu và định dạng mã nguồn:
```bash
npx tsc --noEmit
npm run lint
```

---

## 📁 Cấu trúc Thư mục Chính

```text
├── app/
│   ├── api/game/              # 5 Next.js API Routes quản lý phòng đấu multiplayer
│   ├── globals.css            # Biến màu tokens, typography fluid clamp, dark mode
│   ├── layout.tsx             # Root Layout tải phông Google Vietnamese tối ưu
│   └── page.tsx               # Trang chủ tích hợp tuần tự 6 phân cảnh
├── components/
│   ├── game/                  # Host View, Player View, GameHub, QRCode SVG
│   ├── motion/                # MotionPrimitives, WordReveal, LineReveal (Intl.Segmenter)
│   ├── Navbar.tsx             # Header điều khiển triển lãm, tiến trình đọc, Theme Toggle
│   ├── Scene1HeroIntro.tsx    # Phân cảnh 01: Bức tranh Xã hội
│   ├── Scene2TriangleRelations.tsx # Phân cảnh 02: Tam giác Quan hệ SVG
│   ├── Scene3ThreeLaws.tsx    # Phân cảnh 03: Ba Quy luật Biến chuyển
│   ├── Scene4SixForces.tsx    # Phân cảnh 04: Lát cắt 6 Lực lượng Xã hội
│   ├── Scene5RiceAlliance.tsx # Phân cảnh 05: Chuỗi Giá trị Lúa gạo
│   ├── Scene6TakeawayQuiz.tsx # Phân cảnh 06: Ôn tập cá nhân & Đấu trường trực tiếp
│   └── Footer.tsx             # Chân trang, cam kết liêm chính học thuật, tra cứu nguồn
├── content/
│   ├── GAME_QUESTION_BANK.json# 12 câu hỏi học thuật 3 vòng thi có trích dẫn slide
│   └── IMAGE_REGISTRY.json    # 18 tư liệu ảnh bản quyền và cấp phép minh bạch
├── docs/                      # Tài liệu kiểm toán học thuật, mỹ thuật, QA và hướng dẫn
├── references/course/         # Trích xuất 3 bài giảng gốc PPTX Tiết 18, 19, 20
├── supabase/migrations/       # Tệp schema PostgreSQL và chính sách bảo mật RLS
└── tests/                     # 24 ca kiểm thử Playwright tự động
```

---

## 📜 Bản quyền & Liêm chính Học thuật

- **Môn học:** Chủ nghĩa xã hội khoa học (MLN131) — Đại học FPT.
- **Bản quyền hình ảnh:** Toàn bộ tư liệu ảnh có nguồn gốc minh bạch từ Wikimedia Commons (giấy phép Creative Commons CC-BY / CC-BY-SA) và trích xuất hợp pháp phục vụ mục đích giáo dục từ Slide bài giảng chính khóa của Giảng viên. Chi tiết xem tại [`docs/IMAGE_CREDITS.md`](docs/IMAGE_CREDITS.md).
- **Mã nguồn:** Phát hành theo giấy phép [MIT License](LICENSE).
