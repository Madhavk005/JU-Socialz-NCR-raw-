import type { Metadata } from"next";
import { generatePageMetadata } from"@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title:"Privacy Policy | JU Socialz",
  description:"JU Socialz privacy policy — how we collect, use, and protect your data.",
  path:"/privacy",
});

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title:"1. Introduction",
    body: (
      <p>
        JU Socialz at NCR Campus, Alwar (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a student-driven creative and media community.
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information
        when you visit our website.
      </p>
    ),
  },
  {
    title:"2. Information We Collect",
    body: (
      <>
        <h3 className="mb-3 font-geist text-xl font-semibold text-ivory-light">Personal Information</h3>
        <p>When you submit an application or contact form on our website, we may collect:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Course and year of study</li>
          <li>Portfolio links or samples of work</li>
        </ul>
        <h3 className="mb-3 mt-8 font-geist text-xl font-semibold text-ivory-light">Automatically Collected Information</h3>
        <p>When you visit our website, we may automatically collect certain information, including:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>Pages visited and time spent on each page</li>
          <li>Referring URL</li>
        </ul>
      </>
    ),
  },
  {
    title:"3. How We Use Your Information",
    body: (
      <>
        <p>We use the collected information for the following purposes:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>To process and evaluate applications for team membership</li>
          <li>To communicate with you about your application</li>
          <li>To improve our website and user experience</li>
          <li>To showcase our work and team culture</li>
          <li>To comply with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    title:"4. Cookies",
    body: (
      <>
        <p>
          Our website may use cookies and similar tracking technologies to enhance your browsing experience.
          Cookies are small data files stored on your device. You can control cookie preferences through
          your browser settings.
        </p>
        <p className="mt-4">We use cookies for:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Essential website functionality</li>
          <li>Analytics (to understand how visitors use our site)</li>
          <li>Remembering your preferences</li>
        </ul>
      </>
    ),
  },
  {
    title:"5. Third-Party Services",
    body: (
      <>
        <p>We may use third-party services that collect, monitor, and analyze data:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li><strong>Sanity</strong> — Content management system and hosting</li>
          <li><strong>Vercel / Netlify</strong> — Website hosting and deployment</li>
          <li><strong>Google Analytics / Plausible</strong> — Website analytics (if enabled)</li>
          <li><strong>Instagram</strong> — Social media integration</li>
          <li><strong>YouTube</strong> — Video content embedding</li>
        </ul>
      </>
    ),
  },
  {
    title:"6. Data Security",
    body: (
      <p>
        We implement appropriate technical and organizational measures to protect your personal information.
        However, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security.
      </p>
    ),
  },
  {
    title:"7. Your Rights",
    body: (
      <>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to processing of your data</li>
          <li>Data portability</li>
          <li>Withdraw consent at any time</li>
        </ul>
        <p className="mt-6">To exercise any of these rights, please contact us at the email address below.</p>
      </>
    ),
  },
  {
    title:"8. Contact",
    body: (
      <>
        <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
        <p className="mt-4 text-ivory-light">
          Email: socialz@jecrc.ac.in<br />
          JECRC University — NCR Campus, Alwar, India
        </p>
      </>
    ),
  },
  {
    title:"9. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting
        the new policy on this page with an updated date.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-24 pt-32 text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-gradient-pan absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-slate-blue/20 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl px-6 md:px-12">
        <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-lighter md:text-xs">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-lighter" />
          Legal
        </p>
        <h1 className="font-geist text-4xl font-bold tracking-tight text-ivory-light md:text-6xl lg:text-7xl">
          Privacy{""}
          <span className="font-display font-light italic text-slate-lighter">
            Policy.
          </span>
        </h1>
        <p className="mt-6 font-inter text-sm tracking-[0.2em] text-ivory-light/40">
          LAST UPDATED: JULY 2026
        </p>

        <div className="mt-12 font-inter leading-relaxed text-ivory-dark/80 md:mt-16">
          {SECTIONS.map((section) => (
            <section key={section.title} className="border-t border-white/10 py-8 md:py-10">
              <h2 className="mb-4 font-geist text-2xl font-bold tracking-tight text-ivory-light md:text-3xl">
                {section.title}
              </h2>
              {section.body}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
