import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, phone, item, quantity, pickupTime, notes } = data;
    
    console.log("🚀 [NEW ORDER RECEIVED]:", JSON.stringify(data, null, 2));

    const itemMap: Record<string, string> = {
      yaua: "Ya Ua Việt Nam ($1/bịch)",
      banhuot: "Bánh Ướt Chả Lụa ($8/phần)",
      aodai: "Tư vấn Áo Dài",
      ruaxe: "Đặt lịch Rửa Xe",
    };
    const itemName = itemMap[item] || item;

    // Gửi email qua Resend
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Community Market <onboarding@resend.dev>",
        to: "hieuliem2005@gmail.com",
        subject: `🛒 Đơn hàng mới từ ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e4e4e7; rounded-corners: 8px;">
            <h2 style="color: #C5A059; border-bottom: 2px solid #C5A059; padding-bottom: 10px; margin-top: 0;">Đơn Hàng Mới Nhận</h2>
            <table cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse;">
              <tr style="background-color: #f4f4f5;">
                <td style="font-weight: bold; width: 40%; border-bottom: 1px solid #e4e4e7;">Họ và Tên:</td>
                <td style="border-bottom: 1px solid #e4e4e7;">${name}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; border-bottom: 1px solid #e4e4e7;">Số điện thoại:</td>
                <td style="border-bottom: 1px solid #e4e4e7;">${phone}</td>
              </tr>
              <tr style="background-color: #f4f4f5;">
                <td style="font-weight: bold; border-bottom: 1px solid #e4e4e7;">Chọn món / Dịch vụ:</td>
                <td style="border-bottom: 1px solid #e4e4e7;">${itemName}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; border-bottom: 1px solid #e4e4e7;">Số lượng:</td>
                <td style="border-bottom: 1px solid #e4e4e7;">${quantity}</td>
              </tr>
              <tr style="background-color: #f4f4f5;">
                <td style="font-weight: bold; border-bottom: 1px solid #e4e4e7;">Giờ Nhận Hàng Cuối Tuần:</td>
                <td style="border-bottom: 1px solid #e4e4e7;">${pickupTime || "Không chọn (Tùy ý)"}</td>
              </tr>
              <tr>
                <td style="font-weight: bold; border-bottom: 1px solid #e4e4e7;">Ghi chú thêm:</td>
                <td style="border-bottom: 1px solid #e4e4e7;">${notes || "Không có"}</td>
              </tr>
            </table>
            <p style="font-size: 12px; color: #71717a; margin-top: 20px; text-align: center;">
              Email được gửi tự động từ hệ thống Community Market Landing Page.
            </p>
          </div>
        `,
      });
      console.log("📧 Email sent successfully via Resend.");
    } else {
      console.warn("⚠️ RESEND_API_KEY is not set in environment variables. Email notification skipped.");
    }

    return NextResponse.json({ 
      success: true, 
      message: "Order placed successfully!" 
    });

  } catch (error) {
    console.error("Lỗi khi xử lý đơn hàng:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
