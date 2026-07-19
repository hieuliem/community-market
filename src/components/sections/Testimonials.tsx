import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-primary/5 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary">Khách Hàng Nói Gì?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl border-none shadow-sm bg-white">
            <CardContent className="pt-6">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={20} className="fill-current text-secondary mr-1" />)}
              </div>
              <p className="italic text-muted-foreground mb-4">
                "Ya Ua ở đây đúng chuẩn vị ngày xưa mình hay ăn ở Việt Nam, tụi nhỏ nhà mình mê tít, lần nào cũng phải mua chục bịch!"
              </p>
              <p className="font-bold">- Cô Lan (Phụ huynh)</p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl border-none shadow-sm bg-white">
            <CardContent className="pt-6">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <CheckCircle2 key={i} size={20} className="fill-current text-secondary mr-1" />)}
              </div>
              <p className="italic text-muted-foreground mb-4">
                "Cuối tuần mang xe ra rửa, tiện thể làm dĩa bánh ướt. Đồ ăn ngon, các bạn phục vụ rất nhiệt tình. Rất đáng ủng hộ!"
              </p>
              <p className="font-bold">- Chú Hoàng</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
