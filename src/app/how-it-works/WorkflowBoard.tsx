"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { PhoneCall, Zap, CalendarCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import styles from "./page.module.css";
import { pains, agents, opportunities, impact, flow, outcomes } from "./content";

function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`${styles.reveal} ${on ? styles.in : ""}`}>{children}</div>;
}

function Block({ n, title, sub, alt, children }: { n: number; title: string; sub: string; alt?: boolean; children: ReactNode }) {
  return (
    <section className={`${styles.block} ${alt ? styles.blockAlt : ""}`}>
      <div className="container">
        <Reveal>
          <header className={styles.blockHead}>
            <span className={styles.num}>{String(n).padStart(2, "0")}</span>
            <div><h2>{title}</h2><p>{sub}</p></div>
          </header>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

function Fx({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div data-fx className={`${styles.fx} ${className}`}>{children}</div>;
}

function Checks({ items }: { items: string[] }) {
  return (
    <ul className={styles.checks}>
      {items.map((t) => <li key={t}><span className={styles.mk}>✓</span><span>{t}</span></li>)}
    </ul>
  );
}

const heroDesc = "One AI automation solution, tailored for all verticals.";

const subCopy =
  "From the first customer call or text to the final follow-up, AI handles every step: answering instantly, qualifying leads, booking appointments, and bringing customers back, so no opportunity is missed.";

const heroPoints: [string, string][] = [
  ["24/7 Voice & SMS", "Capture every lead, even after hours."],
  ["Instant response", "Customers get instant answers."],
  ["Automated booking", "Automated booking, updates and reminders."],
];

const pointIcons = [PhoneCall, Zap, CalendarCheck];

export default function WorkflowBoard() {
  const [lit, setLit] = useState(1);
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setLit(flow.length); return; }
    const id = setInterval(() => setLit((n) => (n >= flow.length ? 1 : n + 1)), 1400);
    return () => clearInterval(id);
  }, []);

  // cursor spotlight on any card (event delegation)
  const onPageMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>("[data-fx]");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const onSceneMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scene.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--px", String((e.clientX - r.left) / r.width - 0.5));
    el.style.setProperty("--py", String((e.clientY - r.top) / r.height - 0.5));
  };
  const onSceneLeave = () => {
    scene.current?.style.setProperty("--px", "0");
    scene.current?.style.setProperty("--py", "0");
  };

  return (
    <div className={styles.page} onMouseMove={onPageMove}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <span className={styles.eyebrow}>How It Works</span>
            <h1 className={styles.h1}>From First Call to Repeat Customer, <em>Fully Automated</em></h1>
            <p className={styles.lead}>{heroDesc}</p>
            <p className={styles.sub}>{subCopy}</p>
            <div className={styles.heroActions}>
              <Button href="/resources/ai-audit" size="lg">Get Your AI Audit</Button>
              <Button href="/solutions" variant="secondary" size="lg">Explore Our Solutions</Button>
            </div>
            <ul className={styles.points}>
              {heroPoints.map(([ti, bo], i) => {
                const Icon = pointIcons[i];
                return (
                  <li key={ti}>
                    <span className={styles.pIco}><Icon size={18} aria-hidden="true" /></span>
                    <div><b>{ti}</b><span>{bo}</span></div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div ref={scene} className={styles.scene} onMouseMove={onSceneMove} onMouseLeave={onSceneLeave} aria-hidden="true">
            <div className={styles.sceneTitle}>
              <b>ONE AI AUTOMATION SOLUTION</b>
              <span>Tailored for all verticals</span>
            </div>
            <div className={styles.stage}>
              <div className={styles.base} />
              {flow.map((s, i) => (
                <div key={s} className={`${styles.plate} ${i < lit ? styles.plateOn : ""}`} style={{ ["--i" as string]: i } as React.CSSProperties}>
                  <span className={styles.plateNum}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.plateTxt}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <Block n={1} title="Peak Emergency Pain Points" sub="What's the problem?">
        <div className={styles.alert}>
          <div className={styles.alertPanel}>
            <div className={styles.rings} aria-hidden="true"><span /><span /><span /><b>!</b></div>
            <h3>Peak Emergency</h3>
            <p>What&apos;s the problem?</p>
          </div>
          <ul className={styles.feed}>
            {pains.map((t, i) => (
              <li key={t} className={`${styles.feedRow} ${i === lit - 1 ? styles.hot : ""}`}>
                <span className={styles.feedIdx}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.dot} aria-hidden="true" />
                <p>{t}</p>
                <span className={styles.feedArrow} aria-hidden="true">→</span>
              </li>
            ))}
          </ul>
        </div>
      </Block>

      <Block n={2} title="AI Automation Solution" sub="One or two AI products for all verticals" alt>
        <div className={styles.agents}>
          <Fx className={styles.agent}>
            <h3>{agents[0].name}</h3><small>{agents[0].sub}</small>
            <Checks items={agents[0].items} />
          </Fx>
          <span className={styles.plus} aria-hidden>+</span>
          <Fx className={`${styles.agent} ${styles.agentDark}`}>
            <h3>{agents[1].name}</h3><small>{agents[1].sub}</small>
            <Checks items={agents[1].items} />
          </Fx>
        </div>
      </Block>

      <Block n={3} title="AI Automation Opportunities" sub="What can we automate?">
        <div className={styles.cards4}>
          {opportunities.map((t, i) => (
            <Fx key={t}><span className={styles.ico}>{String(i + 1).padStart(2, "0")}</span><p className={styles.fxTxt}>{t}</p></Fx>
          ))}
        </div>
      </Block>

      <Block n={4} title="Business Impact" sub="What happens?" alt>
        <div className={styles.impactBars}>
          {impact.map((t, i) => (
            <div key={t} className={styles.bar} style={{ ["--i" as string]: i } as React.CSSProperties}>
              <span className={styles.barIco} aria-hidden="true">↗</span>
              <p>{t}</p>
            </div>
          ))}
        </div>
      </Block>

      <section className={styles.flowSection}>
        <div className="container">
          <Reveal>
            <span className={styles.label}>End-to-end flow</span>
            <h2 className={styles.h2}>How it works</h2>
            <ol className={styles.steps}>
              {flow.map((s, i) => (
                <li key={s} className={`${styles.step} ${i < lit ? styles.stepOn : ""}`}>
                  <span className={styles.ic}>{String(i + 1).padStart(2, "0")}</span>
                  <p>{s}</p>
                </li>
              ))}
            </ol>
            <div className={styles.outcomes}>
              {outcomes.map(([t, b]) => (
                <Fx key={t}><h3 className={styles.outT}>{t}</h3><p className={styles.outP}>{b}</p></Fx>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
