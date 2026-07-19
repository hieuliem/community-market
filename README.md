# Community Market Landing Page 🌿🇻🇳

Dự án Landing Page tối ưu hóa tỷ lệ chuyển đổi (CRO) dành cho các sự kiện gây quỹ cộng đồng, chợ phiên tại Giáo xứ Các Thánh Tử Đạo Việt Nam, Richmond, Virginia.

## ✨ Tính năng nổi bật

- **Hero Slider mượt mà:** Trình trình diễn slider ảnh tùy chỉnh, hỗ trợ hiển thị 100% tỷ lệ ảnh (contain) đi kèm hiệu ứng làm mờ biên nền (blur backdrop fill), hiệu ứng chuyển cảnh mượt mà không nhấp nháy (GPU-accelerated fade) và thanh điều hướng 3 nút tròn tối giản.
- **Gian Hàng Rửa Xe Gây Quỹ:** Tích hợp thông tin giờ hoạt động, tờ rơi quảng cáo dạng popup zoom modal và bản đồ Google Map ghim chính xác địa điểm Pho 79 (Staples Mill Rd).
- **Gian Hàng Áo Dài Yêu Thương:** Trưng bày thông tin quyên góp/mua sắm gây quỹ xây trường, hỗ trợ xem flyer độ phân giải cao qua modal và hiển thị ảnh cắt cúp tối ưu trên trang (crop text thừa).
- **Form Đặt Hàng & Giữ Chỗ:** Form đặt hàng hai cột tối ưu trên máy tính:
  - **Bên trái:** Form nhập thông tin đi kèm tùy chọn **Giờ Nhận Hàng** linh hoạt (cho phép nhấn chọn/bỏ chọn tùy ý) liên kết trực tiếp sau các ca lễ.
  - **Bên phải:** Tờ rơi Ya Ua Tươi hiển thị tràn viền (borderless) hỗ trợ click phóng to.
- **Trải nghiệm mượt mà:** Xây dựng bằng Next.js 15 (App Router), Tailwind CSS v4 và Shadcn UI.
- **Mock API phía server:** Kết hợp thông báo Toast hiện đại từ thư viện Sonner.

## 🚀 Hướng dẫn cài đặt

1. **Clone repository:**
   ```bash
   git clone https://github.com/community-market/community-market.git
   cd community-market
   ```

2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```

3. **Chạy server phát triển:**
   ```bash
   npm run dev
   ```
   Sau đó mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000).

## 📁 Cấu trúc thư mục (Component Breakdown)
- `src/app/page.tsx`: Layout chính chứa toàn bộ Landing Page.
- `src/components/sections/`: Các module giao diện (Hero slider, CarWash, AoDai, BestSellers, WhyChooseUs, OrderForm, Testimonials, Footer).
- `src/app/api/order/route.ts`: API route xử lý logic nhận form đặt hàng.

## 🛠️ Công nghệ sử dụng
- **Core:** React 19, Next.js 15, TypeScript
- **Styling:** Tailwind CSS v4, tw-animate-css
- **UI Components:** Shadcn UI, Lucide Icons, Sonner (Toast)

## 🤝 Đóng góp
Dự án được tạo ra nhằm mục đích xây dựng cộng đồng. Các đóng góp, pull request đều được chào đón!
