import Link from "next/link";
import { ArcMark } from "@/components/icons";

export const metadata = {
  title: "Atang Tracing Services | Bridging people, benefits and opportunity",
};

const CAPABILITIES = [
  { name: "LOCATE", body: "Find the people behind incomplete or inactive records." },
  { name: "VERIFY", body: "Confirm identity, status and entitlement before anything is reported." },
  { name: "INVESTIGATE", body: "Reach the cases that desktop work alone cannot resolve." },
  { name: "INSIGHT", body: "Clear visibility across the portfolio." },
  { name: "CONNECT", body: "Case data kept secure and accounted for throughout." },
];

const BEGIN_STEPS = [
  "Initial discussion",
  "Portfolio review",
  "Agreed tracing scope",
  "Secure execution",
  "Reporting and feedback",
];

const CREDIBILITY = [
  { title: "Verification-first methodology", body: "Findings are evidenced before they reach you." },
  { title: "Director-led oversight", body: "Named accountability on every engagement." },
  { title: "POPIA-conscious processes", body: "Sensitive information handled under clear controls." },
  { title: "Nationwide tracing capability", body: "Desktop and field reach, urban and rural." },
  { title: "Specialist focus on UEB", body: "Unclaimed employee benefits are the whole of our work." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero-media" style={{ minHeight: 520 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/true-family-sunset.jpg" alt="A family at sunset" style={{ objectPosition: "50% 42%" }} />
        <div
          className="hero-overlay"
          style={{
            background:
              "linear-gradient(180deg, rgba(14,74,68,0.62) 0%, rgba(14,74,68,0.80) 55%, rgba(14,74,68,0.96) 100%)",
          }}
        />
        <div className="hero-content" style={{ padding: "64px 5% 56px" }}>
          <div className="eyebrow eyebrow--dark" data-reveal="1" style={{ animationDelay: "120ms" }}>
            UNCLAIMED EMPLOYEE BENEFITS · SOUTH AFRICA
          </div>
          <h1
            className="h1"
            data-reveal="1"
            style={{ color: "var(--cream)", maxWidth: 900, fontSize: "clamp(38px, 5vw, 68px)" }}
          >
            Bridging the gap between people, benefits and opportunity.
          </h1>
          <p
            className="lead text-on-dark"
            data-reveal="1"
            style={{ maxWidth: 800, fontSize: "clamp(17px, 1.6vw, 22px)" }}
          >
            Atang works with retirement funds, administrators and insurers to trace, verify and reconnect members
            and beneficiaries linked to unclaimed employee benefits across South Africa.
          </p>
          <div className="row" style={{ paddingTop: 8 }}>
            <a href="mailto:info@atangts.co.za?subject=Portfolio%20enquiry" className="btn btn--peach">
              Discuss a portfolio
            </a>
            <Link href="/governance" className="btn btn--outline-light">
              How we protect your data
            </Link>
          </div>
        </div>
      </section>

      <section
        className="grid-autofit"
        style={{ "--min": "200px", "--gap": "20px 32px", background: "var(--teal-card)", padding: "26px 5%", boxSizing: "border-box" }}
      >
        <div className="stack" style={{ "--gap": "5px" }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: "var(--peach)", letterSpacing: "0.1em" }}>REGISTERED IN SOUTH AFRICA</div>
          <div style={{ fontSize: 15, fontWeight: 300, color: "var(--body-light-1)" }}>Atang Tracing Services (Pty) Ltd</div>
        </div>
        <div className="stack" style={{ "--gap": "5px" }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: "var(--peach)", letterSpacing: "0.1em" }}>POPIA-CONSCIOUS</div>
          <div style={{ fontSize: 15, fontWeight: 300, color: "var(--body-light-1)" }}>Sensitive data handled under clear controls</div>
        </div>
        <div className="stack" style={{ "--gap": "5px" }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: "var(--peach)", letterSpacing: "0.1em" }}>VERIFICATION-FIRST</div>
          <div style={{ fontSize: 15, fontWeight: 300, color: "var(--body-light-1)" }}>Evidence before anything is reported</div>
        </div>
        <div className="stack" style={{ "--gap": "5px" }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: "var(--peach)", letterSpacing: "0.1em" }}>BASED IN PRETORIA</div>
          <div style={{ fontSize: 15, fontWeight: 300, color: "var(--body-light-1)" }}>Nationwide desktop and field reach</div>
        </div>
      </section>

      <section className="section section--cream grid-autofit" style={{ "--min": "300px", "--gap": "48px", alignItems: "center" }}>
        <div className="stack" style={{ "--gap": "20px" }}>
          <div className="eyebrow eyebrow--light">MEET ATANG</div>
          <h2 className="h2" style={{ color: "var(--teal)" }}>A director answers the phone.</h2>
          <p className="body-text text-on-light-muted">
            Atang is a founder-led South African company. Engagements are run by the people who own the
            outcome — so decisions are made quickly, and you always know who is accountable for your portfolio.
          </p>
          <p className="body-text text-on-light-muted">
            We publish who we are, where we are and how to check that a request is genuine, because tracing work
            brings us into contact with people at a vulnerable moment. You should never have to take that on trust.
          </p>
          <div className="row" style={{ paddingTop: 4 }}>
            <Link href="/about" className="btn btn--outline-dark">Our story</Link>
            <Link href="/governance" className="btn--text">Verify an Atang request →</Link>
          </div>
        </div>
        <div className="stack" style={{ background: "var(--sand)", borderRadius: "var(--radius-md)", padding: 36, "--gap": "22px" }}>
          <ArcMark width={140} color="var(--teal)" />
          <div className="stack" style={{ "--gap": "16px" }}>
            <div>
              <div className="small-label" style={{ color: "var(--terracotta)" }}>REGISTERED NAME</div>
              <div style={{ fontSize: 17, fontWeight: 600, color: "var(--teal)", marginTop: 4 }}>Atang Tracing Services (Pty) Ltd</div>
            </div>
            <div>
              <div className="small-label" style={{ color: "var(--terracotta)" }}>ACCOUNTABILITY</div>
              <div style={{ fontSize: 17, fontWeight: 600, color: "var(--teal)", marginTop: 4 }}>A named director per engagement</div>
            </div>
            <div>
              <div className="small-label" style={{ color: "var(--terracotta)" }}>REGISTERED OFFICE</div>
              <div style={{ fontSize: 17, fontWeight: 600, color: "var(--teal)", marginTop: 4, lineHeight: 1.45 }}>
                Mamelodi West, 0101
                <br />
                Pretoria, South Africa
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--teal grid-autofit" style={{ "--min": "300px", "--gap": "48px", alignItems: "center" }}>
        <div className="stack" style={{ "--gap": "20px" }}>
          <div className="eyebrow eyebrow--dark">WHY ATANG</div>
          <h2 className="h2" style={{ color: "var(--cream)" }}>People move. Records rarely move with them.</h2>
          <p className="body-text text-on-dark">
            Many people become disconnected from benefits that were rightfully intended for them. Employment
            changes, outdated contact information and incomplete records can make members and beneficiaries
            difficult to locate.
          </p>
          <p className="body-text text-on-dark">
            Atang works with retirement funds, administrators and insurers to bridge that gap through tracing,
            verification and investigative support — and to document the work so trustees can stand behind the
            outcome.
          </p>
          <p className="body-text" style={{ color: "var(--cream)", fontWeight: 500 }}>
            Our role is simple: help reconnect people with what may otherwise remain out of reach.
          </p>
          <ArcMark width={180} color="var(--peach)" />
        </div>
        <div style={{ position: "relative", minHeight: 380, borderRadius: "var(--radius-md)", overflow: "hidden" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/true-father-daughter.jpg"
            alt="A father and daughter walking together"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 45%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(14,74,68,0.06), rgba(14,74,68,0.34))" }} />
        </div>
      </section>

      <section className="section section--sand stack" style={{ "--gap": "36px" }}>
        <div className="stack" style={{ "--gap": "14px" }}>
          <div className="eyebrow eyebrow--light">WHAT WE DO</div>
          <h2 className="h2" style={{ color: "var(--teal)" }}>Five capabilities, run as one service.</h2>
        </div>
        <div className="grid-autofit" style={{ "--min": "240px", "--gap": "20px" }}>
          {CAPABILITIES.map((c) => (
            <div className="card card--rule" key={c.name}>
              <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: "0.04em", color: "var(--teal)" }}>{c.name}</div>
              <p style={{ margin: "10px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-dark-2)" }}>{c.body}</p>
            </div>
          ))}
        </div>
        <Link href="/services" className="btn btn--outline-dark" style={{ alignSelf: "flex-start" }}>
          See the services in detail
        </Link>
      </section>

      <section className="section section--cream stack" style={{ "--gap": "32px" }}>
        <div className="stack" style={{ "--gap": "14px" }}>
          <div className="eyebrow eyebrow--light">HOW ENGAGEMENT BEGINS</div>
          <h2 className="h2" style={{ color: "var(--teal)" }}>What happens after you get in touch.</h2>
        </div>
        <div className="grid-autofit" style={{ "--min": "190px", "--gap": "20px" }}>
          {BEGIN_STEPS.map((step, i) => (
            <div
              key={step}
              className="stack"
              style={{
                "--gap": "10px",
                paddingTop: 20,
                backgroundImage: "linear-gradient(var(--teal), var(--teal)), linear-gradient(var(--terracotta), var(--terracotta))",
                backgroundRepeat: "no-repeat, no-repeat",
                backgroundPosition: "top left, top left",
                backgroundSize: "100% 3px, 0% 3px",
                transition: "background-size 420ms ease",
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 900, letterSpacing: "0.14em", color: "var(--terracotta)" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <div style={{ fontSize: 19, fontWeight: 800, color: "var(--teal)", lineHeight: 1.2 }}>{step}</div>
            </div>
          ))}
        </div>
        <p className="body-text text-on-light-muted" style={{ maxWidth: 860 }}>
          Every engagement begins with a discussion of portfolio requirements, verification standards and reporting
          expectations before any tracing activity commences.
        </p>
      </section>

      <section className="section section--teal stack" style={{ "--gap": "32px" }}>
        <div className="stack" style={{ "--gap": "14px" }}>
          <div className="eyebrow eyebrow--dark">WHY ORGANISATIONS ENGAGE ATANG</div>
          <h2 className="h2" style={{ color: "var(--cream)" }}>Credibility you can put in front of a board.</h2>
        </div>
        <div className="grid-autofit" style={{ "--min": "250px", "--gap": "20px" }}>
          {CREDIBILITY.map((c) => (
            <div className="card card--rule card--rule-dark" style={{ "--rule": "var(--peach)" }} key={c.title}>
              <div style={{ fontSize: 19, fontWeight: 800, color: "var(--cream)", lineHeight: 1.25 }}>{c.title}</div>
              <p style={{ margin: "10px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.5, color: "var(--body-light-2)" }}>{c.body}</p>
            </div>
          ))}
        </div>
        <div className="row" style={{ paddingTop: 8 }}>
          <a href="mailto:info@atangts.co.za?subject=Portfolio%20enquiry" className="btn btn--peach">
            Discuss a portfolio
          </a>
          <span style={{ fontSize: 16, fontWeight: 300, color: "var(--body-light-2)" }}>or call a director on 071 823 0454</span>
        </div>
      </section>
    </>
  );
}
