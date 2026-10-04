import Link from "next/link";
import { FlatHero } from "@/components/Hero";
import { ArrowConnector, EngagementMark, CheckRing } from "@/components/icons";
import Accordion from "@/components/Accordion";
import {
  processSteps,
  coreServices,
  supportingServices,
  engagementModels,
  gettingStarted,
  servicesFaq,
} from "@/lib/content";

export const metadata = {
  title: "Services | Atang Tracing Services",
  description: "Locate, verify, investigate, insight and connect — tracing and verification services scoped to your portfolio.",
};

export default function ServicesPage() {
  return (
    <>
      <FlatHero
        eyebrow="SERVICES"
        title="What we deliver, and what you receive."
        subtitle="Engagements can cover a full portfolio, a defined case list, or verification alone — scoped to what you actually need."
      />

      <section className="section section--sand section--tight stack" style={{ "--gap": "24px" }}>
        <div className="eyebrow eyebrow--light" data-reveal="1">HOW AN ENGAGEMENT FLOWS</div>
        <div className="step-chain" data-reveal="1">
          {processSteps.map((step, i) => (
            <div className="step-chain-item" key={step}>
              <div className="stack" style={{ "--gap": "6px", minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.16em", color: "var(--terracotta)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ fontSize: "clamp(17px, 1.7vw, 21px)", fontWeight: 900, letterSpacing: "0.02em", color: "var(--teal)", whiteSpace: "nowrap" }}>
                  {step}
                </div>
              </div>
              {i < processSteps.length - 1 ? <ArrowConnector /> : null}
            </div>
          ))}
        </div>
      </section>

      <section id="core-services" className="section section--cream stack" style={{ "--gap": "32px", paddingBottom: 56, scrollMarginTop: 110 }}>
        <div className="stack" style={{ "--gap": "12px", maxWidth: 820 }} data-reveal="1">
          <div className="eyebrow eyebrow--light">CORE SERVICES</div>
          <h2 className="h2" style={{ color: "var(--teal)" }}>The work that finds and confirms people.</h2>
        </div>
        <div className="grid-autofit" style={{ "--min": "290px", "--gap": "22px", alignItems: "stretch" }}>
          {coreServices.map((s) => (
            <div
              key={s.name}
              className="card card--rule stack"
              style={{ "--rule": s.rule, "--gap": "14px", padding: "34px 32px 30px" }}
              data-reveal="1"
            >
              <div style={{ fontSize: 26, fontWeight: 900, color: "var(--teal)", letterSpacing: "0.02em" }}>{s.name}</div>
              <p className="body-text body-text--sm text-on-light-muted" style={{ margin: 0 }}>{s.body}</p>
              <div
                className="stack"
                style={{ "--gap": "10px", marginTop: "auto", paddingTop: 16, borderTop: "1px solid var(--sand-hairline-1)" }}
              >
                <div>
                  <span className="small-label" style={{ color: "var(--terracotta)" }}>YOU RECEIVE</span>
                  <div style={{ fontSize: 16, fontWeight: 600, color: "var(--teal)", lineHeight: 1.45, marginTop: 4 }}>{s.receive}</div>
                </div>
                <div>
                  <span className="small-label" style={{ color: "var(--muted-grey)" }}>TYPICALLY USED FOR</span>
                  <div style={{ fontSize: 16, fontWeight: 300, color: "var(--body-dark-2)", lineHeight: 1.45, marginTop: 4 }}>{s.usedFor}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="supporting-services" className="section--cream stack" style={{ "--gap": "20px", padding: "0 5% 72px", boxSizing: "border-box", scrollMarginTop: 110 }}>
        <div className="stack" style={{ "--gap": "8px", maxWidth: 820 }} data-reveal="1">
          <div className="eyebrow" style={{ color: "var(--muted-grey)" }}>SUPPORTING SERVICES</div>
          <p className="body-text body-text--sm text-on-light-muted" style={{ margin: 0 }}>
            Available alongside any engagement, or on their own.
          </p>
        </div>
        {supportingServices.map((s) => (
          <div
            key={s.name}
            className="card card--rule grid-autofit"
            style={{ "--rule": s.rule, "--min": "200px", "--gap": "16px 26px", alignItems: "start", padding: "28px 26px 24px" }}
            data-reveal="1"
          >
            <div>
              <div style={{ fontSize: 21, fontWeight: 900, color: "var(--teal)", letterSpacing: "0.02em" }}>{s.name}</div>
              <p style={{ margin: "8px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-2)" }}>{s.body}</p>
            </div>
            <div>
              <span className="small-label" style={{ color: "var(--terracotta)" }}>YOU RECEIVE</span>
              <div style={{ fontSize: 15, fontWeight: 600, color: "var(--teal)", lineHeight: 1.45, marginTop: 4 }}>{s.receive}</div>
            </div>
          </div>
        ))}
      </section>

      <section id="engagement-models" className="section section--teal stack" style={{ "--gap": "32px", scrollMarginTop: 110 }}>
        <div className="stack" style={{ "--gap": "14px", maxWidth: 820 }} data-reveal="1">
          <div className="eyebrow eyebrow--dark">WAYS WE WORK TOGETHER</div>
          <h2 className="h2" style={{ color: "var(--cream)" }}>Engagement models.</h2>
          <p className="body-text text-on-dark">
            Shaped around portfolio size, record quality and reporting requirements — from a single case list to an
            ongoing partnership.
          </p>
        </div>
        <div className="grid-autofit" style={{ "--min": "260px", "--gap": "20px" }}>
          {engagementModels.map((m) => (
            <div className="card card--bordered-dark stack" style={{ "--gap": "14px" }} key={m.title} data-reveal="1">
              <EngagementMark />
              <div style={{ fontSize: 22, fontWeight: 900, color: "var(--cream)", lineHeight: 1.2 }}>{m.title}</div>
              <p style={{ margin: 0, fontSize: 16, fontWeight: 300, lineHeight: 1.55, color: "var(--body-light-2)" }}>{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--sand grid-autofit" style={{ "--min": "300px", "--gap": "48px", alignItems: "start" }}>
        <div className="stack" style={{ "--gap": "14px" }} data-reveal="1">
          <div className="eyebrow eyebrow--light">GETTING STARTED IS SIMPLE</div>
          <h2 className="h2" style={{ color: "var(--teal)", fontSize: "clamp(28px, 3.2vw, 40px)" }}>What we need from you.</h2>
          <p className="body-text text-on-light-muted">
            Four things, and none of them have to be perfect. Incomplete records are the normal starting point, not
            a problem.
          </p>
        </div>
        <div className="stack" style={{ "--gap": "20px" }}>
          {gettingStarted.map((item) => (
            <div className="row" style={{ "--gap": "14px", alignItems: "flex-start" }} key={item.title} data-reveal="1">
              <CheckRing />
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "var(--teal)", lineHeight: 1.3 }}>{item.title}</div>
                <div style={{ fontSize: 16, fontWeight: 300, color: "var(--body-dark-2)", lineHeight: 1.45, marginTop: 3 }}>
                  {item.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--cream stack" style={{ "--gap": "28px" }}>
        <div className="stack" style={{ "--gap": "12px", maxWidth: 820 }} data-reveal="1">
          <div className="eyebrow eyebrow--light">QUESTIONS WE ARE USUALLY ASKED</div>
          <h2 className="h2" style={{ color: "var(--teal)" }}>Before you get in touch.</h2>
        </div>
        <Accordion idPrefix="faq" items={servicesFaq} />
      </section>

      <section className="section section--sand stack" style={{ "--gap": "28px", paddingTop: 64, paddingBottom: 64 }}>
        <div className="stack" style={{ "--gap": "12px", maxWidth: 760 }} data-reveal="1">
          <h2 className="h2" style={{ color: "var(--teal)", fontSize: "clamp(26px, 3vw, 38px)" }}>
            Not sure which of these you need?
          </h2>
          <p className="body-text text-on-light-muted">
            Send us the shape of the problem — portfolio size and what you already know — and we will come back
            with a scoped approach.
          </p>
        </div>
        <div className="row">
          <a href="mailto:info@atangtracing.co.za?subject=Scoping%20enquiry" className="btn btn--teal">
            Email info@atangtracing.co.za
          </a>
          <span style={{ fontSize: 16, fontWeight: 300, color: "var(--body-dark-2)" }}>or call a director on 071 823 0454</span>
        </div>
        <div className="grid-autofit" style={{ "--min": "230px", "--gap": "18px", paddingTop: 12 }}>
          <Link href="/clients" className="card card--plain stack" style={{ "--gap": "8px", border: "1px solid var(--sand-hairline-4)", padding: 26, textDecoration: "none" }} data-reveal="1">
            <span style={{ fontSize: 19, fontWeight: 800, color: "var(--teal)" }}>Who we work with</span>
            <span style={{ fontSize: 16, fontWeight: 300, color: "var(--body-dark-2)", lineHeight: 1.45 }}>
              Funds, administrators, insurers and professional services.
            </span>
            <span style={{ fontSize: 15, fontWeight: 700, color: "var(--terracotta)", paddingTop: 4 }}>Read more →</span>
          </Link>
          <Link href="/governance" className="card card--plain stack" style={{ "--gap": "8px", border: "1px solid var(--sand-hairline-4)", padding: 26, textDecoration: "none" }} data-reveal="1">
            <span style={{ fontSize: 19, fontWeight: 800, color: "var(--teal)" }}>POPIA &amp; governance</span>
            <span style={{ fontSize: 16, fontWeight: 300, color: "var(--body-dark-2)", lineHeight: 1.45 }}>
              How we handle sensitive information, and how to verify a request.
            </span>
            <span style={{ fontSize: 15, fontWeight: 700, color: "var(--terracotta)", paddingTop: 4 }}>Read more →</span>
          </Link>
          <Link href="/about" className="card card--plain stack" style={{ "--gap": "8px", border: "1px solid var(--sand-hairline-4)", padding: 26, textDecoration: "none" }} data-reveal="1">
            <span style={{ fontSize: 19, fontWeight: 800, color: "var(--teal)" }}>About Atang</span>
            <span style={{ fontSize: 16, fontWeight: 300, color: "var(--body-dark-2)", lineHeight: 1.45 }}>
              Our story, commitments and what we deliberately do not do.
            </span>
            <span style={{ fontSize: 15, fontWeight: 700, color: "var(--terracotta)", paddingTop: 4 }}>Read more →</span>
          </Link>
        </div>
      </section>
    </>
  );
}
