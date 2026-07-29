import { Hero } from "@/components/sections/Hero";
import { CarWash } from "@/components/sections/CarWash";
import { AoDai } from "@/components/sections/AoDai";
import { WeekendTreat } from "@/components/sections/WeekendTreat";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { OrderForm } from "@/components/sections/OrderForm";
import { TetTrungThu } from "@/components/sections/TetTrungThu";
import { Footer } from "@/components/sections/Footer";

export interface SectionConfig {
  /** Unique identifier for the section (used as React key). */
  id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: React.ComponentType<any>;
  /**
   * First moment the section should appear (inclusive).
   * Omit to make it visible from the very beginning.
   */
  publishedAt?: Date;
  /**
   * First moment the section should NO LONGER appear (exclusive).
   * Omit to keep it visible indefinitely.
   */
  unpublishedAt?: Date;
}

/**
 * Returns true when `section` should be rendered right now.
 *
 * Rules:
 *  - No dates set          → always visible
 *  - publishedAt only      → visible from that moment onward
 *  - unpublishedAt only    → visible until (not including) that moment
 *  - Both dates            → visible within the [publishedAt, unpublishedAt) window
 *
 * NOTE: In Next.js this runs on the server on every request (dynamic rendering).
 * If you switch to static export (`next export`), dates will be evaluated at
 * build time and you will need to trigger a rebuild to update visibility.
 */
export function isPublished(section: SectionConfig): boolean {
  const now = new Date();
  if (section.publishedAt && now < section.publishedAt) return false;
  if (section.unpublishedAt && now >= section.unpublishedAt) return false;
  return true;
}

/**
 * Ordered list of page sections.
 * Add, remove, or reorder entries here — page.tsx never needs to change.
 */
export const SECTIONS: SectionConfig[] = [
  {
    id: "Hero",
    component: Hero,
  },
  {
    id: "WeekendTreat",
    component: WeekendTreat,
    // Visible until 12:00 PM EST tomorrow (2026-07-26 12:00 EST = 17:00 UTC)
    unpublishedAt: new Date("2026-07-26T17:00:00.000Z"),
  },
  {
    id: "CarWash",
    component: CarWash,
    // TODO: change publishedAt back to 2026-07-30T02:00:00.000Z (10 PM EDT) before deploying
    publishedAt: new Date("2026-07-29T23:19:00.000Z"),
    unpublishedAt: new Date("2026-08-16T19:00:00.000Z"),
  },
  {
    id: "TetTrungThu",
    component: TetTrungThu,
    // Published now; expires at midnight ET on 9/20/2026 (04:00 UTC 9/21)
    publishedAt: new Date("2026-07-26T00:00:00.000Z"),
    unpublishedAt: new Date("2026-09-21T04:00:00.000Z"),
  },
  {
    id: "AoDai",
    component: AoDai,
  },
  {
    id: "WhyChooseUs",
    component: WhyChooseUs,
  },
  {
    id: "OrderForm",
    component: OrderForm,
  },
  {
    id: "Footer",
    component: Footer,
  },
];
