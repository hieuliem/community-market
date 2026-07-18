import { buttonVariants } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full bg-primary/10 py-20 text-center px-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary">
          🌿 Thưởng Thức Hương Vị Quê Nhà <br className="hidden md:block"/> Chung Tay Gắn Kết Cộng Đồng! 🇻🇳
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Bánh ướt dẻo thơm, Ya ua nhà làm mát lạnh, cùng các gian hàng Áo Dài và Rửa Xe phục vụ cuối tuần. Đặt trước ngay hôm nay để nhận giá ưu đãi vì số lượng có hạn! 🤤🔥
        </p>
        <div className="pt-4">
          <a href="#order-form" className={buttonVariants({ size: "lg", className: "bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg rounded-2xl px-8 py-6 font-bold shadow-lg transition-transform hover:scale-105" })}>
            👉 ĐẶT TRƯỚC NGAY - KẺO HẾT!
          </a>
        </div>
      </div>
    </section>
  );
}
