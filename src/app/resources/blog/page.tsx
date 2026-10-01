import type { Metadata } from "next";
import { ArrowDown, ArrowRight, Bot, CalendarCheck, FileText, MessageSquareText, Phone, Workflow } from "lucide-react";
import Button from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import styles from "./page.module.css";

export const metadata: Metadata = buildMetadata({
  title: "AI & Automation Insights",
  description: "Practical ideas for building smarter, more efficient businesses with AI automation.",
  path: "/resources/blog",
});

const topics = [
  { icon: Bot, title: "AI Automation", body: "Learn how AI can automate repetitive business processes and transform everyday operations." },
  { icon: Workflow, title: "AI Agents", body: "Discover how AI agents can understand requests, make decisions, and execute tasks across your systems." },
  { icon: FileText, title: "Business Process Automation", body: "Reduce manual work, improve consistency, and connect disconnected business processes." },
  { icon: MessageSquareText, title: "Customer Experience", body: "Improve communication, response times, appointment handling, and follow-ups." },
  { icon: CalendarCheck, title: "Sales Automation", body: "Capture leads, qualify prospects, schedule meetings, and keep CRM data updated." },
  { icon: Phone, title: "AI Voice Agents", body: "Handle customer conversations, answer questions, collect information, and schedule appointments." },
  { icon: FileText, title: "Data & Document Automation", body: "Extract, classify, and move information from documents into your business workflows." },
];

const popularArticles = [
  { slug: "what-is-ai-automation-a-practical-guide-for-businesses", tag: "Foundations", title: "What Is AI Automation? A Practical Guide for Businesses", excerpt: "Understand what AI automation means, how it differs from traditional automation, and where businesses can start." },
  { slug: "10-business-processes-you-can-automate-with-ai", tag: "Operations", title: "10 Business Processes You Can Automate With AI", excerpt: "Discover practical opportunities across customer communication, follow-ups, documents, and data entry." },
  { slug: "ai-agents-vs-traditional-automation-whats-the-difference", tag: "AI Agents", title: "AI Agents vs Traditional Automation: What's the Difference?", excerpt: "Learn how rule-based automation compares with AI-powered agents and when each approach makes sense." },
  { slug: "how-ai-voice-agents-handle-customer-calls", tag: "Voice AI", title: "How AI Voice Agents Handle Customer Calls", excerpt: "Explore how voice AI understands conversations, performs actions, and transfers calls when needed." },
  { slug: "how-to-calculate-the-roi-of-ai-automation", tag: "ROI", title: "How to Calculate the ROI of AI Automation", excerpt: "Learn which costs, time savings, productivity improvements, and operational metrics matter." },
  { slug: "how-to-identify-the-right-processes-for-automation", tag: "Strategy", title: "How to Identify the Right Processes for Automation", excerpt: "Find repetitive, high-volume, rule-driven processes that may provide strong automation opportunities." },
];

const guides = [
  { title: "Beginner's Guide to AI Automation", body: "Understand the fundamentals, common use cases, technologies, implementation approaches, and business benefits." },
  { title: "Building an AI-Powered Workflow", body: "Learn how AI models, APIs, databases, CRMs, communication tools, and business applications connect." },
  { title: "Connecting AI to Your Business Data", body: "Learn how AI systems securely access relevant information through APIs, documents, knowledge bases, and retrieval systems." },
];

const problemCards = [
  { title: "Too many repetitive calls?", body: "Explore how AI voice agents handle routine conversations and route complex requests to your team." },
  { title: "Leads aren't being followed up?", body: "Discover how automated lead workflows capture inquiries, trigger follow-ups, and update your CRM." },
  { title: "Hours spent processing documents?", body: "Learn how AI document processing extracts information and moves it into the systems your team uses." },
  { title: "Your systems don't talk to each other?", body: "Discover how APIs and workflows connect your CRM, email, calendar, database, and business applications." },
];

const trends = ["AI Agents", "Generative AI", "Voice AI", "RAG", "Intelligent Documents", "API Automation", "CRM Automation", "Workflow Orchestration", "Business Intelligence"];

export default function BlogPage() {
  return (
    <>
      <section className={`section ${styles.hero}`}>
        <div className="container">
          <p className={styles.heroEyebrow}>AI &amp; Automation Insights</p>
          <h1 className={styles.heroTitle}>Practical Ideas for Building Smarter, More Efficient Businesses.</h1>
          <p className={styles.heroCopy}>
            Explore insights, strategies, and practical guides on AI automation, intelligent workflows, AI agents, business process automation, and digital transformation.
          </p>
          <Button href="#latest" size="lg">Explore Latest Articles <ArrowDown size={16} /></Button>
        </div>
      </section>

      <section id="latest" className={`section ${styles.featureSection}`}>
        <div className="container">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>Latest insights</p><h2>Ideas that make AI useful.</h2><p>Stay current on the technologies and strategies shaping AI-powered business automation.</p></div>
          <article className={styles.featured}>
            <div><span className={styles.featureTag}>Featured article / Operations</span><h2>How AI Automation Is Transforming Business Operations</h2><p>Discover how AI-powered workflows automate repetitive processes, connect business systems, improve response times, and help teams focus on higher-value work.</p><Button href="/resources/blog/how-ai-automation-is-transforming-business-operations" variant="ghost">Read Article <ArrowRight size={16} /></Button></div>
            <div className={styles.featureVisual} aria-hidden="true"><span>01</span><div className={styles.visualLine} /><b>workflow<br />intelligence</b></div>
          </article>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container"><div className={styles.sectionHeading}><p className={styles.eyebrow}>Explore our insights</p><h2>Find the lens you need.</h2></div><div className={styles.topicGrid}>{topics.map((topic) => { const Icon = topic.icon; return <article key={topic.title} className={styles.topicCard}><span className={styles.iconWrap}><Icon size={19} /></span><h3>{topic.title}</h3><p>{topic.body}</p><a href="#articles">Explore {topic.title} <ArrowRight size={15} /></a></article>; })}</div></div>
      </section>

      <section id="articles" className="section">
        <div className="container"><div className={styles.sectionHeading}><p className={styles.eyebrow}>Popular articles</p><h2>Start with the questions businesses ask first.</h2></div><div className={styles.articleGrid}>{popularArticles.map((post) => <article key={post.title} className={styles.articleCard}><span className={styles.tag}>{post.tag}</span><h3>{post.title}</h3><p>{post.excerpt}</p><a href={`/resources/blog/${post.slug}`}>Read Article <ArrowRight size={15} /></a></article>)}</div></div>
      </section>

      <section className={`section ${styles.guideSection}`}>
        <div className="container"><div className={styles.sectionHeading}><p className={styles.eyebrow}>AI automation guides</p><h2>Go deeper when you&apos;re ready to build.</h2></div><div className={styles.guideGrid}>{guides.map((guide, index) => <article key={guide.title} className={styles.guideCard}><span className={styles.guideNumber}>0{index + 1}</span><h3>{guide.title}</h3><p>{guide.body}</p><a href="/resources/ai-audit">Read Guide <ArrowRight size={15} /></a></article>)}</div></div>
      </section>

      <section className="section">
        <div className="container"><div className={styles.sectionHeading}><p className={styles.eyebrow}>Automation in action</p><h2>Real business problems. Practical automation solutions.</h2><p>Our articles focus on real operational challenges rather than AI hype.</p></div><div className={styles.problemGrid}>{problemCards.map((problem) => <article key={problem.title} className={styles.problemCard}><h3>{problem.title}</h3><p>{problem.body}</p><a href="/resources/ai-audit">Learn More <ArrowRight size={15} /></a></article>)}</div></div>
      </section>

      <section className={`section ${styles.trendSection}`}>
        <div className="container"><div className={styles.trendLayout}><div><p className={styles.eyebrow}>Latest trends</p><h2>Understand the signal, not just the noise.</h2><p>The AI landscape changes quickly. We explain what emerging technologies mean from a practical business perspective.</p></div><div className={styles.trendList}>{trends.map((trend) => <span key={trend}>{trend}</span>)}</div></div></div>
      </section>

      <section className={`section ${styles.newsletterSection}`}>
        <div className="container"><div className={styles.newsletter}><div><p className={styles.eyebrow}>Stay ahead</p><h2>Get practical AI and automation insights.</h2><p>No unnecessary emails. Just useful ideas for building more efficient operations.</p></div><form className={styles.newsletterForm}><label htmlFor="blog-email">Subscribe to our newsletter</label><div><input id="blog-email" type="email" placeholder="Email address" aria-label="Email address" required /><button type="submit">Subscribe <ArrowRight size={15} /></button></div></form></div></div>
      </section>

      <section className={styles.operatorCta}>
        <div className="container"><p className={styles.eyebrow}>Have an automation challenge?</p><h2>Don&apos;t just follow the AI trend. Understand it.</h2><p>Have a repetitive process, disconnected systems, or a customer experience challenge? Let&apos;s explore whether AI automation can help.</p><Button href="/contact" variant="light" size="lg">Talk to an Automation Expert <ArrowRight size={16} /></Button></div>
      </section>

    </>
  );
}
