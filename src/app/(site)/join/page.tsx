import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { GlobalCta } from "@/components/ui/shared/GlobalCta";
import { JoinHero } from "@/features/join/components/JoinHero";
import { WhyJoin } from "@/features/join/components/WhyJoin";
import { JoinRoles } from "@/features/join/components/JoinRoles";
import { JoinProcess } from "@/features/join/components/JoinProcess";
import { JoinFaq } from "@/features/join/components/JoinFaq";

export const metadata: Metadata = generatePageMetadata({
  title: "Join Us",
  description: "Discover JU Socialz at NCR Campus, Alwar — a student-driven creative and media community across cinematography, editing, design, social media, and more.",
  path: "/join",
});

export default function JoinPage() {
  // Static data - previously fetched from Supabase
  const faqs = [
    {
      id: "1",
      question: "What is JU Socialz?",
      answer: "The official media team of JECRC University, NCR Campus Alwar — students across seven verticals making the films, designs, reels, and stories the campus runs on.",
      order_index: 1
    },
    {
      id: "2",
      question: "Who can join?",
      answer: "Any student of NCR Campus, Alwar — any year, any branch. Curiosity beats experience, and commitment beats talent.",
      order_index: 2
    },
    {
      id: "3",
      question: "Do I need experience or gear?",
      answer: "Neither. Your phone and free tools are enough to start — each vertical teaches its craft from zero.",
      order_index: 3
    },
    {
      id: "4",
      question: "How much time does it take?",
      answer: "Two to three meetups a week — shoots, edits, workshops — with an extra push around big campus events.",
      order_index: 4
    },
    {
      id: "5",
      question: "Can I join multiple verticals?",
      answer: "Yes. Choose one home vertical and roam into two more. The best work happens at the overlaps.",
      order_index: 5
    },
    {
      id: "6",
      question: "How do I get in?",
      answer: "Applications open every semester. Apply, meet the team for a short interaction, and hear back within two weeks.",
      order_index: 6
    }
  ];

  const roles = [
    "Cinematography",
    "Editing",
    "Graphic Design",
    "Social Media Management",
    "Content Creation",
    "Photography",
    "Reel Creation"
  ];

  const reasons = [
    {
      id: "1",
      title: "Ship Real Work",
      desc: "Cover fests, run campaigns, publish films. Everything you make goes live to a real audience — from day one.",
      icon: "briefcase",
      order_index: 1
    },
    {
      id: "2",
      title: "Learn By Doing",
      desc: "No lectures. Pick up cameras, timelines, and design tools inside actual productions, guided by seniors who have shipped before.",
      icon: "graduation-cap",
      order_index: 2
    },
    {
      id: "3",
      title: "Seven Crafts, One Crew",
      desc: "Start in one vertical, collide with six others. Editors learn cinematography; designers learn storytelling.",
      icon: "camera",
      order_index: 3
    },
    {
      id: "4",
      title: "Cover Campus Life",
      desc: "Help tell the story of NCR Campus, Alwar — fests, events, and everyday moments. Your work shapes how the campus sees itself.",
      icon: "clapperboard",
      order_index: 4
    },
    {
      id: "5",
      title: "Find Your People",
      desc: "Co-founders, collaborators, lifelong friends. The team becomes the reason campus feels like home.",
      icon: "users",
      order_index: 5
    },
    {
      id: "6",
      title: "Proof, Not Certificates",
      desc: "Leave with published work and a body of proof — a portfolio built on shipped projects, not paper.",
      icon: "trending-up",
      order_index: 6
    }
  ];

  return (
    <>
      <main>
        <JoinHero />
        <WhyJoin reasonsProp={reasons} />
        <JoinRoles rolesProp={roles} />
        <JoinProcess />
        <JoinFaq faqsProp={faqs} />
      </main>

      <GlobalCta titleLine1="Your ideas" titleLine2="belong here." />
    </>
  );
}
