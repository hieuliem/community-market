import { SECTIONS, isPublished } from "@/config/sections.config";

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
