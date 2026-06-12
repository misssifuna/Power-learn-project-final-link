import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  EyeOff,
  Tag,
  Megaphone,
  MapPin,
  Wallet,
  Eye,
  Gift,
  UtensilsCrossed,
  Smartphone,
  Share2,
  BadgePercent,
  Signpost,
  Lightbulb,
  Building2,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import heroImg from "@/assets/hero-restaurant.jpg";
import vendorImg from "@/assets/vendor.jpg";
import kevinImg from "@/assets/kevin.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "From Empty Tables to Loyal Customers — Capstone Case Study" },
      {
        name: "description",
        content:
          "Why does a well-equipped restaurant sit empty while a humble vendor thrives? A human-centered capstone case study.",
      },
      { property: "og:title", content: "From Empty Tables to Loyal Customers" },
      {
        property: "og:description",
        content:
          "A human-centered capstone case study on visibility, value, and the real reasons students choose where they eat.",
      },
    ],
  }),
  component: CaseStudy,
});

function CaseStudy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <HumanStory />
      <Problem />
      <Findings />
      <Solutions />
      <Lessons />
      <Recommendations />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
            <UtensilsCrossed className="h-3.5 w-3.5" />
          </span>
          <span>Empty Tables · Case Study</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="#story" className="transition-colors hover:text-foreground">Story</a>
          <a href="#problem" className="transition-colors hover:text-foreground">Problem</a>
          <a href="#findings" className="transition-colors hover:text-foreground">Findings</a>
          <a href="#solutions" className="transition-colors hover:text-foreground">Solutions</a>
          <a href="#lessons" className="transition-colors hover:text-foreground">Lessons</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 md:grid-cols-12 md:pt-24 md:pb-28">
        <div className="md:col-span-7">
          <span className="rule-label">Capstone Case Study · 2026</span>
          <h1 className="mt-6 text-5xl leading-[1.02] tracking-tight md:text-7xl">
            From Empty Tables to{" "}
            <em className="text-primary not-italic" style={{ fontStyle: "italic" }}>
              Loyal Customers
            </em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            A human-centered investigation into why a well-equipped restaurant sits empty
            while a humble street vendor draws crowds — and what design thinking can do
            about it.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#story"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Read the story <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Jump to solutions <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-muted shadow-[0_30px_80px_-30px_oklch(0.22_0.03_40_/_0.35)]">
            <img
              src={heroImg}
              alt="Empty restaurant tables at golden hour"
              className="h-full w-full object-cover"
              width={1600}
              height={1024}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-cream/80">Scene 01</p>
              <p className="mt-1 font-display text-2xl text-cream">Good facilities. No guests.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="border-y border-border bg-card/60">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
          {[
            { k: "87%", v: "of students choose by price" },
            { k: "3x", v: "more foot traffic at the vendor" },
            { k: "62%", v: "never noticed the restaurant" },
            { k: "9/10", v: "want loyalty rewards" },
          ].map((s) => (
            <div key={s.k} className="px-6 py-8 text-center md:py-10">
              <div className="font-display text-4xl text-primary md:text-5xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HumanStory() {
  return (
    <section id="story" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
            <img
              src={kevinImg}
              alt="Kevin, a university student, holding a takeaway meal"
              className="h-full w-full object-cover"
              loading="lazy"
              width={900}
              height={1100}
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <span className="rule-label">Meet Kevin</span>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
            Every lunchtime, Kevin walks past a restaurant — and keeps walking.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Kevin is a second-year student with KSh 150 in his pocket and one hour between
            lectures. The restaurant down the road has clean water, real chairs, and a
            washroom that works. He's never been inside.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Instead, he joins twenty classmates at Mama Jane's roadside stand. The food is
            hot, fast, and KSh 80. He gets back to class with change to spare.
          </p>
          <blockquote className="mt-8 border-l-2 border-primary pl-6 font-display text-2xl italic leading-snug text-foreground md:text-3xl">
            "I'd love to eat in a proper place. I just don't think it's for someone like me."
            <footer className="mt-3 text-sm not-italic tracking-wide text-muted-foreground">
              — Kevin, 21, Computer Science
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function Problem() {
  const items = [
    {
      icon: Eye,
      title: "Poor visibility",
      body: "The restaurant sign sits below roof level and is missed by 6 in 10 students walking past.",
    },
    {
      icon: MapPin,
      title: "Hidden behind a petrol station",
      body: "The entrance shares a driveway with a fuel court, making it feel private and inaccessible.",
    },
    {
      icon: Tag,
      title: "Perceived as expensive",
      body: "Tablecloths and uniformed staff signal premium pricing — even when meals are competitively priced.",
    },
    {
      icon: Megaphone,
      title: "No marketing footprint",
      body: "No social presence, no flyers on campus, no relationship with student communities or clubs.",
    },
  ];
  return (
    <section id="problem" className="bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <span className="rule-label">The Problem</span>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
            The building isn't the problem. The signals are.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Owners blamed competition and price. Field observation told a different story.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_50px_-25px_oklch(0.55_0.16_38_/_0.4)]"
            >
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Findings() {
  const findings = [
    {
      n: "01",
      icon: Wallet,
      title: "Affordability comes first",
      body: "Students decide where to eat in seconds — and price is the first filter. Anything that looks 'fancy' is silently disqualified.",
    },
    {
      n: "02",
      icon: EyeOff,
      title: "Visibility shapes choice",
      body: "If they can't see it from the road, it doesn't exist. Storefront design is a marketing channel — not just architecture.",
    },
    {
      n: "03",
      icon: Gift,
      title: "Loyalty rewards drive return",
      body: "Promotions, punch cards, and student combos consistently outranked decor and seating in stated preferences.",
    },
  ];
  return (
    <section id="findings" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <span className="rule-label">Research</span>
          <h2 className="mt-6 text-4xl leading-tight md:text-5xl">What 40 students told us.</h2>
          <p className="mt-5 text-muted-foreground">
            Mixed-method: 40 short intercept interviews, two weeks of foot-traffic counts,
            and a comparative menu analysis at both venues.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <img
              src={vendorImg}
              alt="Students queueing at a busy street food vendor"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1200}
              height={900}
            />
          </div>
        </div>
        <ol className="space-y-5 md:col-span-8">
          {findings.map((f) => (
            <li
              key={f.n}
              className="grid grid-cols-[auto_1fr] items-start gap-6 rounded-2xl border border-border bg-card p-7 md:grid-cols-[auto_auto_1fr] md:p-8"
            >
              <span className="font-display text-3xl text-primary/60">{f.n}</span>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent">
                <f.icon className="h-5 w-5" />
              </span>
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-display text-2xl">{f.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Solutions() {
  const items = [
    { icon: BadgePercent, tag: "Pricing", title: "Student meal combos", body: "A fixed KSh 120 lunch tray, served 12–2pm. Same kitchen, framed for the right wallet." },
    { icon: Smartphone, tag: "Product", title: "Digital menu via QR", body: "Scan-to-view menu at the gate and on campus posters. Removes the 'is this expensive?' question." },
    { icon: Share2, tag: "Marketing", title: "Social-first storytelling", body: "Weekly chef reels, student takeovers, and WhatsApp broadcast for the daily special." },
    { icon: Gift, tag: "Retention", title: "Loyalty punch card", body: "Buy 5, get 1. Physical card + optional digital stamp via the QR menu." },
    { icon: Signpost, tag: "Wayfinding", title: "Bold roadside signage", body: "A 3m tall sign visible past the petrol forecourt with today's combo price." },
    { icon: Sparkles, tag: "Brand", title: "Friendlier first impression", body: "Drop the tablecloths at lunch. Casual table runners, open kitchen view, music." },
  ];
  return (
    <section id="solutions" className="relative overflow-hidden bg-ink py-24 text-cream grain">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <span className="rule-label" style={{ color: "oklch(0.85 0.02 65)" }}>Proposed Solutions</span>
          <h2 className="mt-6 text-4xl leading-tight text-cream md:text-5xl">
            Small, specific moves — not a renovation.
          </h2>
          <p className="mt-5 text-cream/70">
            Each solution is cheap to test, easy to reverse, and tied to a finding above.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.04] p-7 backdrop-blur-sm transition-all hover:border-primary/60 hover:bg-cream/[0.07]"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <span className="text-[0.65rem] uppercase tracking-[0.22em] text-cream/50">
                  {it.tag}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-cream">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Lessons() {
  const lessons = [
    {
      icon: Lightbulb,
      title: "Assumptions are not evidence",
      body: "The owner was sure students wanted 'a nicer environment.' Students wanted a price tag they could read from the road.",
    },
    {
      icon: Building2,
      title: "Infrastructure ≠ attraction",
      body: "Clean water, parking, and seating are necessary but never sufficient. People walk toward warmth, value, and welcome.",
    },
  ];
  return (
    <section id="lessons" className="mx-auto max-w-6xl px-6 py-24">
      <span className="rule-label">Lessons Learned</span>
      <h2 className="mt-6 max-w-2xl text-4xl leading-tight md:text-5xl">
        What this taught us about building for real people.
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {lessons.map((l) => (
          <div
            key={l.title}
            className="flex gap-5 rounded-3xl border border-border bg-card p-8"
          >
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
              <l.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-2xl">{l.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{l.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Recommendations() {
  const recs = [
    "Run a 30-day pilot of the student combo and measure midday covers.",
    "Install temporary signage before investing in permanent fixtures.",
    "Co-create promotions with two student societies for built-in distribution.",
    "Track repeat visits with the loyalty card to quantify retention lift.",
    "Revisit pricing perception every semester — students change, so does the market.",
  ];
  return (
    <section className="bg-card/40 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="rule-label">Looking forward</span>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl">
              Future recommendations.
            </h2>
            <p className="mt-5 text-muted-foreground">
              A roadmap the owner can act on next semester — without rebuilding the venue.
            </p>
          </div>
          <ul className="space-y-3 md:col-span-8">
            {recs.map((r, i) => (
              <li
                key={r}
                className="flex items-start gap-5 rounded-2xl border border-border bg-card px-6 py-5"
              >
                <span className="font-display text-2xl text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 leading-relaxed text-foreground">{r}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© 2026 · Capstone Project · From Empty Tables to Loyal Customers</p>
        <p>Human-centered design · Fieldwork · Service strategy</p>
      </div>
    </footer>
  );
}
