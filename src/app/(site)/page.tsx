import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/features/home/components/Hero";
import { WhoWeAre } from "@/features/home/components/WhoWeAre";
import { Verticals } from "@/features/home/components/Verticals";
import { Ecosystem } from "@/features/home/components/Ecosystem";
import { GlobalCta } from "@/components/ui/shared/GlobalCta";

export const metadata: Metadata = generatePageMetadata({
  title: "JU Socialz — NCR Campus, Alwar | Creative Community",
  description:
    "JU Socialz at NCR Campus, Alwar is a student-driven creative and media community. Explore the verticals, find your creative space, and be part of the community.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <Verticals />
      <Ecosystem />
      <div id="join" className="scroll-mt-20">
        <GlobalCta
          titleLine1="Your ideas"
          titleLine2="belong here."
        />
      </div>
    </>
  );
}
