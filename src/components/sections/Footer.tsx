export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-10 px-4 mt-auto">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Community Market</h3>
          <p className="mb-2">📍 Địa điểm: Hội Trường Giáo Xứ Các Thánh Tử Đạo Việt Nam, Richmond, VA.</p>
          <p className="mb-2">⏰ Thời gian hoạt động: Chủ Nhật, 9:00 AM - 2:00 PM</p>
          <p>📞 Hotline/Zalo hỗ trợ: (123) 456-7890</p>
        </div>
        <div className="md:text-right">
          <h4 className="font-bold mb-2 text-secondary">Lưu ý quan trọng:</h4>
          <p className="text-sm opacity-90">Ưu tiên khách hàng đặt trước. Số lượng món ăn (Bánh Ướt, Ya Ua) thường bán hết rất sớm. Vui lòng đến đúng giờ để nhận hàng.</p>
        </div>
      </div>
      <div className="text-center mt-10 pt-4 border-t border-primary-foreground/20 text-sm opacity-80">
        © 2026 Community Market. All rights reserved.
      </div>
    </footer>
  );
}
