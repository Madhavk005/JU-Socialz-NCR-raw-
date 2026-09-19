import type { Metadata } from"next";
import { generatePageMetadata } from"@/lib/metadata";
import { notFound } from"next/navigation";
import { Lightbulb } from"lucide-react";
import { GlobalCta } from"@/components/ui/shared/GlobalCta";
import Link from"next/link";

interface VerticalData {
  title: string;
  tagline: string;
  description: string;
  learn: string[];
  toolsTitle: string | null;
  tools: string[] | null;
  create: string[];
  quote: string;
  important: string;
}

const VERTICALS_DATA: Record<string, VerticalData> = {
  cinematography: {
    title:"Cinematography",
    tagline:"Every Frame Deserves a Story.",
    description:"We don't just point cameras—we chase moments. From the chaos of campus festivals to carefully crafted concept films, every frame is intentional. We wait for the perfect light, experiment with impossible angles, and believe that the smallest details create the biggest emotions.\n\nOur cameras don't just record memories. They create them.",
    learn: ["Lighting Techniques & Visual Composition","Camera Operations & Professional Workflows","Lens Selection & Shot Design","Storytelling Through Cinematic Language","Camera Movement & Stabilization","Production Planning","On-Field Shooting Experience"
    ],
    toolsTitle:"Tools You'll Work With",
    tools: ["Sony Alpha Series","DJI","Gimbals","Professional Lighting","Drones","Audio Equipment"],
    create: ["Event Aftermovies","Brand Films","Concept Shoots","Documentary Films","Cinematic Reels","Promotional Videos"
    ],
    quote:"The best stories aren't written. They're captured.",
    important:"Basic knowledge of camera operations and composition is required."
  },
  editing: {
    title:"Video Editing",
    tagline:"We Edit Until Every Frame Feels Right.",
    description:"Raw footage is only the beginning.\n\nThis is where stories find rhythm, emotions find timing, and ordinary clips become unforgettable films. We obsess over cuts, transitions, sound, motion, pacing, and color until every second feels effortless.\n\nBecause great editing isn't noticed.\n\nIt's felt.",
    learn: ["Professional Video Editing","Advanced Color Grading","Motion Graphics","Audio Mixing & Sound Design","Story Structure","Editing Psychology","Delivery for Social Platforms"
    ],
    toolsTitle:"Software You'll Master",
    tools: ["Adobe Premiere Pro","After Effects","DaVinci Resolve","Audition"],
    create: ["Aftermovies","Commercial Edits","Reels","Motion Graphics","Social Campaign Videos","Brand Stories"
    ],
    quote:"Editing is where the story gets emotions.",
    important:"Basic knowledge of video editing is required."
  },"graphic-design": {
    title:"Graphic Design",
    tagline:"Design That Makes People Stop Scrolling.",
    description:"Every poster, every campaign, every identity starts with a blank canvas.\n\nWe transform ideas into visuals that people remember. Sometimes bold. Sometimes minimal. Sometimes beautifully chaotic. But always intentional.\n\nBecause good design gets noticed.\n\nGreat design gets shared.",
    learn: ["Visual Identity Design","Social Media Design Systems","Branding & Campaign Design","Typography","Color Theory","Layout & Composition","Creative Direction"
    ],
    toolsTitle:"Software You'll Master",
    tools: ["Adobe Photoshop","Illustrator","Figma","InDesign"],
    create: ["Brand Identities","Social Media Campaigns","Event Posters","Merchandise","Motion Posters","Marketing Assets"
    ],
    quote:"Creativity isn't decoration. It's communication.",
    important:"Basic proficiency in graphic design is required."
  },"social-media": {
    title:"Social Media Management",
    tagline:"We Build Conversations, Not Just Content.",
    description:"The internet never sleeps.\n\nNeither do great ideas.\n\nEvery post, every caption, every campaign and every interaction shapes how people experience JU Socialz at NCR Campus, Alwar. We study trends, understand audiences, build communities, and create digital experiences that feel human—not manufactured.\n\nWe don't chase algorithms.\n\nWe build communities worth following.",
    learn: ["Content Strategy","Community Building","Social Media Management","Platform-Specific Storytelling","Analytics & Insights","Trend Forecasting","Digital Branding"
    ],
    toolsTitle:"Platforms",
    tools: ["Instagram","LinkedIn","YouTube","X","Facebook","Snapchat"],
    create: ["Social Campaigns","Brand Strategies","Community Initiatives","Platform Growth Plans","Live Coverage"
    ],
    quote:"The best communities aren't built by chance.",
    important:"An iPhone and a basic understanding of social media platforms are required."
  },"content-marketing": {
    title:"Content Creation",
    tagline:"Ideas That Refuse To Stay Ordinary.",
    description:"If you feel you're creative enough, be part of the team behind every idea before it becomes content.\n\nThis is where every campaign begins.\n\nSometimes it's a random thought at midnight.\n\nSometimes it's a joke that accidentally becomes the biggest campaign of the semester.\n\nWe ask questions no one else asks. We connect dots others don't see. We write stories people remember long after they've stopped scrolling.\n\nCreativity starts long before the camera rolls.",
    learn: ["Creative Ideation","Script Writing","Storyboarding","Creative Direction","Brand Communication","Campaign Planning","Copywriting"
    ],
    toolsTitle: null,
    tools: null,
    create: ["Campaign Concepts","Scripts","Brand Stories","Creative Decks","Storyboards","Digital Experiences"
    ],
    quote:"Every unforgettable campaign begins with one impossible idea.",
    important:"Strong creative thinking and content ideation skills are preferred."
  },"ai-automation": {
    title:"AI & Automation",
    tagline:"Making Content Creation Smarter, Faster, Limitless.",
    description:"Be a part of the team exploring AI tools and automation to make content creation, research, workflows and social media processes smarter and faster.\n\nFrom prompt engineering to workflow automation, we're integrating AI into every stage of the creative pipeline — not to replace creators, but to amplify them.",
    learn: ["Prompt Engineering & Generative AI","AI-Assisted Video & Audio Editing","Workflow Automation","Data-Driven Content Strategies","Understanding AI Ethics in Media","Integrating LLMs into Creative Tools"
    ],
    toolsTitle:"Tools You'll Explore",
    tools: ["Higgsfield AI","ChatGPT","Claude","Midjourney","Magnific","ElevenLabs","Runway","Pika"],
    create: ["AI Storyboards","AI Generated Videos","Automated Workflows","AI Enhanced Edits","Generative Art & Visuals","Custom AI Agents"
    ],
    quote:"AI won't replace creators. Creators who use AI will replace those who don't.",
    important:"Basic knowledge of prompting and image/video generation is preferred."
  },"reel-creation": {
    title:"Reel Creation",
    tagline:"Short Form, Long Impact.",
    description:"The digital world moves fast, and attention is the ultimate currency.\n\nWe don't just follow trends; we set them. Our Reel Creation division understands the pulse of social media—knowing exactly how to hook viewers in the first three seconds, keep them engaged, and drive the message home.\n\nBecause viral isn't luck. It's a science and an art.",
    learn: ["Short-Form Storytelling","Trend Analysis & Adaptation","Pacing & Rhythmic Editing","Hook Generation & Audience Retention","Mobile Videography","Algorithm Fundamentals"
    ],
    toolsTitle:"Tools You'll Explore",
    tools: ["Adobe Premiere Pro","Adobe After Effects","Gimbal"],
    create: ["Viral Challenges","Behind-the-Scenes Shorts","Event Highlights","Educational Reels","Comedy & Skits","Aesthetic Vlogs"
    ],
    quote:"You have 3 seconds. Make them count.",
    important:"An iPhone is a must and basic video editing skills are required."
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vertical = VERTICALS_DATA[slug];
  if (!vertical) return generatePageMetadata({ title:"Vertical Not Found", description:"", path: `/verticals/${slug}` });
  return generatePageMetadata({
    title: vertical.title,
    description: vertical.tagline,
    path: `/verticals/${slug}`,
  });
}

export function generateStaticParams() {
  return Object.keys(VERTICALS_DATA).map((slug) => ({
    slug,
  }));
}

export default async function VerticalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vertical = VERTICALS_DATA[slug];
  
  if (!vertical) {
    notFound();
  }
  
  return (
    <>
      <main className="bg-obsidian-dark text-white min-h-screen pt-32 pb-24 relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="animate-gradient-pan absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-slate-blue/20 via-transparent to-transparent" />
          <div className="animate-drift-a absolute right-[5%] top-[10%] h-[22rem] w-[22rem] rounded-full bg-slate-blue/20 blur-[130px]" />
        </div>
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          {/* Header Section */}
          <div className="mb-16 md:mb-20">
            <Link 
              href="/#verticals"
              className="mb-12 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-bold tracking-[0.2em] text-ivory-dark/60 backdrop-blur-md transition-colors hover:border-slate-lighter/40 hover:text-ivory-light"
            >
              <span className="mr-1">←</span> ALL VERTICALS
            </Link>
            <h1 className="mb-8 font-geist text-4xl font-bold leading-[1.02] tracking-tight text-ivory-light md:text-6xl lg:text-7xl">
              {vertical.title}
            </h1>
            <h2 className="max-w-3xl font-display text-xl font-light italic leading-snug text-slate-lighter md:text-2xl">
              {vertical.tagline}
            </h2>
          </div>

          {/* Description */}
          <div className="mb-12 prose prose-invert prose-lg max-w-3xl font-inter text-ivory-dark/80 leading-relaxed">
            {vertical.description.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i} className="mb-6">{paragraph}</p>
            ))}
          </div>
          
          {/* Important Pointer */}
          {vertical.important && (
            <div className="glass-card mb-16 max-w-3xl rounded-2xl border-l-4 border-l-slate-lighter p-6 transition-all duration-500 hover:border-slate-lighter/40 hover:shadow-glow md:mb-20">
              <div className="flex items-start gap-4">
                <span className="glass-card mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                  <Lightbulb className="h-5 w-5 text-slate-lighter" />
                </span>
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-slate-lighter uppercase mb-1">Requirement</h4>
                  <p className="text-ivory-light font-inter text-base leading-relaxed">{vertical.important}</p>
                </div>
              </div>
            </div>
          )}

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-24">
            <div>
              <h3 className="text-xl font-geist font-bold  tracking-widest text-ivory-light mb-8 border-b border-white/[0.04] pb-4">
                What You'll Learn
              </h3>
              <ul className="space-y-4">
                {vertical.learn.map((item: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-1 font-display italic text-slate-lighter">✦</span>
                    <span className="text-lg text-ivory-dark/80 font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-geist font-bold  tracking-widest text-ivory-light mb-8 border-b border-white/[0.04] pb-4">
                You'll Create
              </h3>
              <ul className="space-y-4">
                {vertical.create.map((item: string, i: number) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-1 font-display italic text-slate-lighter">✦</span>
                    <span className="text-lg text-ivory-dark/80 font-inter">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tools Section */}
          {vertical.tools && (
            <div className="mb-24">
              <h3 className="text-xl font-geist font-bold  tracking-widest text-ivory-light mb-8 text-center">
                {vertical.toolsTitle}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {vertical.tools.map((tool: string, i: number) => (
                  <div key={i} className="glass-card rounded-full px-6 py-3 font-inter text-sm tracking-wide text-ivory-light transition-all duration-500 hover:border-slate-lighter/40">
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quote Section */}
          <div className="text-center max-w-4xl mx-auto border-t border-b border-white/[0.04] py-16">
            <p className="text-fluid-h2 font-geist text-ivory-light italic leading-tight">"{vertical.quote}"
            </p>
          </div>
          
          {/* Why These Verticals? Section (Global) */}
          <div className="mt-24 glass-card rounded-[2rem] p-10 md:p-16 text-center transition-all duration-500 hover:border-slate-lighter/30">
            <h2 className="text-fluid-h2 font-bold font-geist  tracking-tight text-ivory-light mb-8">
              Why These Verticals?
            </h2>
            <div className="text-fluid-p text-ivory-dark/70 font-inter max-w-3xl mx-auto space-y-6">
              <p>No matter where you begin, you'll never stay in one lane.</p>
              <p>Designers learn storytelling. Editors understand cinematography. Content marketers collaborate with photographers. Social media managers think like filmmakers.</p>
              <p>Because the best creators aren't specialists. They're collaborators.</p>
              <p className="text-ivory-light pt-4 font-bold">At JU Socialz, every project is built together—and every creator leaves with skills far beyond their own discipline.</p>
            </div>
          </div>
        </div>
      </main>

      <GlobalCta />
    </>
  );
}
