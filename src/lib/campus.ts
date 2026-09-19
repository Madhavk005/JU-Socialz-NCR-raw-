/**
 * Centralized campus identity for JU Socialz — NCR Campus, Alwar.
 * Single source of truth. Import this instead of hardcoding campus strings.
 */
export const CAMPUS = {
  org: "JU Socialz",
  campusShort: "NCR Campus, Alwar",
  campusLabel: "NCR Alwar",
  fullName: "JU Socialz — NCR Campus, Alwar",
  university: "JECRC University",
  universityCampus: "JECRC University — NCR Campus, Alwar",
  tagline: "A Creative Community. A New Campus Identity.",
  description:
    "JU Socialz at NCR Campus, Alwar is a student-driven creative and media community — a place to create, collaborate, and build something of your own.",
  closingHeadline: "Your ideas belong here.",
  closingCopy:
    "Discover the verticals, find your creative space, and be part of JU Socialz at NCR Campus, Alwar.",
  instagram: "https://www.instagram.com/socialzraw/",
  instagramHandle: "@socialzraw",
} as const;

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Teams", href: "/teams" },
  { name: "Join Us", href: "/join" },
] as const;
