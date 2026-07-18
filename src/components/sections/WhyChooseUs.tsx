import { Leaf, Heart, Users, Zap } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="bg-muted py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Vì Sao Bạn Nên Chọn Ủng Hộ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-3">
            <div className="mx-auto w-16 h-16 bg-primary/20 text-primary flex items-center justify-center rounded-full">
              <Leaf size={32} />
            </div>
            <h3 className="font-bold text-lg">Nguyên Liệu Tươi Sạch</h3>
            <p className="text-sm text-muted-foreground">Được tuyển chọn kỹ lưỡng, đảm bảo an toàn vệ sinh thực phẩm cho cả gia đình.</p>
          </div>
          <div className="text-center space-y-3">
            <div className="mx-auto w-16 h-16 bg-primary/20 text-primary flex items-center justify-center rounded-full">
              <Heart size={32} />
            </div>
            <h3 className="font-bold text-lg">Đậm Đà Khẩu Vị</h3>
            <p className="text-sm text-muted-foreground">Công thức gia truyền, mang lại hương vị chuẩn 100% như đang thưởng thức tại quê nhà.</p>
          </div>
          <div className="text-center space-y-3">
            <div className="mx-auto w-16 h-16 bg-primary/20 text-primary flex items-center justify-center rounded-full">
              <Users size={32} />
            </div>
            <h3 className="font-bold text-lg">Ủng Hộ Cộng Đồng</h3>
            <p className="text-sm text-muted-foreground">Mỗi đơn hàng của bạn đều đóng góp trực tiếp vào quỹ hoạt động của Giáo Xứ.</p>
          </div>
          <div className="text-center space-y-3">
            <div className="mx-auto w-16 h-16 bg-primary/20 text-primary flex items-center justify-center rounded-full">
              <Zap size={32} />
            </div>
            <h3 className="font-bold text-lg">Nhanh Chóng Tiện Lợi</h3>
            <p className="text-sm text-muted-foreground">Đặt hàng trước chỉ với 30 giây, đến nơi nhận hàng ngay không cần chờ đợi!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
