"use client";

import { useState } from "react";
import Link from "next/link";
import { PhotoHero } from "@/components/Hero";
import SelectableCard from "@/components/SelectableCard";
import { CircleMark, SquareMark, DiamondMark } from "@/components/icons";
import { directors } from "@/lib/content";

const PORTFOLIO_MAILTO =
  "mailto:info@atangts.co.za?subject=Portfolio%20enquiry&body=Organisation%3A%0D%0ARole%3A%0D%0AApproximate%20portfolio%20size%3A%0D%0AWhat%20information%20you%20currently%20hold%3A%0D%0ATracing%2C%20verification%20or%20both%3A%0D%0AAdditional%20context%3A%0D%0A";

export default function ContactPage() {
  const [route, setRoute] = useState("portfolio");

  return (
    <>
      <PhotoHero
        image="/images/true-skyline.jpg"
        alt="The Johannesburg skyline"
        objectPosition="50% 82%"
        minHeight={300}
        overlay="linear-gradient(180deg, rgba(14,74,68,0.80), rgba(14,74,68,0.96))"
        eyebrow="CONTACT"
        title="Let&rsquo;s build bridges together."
        subtitle="Enquiries are reviewed by a director. We aim to respond within one working day."
      />

      <section className="section section--cream" style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="stack" style={{ "--gap": "22px" }}>
          <div className="eyebrow eyebrow--light" data-reveal="1">WHAT ARE YOU CONTACTING US ABOUT?</div>
          <div className="grid-autofit" style={{ "--min": "250px", "--gap": "16px" }}>
            <SelectableCard
              selected={route === "portfolio"}
              onClick={() => setRoute("portfolio")}
              icon={<CircleMark size={24} />}
              title="Discuss a portfolio"
              description="For funds, administrators and trustees."
            />
            <SelectableCard
              selected={route === "verify"}
              onClick={() => setRoute("verify")}
              icon={<SquareMark size={24} />}
              title="Verify a call"
              description="For members and beneficiaries who heard from us."
            />
            <SelectableCard
              selected={route === "general"}
              onClick={() => setRoute("general")}
              icon={<DiamondMark size={24} />}
              title="General enquiry"
              description="Suppliers, careers and everything else."
            />
          </div>

          {route === "portfolio" ? (
            <div
              className="grid-autofit"
              style={{ "--min": "280px", "--gap": "34px", alignItems: "start", background: "var(--sand)", borderRadius: "var(--radius-md)", padding: "34px 32px" }}
            >
              <div className="stack" style={{ "--gap": "14px" }}>
                <div className="small-label" style={{ color: "var(--terracotta)", letterSpacing: "0.2em" }}>EMAIL A DIRECTOR</div>
                <a
                  href="mailto:info@atangts.co.za"
                  style={{ fontSize: "clamp(21px, 2.4vw, 30px)", fontWeight: 900, color: "var(--teal)", letterSpacing: "-0.01em" }}
                >
                  info@atangts.co.za
                </a>
                <p style={{ margin: 0, fontSize: 17, fontWeight: 300, lineHeight: 1.55, color: "var(--body-dark-2)", maxWidth: 520 }}>
                  Tell us the portfolio size and what you already know. We come back with a scoped approach — no
                  obligation.
                </p>
                <a href={PORTFOLIO_MAILTO} className="btn btn--teal" style={{ alignSelf: "flex-start" }}>
                  Start a portfolio enquiry
                </a>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--muted-grey)" }}>
                  Opens an email with the six things we will ask for anyway.
                </div>
              </div>
              <div className="stack" style={{ "--gap": "14px" }}>
                <div className="small-label" style={{ color: "var(--muted-grey)", letterSpacing: "0.2em" }}>WHAT HAPPENS NEXT</div>
                <div className="stack" style={{ "--gap": "12px" }}>
                  <div className="row" style={{ "--gap": "12px", alignItems: "baseline" }}>
                    <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.14em", color: "var(--terracotta)", flex: "none" }}>01</div>
                    <div style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-1)" }}>
                      A director reads it — we aim to reply within one working day.
                    </div>
                  </div>
                  <div className="row" style={{ "--gap": "12px", alignItems: "baseline" }}>
                    <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.14em", color: "var(--terracotta)", flex: "none" }}>02</div>
                    <div style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-1)" }}>
                      A short call to understand record quality and reporting needs.
                    </div>
                  </div>
                  <div className="row" style={{ "--gap": "12px", alignItems: "baseline" }}>
                    <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: "0.14em", color: "var(--terracotta)", flex: "none" }}>03</div>
                    <div style={{ fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-1)" }}>
                      A scoped approach in writing, with the data handling summary for your file.
                    </div>
                  </div>
                </div>
                <Link href="/governance" className="btn--text" style={{ alignSelf: "flex-start" }}>
                  See our governance practices →
                </Link>
              </div>
            </div>
          ) : null}

          {route === "verify" ? (
            <div
              className="grid-autofit"
              style={{ "--min": "280px", "--gap": "34px", alignItems: "start", background: "var(--sand)", borderRadius: "var(--radius-md)", padding: "34px 32px" }}
            >
              <div className="stack" style={{ "--gap": "14px" }}>
                <div className="small-label" style={{ color: "var(--terracotta)", letterSpacing: "0.2em" }}>
                  CALL US BACK ON A PUBLISHED NUMBER
                </div>
                <div style={{ fontSize: "clamp(21px, 2.4vw, 30px)", fontWeight: 900, color: "var(--teal)", lineHeight: 1.25 }}>
                  <a href="tel:+27718230454" style={{ color: "var(--teal)" }}>071 823 0454</a>
                </div>
                <p style={{ margin: 0, fontSize: 17, fontWeight: 300, lineHeight: 1.55, color: "var(--body-dark-2)", maxWidth: 520 }}>
                  Use this number, or the one on the Governance page — not a number given to you in a message. We
                  will confirm whether the call came from us and which fund instructed us.
                </p>
                <a
                  href="mailto:info@atangts.co.za?subject=Verify%20a%20call%20from%20Atang"
                  className="btn btn--teal"
                  style={{ alignSelf: "flex-start" }}
                >
                  Email us to check
                </a>
              </div>
              <div className="stack" style={{ "--gap": "14px" }}>
                <div className="small-label" style={{ color: "var(--muted-grey)", letterSpacing: "0.2em" }}>BEFORE YOU SHARE ANYTHING</div>
                <div style={{ background: "var(--cream)", borderLeft: "5px solid var(--signal-red)", borderRadius: "var(--radius-sm)", padding: "18px 20px" }}>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "var(--teal)" }}>We never ask for a payment</div>
                  <p style={{ margin: "6px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-2)" }}>
                    No fee, deposit or release charge for a benefit that belongs to you.
                  </p>
                </div>
                <div style={{ background: "var(--cream)", borderLeft: "5px solid var(--signal-red)", borderRadius: "var(--radius-sm)", padding: "18px 20px" }}>
                  <div style={{ fontSize: 17, fontWeight: 800, color: "var(--teal)" }}>We never ask for a PIN or OTP</div>
                  <p style={{ margin: "6px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-2)" }}>
                    Not your card PIN, banking password or a one-time code.
                  </p>
                </div>
                <Link href="/governance?route=member" className="btn--text" style={{ alignSelf: "flex-start" }}>
                  Run the call checklist →
                </Link>
              </div>
            </div>
          ) : null}

          {route === "general" ? (
            <div
              className="grid-autofit"
              style={{ "--min": "280px", "--gap": "34px", alignItems: "start", background: "var(--sand)", borderRadius: "var(--radius-md)", padding: "34px 32px" }}
            >
              <div className="stack" style={{ "--gap": "14px" }}>
                <div className="small-label" style={{ color: "var(--terracotta)", letterSpacing: "0.2em" }}>EMAIL US</div>
                <a
                  href="mailto:info@atangts.co.za"
                  style={{ fontSize: "clamp(21px, 2.4vw, 30px)", fontWeight: 900, color: "var(--teal)", letterSpacing: "-0.01em" }}
                >
                  info@atangts.co.za
                </a>
                <p style={{ margin: 0, fontSize: 17, fontWeight: 300, lineHeight: 1.55, color: "var(--body-dark-2)", maxWidth: 520 }}>
                  Suppliers, partnerships, careers and press. The director will route it personally.
                </p>
              </div>
              <div className="stack" style={{ "--gap": "14px" }}>
                <div className="small-label" style={{ color: "var(--muted-grey)", letterSpacing: "0.2em" }}>
                  WHATSAPP — FIRST CONTACT ONLY
                </div>
                <a
                  href="https://wa.me/27718230454"
                  className="btn"
                  style={{ alignSelf: "flex-start", border: "1px solid var(--teal)", color: "var(--teal)", background: "none", fontWeight: 800 }}
                >
                  Message 071 823 0454
                </a>
                <p style={{ margin: 0, fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-2)", maxWidth: 480 }}>
                  Please do not send member records, ID numbers or portfolio data over WhatsApp. Case data moves
                  through a controlled channel agreed with the fund.
                </p>
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="section section--sand stack" style={{ "--gap": "26px" }}>
        <div className="stack" style={{ "--gap": "10px" }} data-reveal="1">
          <div className="eyebrow eyebrow--light">SPEAK TO A DIRECTOR</div>
          <h2 className="h2" style={{ color: "var(--teal)", fontSize: "clamp(26px, 3vw, 38px)" }}>One person. Always answers.</h2>
        </div>
        <div className="grid-autofit" style={{ "--min": "320px", "--gap": "24px" }}>
          {directors.map((d) => (
            <div
              key={d.slug}
              className="card card--rule grid-autofit"
              style={{ "--rule": "var(--terracotta)", "--min": "140px", "--gap": "24px", alignItems: "start", padding: "30px 28px" }}
              data-reveal="1"
            >
              <div className="photo-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.image} alt={d.name} style={{ objectPosition: "50% 20%" }} />
              </div>
              <div className="stack" style={{ "--gap": "10px" }}>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "var(--teal)", lineHeight: 1.15 }}>{d.name}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.14em", color: "var(--terracotta)", marginTop: 6 }}>
                    {d.contactRole}
                  </div>
                </div>
                <p className="body-text body-text--sm text-on-light-muted" style={{ margin: 0 }}>{d.contactBio}</p>
                <div className="row" style={{ "--gap": "8px", paddingTop: 2 }}>
                  <a href={`tel:${d.tel}`} className="pill" style={{ whiteSpace: "nowrap" }}>Call {d.telDisplay}</a>
                  <a href={d.whatsapp} className="pill" style={{ whiteSpace: "nowrap" }}>WhatsApp</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--cream grid-autofit" style={{ "--min": "260px", "--gap": "28px", paddingTop: 48, paddingBottom: 56 }}>
        <div>
          <div className="eyebrow eyebrow--light">REGISTERED OFFICE</div>
          <div style={{ fontSize: 18, fontWeight: 300, color: "var(--body-dark-1)", lineHeight: 1.6, paddingTop: 8 }}>
            No. 23 Section U Ext, Mamelodi West, 0101
            <br />
            Pretoria, South Africa
          </div>
        </div>
        <div>
          <div className="eyebrow eyebrow--light">ENTITY</div>
          <div style={{ fontSize: 18, fontWeight: 300, color: "var(--body-dark-1)", lineHeight: 1.6, paddingTop: 8 }}>
            Atang Tracing Services (Pty) Ltd
            <br />
            Registered in South Africa
          </div>
        </div>
        <div>
          <div className="eyebrow eyebrow--light">HOURS</div>
          <div style={{ fontSize: 18, fontWeight: 300, color: "var(--body-dark-1)", lineHeight: 1.6, paddingTop: 8 }}>
            Monday to Friday, 08:00–17:00
            <br />
            Enquiries answered within one working day
          </div>
        </div>
      </section>
    </>
  );
}
