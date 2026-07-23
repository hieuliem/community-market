import { VisitorCounter } from "@/components/VisitorCounter";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Info & Contact Email */}
        <div className="space-y-3">
          <h3 className="text-2xl font-bold font-heading">Community Market</h3>
          <p className="text-sm">📧 <strong>Email liên hệ:</strong><br /><a href="mailto:bangayquy@gmail.com" className="hover:underline">bangayquy@gmail.com</a></p>
          <p className="text-sm">📍 <strong>Địa điểm nhận hàng:</strong><br />Hội Trường Giáo Xứ Các Thánh Tử Đạo Việt Nam<br />12500 Patterson Avenue, Richmond, VA 23238</p>
          <div className="pt-2">
            <h4 className="font-bold text-secondary text-sm">Lưu ý quan trọng:</h4>
            <p className="text-xs opacity-90 leading-relaxed">Ưu tiên khách hàng đặt trước. Số lượng món ăn thường bán hết rất sớm. Vui lòng đến đúng giờ để nhận hàng.</p>
          </div>
        </div>

        {/* Column 2: Google Maps */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold tracking-wider border-b border-primary-foreground/20 pb-1.5 text-secondary">
            BẢN ĐỒ ĐƯỜNG ĐI
          </h4>
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-primary-foreground/15 shadow-inner relative">
            <iframe
              title="Google Map Parish Address"
              src="https://maps.google.com/maps?q=12500%20Patterson%20Avenue,%20Goochland,%20VA%2023238&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Column 3: Weekly Pickup Times & Contact Info */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider border-b border-primary-foreground/20 pb-1.5 text-secondary">
              THỜI GIAN NHẬN HÀNG MỖI TUẦN
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-bold text-secondary">Thứ Bảy:</p>
                <p className="opacity-90">Sau Thánh Lễ (9:00 PM)</p>
              </div>
              <div>
                <p className="font-bold text-secondary">Chúa Nhật:</p>
                <p className="opacity-90">Sau các Thánh Lễ (9:00 AM & 11:30 AM)</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold tracking-wider border-b border-primary-foreground/20 pb-1.5 text-secondary">
              LIÊN HỆ ĐẶT HÀNG (TEXT/CALL)
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between items-center">
                <span>Chị Tú Linh:</span>
                <a href="tel:8043176485" className="font-bold hover:underline">(804) 317-6485</a>
              </li>
              <li className="flex justify-between items-center">
                <span>Chị Thùy Dương:</span>
                <a href="tel:8043160552" className="font-bold hover:underline">(804) 316-0552</a>
              </li>
              <li className="flex justify-between items-center">
                <span>Anh Quốc:</span>
                <a href="tel:8046886668" className="font-bold hover:underline">(804) 688-6668</a>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="text-center mt-6 pt-4 border-t border-primary-foreground/20 text-sm opacity-80">
        © 2026 Community Market. All rights reserved.
      </div>

      <div className="flex flex-col items-center gap-2 mt-4">
        <VisitorCounter path="/" />
      </div>
    </footer>
  );
}
