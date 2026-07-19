import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

export function BestSellers() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto w-full">
      <h2 className="text-3xl font-bold text-center mb-10 text-primary">Danh Mục Ủng Hộ & Bán Chạy Nhất</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Item 1 */}
        <Card className="rounded-2xl border-2 border-primary/20 overflow-hidden flex flex-col">
          <div className="h-48 bg-primary/20 flex items-center justify-center text-4xl">🍮</div>
          <CardHeader>
            <CardTitle className="text-xl">Ya Ua Việt Nam</CardTitle>
            <CardDescription className="text-lg font-bold text-secondary">$1 / bịch</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-muted-foreground text-sm">Chua chua, ngọt ngọt, mát lạnh sảng khoái. Làm từ 100% sữa tươi lên men tự nhiên.</p>
          </CardContent>
          <CardFooter>
            <a href="#order-form" className={buttonVariants({ className: "w-full rounded-xl bg-primary hover:bg-primary/90" })}>
              + Thêm vào giỏ
            </a>
          </CardFooter>
        </Card>

        {/* Item 2 */}
        <Card className="rounded-2xl border-2 border-primary/20 overflow-hidden flex flex-col">
          <div className="h-48 bg-primary/20 flex items-center justify-center text-4xl">🥢</div>
          <CardHeader>
            <CardTitle className="text-xl">Bánh Ướt Chả Lụa</CardTitle>
            <CardDescription className="text-lg font-bold text-secondary">$8 / phần</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-muted-foreground text-sm">Bánh ướt tráng tay mềm mướt, chả lụa giòn dai, rắc thêm hành phi thơm lừng và nước mắm chua ngọt mặn mà.</p>
          </CardContent>
          <CardFooter>
            <a href="#order-form" className={buttonVariants({ className: "w-full rounded-xl bg-primary hover:bg-primary/90" })}>
              + Thêm vào giỏ
            </a>
          </CardFooter>
        </Card>

        {/* Item 3 */}
        <Card className="rounded-2xl border-2 border-primary/20 overflow-hidden flex flex-col">
          <div className="h-48 bg-primary/20 flex items-center justify-center text-4xl">👗</div>
          <CardHeader>
            <CardTitle className="text-xl">Gian Hàng Áo Dài</CardTitle>
            <CardDescription className="text-lg font-bold text-secondary">Đa dạng mẫu mã</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-muted-foreground text-sm">Tôn vinh nét đẹp truyền thống với các mẫu áo dài lụa mềm mại, đa dạng màu sắc cho cả mẹ và bé.</p>
          </CardContent>
          <CardFooter>
            <a href="#order-form" className={buttonVariants({ variant: "outline", className: "w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90" })}>
              Xem Mẫu Nhận Tư Vấn
            </a>
          </CardFooter>
        </Card>

        {/* Item 4 */}
        <Card className="rounded-2xl border-2 border-primary/20 overflow-hidden flex flex-col">
          <div className="h-48 bg-primary/20 flex items-center justify-center text-4xl">🚗</div>
          <CardHeader>
            <CardTitle className="text-xl">Dịch Vụ Rửa Xe</CardTitle>
            <CardDescription className="text-lg font-bold text-secondary">Tùy tâm</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-muted-foreground text-sm">Xế hộp sạch bóng kin kít chỉ trong nháy mắt. Ủng hộ quỹ cộng đồng qua mỗi lượt rửa xe!</p>
          </CardContent>
          <CardFooter>
            <a href="#order-form" className={buttonVariants({ className: "w-full rounded-xl bg-primary hover:bg-primary/90" })}>
              + Đặt Lịch
            </a>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
