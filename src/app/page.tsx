import { SECTIONS, isPublished } from "@/config/sections.config";

// Ensure date-gated sections are evaluated on every request, not at build time.
export const dynamic = "force-dynamic";

export default function Home() {
  const activeSections = SECTIONS.filter(isPublished);

  return (
    <main className="min-h-screen flex flex-col">
      {activeSections.map(({ id, component: Section }) => (
        <Section key={id} />
      ))}
    </main>
  );
}
