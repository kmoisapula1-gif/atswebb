"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { PhotoHero } from "@/components/Hero";
import SelectableCard from "@/components/SelectableCard";
import Modal from "@/components/Modal";
import { CircleMark, SquareMark, DiamondMark } from "@/components/icons";
import {
  sectorData,
  additionalOrgs,
  problemData,
  whyEngageCards,
  sampleReportRows,
  sampleReportDetails,
} from "@/lib/content";

export default function ClientsPage() {
  const [sector, setSector] = useState("funds");
  const [problemIndex, setProblemIndex] = useState(0);
  const [sampleOpen, setSampleOpen] = useState(false);
  const modalTitleId = useId();

  const current = sectorData[sector];
  const problem = problemData[problemIndex];

  return (
    <>
      <PhotoHero
        image="/images/analysts.jpg"
        alt="Analysts reviewing portfolio data"
        objectPosition="50% 45%"
        minHeight={320}
        overlay="linear-gradient(180deg, rgba(14,74,68,0.60), rgba(14,74,68,0.94))"
        eyebrow="CLIENTS · WHO WE SERVE"
        title="Organisations responsible for paying benefits."
        subtitle="We support retirement funds, administrators, insurers and other organisations responsible for locating, verifying and reconnecting beneficiaries."
      />

      <section className="section section--cream" style={{ paddingTop: 64, paddingBottom: 56 }}>
        <div className="stack" style={{ "--gap": "28px" }}>
          <div className="stack" style={{ "--gap": "12px", maxWidth: 820 }} data-reveal="1">
            <div className="eyebrow eyebrow--light">START WITH WHO YOU ARE</div>
            <h2 className="h2" style={{ color: "var(--teal)" }}>Two kinds of organisation carry most of this work.</h2>
          </div>
          <div className="grid-autofit" style={{ "--min": "300px", "--gap": "20px" }}>
            <SelectableCard
              selected={sector === "funds"}
              onClick={() => setSector("funds")}
              icon={<CircleMark />}
              title="RETIREMENT FUNDS"
              description={sectorData.funds.description}
              cue={sector === "funds" ? "SHOWING BELOW" : "SEE WHAT WE COVER"}
            />
            <SelectableCard
              selected={sector === "admin"}
              onClick={() => setSector("admin")}
              icon={<SquareMark />}
              title="ADMINISTRATORS & TRUSTEES"
              description={sectorData.admin.description}
              cue={sector === "admin" ? "SHOWING BELOW" : "SEE WHAT WE COVER"}
            />
          </div>

          <div
            className="grid-autofit"
            style={{ "--min": "260px", "--gap": "28px", alignItems: "start", background: "var(--sand)", borderRadius: "var(--radius-md)", padding: "32px 30px" }}
          >
            <div className="stack" style={{ "--gap": "6px" }}>
              <div className="small-label" style={{ color: "var(--terracotta)", letterSpacing: "0.2em" }}>{current.entitiesLabel}</div>
              {current.entities.map((e) => (
                <div className="hover-row" key={e.title}>
                  <div className="hover-row-title">{e.title} →</div>
                  <p className="hover-row-body">{e.body}</p>
                </div>
              ))}
            </div>
            <div className="stack" style={{ "--gap": "14px" }}>
              <div className="small-label" style={{ color: "var(--muted-grey)", letterSpacing: "0.2em" }}>WHERE ENGAGEMENTS USUALLY START</div>
              <div style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.55, color: "var(--body-dark-1)" }}>{current.start}</div>
              <div className="row" style={{ "--gap": "8px" }}>
                {current.services.map((s) => (
                  <span className="pill--tag" key={s}>{s}</span>
                ))}
              </div>
              <Link href="/services" className="btn--text" style={{ alignSelf: "flex-start", marginTop: 4 }}>
                See how an engagement flows →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand section--tight stack" style={{ "--gap": "24px" }}>
        <div className="row" style={{ "--gap": "14px" }} data-reveal="1">
          <DiamondMark />
          <div className="eyebrow" style={{ color: "var(--teal)" }}>ADDITIONAL ORGANISATIONS WE SUPPORT</div>
        </div>
        <div className="grid-autofit" style={{ "--min": "220px", "--gap": "16px" }}>
          {additionalOrgs.map((org) => (
            <div className="card card--plain" key={org.title} data-reveal="1">
              <div style={{ fontSize: 18, fontWeight: 800, color: "var(--teal)" }}>{org.title}</div>
              <p style={{ margin: "6px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.45, color: "var(--body-dark-2)" }}>{org.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--teal stack" style={{ "--gap": "28px", paddingTop: 64, paddingBottom: 64 }}>
        <div className="stack" style={{ "--gap": "12px", maxWidth: 820 }} data-reveal="1">
          <div className="eyebrow eyebrow--dark">WHAT ARE YOU TRYING TO SOLVE?</div>
          <h2 className="h2" style={{ color: "var(--cream)" }}>Pick the sentence closest to your situation.</h2>
        </div>
        <div className="row" style={{ "--gap": "10px" }}>
          {problemData.map((p, i) => (
            <button
              key={p.chip}
              type="button"
              className="chip"
              data-selected={problemIndex === i ? "true" : "false"}
              aria-pressed={problemIndex === i}
              onClick={() => setProblemIndex(i)}
            >
              {p.chip}
            </button>
          ))}
        </div>
        <div
          className="grid-autofit"
          style={{ "--min": "260px", "--gap": "28px", alignItems: "start", background: "var(--teal-card)", border: "1px solid var(--teal-hairline)", borderRadius: "var(--radius-md)", padding: "32px 30px" }}
        >
          <div className="stack" style={{ "--gap": "12px" }}>
            <div style={{ fontSize: "clamp(19px, 2vw, 24px)", fontWeight: 900, color: "var(--cream)", lineHeight: 1.2 }}>{problem.title}</div>
            <p style={{ margin: 0, fontSize: 17, fontWeight: 300, lineHeight: 1.6, color: "var(--body-light-1)" }}>{problem.body}</p>
          </div>
          <div className="stack" style={{ "--gap": "18px" }}>
            <div>
              <div className="small-label" style={{ color: "var(--peach)" }}>THE WORK INVOLVED</div>
              <div className="row" style={{ "--gap": "8px", paddingTop: 8 }}>
                {problem.services.map((s) => (
                  <span className="pill--tag pill--tag-dark" key={s}>{s}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="small-label" style={{ color: "var(--body-light-3)" }}>TYPICALLY RAISED BY</div>
              <div style={{ fontSize: 16, fontWeight: 300, color: "var(--body-light-2)", lineHeight: 1.5, paddingTop: 6 }}>{problem.who}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cream stack" style={{ "--gap": "28px", paddingTop: 64, paddingBottom: 64 }}>
        <div className="stack" style={{ "--gap": "12px", maxWidth: 820 }} data-reveal="1">
          <div className="eyebrow eyebrow--light">WHY ORGANISATIONS ENGAGE ATANG</div>
          <h2 className="h2" style={{ color: "var(--teal)" }}>What you can hold us to instead of a logo wall.</h2>
        </div>
        <div className="grid-autofit" style={{ "--min": "250px", "--gap": "20px" }}>
          {whyEngageCards.map((c) => (
            <div className="card card--rule card--rule-sand" style={{ "--rule": c.rule }} key={c.title} data-reveal="1">
              <div style={{ fontSize: 19, fontWeight: 900, color: "var(--teal)", lineHeight: 1.25 }}>{c.title}</div>
              <p style={{ margin: "8px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-2)" }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--sand grid-autofit" style={{ "--min": "300px", "--gap": "40px", alignItems: "start", paddingTop: 64, paddingBottom: 64 }}>
        <div className="stack" style={{ "--gap": "14px" }} data-reveal="1">
          <div className="eyebrow eyebrow--light">WHAT YOU GET BACK</div>
          <h2 className="h2" style={{ color: "var(--teal)", fontSize: "clamp(26px, 3vw, 38px)" }}>Reporting you can work with.</h2>
          <p className="body-text text-on-light-muted" style={{ maxWidth: 520 }}>
            Every case comes back with a status, a verification level and a next action — at case level and
            summarised across the portfolio.
          </p>
          <button type="button" className="btn btn--teal" style={{ alignSelf: "flex-start", marginTop: 6 }} onClick={() => setSampleOpen(true)}>
            View sample reporting structure
          </button>
        </div>
        <div
          className="stack"
          style={{ "--gap": "0", background: "var(--cream)", border: "1px solid var(--sand-hairline-1)", borderRadius: "var(--radius-md)", overflow: "hidden" }}
          data-reveal="1"
        >
          <div className="grid-autofit" style={{ "--min": "0", gridTemplateColumns: "1fr 1fr 1fr", "--gap": "10px", padding: "14px 18px", background: "var(--teal)" }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", color: "var(--peach)" }}>CASE</div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", color: "var(--peach)" }}>STATUS</div>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.14em", color: "var(--peach)" }}>NEXT ACTION</div>
          </div>
          {sampleReportRows.map((row, i) => (
            <div
              key={row.case}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 10,
                padding: "14px 18px",
                borderBottom: i < sampleReportRows.length - 1 ? "1px solid var(--sand-hairline-2)" : "none",
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--teal)" }}>{row.case}</div>
              <div style={{ fontSize: 15, fontWeight: 300, color: "var(--body-dark-2)" }}>{row.status}</div>
              <div style={{ fontSize: 15, fontWeight: 300, color: "var(--body-dark-2)" }}>{row.next}</div>
            </div>
          ))}
          <div style={{ padding: "12px 18px 16px", fontSize: 13, fontWeight: 600, letterSpacing: "0.02em", color: "var(--muted-grey)" }}>
            Illustrative structure only — no member information shown.
          </div>
        </div>
      </section>

      <Modal open={sampleOpen} onClose={() => setSampleOpen(false)} titleId={modalTitleId}>
        <div className="row" style={{ alignItems: "flex-start", justifyContent: "space-between", "--gap": "18px" }}>
          <div>
            <div className="small-label" style={{ color: "var(--terracotta)", letterSpacing: "0.2em" }}>SAMPLE REPORTING STRUCTURE</div>
            <h3 id={modalTitleId} style={{ margin: "6px 0 0", fontSize: "clamp(22px, 2.6vw, 30px)", fontWeight: 900, lineHeight: 1.1, color: "var(--teal)" }}>
              What a report contains.
            </h3>
          </div>
          <button type="button" className="modal-close" onClick={() => setSampleOpen(false)} aria-label="Close">
            ×
          </button>
        </div>
        <div className="stack" style={{ "--gap": "12px" }}>
          {sampleReportDetails.map((d) => (
            <div key={d.title} style={{ borderLeft: `4px solid ${d.accent}`, padding: "4px 0 4px 14px" }}>
              <div style={{ fontSize: 17, fontWeight: 700, color: "var(--teal)" }}>{d.title}</div>
              <p style={{ margin: "3px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-2)" }}>{d.body}</p>
            </div>
          ))}
        </div>
        <p style={{ margin: 0, fontSize: 15, fontWeight: 400, lineHeight: 1.5, color: "var(--muted-grey)" }}>
          Structure only. Report content is confidential to the instructing organisation.
        </p>
      </Modal>

      <section className="section--teal row" style={{ padding: "64px 5%", boxSizing: "border-box", justifyContent: "space-between" }}>
        <div className="stack" style={{ "--gap": "12px", maxWidth: 640 }} data-reveal="1">
          <h2 className="h2" style={{ color: "var(--cream)", fontSize: "clamp(26px, 3vw, 38px)" }}>
            Not sure whether Atang is the right fit?
          </h2>
          <p className="body-text text-on-dark">
            If you are responsible for a portfolio, a case list or a verification requirement, tell us the size of
            the challenge and what information you currently hold.
          </p>
          <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: "0.04em", color: "var(--peach)", paddingTop: 4 }}>
            A director answers the phone.
          </div>
        </div>
        <div className="row" style={{ "--gap": "12px" }}>
          <Link href="/contact" className="btn btn--peach">Discuss a portfolio</Link>
          <Link href="/governance" className="btn" style={{ background: "none", color: "var(--cream)", border: "1px solid var(--teal-mid)", fontWeight: 700 }}>
            How we handle data
          </Link>
        </div>
      </section>
    </>
  );
}
