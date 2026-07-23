"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function VisitorCounter({ path }: { path: string }) {
  const [views, setViews] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchViews() {
      try {
        const res = await fetch("/api/counter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ path }),
        });
        const data = await res.json();
        if (data.views !== undefined) {
          setViews(data.views);
        }
      } catch (error) {
        console.error("Failed to fetch views", error);
      } finally {
        setLoading(false);
      }
    }

    fetchViews();
  }, [path]);

  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-current/10 border border-current/20 shadow-sm transition-all text-current">
      <Eye className="w-3.5 h-3.5" />
      <span className="text-xs font-medium">
        {loading ? (
          <span className="inline-block w-6 h-3 bg-current/20 animate-pulse rounded" />
        ) : (
          <span className="tabular-nums font-bold">
            {views?.toLocaleString() || 0}
          </span>
        )}
        <span className="ml-1 opacity-80 font-normal">views</span>
      </span>
    </div>
  );
}
