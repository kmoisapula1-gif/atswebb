import Link from "next/link";
import { PhotoHero } from "@/components/Hero";
import { AnimatedBridge } from "@/components/icons";
import Accordion from "@/components/Accordion";
import { commitments, dontList, directors } from "@/lib/content";

export const metadata = {
  title: "About | Atang Tracing Services",
  description:
    "Atang is a founder-led South African tracing and verification partner for retirement funds, administrators and insurers.",
};

export default function AboutPage() {
  return (
    <>
      <PhotoHero
        image="/images/true-street.jpg"
        alt="A street in Pretoria"
        objectPosition="50% 58%"
        minHeight={360}
        eyebrow="ABOUT ATANG"
        title="A specialist tracing and verification partner."
        subtitle="We work behind the scenes for retirement funds, administrators and insurers — locating, verifying and reconnecting the people their records have lost."
      />

      <section className="section section--cream grid-autofit" style={{ "--min": "300px", "--gap": "52px", alignItems: "start" }}>
        <div className="stack" style={{ "--gap": "18px" }} data-reveal="1">
          <div className="eyebrow eyebrow--light">OUR STORY</div>
          <h2 className="h2" style={{ color: "var(--teal)" }}>
            We started Atang because the gap was obvious from the inside.
          </h2>
          <p className="body-text text-on-light-muted">
            Working around the administration of retirement benefits, we kept meeting the same problem from both
            directions: funds holding money they were obliged to pay, and people who had no idea it was owed to
            them. The records had simply drifted apart from the lives they described.
          </p>
          <p className="body-text text-on-light-muted">
            What was missing was not effort. It was a way of doing the work that could be evidenced — where every
            finding could be shown, every action documented, and every person treated properly on the way to a
            payout.
          </p>
          <p className="body-text text-on-light-muted">
            We founded Atang Tracing Services in 2025 to do exactly that, and to do it as a specialist rather than a
            sideline. Unclaimed employee benefits are not one of our services. They are the whole of our work.
          </p>
        </div>
        <div
          className="stack"
          data-reveal="1"
          style={{ background: "var(--sand)", borderRadius: "var(--radius-md)", padding: 36, "--gap": "22px" }}
        >
          <div className="small-label" style={{ color: "var(--terracotta)", letterSpacing: "0.2em" }}>AT A GLANCE</div>
          <div className="stack" style={{ "--gap": "18px" }}>
            <div>
              <div className="small-label" style={{ color: "var(--muted-grey)" }}>FOUNDED</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "var(--teal)", marginTop: 4 }}>2025 · Pretoria, South Africa</div>
            </div>
            <div>
              <div className="small-label" style={{ color: "var(--muted-grey)" }}>STRUCTURE</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "var(--teal)", marginTop: 4 }}>Founder-led</div>
            </div>
            <div>
              <div className="small-label" style={{ color: "var(--muted-grey)" }}>FOCUS</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "var(--teal)", marginTop: 4 }}>Unclaimed employee benefits</div>
            </div>
            <div>
              <div className="small-label" style={{ color: "var(--muted-grey)" }}>REACH</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "var(--teal)", marginTop: 4 }}>Nationwide, urban and rural</div>
            </div>
            <div>
              <div className="small-label" style={{ color: "var(--muted-grey)" }}>REGISTERED</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: "var(--teal)", marginTop: 4 }}>
                Atang Tracing Services (Pty) Ltd
                <br />
                South Africa
              </div>
            </div>
          </div>
          <p
            className="body-text body-text--sm text-on-light-muted"
            style={{ paddingTop: 6, borderTop: "1px solid var(--sand-hairline-1)" }}
          >
            Atang is founder-led and built on personal accountability. The director remains directly involved in
            every engagement, from first contact through to delivery.
          </p>
        </div>
      </section>

      <section className="section section--teal stack" style={{ "--gap": "40px", paddingTop: 76, paddingBottom: 76 }}>
        <div className="stack" style={{ "--gap": "14px", maxWidth: 820 }} data-reveal="1">
          <div className="eyebrow eyebrow--dark">THE MARK</div>
          <h2 className="h2" style={{ color: "var(--cream)", fontSize: "clamp(30px, 3.6vw, 48px)" }}>Why the bridge?</h2>
        </div>
        <div className="grid-autofit" style={{ "--min": "280px", "--gap": "48px", alignItems: "center" }} data-bridge="1">
          <AnimatedBridge />
          <div className="stack" style={{ "--gap": "18px" }}>
            <p className="body-text text-on-dark" style={{ fontSize: 19 }}>
              The Atang mark is two points that have become disconnected. One side is people. The other is the
              benefits and opportunity intended for them.
            </p>
            <p className="body-text text-on-dark" style={{ fontSize: 19 }}>
              The bridge between them is the work: reconnecting records, members and beneficiaries that have drifted
              apart over time.
            </p>
            <p className="body-text" style={{ fontSize: 19, fontWeight: 500, color: "var(--cream)" }}>
              It is not decoration. It is the whole business, drawn in one line.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--cream stack" style={{ "--gap": "36px", paddingTop: 76, paddingBottom: 76 }}>
        <div className="stack" style={{ "--gap": "14px", maxWidth: 820 }} data-reveal="1">
          <div className="eyebrow eyebrow--light">OUR COMMITMENTS</div>
          <h2 className="h2" style={{ color: "var(--teal)" }}>What we hold ourselves to.</h2>
          <p className="body-text text-on-light-muted">
            Not values. Commitments — the things a client or a member can hold us to on any engagement.
          </p>
        </div>
        <div className="grid-autofit" style={{ "--min": "260px", "--gap": "20px" }}>
          {commitments.map((c) => (
            <div className="card card--rule" key={c.title} data-reveal="1">
              <div style={{ fontSize: 19, fontWeight: 800, color: "var(--teal)", lineHeight: 1.3 }}>{c.title}</div>
              <p style={{ margin: "10px 0 0", fontSize: 16, fontWeight: 300, lineHeight: 1.55, color: "var(--body-dark-2)" }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--sand stack" style={{ "--gap": "32px", paddingTop: 76, paddingBottom: 76 }}>
        <div className="stack" style={{ "--gap": "14px", maxWidth: 820 }} data-reveal="1">
          <div className="eyebrow eyebrow--light">BOUNDARIES</div>
          <h2 className="h2" style={{ color: "var(--teal)" }}>What we don&rsquo;t do.</h2>
          <p className="body-text text-on-light-muted">
            Trust in this sector comes as much from boundaries as from capability. These are ours.
          </p>
        </div>
        <Accordion idPrefix="dont" items={dontList} />
      </section>

      <section className="section section--cream stack" style={{ "--gap": "36px", paddingTop: 76, paddingBottom: 76 }}>
        <div className="stack" style={{ "--gap": "14px", maxWidth: 820 }} data-reveal="1">
          <div className="eyebrow eyebrow--light">LEADERSHIP</div>
          <h2 className="h2" style={{ color: "var(--teal)" }}>The people accountable for the work.</h2>
        </div>
        <div className="grid-autofit" style={{ "--min": "320px", "--gap": "28px" }}>
          {directors.map((d) => (
            <div
              key={d.slug}
              className="card card--rule grid-autofit"
              style={{ "--rule": "var(--terracotta)", "--min": "150px", "--gap": "26px", alignItems: "start", padding: "32px 30px 30px" }}
              data-reveal="1"
            >
              <div className="photo-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={d.image} alt={d.name} style={{ objectPosition: "50% 20%" }} />
              </div>
              <div className="stack" style={{ "--gap": "12px" }}>
                <div>
                  <div style={{ fontSize: 23, fontWeight: 900, color: "var(--teal)", lineHeight: 1.15 }}>{d.name}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.14em", color: "var(--terracotta)", marginTop: 6 }}>
                    {d.role}
                  </div>
                </div>
                <p className="body-text body-text--sm text-on-light-muted" style={{ margin: 0 }}>{d.bio}</p>
                <div className="row" style={{ "--gap": "8px", paddingTop: 4 }}>
                  {d.tags.map((t) => (
                    <span className="pill" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className="section--teal row"
        style={{ padding: "64px 5%", boxSizing: "border-box", justifyContent: "space-between" }}
      >
        <div className="stack" style={{ "--gap": "12px", maxWidth: 640 }} data-reveal="1">
          <h2 className="h2" style={{ color: "var(--cream)", fontSize: "clamp(26px, 3vw, 38px)" }}>
            Looking for a specialist tracing and verification partner?
          </h2>
          <p className="body-text text-on-dark" style={{ fontSize: 18 }}>
            Tell us the portfolio size and what you already know. A director will come back to you.
          </p>
        </div>
        <div className="row">
          <a href="mailto:info@atangts.co.za?subject=Portfolio%20enquiry" className="btn btn--peach">
            Discuss a portfolio
          </a>
          <Link href="/services" className="btn btn--outline-light">
            See our services
          </Link>
        </div>
      </section>
    </>
  );
}
