# HƯỚNG DẪN TRIỂN KHAI & VẬN HÀNH "ĐẤU TRƯỜNG TRI THỨC" MULTIPLAYER (MLN131)

**Hệ thống:** "ĐẤU TRƯỜNG TRI THỨC — MLN131 LIVE CHALLENGE"  
**Nền tảng:** Next.js 14 App Router, TypeScript Strict, Framer Motion, Tailwind CSS, Supabase Realtime / PostgreSQL Schema  
**Đối tượng phục vụ:** Giảng viên và sinh viên Đại học FPT trong giờ thuyết trình chuyên đề MLN131 (Chủ đề 7, Chương 5).

---

## 1. TỔNG QUAN KIẾN TRÚC HỆ THỐNG

Hệ thống được thiết kế theo mô hình **Server-Authoritative Anti-Cheat Engine** hai tầng linh hoạt:

1. **Tầng Máy chủ Cục bộ (In-Memory Engine — Mặc định sẵn sàng):**
   - Hoạt động ngay lập tức mà không phụ thuộc bất kỳ API key bên thứ ba nào.
   - Quản lý đồng bộ trạng thái phòng qua biến singleton `globalThis.__mln131_game_rooms`.
   - Cơ chế tự dọn dẹp (auto-purge) các phòng không hoạt động quá 2 giờ.
   - Thích hợp tối đa cho việc kiểm thử tự động, chạy offline trong lớp học và chấm điểm đồ án cục bộ.

2. **Tầng Đám mây Supabase PostgreSQL (Tùy chọn mở rộng):**
   - Lưu trữ bền vững dữ liệu bảng xếp hạng và nhật ký nộp bài sinh viên.
   - Hỗ trợ broadcast realtime qua WebSocket channel của Supabase.
   - Script khởi tạo và bảo mật RLS được lưu tại `supabase/migrations/001_game_schema.sql`.

---

## 2. NGÂN HÀNG 12 CÂU HỎI HỌC THUẬT (3 VÒNG THI)

Hệ thống tích hợp 12 câu hỏi trắc nghiệm chuẩn mực tại `content/GAME_QUESTION_BANK.json`:

* **VÒNG 1: PHẢN XẠ TRI THỨC (5 CÂU HỎI — HỆ SỐ 1.0X):**
  - **Q-01 [C-18-03]:** Vị trí trung tâm của Cơ cấu xã hội – giai cấp trong hệ thống xã hội.
  - **Q-02 [C-18-05]:** Quan hệ sở hữu tư liệu sản xuất quyết định địa vị chính trị – xã hội và phân phối.
  - **Q-03 [C-18-08]:** Quy luật biến đổi CCXH-GC gắn liền và bị quy định bởi cơ cấu kinh tế.
  - **Q-04 [C-19-04]:** Tính đa dạng, phức tạp của CCXH-GC xuất phát từ nền kinh tế nhiều thành phần.
  - **Q-05 [C-19-05]:** Xu hướng xích lại gần nhau giữa các giai cấp, tầng lớp trong thời kỳ quá độ.

* **VÒNG 2: AI GIỮ VAI TRÒ GÌ? (4 CÂU HỎI — HỆ SỐ 1.0X):**
  - **Q-06 [C-19-07]:** Giai cấp Công nhân giữ vai trò lãnh đạo cách mạng qua Đảng, tiên phong CNH-HĐH.
  - **Q-07 [C-19-08]:** Giai cấp Nông dân là chủ thể, trung tâm phát triển nông nghiệp và xây dựng nông thôn mới.
  - **Q-08 [C-19-09]:** Đội ngũ Trí thức là lực lượng lao động sáng tạo đặc biệt quan trọng trong kinh tế tri thức.
  - **Q-09 [C-19-10]:** Đội ngũ Doanh nhân tiên phong phát triển sản xuất kinh doanh, giải quyết việc làm.

* **VÒNG 3: GIẢI MÃ XÃ HỘI (3 CÂU HỎI — HỆ SỐ NHÂN ĐIỂM 1.5X):**
  - **Q-10 [C-19-11]:** Bản chất nhân khẩu học giao thoa của Phụ nữ và Thanh niên trong mọi giai cấp kinh tế.
  - **Q-11 [D-1490-01, C-20-07]:** Mô hình chuỗi giá trị lúa gạo 1 triệu ha thể hiện liên minh Công – Nông – Trí – Doanh.
  - **Q-12 [C-20-03]:** Liên minh kinh tế là cơ sở vật chất - kỹ thuật quyết định tính bền vững của khối liên minh.

---

## 3. QUY TẮC TÍNH ĐIỂM & PHÂN HẠNG (SCORING SPECIFICATION)

* **Điểm câu trả lời đúng (Vòng 1 & 2):**
  - Dao động từ **500 đến 1.000 điểm** dựa trên thời gian phản xạ đo bởi máy chủ.
  - Công thức: `Điểm cơ bản = 500 + 500 * (1 - Thời gian làm bài / Tổng thời gian)`.
  - Thưởng chuỗi đúng (Streak Bonus): Tối đa **200 điểm** (`+50 điểm` cho mỗi câu đúng liên tiếp).
* **Vòng 3 (Về đích):**
  - Tự động áp dụng **Hệ số nhân 1.5x** cho toàn bộ điểm đạt được (từ **750 đến 1.500 điểm**).
* **Câu sai hoặc không nộp bài:** **0 điểm** (chuỗi streak trở về 0).
* **Cơ chế phân định thứ hạng khi bằng điểm (Tie-Breaking Determinism):**
  1. Thí sinh có tổng điểm số cao hơn xếp trên.
  2. Nếu bằng điểm: Thí sinh có số câu trả lời đúng (`correctCount`) nhiều hơn xếp trên.
  3. Nếu vẫn bằng nhau: Thí sinh có tổng thời gian làm bài tích lũy (`totalTimeMs`) thấp hơn xếp trên.

---

## 4. HƯỚNG DẪN CẤU HÌNH & KHỞI CHẠY CỤC BỘ

### 4.1. Khởi chạy Chế độ Cục bộ (Local Run)
1. Cài đặt các gói phụ thuộc (nếu chưa cài):
   ```bash
   npm install
   ```
2. Biên dịch mã nguồn sản xuất:
   ```bash
   npm run build
   ```
3. Khởi chạy máy chủ:
   ```bash
   npm run start -- -p 3000
   ```
4. Truy cập `http://localhost:3000` trên trình duyệt:
   - Cuộn xuống **Phân cảnh 06** hoặc truy cập URL trực tiếp: `http://localhost:3000/#scene-06`.
   - Chọn tab **"Cùng chơi • Đấu trường Tri thức (12 câu)"**.
   - Bấm **"Tạo Phòng Đấu Mới (Host Deck)"** để trình chiếu trên máy chiếu.
   - Thí sinh dùng điện thoại quét mã QR hoặc mở `http://localhost:3000?joinRoom=XXXXX` để vào phòng.

### 4.2. Cấu hình Mở rộng với Supabase (Optional Cloud Deployment)
1. Tạo một project trên Supabase (https://supabase.com).
2. Vào mục **SQL Editor** trong Dashboard của Supabase, mở tệp `supabase/migrations/001_game_schema.sql` và nhấn **Run** để khởi tạo các bảng, chỉ mục và chính sách bảo mật RLS.
3. Kích hoạt tính năng Realtime trong Dashboard:
   - Vào **Database** -> **Replication**.
   - Kích hoạt bảng `game_rooms` và `game_players`.
4. Thiết lập tệp `.env.local` theo mẫu `.env.example`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-private-key
   ```

---

## 5. THẨM ĐỊNH TỰ ĐỘNG VỚI PLAYWRIGHT

Hệ thống đi kèm ca kiểm thử đa luồng thực tế tại `tests/multiplayer.spec.ts`, mô phỏng đồng thời:
- 1 Giảng viên tạo phòng, cấu hình bộ đếm giờ và quản lý tiến trình câu hỏi.
- 3 Sinh viên độc lập (Minh Triết, Thu Hà, Quốc Anh) dùng 3 phiên trình duyệt riêng biệt, tham gia phòng, trả lời câu hỏi và kiểm tra độ phản xạ.
- Kiểm tra cơ chế tự động mở đáp án khi cả 3 người đã nộp.
- Kiểm tra tính toán điểm số và thứ hạng chuẩn xác.
- Kiểm tra tính năng nạp lại trang (reload F5) và khôi phục phiên chơi (`sessionStorage`).
- Kiểm tra chuyển vòng và bục vinh danh Top 3 (Podium).

Lệnh chạy kiểm thử:
```bash
npx playwright test tests/multiplayer.spec.ts
```

