import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Ở đây bạn có thể thêm logic lưu vào Database, Google Sheets, hay gửi Email
    console.log("🚀 [NEW ORDER RECEIVED]:", JSON.stringify(data, null, 2));

    // Giả lập thời gian delay của API (1 giây)
    await new Promise((resolve) => setTimeout(resolve, 1000));

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
