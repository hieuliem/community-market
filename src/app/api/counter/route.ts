import { NextResponse } from "next/server";
import { turso, initDb } from "@/lib/turso";

export async function POST(request: Request) {
  try {
    const { path } = await request.json();

    if (!path || typeof path !== "string") {
      return NextResponse.json(
        { error: "Invalid path provided" },
        { status: 400 }
      );
    }

    // Ensure the table exists
    await initDb();

    // Upsert the view count
    const result = await turso.execute({
      sql: `
        INSERT INTO page_views (path, views) 
        VALUES (?, 1) 
        ON CONFLICT(path) DO UPDATE SET 
          views = views + 1, 
          updated_at = CURRENT_TIMESTAMP
        RETURNING views;
      `,
      args: [path],
    });

    const views = result.rows[0]?.views || 0;

    return NextResponse.json({ views }, { status: 200 });
  } catch (error) {
    console.error("Error updating visitor counter:", error);
    return NextResponse.json(
      { error: "Failed to update visitor counter" },
      { status: 500 }
    );
  }
}
