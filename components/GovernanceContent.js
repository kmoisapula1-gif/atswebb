"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import SelectableCard from "@/components/SelectableCard";
import { CircleMark, SquareMark } from "@/components/icons";
import { checklistQuestions, governanceFundCards, formsPolicies, dataHandlingSummary } from "@/lib/content";

function Verdict({ status }) {
  const copy = {
    fail: {
      accent: "var(--signal-red)",
      title: "That was probably not us.",
      body: "Stop the conversation, share nothing further, and call us on 071 823 0454 — the number published here. If money has already been paid, report it to your bank and the police as well.",
    },
    pass: {
      accent: "var(--signal-green)",
      title: "That is consistent with how we work.",
      body: "Nothing here contradicts our process. You are still welcome to call us on 071 823 0454 to confirm the call before you share anything — we would rather you checked.",
    },
    incomplete: {
      accent: "var(--terracotta)",
      title: "Answer the five questions above.",
      body: "We will tell you whether the call matches how Atang actually works. Nothing you tap is sent to us.",
    },
  }[status];

  return { ...copy };
}

export default function GovernanceContent() {
  const searchParams = useSearchParams();
  const initialRoute = searchParams.get("route") === "member" ? "member" : "fund";
  const [route, setRoute] = useState(initialRoute);
  const [chk, setChk] = useState({});

  const { status } = useMemo(() => {
    const answered = checklistQuestions.filter((q) => chk[q.id]);
    const hasContradiction = answered.some((q) => chk[q.id] !== q.expect);
    const allAnswered = answered.length === checklistQuestions.length;
    const allMatch = allAnswered && answered.every((q) => chk[q.id] === q.expect);
    if (hasContradiction) return { status: "fail" };
    if (allMatch) return { status: "pass" };
    return { status: "incomplete" };
  }, [chk]);

  const verdict = Verdict({ status });

  return (
    <>
      <section className="section--teal stack" style={{ "--gap": "16px", padding: "56px 5% 48px", boxSizing: "border-box" }}>
        <div className="eyebrow eyebrow--dark">POPIA &amp; GOVERNANCE</div>
        <h1 className="h1" style={{ color: "var(--cream)", maxWidth: 860 }}>Trust through accountability.</h1>
        <p className="body-text text-on-dark" style={{ maxWidth: 760 }}>
          We handle sensitive personal information, and we contact people who are not expecting to hear from us.
          Both carry a duty of care we take seriously.
        </p>
      </section>

      <section className="section section--sand section--tight stack" style={{ "--gap": "20px" }}>
        <div className="eyebrow eyebrow--light" data-reveal="1">WHERE WOULD YOU LIKE TO START?</div>
        <div className="grid-autofit" style={{ "--min": "300px", "--gap": "18px" }}>
          <SelectableCard
            selected={route === "member"}
            onClick={() => setRoute("member")}
            icon={<CircleMark size={28} />}
            title="I received a call from Atang"
            description="Check whether it was really us — and what we will never ask you for."
            cue={route === "member" ? "SHOWING BELOW" : "CHECK A CALL"}
          />
          <SelectableCard
            selected={route === "fund"}
            onClick={() => setRoute("fund")}
            icon={<SquareMark size={28} />}
            title="I am a fund or administrator"
            description="How member data is handled, and what you can ask us to put in writing."
            cue={route === "fund" ? "SHOWING BELOW" : "SEE GOVERNANCE"}
          />
        </div>
      </section>

      {route === "member" ? (
        <section className="section section--cream stack" style={{ "--gap": "26px" }}>
          <div className="stack" style={{ "--gap": "10px", maxWidth: 820 }} data-reveal="1">
            <div className="eyebrow eyebrow--light">FOR MEMBERS AND BENEFICIARIES</div>
            <h2 className="h2" style={{ color: "var(--teal)", fontSize: "clamp(26px, 3.2vw, 40px)" }}>Did the caller do this?</h2>
            <p className="body-text text-on-light-muted">
              Answer for the call you received. Nothing you tap here is sent to us.
            </p>
          </div>

          <div className="stack" style={{ "--gap": "12px", maxWidth: 860 }} role="group" aria-label="Call checklist">
            {checklistQuestions.map((q) => {
              const answer = chk[q.id];
              const yesState = answer === "yes" ? (q.expect === "yes" ? "match" : "contradict") : undefined;
              const noState = answer === "no" ? (q.expect === "no" ? "match" : "contradict") : undefined;
              return (
                <div className="check-row" key={q.id}>
                  <div className="check-question">{q.q}</div>
                  <div className="row" style={{ "--gap": "8px", flex: "none" }}>
                    <button
                      type="button"
                      className="check-btn"
                      data-state={yesState}
                      aria-pressed={answer === "yes"}
                      onClick={() => setChk((s) => ({ ...s, [q.id]: "yes" }))}
                    >
                      YES
                    </button>
                    <button
                      type="button"
                      className="check-btn"
                      data-state={noState}
                      aria-pressed={answer === "no"}
                      onClick={() => setChk((s) => ({ ...s, [q.id]: "no" }))}
                    >
                      NO
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="stack"
            style={{ "--gap": "10px", background: "var(--sand)", borderLeft: `6px solid ${verdict.accent}`, borderRadius: "var(--radius-md)", padding: "26px 26px", maxWidth: 860 }}
            role="status"
            aria-live="polite"
          >
            <div style={{ fontSize: "clamp(19px, 2vw, 23px)", fontWeight: 900, color: "var(--teal)", lineHeight: 1.25 }}>{verdict.title}</div>
            <p style={{ margin: 0, fontSize: 17, fontWeight: 300, lineHeight: 1.6, color: "var(--body-dark-1)" }}>{verdict.body}</p>
            <button type="button" className="btn--text" style={{ alignSelf: "flex-start" }} onClick={() => setChk({})}>
              Start again
            </button>
          </div>

          <div
            className="stack"
            style={{ "--gap": "10px", background: "var(--teal)", color: "var(--cream)", borderRadius: "var(--radius-md)", padding: 28, maxWidth: 860 }}
          >
            <div style={{ fontSize: 18, fontWeight: 800, color: "var(--peach)" }}>If something feels wrong, stop and check with us.</div>
            <p style={{ margin: 0, fontSize: 17, fontWeight: 300, lineHeight: 1.55, color: "var(--body-light-1)" }}>
              Email{" "}
              <a href="mailto:info@atangtracing.co.za" style={{ color: "var(--peach)", fontWeight: 600 }}>
                info@atangtracing.co.za
              </a>{" "}
              or call 071 823 0454 — the number published on this site, not one you were given in a message. We
              would far rather answer a query than have anyone lose money to someone using our name.
            </p>
            <div style={{ fontSize: 15, fontWeight: 700, color: "var(--body-light-3)", paddingTop: 2 }}>
              There is never a fee, deposit or release charge for a benefit that belongs to you.
            </div>
          </div>
        </section>
      ) : null}

      {route === "fund" ? (
        <>
          <section className="section section--cream stack" style={{ "--gap": "26px" }}>
            <div className="stack" style={{ "--gap": "10px", maxWidth: 820 }} data-reveal="1">
              <div className="eyebrow eyebrow--light">FOR FUNDS AND ADMINISTRATORS</div>
              <h2 className="h2" style={{ color: "var(--teal)", fontSize: "clamp(26px, 3.2vw, 40px)" }}>Our governance practices.</h2>
              <p className="body-text text-on-light-muted">How the work is actually controlled — not a values statement.</p>
            </div>
            <div className="grid-autofit" style={{ "--min": "260px", "--gap": "20px" }}>
              {governanceFundCards.map((c) => (
                <div className="card card--rule card--rule-sand" style={{ "--rule": c.rule }} key={c.title} data-reveal="1">
                  <div style={{ fontSize: 19, fontWeight: 900, color: "var(--teal)", lineHeight: 1.25 }}>{c.title}</div>
                  <p style={{ margin: "8px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-2)" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section section--sand stack" style={{ "--gap": "26px" }}>
            <div className="stack" style={{ "--gap": "10px", maxWidth: 820 }} data-reveal="1">
              <div className="eyebrow eyebrow--light">FORMS &amp; POLICIES</div>
              <h2 className="h2" style={{ color: "var(--teal)", fontSize: "clamp(26px, 3.2vw, 40px)" }}>POPIA and PAIA documents.</h2>
              <p className="body-text text-on-light-muted">
                Download, complete and email the relevant form to{" "}
                <a href="mailto:info@atangtracing.co.za" style={{ fontWeight: 600 }}>info@atangtracing.co.za</a>. Requests
                are acknowledged in writing and handled by the information officer.
              </p>
            </div>
            <div className="grid-autofit" style={{ "--min": "260px", "--gap": "18px", alignItems: "stretch" }}>
              {formsPolicies.map((doc) =>
                doc.available ? (
                  <a
                    key={doc.title}
                    href={doc.href}
                    download
                    className="card stack"
                    style={{ "--gap": "10px", background: "var(--sand)", border: "1px solid var(--sand-hairline-1)", padding: "26px 24px", textDecoration: "none" }}
                    data-reveal="1"
                  >
                    <div className="small-label" style={{ color: "var(--terracotta)" }}>{doc.meta}</div>
                    <div style={{ fontSize: 19, fontWeight: 900, color: "var(--teal)", lineHeight: 1.25 }}>{doc.title}</div>
                    <p style={{ margin: 0, fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-2)" }}>{doc.body}</p>
                    <div style={{ marginTop: "auto", paddingTop: 10, fontSize: 14, fontWeight: 700, color: "var(--terracotta)" }}>Download →</div>
                  </a>
                ) : (
                  <div
                    key={doc.title}
                    className="card stack"
                    style={{ "--gap": "10px", background: "var(--sand)", border: "1px dashed var(--sand-hairline-4)", padding: "26px 24px", opacity: 0.82 }}
                    data-reveal="1"
                  >
                    <div className="small-label" style={{ color: "var(--terracotta)" }}>{doc.meta}</div>
                    <div style={{ fontSize: 19, fontWeight: 900, color: "var(--teal)", lineHeight: 1.25 }}>{doc.title}</div>
                    <p style={{ margin: 0, fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-2)" }}>{doc.body}</p>
                    <div style={{ marginTop: "auto", paddingTop: 10, fontSize: 13, fontWeight: 700, color: "var(--muted-grey)" }}>
                      PDF pending — not yet supplied
                    </div>
                  </div>
                )
              )}
            </div>
            <div
              className="stack"
              style={{ "--gap": "0", background: "var(--cream)", borderLeft: "5px solid var(--teal)", borderRadius: "var(--radius-sm)", padding: "20px 22px", maxWidth: 860 }}
              data-reveal="1"
            >
              <div style={{ fontSize: 17, fontWeight: 800, color: "var(--teal)" }}>Information officer</div>
              <p style={{ margin: "6px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-2)" }}>
                Kamogelo Moisapula ·{" "}
                <a href="mailto:info@atangtracing.co.za" style={{ fontWeight: 600 }}>info@atangtracing.co.za</a> · 071 823
                0454. Signed hard copies are available on request at the registered office.
              </p>
            </div>
          </section>

          <section className="section section--teal grid-autofit" style={{ "--min": "300px", "--gap": "40px", alignItems: "center" }}>
            <div className="stack" style={{ "--gap": "14px" }} data-reveal="1">
              <div className="eyebrow eyebrow--dark">DUE DILIGENCE</div>
              <h2 className="h2" style={{ color: "var(--cream)", fontSize: "clamp(26px, 3vw, 38px)" }}>Ask us for it in writing.</h2>
              <p className="body-text text-on-dark" style={{ maxWidth: 520 }}>
                We will send a data handling summary for your file before an engagement starts — the information
                officer, the sources we use, how access is controlled, how long records are kept and what happens
                if something goes wrong.
              </p>
              <a
                href="mailto:info@atangtracing.co.za?subject=Governance%20information%20request"
                className="btn btn--peach"
                style={{ alignSelf: "flex-start", marginTop: 6 }}
              >
                Request governance information
              </a>
            </div>
            <div className="card card--bordered-dark stack" style={{ "--gap": "14px" }} data-reveal="1">
              <div className="small-label" style={{ color: "var(--peach)" }}>DATA HANDLING SUMMARY</div>
              <div className="stack" style={{ "--gap": "12px" }}>
                {dataHandlingSummary.map((row, i) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 16,
                      borderBottom: i < dataHandlingSummary.length - 1 ? "1px solid var(--teal-hairline)" : "none",
                      paddingBottom: i < dataHandlingSummary.length - 1 ? 10 : 0,
                    }}
                  >
                    <div style={{ fontSize: 16, fontWeight: 700, color: "var(--cream)" }}>{row.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 300, color: "var(--body-light-3)", filter: "blur(3px)" }}>{row.value}</div>
                  </div>
                ))}
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "var(--body-light-3)" }}>Sent on request, tailored to the engagement.</div>
            </div>
          </section>
        </>
      ) : null}
    </>
  );
}
