# BÁO CÁO KIỂM TOÁN THỊ GIÁC, SỬA LỖI ĐIỀU HƯỚNG & ĐẤU TRƯỜNG TRI THỨC MULTIPLAYER (MLN131)

**Dự án:** Triển lãm Số "VIỆT NAM ĐA TẦNG" — Cơ cấu xã hội – giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội  
**Môn học:** MLN131 (Chủ nghĩa xã hội khoa học) — Chủ đề 7, Chương 5  
**Thời điểm thực hiện:** 07/11/2026  
**Trạng thái kiểm định:** **HOÀN TOÀN ĐẠT (PASS 24/24 TESTS)**

---

## 1. TỔNG HỢP KIỂM TOÁN VÀ SỬA LỖI (PRIORITY 0)

### 1.1. Lỗi Thanh Điều hướng: Thẻ Active biến thành khối đen trống rỗng
* **Hiện tượng:** Khi một phân cảnh được chọn trên thanh Header, ô điều hướng hiển thị thành một hình chữ nhật màu đen không có chữ bên trong.
* **Nguyên nhân kỹ thuật (Root Cause):** 
  - Thẻ `motion.span` phụ trách hiệu ứng trượt layout (`layoutId="exhibition-active-pill"`) được gán `position: absolute; inset: 0`.
  - Trong CSS Stacking Context của Framer Motion, phần tử có thuộc tính chuyển động phần cứng sẽ tự tạo một Stacking Context mới và đè lên các phần tử con có vị trí mặc định (`position: static`).
  - Do đó, số thứ tự phân cảnh và nhãn tiêu đề bị che khuất hoàn toàn phía sau lớp nền màu đen/xám đậm.
* **Biện pháp khắc phục triệt để:**
  - Thêm `z-0 pointer-events-none` vào `motion.span`.
  - Thêm `relative z-10 font-sans text-sm sm:text-[15px]` vào thẻ tiêu đề và số phân cảnh.
  - Phối màu tương phản cao: chữ sáng (`text-chalk font-semibold`) và số nổi bật (`text-citron`) trên nền tối `bg-carbon dark:bg-stone-800`.
  - Kết quả kiểm chứng: Nhãn phân cảnh luôn hiển thị rõ ràng, sắc nét trên cả giao diện Sáng và Tối.

### 1.2. Lỗi Typography Tiếng Việt: Vỡ dấu thanh, lệch khoảng cách ký tự (Tracking/Kerning)
* **Hiện tượng:** Các từ có dấu phức hợp tiếng Việt (như ơ, ư, ế, ộ, ẫ, ử) bị dính dấu, khoảng cách ký tự bất thường hoặc bị giật phông chữ (FOUT) khi tải trang.
* **Nguyên nhân kỹ thuật:**
  - Trang sử dụng `@import` tải phông từ Google Fonts bên ngoài mà không chỉ định `subsets: ["vietnamese"]`, dẫn đến trình duyệt sử dụng phông fallback hệ thống cho các ký tự có dấu.
  - Các hàm chia chuỗi dạng `str.split("")` trong JavaScript chia theo mã UTF-16 đơn lẻ (code units) thay vì grapheme cluster hoàn chỉnh, làm tách rời ký tự gốc và ký tự dấu tổ hợp (combining diacritics).
* **Biện pháp khắc phục triệt để:**
  - Chuyển toàn bộ hệ thống phông chữ sang `next/font/google` chuẩn của Next.js với `subsets: ["vietnamese", "latin"]` cho cả 3 họ phông:
    + **Phông tiêu đề:** `Playfair Display` (serif cổ điển, uy nghi).
    + **Phông nội dung:** `Be Vietnam Pro` (phông sans-serif thiết kế chuyên biệt cho tiếng Việt với dấu thanh thanh thoát).
    + **Phông mã hiệu/dữ liệu:** `JetBrains Mono` (định danh nguồn trích dẫn và mã phòng đấu).
  - Xây dựng thư viện chuẩn hóa chuỗi `lib/textUtils.ts`:
    + Sử dụng `Intl.Segmenter` với `granularity: "grapheme"` để phân tách ký tự tiếng Việt an toàn tuyệt đối.
    + Cung cấp các hàm `normalizeVietnamese()`, `getVietnameseWords()`, `getVietnameseLines()`.
  - Thay thế toàn bộ hoạt ảnh tách chữ cái bằng hoạt ảnh xuất hiện theo từ nguyên vẹn (`WordReveal`) hoặc theo dòng (`LineReveal`) trong `components/motion/MotionPrimitives.tsx`.

### 1.3. Tối ưu Không gian Header & Loại bỏ Yếu tố Rườm rà
* **Hiện tượng:** Header bị chật chội trên màn hình từ 1024px đến 1280px; cụm thương hiệu bên trái bị ngắt dòng thành 2–3 hàng; các nút phụ trợ (`Nguồn 33`, `T A`, `Động`) chiếm quá nhiều diện tích.
* **Biện pháp khắc phục theo phản hồi người dùng:**
  - Loại bỏ hoàn toàn các nút phụ `Nguồn 33`, `T A` (đổi cỡ chữ), `Động` (bật/tắt chuyển động) khỏi Header chính để giao diện thanh thoát như một thanh điều khiển triển lãm cao cấp.
  - Rút gọn nhãn các phân cảnh trên thanh điều hướng trung tâm:
    + `01 Bức tranh` • `02 Tọa độ` • `03 Biến chuyển` • `04 6 Lực lượng` • `05 Hạt gạo` • `06 Quiz`.
  - Tăng kích thước phông chữ nhãn điều hướng lên 14px–15px cho độ đọc tối ưu.
  - Giữ lại nút chuyển đổi chế độ giao diện Sáng / Tối duy nhất (`Giao diện Sáng` / `Giao diện Tối`) với icon mặt trời / mặt trăng rõ ràng.
  - Cố định khối nhận diện thương hiệu với `whitespace-nowrap flex-shrink-0`, ngăn chặn tình trạng vỡ dòng.

---

## 2. NGÔN NGỮ THỊ GIÁC ĐƯƠNG ĐẠI & CÁC TRẢI NGHIỆM TƯƠNG TÁC (PRIORITY 1 & 2)

Trang web đã được tái cấu trúc từ dạng tài liệu học thuật khô khan sang phong cách **Triển lãm Số Đương đại (Interactive Documentary Exhibition)**:
1. **Phân cảnh 01 (Nhập môn):** Bố cục ảnh tư liệu nhiều lớp, typography tiêu đề khổ lớn, hoạt ảnh cuộn chỉ dẫn tự nhiên.
2. **Phân cảnh 02 (Tam giác Quan hệ):** Sơ đồ tương tác SVG 3 đỉnh biểu diễn 3 mặt quan hệ sản xuất (Sở hữu TLSX, Tổ chức quản lý, Địa vị phân phối) với khung làm rõ Chế độ sở hữu toàn dân về đất đai (Điều 53 Hiến pháp 2013).
3. **Phân cảnh 03 (Ba Quy luật):** Thanh tiến trình thị giác chuyển đổi 3 giai đoạn (Thời kỳ quá độ -> Đổi mới kinh tế nhiều thành phần -> Xã hội hóa hiện đại) kèm cảnh báo tránh tư tưởng chủ quan duy ý chí.
4. **Phân cảnh 04 (6 Lực lượng Xã hội):** Phòng tranh chân dung tư liệu bất đối xứng, thẻ tương tác chi tiết Vị trí - Vai trò - Đóng góp, cùng dải phân tích chuyên biệt về Phụ nữ và Thế hệ trẻ (hai lực lượng giao thoa nhân khẩu học).
5. **Phân cảnh 05 (Hạt gạo Liên minh):** Hành trình tương tác 4 chặng của chuỗi giá trị lúa gạo Việt Nam (Nghiên cứu giống -> Canh tác cơ giới -> Chế biến xuất khẩu -> Logistics toàn cầu) gắn liền Đề án 1 triệu ha lúa chất lượng cao (Quyết định 1490/QĐ-TTg).
6. **Phân cảnh 06 (Đúc kết & Kiểm tra):** Cung cấp 2 chế độ:
   - **Ôn tập Cá nhân:** 5 câu hỏi tình huống có giải thích học thuật từng phương án và mã trích dẫn slide.
   - **Đại hội Tri thức (Live Challenge):** Đấu trường trắc nghiệm trực tiếp nhiều người chơi trong lớp học.

---

## 3. KIẾN TRÚC ĐẤU TRƯỜNG TRỰC TIẾP MULTIPLAYER (PRIORITY 3)

### 3.1. Ngân hàng Câu hỏi Chuẩn hóa (`content/GAME_QUESTION_BANK.json`)
Bao gồm 9 câu hỏi học thuật được biên soạn qua 3 hiệp đấu theo đúng nội dung Bài giảng MLN131 (Tiết 18, 19, 20):
* **Hiệp 1: Tọa độ Khái niệm & Quy luật (3 câu)** — Khái niệm cơ cấu xã hội – giai cấp, quan hệ cốt lõi quyết định, tính quy luật phổ biến.
* **Hiệp 2: Nhận diện 6 Lực lượng (3 câu)** — Giai cấp công nhân là lực lượng lãnh đạo, nông dân là chủ thể nông thôn mới, đội ngũ trí thức là nguồn lực đặc biệt.
* **Hiệp 3: Vận dụng Thực tiễn & Liên minh (3 câu)** — Bản chất nhân khẩu học của thanh niên/phụ nữ, chuỗi giá trị lúa gạo Đề án 1490/QĐ-TTg, vai trò nhà doanh nhân.

### 3.2. Động cơ Điều phối Server-Authoritative (`lib/game/gameEngine.ts`)
* **Chống gian lận (Anti-Cheat):** Đáp án chính xác (`correctIndex`) và lời giải thích học thuật (`explanation`) được ẩn hoàn toàn khỏi state trả về cho thí sinh khi câu hỏi đang diễn ra. Chỉ khi hết thời gian hoặc Host bấm hiện kết quả, server mới công bố đáp án.
* **Xử lý trùng lặp biệt danh:** Tự động phát hiện và thêm hậu tố ngẫu nhiên (ví dụ: `Minh Triết #2`) nếu có 2 sinh viên nhập cùng tên.
* **Cơ chế tính điểm linh hoạt:** Điểm cơ bản 1.000 điểm + Thưởng tốc độ tối đa 500 điểm tính theo mili-giây nộp bài + Thưởng chuỗi trả lời đúng liên tiếp (Streak Bonus).
* **Tự động mở đáp án:** Khi tất cả thí sinh đang kết nối đều đã nộp bài, phòng đấu tự động chuyển sang trạng thái REVEAL mà Host không cần chờ hết bộ đếm giờ.

### 3.3. Trải nghiệm Host (Giảng viên / Người trình chiếu)
* Tạo phòng với mã 5 ký tự độc bản.
* Tự động sinh mã **QR Code SVG thuần** (không phụ thuộc thư viện bên ngoài) để sinh viên quét mã vào phòng tức thì.
* Bảng điều khiển trình chiếu thời gian thực: Danh sách thí sinh trong phòng chờ, thanh đếm ngược visual, biểu đồ phân bổ đáp án của lớp, bảng vinh danh Top 3 và bảng xếp hạng tổng.

### 3.4. Trải nghiệm Player (Sinh viên dùng Smartphone)
* Giao diện tối ưu cho màn hình cảm ứng điện thoại (320px–430px).
* 4 bàn phím bấm tactile lớn với 4 hình khối hình học đặc trưng (▲ Tam giác Đỏ, ■ Vuông Xanh, ● Tròn Vàng, ◆ Thoi Lục).
* Phản hồi thị giác tức thì sau khi bấm: Trạng thái chờ, kết quả Đúng/Sai sống động, số điểm nhận được và chuỗi đúng.
* **Khả năng tự phục hồi kết nối (Reconnection Persistence):** Lưu phiên chơi an toàn trong `sessionStorage`. Nếu thí sinh vô tình tải lại trang (reload) hoặc mất sóng ngắn hạn, hệ thống tự động nhận diện token và khôi phục nguyên vẹn điểm số và phòng chơi.

### 3.5. Di chuyển Đám mây (Supabase Migration)
* Kèm file schema SQL hoàn chỉnh tại `supabase/migrations/001_game_schema.sql` với các bảng `game_rooms`, `game_players`, `game_answers`, kích hoạt Row Level Security (RLS) và Realtime replication.
* File cấu hình mẫu `.env.example` với các biến môi trường chuẩn.

---

## 4. KẾT QUẢ KIỂM THỬ TỰ ĐỘNG PLAYWRIGHT (PASS 24/24)

Đã chạy toàn bộ bộ kiểm thử tích hợp và E2E với kết quả tuyệt đối:

| Nhóm Kiểm thử | Tệp Kiểm thử | Số ca | Kết quả | Thời gian |
| :--- | :--- | :---: | :---: | :---: |
| **Tính năng Tương tác** | `tests/interactions.spec.ts` | 10 | **PASS 10/10** | 32.5s |
| **Đấu trường Multiplayer** | `tests/multiplayer.spec.ts` | 1 | **PASS 1/1** | 9.2s |
| **Chụp ảnh 6 Viewport** | `tests/screenshots.spec.ts` | 8 | **PASS 8/8** | 35.8s |
| **Kiểm thử Smoke Cơ bản** | `tests/smoke.spec.ts` | 5 | **PASS 5/5** | 4.8s |
| **TỔNG CỘNG** | | **24** | **PASS 24/24** | **1.4m** |

### Chi tiết Ca Kiểm thử Multiplayer Đa Luồng (`tests/multiplayer.spec.ts`)
* Khởi tạo đồng thời 3 ngữ cảnh trình duyệt độc lập (1 Giảng viên Host + 2 Sinh viên độc lập: Minh Triết & Thu Hà).
* Host tạo phòng mã ngẫu nhiên -> Cả 2 sinh viên cùng nhập phòng và hiển thị trên màn hình Lobby.
* Host bấm bắt đầu -> Cả 2 sinh viên đồng thời nhận câu hỏi số 1.
* Minh Triết chọn đáp án Đúng (Option B) trong 1.5 giây -> Nhận điểm thưởng tốc độ (+1.475đ).
* Thu Hà chọn đáp án Sai (Option A) -> Nhận phản hồi "RẤT TIẾC, CHƯA ĐÚNG!".
* Cả 2 người đã nộp -> Hệ thống tự động chuyển Host sang chế độ LUẬN CỨ HỌC THUẬT có trích dẫn `[C-18-03]`.
* Minh Triết F5 tải lại trình duyệt -> Phiên chơi được khôi phục nguyên vẹn 1.475đ mà không bị out phòng.

---

## 5. HỆ THỐNG ẢNH CHỤP KIỂM CHỨNG TRÊN TẤT CẢ VIEWPORT

Các ảnh chụp màn hình thực tế (full page screenshot) đã được lưu tại thư mục `tests/screenshots/`:
1. `tests/screenshots/mobile-320.png` (320x568 - iPhone SE hẹp)
2. `tests/screenshots/mobile-390.png` (390x844 - iPhone 12/13/14 tiêu chuẩn)
3. `tests/screenshots/mobile-390-dark.png` (390x844 - Giao diện Tối)
4. `tests/screenshots/mobile-430.png` (430x932 - iPhone Pro Max)
5. `tests/screenshots/tablet-768.png` (768x1024 - iPad Portrait)
6. `tests/screenshots/tablet-1024.png` (1024x768 - iPad Landscape)
7. `tests/screenshots/desktop-1440.png` (1440x900 - Màn hình Desktop Tiêu chuẩn)
8. `tests/screenshots/desktop-1440-dark.png` (1440x900 - Desktop Giao diện Tối)

**Đánh giá thẩm mỹ:**
- Không xuất hiện bất kỳ thanh cuộn ngang ngoài ý muốn (Zero horizontal overflow).
- Tiêu đề phân cảnh rõ ràng, chữ trắng trên nền đen có độ tương phản đạt chuẩn WCAG AAA.
- Khoảng cách lề và kích thước phông chữ trên mobile (320px–390px) thoáng đãng, dễ chạm bấm ngón tay.

