"use client";

import { useEffect, useState } from "react";

const PORTRAIT = "data:image/png;base64,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";

/* ---------- icons ---------- */
const S = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const IconSun = () => (<svg viewBox="0 0 24 24" {...S}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>);
const IconMoon = () => (<svg viewBox="0 0 24 24" {...S}><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>);
const IconBolt = () => (<svg viewBox="0 0 24 24" {...S}><path d="M13 2 3 14h9l-1 8 10-12h-9z" /></svg>);
const IconScreen = () => (<svg viewBox="0 0 24 24" {...S}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>);
const IconGear = () => (<svg viewBox="0 0 24 24" {...S}><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" /><circle cx="12" cy="12" r="3" /></svg>);
const IconPlug = () => (<svg viewBox="0 0 24 24" {...S}><path d="M8 7L3 12l5 5M16 7l5 5-5 5M14 4l-4 16" /></svg>);
const IconPhone = () => (<svg viewBox="0 0 24 24" {...S}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" /></svg>);
const IconDoc = () => (<svg viewBox="0 0 24 24" {...S}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>);
const IconCheckBig = () => (<svg viewBox="0 0 24 24" {...S}><path d="M20 6L9 17l-5-5" /></svg>);
const Check = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round"><path d="M5 12l4 4L19 6" /></svg>);

/* ---------- data ---------- */
const SERVICES = [
  { n: "01", Icon: IconScreen, title: "Websites", body: "A small, considered site that loads quickly, reads well on a phone, and is easy to update yourself — your site, CRM, bookings and follow-ups in one tidy place.", bullets: ["3–6 page builds", "Mobile-first", "All-in-one back end", "Owned by you"], price: "$1,800" },
  { n: "02", Icon: IconGear, title: "Automations", body: "The quiet plumbing that follows up with leads, sends reminders, and stops things falling through the cracks. Set up once, refined together, then it just runs.", bullets: ["Email + SMS sequences", "Lead routing", "No-show recovery", "Internal hand-offs"], price: "$600" },
  { n: "03", Icon: IconPlug, title: "Integrations", body: "Bookings, payments, calendars and CRMs — wired together so your tools talk to each other instead of through you. The usual suspects, neatly connected.", bullets: ["Booking systems", "Payments + invoicing", "CRM + calendar sync", "Custom webhooks"], price: "$400" },
];

const PROJECTS = [
  { url: "https://www.malcohen.com", host: "malcohen.com", title: "Malcolm Cohen Art", type: "Artist portfolio · Website", desc: "A gallery for a painter's landscapes, portraits, and colorful mixed-media work.", bars: ["w2", "ac"] },
  { url: "https://www.sixthings.today", host: "sixthings.today", title: "Sixthings", type: "App landing page · Website", desc: "Marketing site for a focus app built on the Ivy Lee method — six tasks, one priority, daily streaks.", bars: ["w1", "w3", "ac"] },
  { url: "http://dumbassphotoshop.com/", host: "dumbassphotoshop.com", title: "Dumbass Photoshop", type: "Service brand · Website", desc: "A personality-first site with tiered licensing for a meme-edit studio.", bars: ["w2", "w1", "ac"] },
  { url: "https://themothersmarch.vercel.app/", host: "themothersmarch.app", title: "The Mother's March", type: "Nonprofit · Donations", desc: "A donation site for volunteers bringing hot Shabbat meals to soldiers up north.", bars: ["w1", "w2", "ac"] },
];

const PROCESS = [
  { Icon: IconPhone, title: "A short call", body: "Twenty minutes. You tell me what you're trying to do. I'll tell you, plainly, whether I'm the right fit and what it would take." },
  { Icon: IconDoc, title: "A small written plan", body: "Scope, timeline, flat price — on one page. No retainers, no proposal theatre. You sign, or you don't, no pressure." },
  { Icon: IconCheckBig, title: "Build & hand-off", body: "I work in the open. You see progress every few days. At the end you get a walkthrough, written notes, and 30 days of free tweaks." },
];

const FAQS = [
  { q: "What platform do you build on?", a: "I work with a small set of platforms I trust. After the first call I'll recommend the right one for your situation — it depends on what you need now and where you might grow. The point is for you to have the right tools, not the most." },
  { q: "What does a website actually cost?", a: "Most small business sites land between $1,800 and $3,500 depending on pages and complexity. You'll get a flat quote in writing before any work starts. No hourly creep." },
  { q: "Do you offer ongoing support?", a: "Yes — but only if it makes sense. After launch you get 30 days of free adjustments. After that I work hourly or on a small monthly care plan; you choose." },
  { q: "Can you take over a site I already have?", a: "Sometimes. If your current setup is reasonable and the goal is real improvement, yes. If you'd be better off rebuilding, I'll tell you that — even if it costs me the work." },
  { q: "What if I'm not sure what I need?", a: "That's exactly what the first call is for. Bring your half-formed thoughts; we'll sort them together. If we end the call with you not hiring me, that's still a good call." },
];

const HELP_OPTS = ["A new website", "Bookings setup", "Automations", "Integrations", "Not sure yet"];
const BUDGET_OPTS = ["< $2k", "$2k – 5k", "$5k – 10k", "$10k+", "Not sure"];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [help, setHelp] = useState<string[]>(["A new website"]);
  const [budget, setBudget] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const cur = document.documentElement.getAttribute("data-theme");
    if (cur === "light" || cur === "dark") setTheme(cur);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((e) => io.observe(e));
    const failsafe = setTimeout(() => els.forEach((e) => e.classList.add("in")), 1600);
    return () => { clearTimeout(failsafe); io.disconnect(); };
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("yoco-theme", next); } catch (e) { /* ignore */ }
  };

  const toggleHelp = (v: string) =>
    setHelp((s) => (s.includes(v) ? s.filter((x) => x !== v) : [...s, v]));

  return (
    <>
      <header className={scrolled ? "scrolled" : ""} id="top">
        <div className="wrap nav">
          <a className="brand" href="#top">yoco<span className="pt">.</span>works</a>
          <nav className="navlinks">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div className="nav-right">
            <button className="toggle" onClick={toggleTheme} aria-label="Toggle light and dark mode">
              {theme === "dark" ? <IconSun /> : <IconMoon />}
            </button>
            <a className="btn btn-primary" href="#contact">Get in touch <span className="arr">→</span></a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <div className="badge"><span className="dot" /> Building with intention</div>
                <h1 className="headline">Quiet websites &amp; <span className="grad">thoughtful automations</span> for small businesses.</h1>
                <p className="hero-sub">I&rsquo;m Yehuda — I build small, well-made websites and the behind-the-scenes workflows that let them earn their keep. One person, plain conversations, flat fees.</p>
                <div className="hero-cta">
                  <a className="btn btn-primary" href="#contact">Start a project <span className="arr">→</span></a>
                  <a className="textlink" href="#work">View work →</a>
                </div>
              </div>
              <div className="result rv">
                <div className="ic"><IconBolt /></div>
                <div><div className="k">Availability</div><div className="v">Open · Spring 2026</div></div>
              </div>
            </div>
            <div className="outcomes rv">
              <div className="oc"><div className="num">1<em>person</em></div><div className="lab">No team to hide behind. You talk to me, every time.</div></div>
              <div className="oc"><div className="num">&lt;24<em>h</em></div><div className="lab">Same-day reply on weekdays. Usually within hours.</div></div>
              <div className="oc"><div className="num">30<em>days</em></div><div className="lab">Of free adjustments after launch, included.</div></div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="blk" id="services">
          <div className="wrap">
            <div className="sec-head center rv">
              <div className="kicker">01 — Services</div>
              <h2 className="sec-title">Three things, done <span className="grad">properly</span>.</h2>
              <p className="sec-lede">Built to scale — I&rsquo;ll add other services as the work demands. For now, these are what I&rsquo;m best at.</p>
            </div>
            <div className="cards rv">
              {SERVICES.map((s) => (
                <div className="card" key={s.n}>
                  <span className="snum">{s.n}</span>
                  <div className="ic"><s.Icon /></div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <ul>{s.bullets.map((b) => (<li key={b}><Check />{b}</li>))}</ul>
                  <div className="price"><span>Starting from</span>From {s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="blk flush-top" id="work">
          <div className="wrap">
            <div className="sec-head center rv">
              <div className="kicker">02 — Selected work</div>
              <h2 className="sec-title">A few things I&rsquo;ve <span className="grad">shipped</span>.</h2>
            </div>
            <div className="work-grid rv">
              {PROJECTS.map((p) => (
                <a className="proj" href={p.url} target="_blank" rel="noopener noreferrer" key={p.host}>
                  <div className="thumb">
                    <div className="bbar"><span className="d live" /><span className="d" /><span className="d" /><span className="u">{p.host}</span></div>
                    <div className="canvas">
                      {p.bars.map((b, i) => (<span className={`b ${b}`} key={i} />))}
                      <span className="blk" />
                    </div>
                  </div>
                  <div className="proj-body">
                    <div className="top"><h3>{p.title}</h3><span className="visit">Visit ↗</span></div>
                    <div className="type">{p.type}</div>
                    <div className="desc">{p.desc}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="blk flush-top" id="process">
          <div className="wrap">
            <div className="sec-head center rv">
              <div className="kicker">03 — How we work</div>
              <h2 className="sec-title">A short, <span className="grad">honest</span> process.</h2>
              <p className="sec-lede">Three steps. No pitch decks, no jargon, no charging you for thinking out loud.</p>
            </div>
            <div className="cards rv">
              {PROCESS.map((p) => (
                <div className="card" key={p.title}>
                  <div className="ic"><p.Icon /></div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="blk flush-top" id="about">
          <div className="wrap">
            <div className="meet">
              <div className="meet-photo rv">
                <span className="tag">// Founder</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={PORTRAIT} alt="Illustrated geometric portrait of Yehuda Oren Cohen, founder of yoco.works" />
              </div>
              <div className="meet-txt rv">
                <div className="kicker">04 — About</div>
                <h2>Meet Yehuda.</h2>
                <p>Yoco is a one-person studio. That&rsquo;s the pitch and also the honest limit — you talk to me, I do the work, and the lights stay on because I keep things small.</p>
                <p>I started Yoco after years of helping friends untangle their websites and workflows. The small, careful work — the booking that finally syncs, the form that finally lands somewhere useful — turned out to be the work people remembered. So I made it the work.</p>
                <p>I reply within a day. I quote flat fees. I&rsquo;d rather say no to a project than do it badly.</p>
                <div className="meet-sig">— Yehuda</div>
                <div className="meet-stats">
                  <div className="ms"><div className="n">10+</div><div className="l">Years in tech</div></div>
                  <div className="ms"><div className="n">1:1</div><div className="l">Always direct</div></div>
                  <div className="ms"><div className="n">&lt;24h</div><div className="l">Reply time</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="blk flush-top">
          <div className="wrap">
            <div className="quote-card rv">
              <div className="stars">★★★★★</div>
              <blockquote>&ldquo;Yehuda didn&rsquo;t just build a site; he automated my entire booking process. I saved 10 hours a week immediately.&rdquo;</blockquote>
              <div className="qby">— <b>Client name</b> · Founder, Studio</div>
              <div className="qnote">Placeholder — your real client quote goes here</div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="blk flush-top" id="faq">
          <div className="wrap">
            <div className="sec-head center rv">
              <div className="kicker">05 — Reasonable questions</div>
              <h2 className="sec-title">Things people <span className="grad">actually</span> ask.</h2>
            </div>
            <div className="faq-list rv">
              {FAQS.map((f, i) => (
                <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="faq-q"><span>{f.q}</span><span className="faq-toggle">+</span></div>
                  <div className="faq-a">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="blk flush-top" id="contact">
          <div className="wrap">
            <div className="contact rv">
              <div className="contact-side">
                <div className="kicker">06 — Start a project</div>
                <h2>Tell me what you&rsquo;re trying to do.</h2>
                <p>The form sends me a note. I read every one and reply within a day — usually faster. No sales sequence, no chatbot, no scripts.</p>
                <div className="meta">
                  <a href="mailto:hi@yoco.works">→ hi@yoco.works</a>
                  <span>EN · HE · ES · Remote</span>
                </div>
              </div>
              {sent ? (
                <div className="form-success">Thanks — your note is on its way. I&rsquo;ll reply <em>within a day</em>, usually faster. While you wait, the kettle is a good idea.<div className="sig">— Y.</div></div>
              ) : (
                <form className="form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                  <div className="form-row">
                    <div className="field"><label>Your name</label><input type="text" required placeholder="Maya Chen" /></div>
                    <div className="field"><label>Email</label><input type="email" required placeholder="maya@studio.com" /></div>
                  </div>
                  <div className="form-row">
                    <div className="field"><label>Business or project</label><input type="text" placeholder="Studio Maya — bookkeeping" /></div>
                    <div className="field"><label>Timeline</label>
                      <select defaultValue="Soon as possible"><option>Soon as possible</option><option>Within a month</option><option>Within 2–3 months</option><option>Just exploring</option></select>
                    </div>
                  </div>
                  <div className="field full"><label>What can I help with?</label>
                    <div className="field-tags">
                      {HELP_OPTS.map((o) => (
                        <button type="button" key={o} className={`tag${help.includes(o) ? " active" : ""}`} onClick={() => toggleHelp(o)}>{o}</button>
                      ))}
                    </div>
                  </div>
                  <div className="field full"><label>Rough budget</label>
                    <div className="field-tags">
                      {BUDGET_OPTS.map((o) => (
                        <button type="button" key={o} className={`tag${budget === o ? " active" : ""}`} onClick={() => setBudget(o)}>{o}</button>
                      ))}
                    </div>
                  </div>
                  <div className="field full"><label>Tell me a little more</label><textarea required placeholder="What are you trying to fix or build? Even a sentence is fine." /></div>
                  <div className="form-submit">
                    <div className="privacy">Goes straight to my inbox — eventually wired to a CRM. Nothing else, no list.</div>
                    <button type="submit" className="btn btn-primary">Send the note <span className="arr">→</span></button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* BIG CTA */}
        <section className="cta">
          <div className="wrap">
            <div className="cta-inner rv">
              <h2>Ready to simplify your business?</h2>
              <p>Let&rsquo;s build something quiet and effective together. Currently booking projects for Spring 2026.</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#contact">Schedule a free call <span className="arr">→</span></a>
                <a className="btn btn-ghost" href="#work">View work</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="foot-top">
            <div className="foot-intro">
              <a className="brand" href="#top">yoco<span className="pt">.</span>works</a>
              <p>Quiet websites and careful automations for small businesses that sweat the details.</p>
            </div>
            <div className="foot-links">
              <div className="foot-col"><h5>Studio</h5><a href="#services">Services</a><a href="#work">Work</a><a href="#process">Process</a><a href="#about">About</a><a href="#faq">FAQ</a></div>
              <div className="foot-col"><h5>Start</h5><a href="#contact">Start a project</a><a href="mailto:hi@yoco.works">hi@yoco.works</a></div>
              <div className="foot-col"><h5>Elsewhere</h5><a href="#">Twitter / X</a><a href="#">LinkedIn</a></div>
            </div>
          </div>
          <div className="foot-fine">
            <span>© 2026 · Yehuda Oren Cohen · Built quietly</span>
            <span>v.0 · open for projects</span>
          </div>
        </div>
      </footer>
    </>
  );
}
