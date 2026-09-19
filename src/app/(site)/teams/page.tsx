import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { GlobalCta } from "@/components/ui/shared/GlobalCta";
import { TeamsHero } from "@/features/teams/components/TeamsHero";
import { StudentLeadership } from "@/features/teams/components/StudentLeadership";

export const metadata: Metadata = generatePageMetadata({
  title: "Teams",
  description: "Meet the student leadership behind JU Socialz at NCR Campus, Alwar — the official media team of JECRC University.",
  path: "/teams",
});

export default function TeamsPage() {
  return (
    <>
      <main>
        <TeamsHero />
        <StudentLeadership />
      </main>
      <GlobalCta />
    </>
  );
}
