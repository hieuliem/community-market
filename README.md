# Community Market Landing Page 🌿🇻🇳

Dự án Landing Page tối ưu hóa tỷ lệ chuyển đổi (CRO) dành cho các sự kiện gây quỹ cộng đồng, chợ phiên tại Giáo xứ.

## ✨ Tính năng nổi bật
- **Giao diện thân thiện, hiện đại:** Thiết kế responsive chuẩn mobile với màu sắc tươi sáng (Xanh lá - Cam).
- **Trải nghiệm mượt mà:** Xây dựng bằng Next.js 15 (App Router), Tailwind CSS v4 và Shadcn UI.
- **Form Đặt Hàng Tối Ưu:** Thu thập thông tin nhanh chóng với Mock API phía server, kết hợp thông báo Toast hiện đại từ thư viện Sonner.

## 🚀 Hướng dẫn cài đặt

1. **Clone repository:**
   ```bash
   git clone https://github.com/[username]/community-market.git
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
- `src/components/sections/`: Các module giao diện (Hero, BestSellers, WhyChooseUs, OrderForm, Testimonials, Footer).
- `src/app/api/order/route.ts`: API route xử lý logic nhận form đặt hàng.

## 🛠️ Công nghệ sử dụng
- **Core:** React 19, Next.js 15, TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** Shadcn UI, Lucide Icons, Sonner (Toast)

## 🤝 Đóng góp
Dự án được tạo ra nhằm mục đích xây dựng cộng đồng. Các đóng góp, pull request đều được chào đón!
