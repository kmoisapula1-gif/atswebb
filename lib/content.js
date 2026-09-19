// Central copy/data for the site. Production copy — reproduced verbatim
// from the approved design. Edit text here rather than hunting through
// page files; the JSX just maps over these.

export const commitments = [
  {
    title: "We verify before we report",
    body: "A finding reaches you supported by evidence, not as an assumption to be checked later.",
  },
  {
    title: "We treat personal information responsibly",
    body: "Sensitive data is handled under clear controls, and only for the purpose it was shared.",
  },
  {
    title: "We are clear about our role",
    body: "We say who instructed us and what authority we hold, every time we make contact.",
  },
  {
    title: "We contact people respectfully",
    body: "One considered approach, at a reasonable hour, and we accept a no.",
  },
  {
    title: "We stay accountable to the end",
    body: "The named director remains answerable for the engagement through to closure.",
  },
];

export const dontList = [
  {
    number: "01",
    title: "We do not charge individuals to trace benefits",
    body: "Our fees are agreed with the fund, administrator or insurer that instructs us. A member or beneficiary is never asked to pay Atang anything — no fee, no deposit, no release charge.",
  },
  {
    number: "02",
    title: "We never request PINs, passwords or OTPs",
    body: "We may need to confirm details you already hold, but we will never ask for a card PIN, an online banking password, or a one-time code. Anyone who does is not us.",
  },
  {
    number: "03",
    title: "We do not sell or trade personal information",
    body: "Information gathered on an engagement is used for that engagement and handed to the instructing organisation. It is not a product and it is not passed on.",
  },
  {
    number: "04",
    title: "We do not perform debt collection",
    body: "Our work moves money towards people, not away from them. We are not collectors and we do not act for creditors.",
  },
  {
    number: "05",
    title: "We do not make claims we cannot evidence",
    body: "No invented statistics, no borrowed credentials, no promises about outcomes we do not control. If we have not verified it, we do not report it.",
  },
];

export const directors = [
  {
    slug: "kamogelo",
    name: "Kamogelo Moisapula",
    role: "FOUNDER & DIRECTOR",
    bio: "Leads strategy, client partnerships and operational delivery — the first point of contact on new engagements and accountable for every case through to sign-off.",
    tags: ["Strategy", "Partnerships", "Delivery"],
    image: "/images/kamogelo.jpg",
    contactRole: "STRATEGY, DELIVERY & NEW ENGAGEMENTS",
    contactBio: "First point of contact for new portfolios, partnerships and active cases.",
    tel: "+27718230454",
    telDisplay: "071 823 0454",
    whatsapp: "https://wa.me/27718230454",
  },
];

export const processSteps = ["LOCATE", "VERIFY", "INVESTIGATE", "INSIGHT", "CONNECT"];

export const coreServices = [
  {
    name: "LOCATE",
    rule: "var(--terracotta)",
    body: "Find the people behind incomplete, outdated or inactive records — members, beneficiaries, dependants and former employees.",
    receive: "A verified population of traceable individuals, ready for engagement.",
    usedFor: "Dormant member records, historic portfolios, lost contact details.",
  },
  {
    name: "VERIFY",
    rule: "var(--signal-green)",
    body: "Confirm identity, life status, contact and banking details, and supporting documents before anything is reported.",
    receive: "Verified information that supports audit-ready decisions.",
    usedFor: "Pre-payment confirmation, deceased member cases, data integrity checks.",
  },
  {
    name: "INVESTIGATE",
    rule: "var(--teal)",
    body: "Reach hard-to-locate individuals through on-the-ground verification and community engagement, where desktop work stops.",
    receive: "Progress on cases that were previously stalled.",
    usedFor: "Rural and informal addresses, long-dormant cases, beneficiary pathways.",
  },
];

export const supportingServices = [
  {
    name: "INSIGHT",
    rule: "var(--terracotta-light)",
    body: "Clean, prepared portfolio data and clear reporting on status, activity and outcomes.",
    receive: "Visibility at both case and portfolio level.",
  },
  {
    name: "CONNECT",
    rule: "var(--teal-mid)",
    body: "Secure exchange and handling of case data, with controlled access throughout the engagement.",
    receive: "One connected, accounted-for record of the work.",
  },
];

export const engagementModels = [
  { title: "Portfolio engagement", body: "For a full member or beneficiary portfolio requiring tracing and verification support." },
  { title: "Case-based engagement", body: "For a specific group, priority list or individual cases that need focused attention." },
  { title: "Verification only", body: "Where location is already known but the information needs independent confirmation." },
  { title: "Ongoing partnership", body: "Standing capacity for administrators and funds with continuous caseload." },
];

export const gettingStarted = [
  { title: "The member or beneficiary list", body: "Whatever form it is in — a spreadsheet is fine." },
  { title: "The records you already hold", body: "Even partial contact, employment or identity details help." },
  { title: "Your objectives for the portfolio", body: "What a good outcome looks like for the fund." },
  { title: "Your reporting requirements", body: "What trustees, auditors or regulators need to see." },
];

export const servicesFaq = [
  {
    title: "What information do you need to start?",
    body: "A member or beneficiary list and whatever records you already hold. We work from incomplete data routinely — record quality shapes the approach, it does not prevent the engagement.",
  },
  {
    title: "Can Atang support large portfolios?",
    body: "Yes. Engagements are scoped to the volume in front of us, and larger portfolios are typically run in agreed phases so reporting stays useful throughout rather than arriving only at the end.",
  },
  {
    title: "Do you work nationally?",
    body: "Yes — desktop tracing nationwide, with field capability across urban and rural areas. Geography does not limit which portfolios we take on.",
  },
  {
    title: "How are engagements priced?",
    body: "Engagements are scoped according to portfolio size, record quality and service requirements following an initial review. You will have the commercial shape in writing before any tracing activity begins.",
  },
  {
    title: "What happens if a person cannot be found?",
    body: "You receive the documented record of what was attempted and what was established. An unresolved case is reported as unresolved, with its evidence — never closed off as a success.",
  },
  {
    title: "How is our data protected?",
    body: "Information is handled under clear operational controls, used only for the engagement it was shared for, and never sold or passed on. Our governance page sets this out in full.",
  },
];

export const sectorData = {
  funds: {
    label: "RETIREMENT FUNDS",
    description: "Pension, provident and umbrella funds carrying unclaimed benefits they cannot pay out.",
    entitiesLabel: "WITHIN RETIREMENT FUNDS",
    entities: [
      { title: "Pension funds", body: "Member and beneficiary tracing across retirement portfolios." },
      { title: "Provident funds", body: "Support for legacy records and unclaimed employee benefits." },
      { title: "Umbrella funds", body: "Scalable support across participating employers." },
    ],
    start: "Usually a member or beneficiary list the fund cannot act on — we scope it, trace it, and report back case by case.",
    services: ["LOCATE", "VERIFY", "INVESTIGATE"],
  },
  admin: {
    label: "ADMINISTRATORS & TRUSTEES",
    description: "The people accountable for member outcomes, reporting and the audit trail behind them.",
    entitiesLabel: "WITHIN ADMINISTRATORS & TRUSTEES",
    entities: [
      { title: "Fund administrators", body: "Structured case support, reporting and verification." },
      { title: "Boards of trustees", body: "Accountable processes with clear, documented reporting." },
      { title: "Principal officers", body: "A named director as the point of contact for the engagement." },
    ],
    start: "Usually a defined case list or a reporting gap — we take the cases, evidence them, and hand back a trail you can present.",
    services: ["VERIFY", "INSIGHT", "LOCATE"],
  },
};

export const additionalOrgs = [
  { title: "Insurers", body: "Claimant location and evidence-led validation." },
  { title: "Attorneys & executors", body: "Beneficiary location for estates and claims." },
  { title: "Employers", body: "Former employee and beneficiary tracing." },
  { title: "Public institutions", body: "Traceable, auditable engagement at scale." },
];

export const problemData = [
  {
    chip: "We have members we cannot reach",
    title: "Members we cannot reach",
    body: "We start from the records you already hold, work outward through desktop sources, and go to the ground where the desk stops. Cases that stall on a bad address are usually the ones that move first.",
    services: ["LOCATE", "INVESTIGATE"],
    who: "Pension, provident and umbrella funds with dormant member contact details.",
  },
  {
    chip: "We need beneficiary verification",
    title: "Beneficiary verification",
    body: "Identity, life status, contact and banking details are confirmed and evidenced before anything is reported back to you. Where a member is deceased, we trace the beneficiary pathway.",
    services: ["VERIFY"],
    who: "Administrators, insurers, attorneys and executors ahead of a payment decision.",
  },
  {
    chip: "We have dormant records",
    title: "Dormant and legacy records",
    body: "Historic portfolios are prepared, deduplicated and prioritised before tracing begins, so effort goes to the cases most likely to resolve. Incomplete records are the normal starting point.",
    services: ["LOCATE", "INSIGHT"],
    who: "Funds carrying long-standing unclaimed benefits and legacy employer data.",
  },
  {
    chip: "We require audit-ready reporting",
    title: "Audit-ready reporting",
    body: "Every action, source checked and outcome is documented, including the sources that returned nothing. A trustee or auditor can follow the trail after the fact without asking us to reconstruct it.",
    services: ["VERIFY", "INSIGHT"],
    who: "Boards of trustees, principal officers and compliance functions.",
  },
  {
    chip: "We need tracing support at scale",
    title: "Tracing support at scale",
    body: "Standing capacity for a continuous caseload, with an agreed reporting cadence and a named director accountable for delivery. Volumes are scoped before we start, not discovered halfway.",
    services: ["LOCATE", "VERIFY", "INVESTIGATE"],
    who: "Fund administrators and public institutions running ongoing caseloads.",
  },
];

export const whyEngageCards = [
  { title: "Director-led engagement", rule: "var(--terracotta)", body: "The director is personally accountable for your portfolio and answers the phone." },
  { title: "Verification before reporting", rule: "var(--signal-green)", body: "Nothing reaches your report until the information behind it has been confirmed." },
  { title: "POPIA-conscious process", rule: "var(--teal)", body: "Secure record handling, and a published way for members to check that we are genuine." },
  { title: "Documented decisions", rule: "var(--terracotta-light)", body: "Actions, sources checked and outcomes are recorded so an auditor can follow the trail." },
  { title: "Reach past the desk", rule: "var(--teal-mid)", body: "Field verification for rural and informal addresses, where desktop tracing stops." },
];

export const sampleReportRows = [
  { case: "0184", status: "Located · verified", next: "Ready for payment" },
  { case: "0192", status: "Address confirmed", next: "Field visit scheduled" },
  { case: "0207", status: "Deceased · estate traced", next: "Beneficiary pathway open" },
  { case: "0233", status: "No verified match", next: "Returned with sources" },
];

export const sampleReportDetails = [
  { title: "Case reference and grouping", body: "Your reference carried through, grouped by fund, employer or priority list.", accent: "var(--teal)" },
  { title: "Status and verification level", body: "What is confirmed, what is indicative, and what remains open.", accent: "var(--teal)" },
  { title: "Evidence and sources checked", body: "Including the sources that returned nothing, so work is not repeated.", accent: "var(--teal)" },
  { title: "Actions taken, with dates", body: "A dated trail an auditor or trustee can follow after the fact.", accent: "var(--teal)" },
  { title: "Next action and owner", body: "What happens next, and whether it sits with us or with you.", accent: "var(--teal)" },
  { title: "Portfolio summary", body: "Counts by status and verification level, for board and audit reporting.", accent: "var(--terracotta)" },
];

// Scam checklist: `expect` is the answer that is CONSISTENT with how Atang
// works. Selecting the other answer is a red flag.
export const checklistQuestions = [
  { id: 1, q: "Did the caller give their full name and say they are from Atang Tracing Services?", expect: "yes" },
  { id: 2, q: "Did they name the fund or organisation that instructed them?", expect: "yes" },
  { id: 3, q: "Did they accept that you can call back on a number published on this site?", expect: "yes" },
  { id: 4, q: "Did they ask you for a payment, deposit or release fee?", expect: "no" },
  { id: 5, q: "Did they ask for a PIN, banking password or one-time code?", expect: "no" },
];

export const governanceFundCards = [
  { title: "Data access controls", rule: "var(--teal)", body: "Case data is held on a controlled basis and reachable only by the people working the engagement." },
  { title: "Verification before reporting", rule: "var(--signal-green)", body: "Nothing is reported as confirmed until the information behind it has been checked and evidenced." },
  { title: "Documented case handling", rule: "var(--terracotta)", body: "Actions, sources checked and outcomes are dated and recorded, including the searches that found nothing." },
  { title: "Incident escalation", rule: "var(--signal-red)", body: "A suspected misuse of our name, or of data, escalates to a director the same day and is reported to you." },
  { title: "Record retention", rule: "var(--teal-mid)", body: "Case data is kept only for as long as the engagement and its reporting obligations require, then returned or destroyed." },
];

// Four of the site's documents now exist in public/documents/; the POPIA
// data subject request form is still pending. `available: false` renders
// a clearly-marked "PDF pending" state instead of a link to a file that
// doesn't exist.
export const formsPolicies = [
  {
    meta: "PAIA · SECTION 51",
    title: "PAIA Manual",
    body: "What records we hold, who may request them and how a request is decided.",
    href: "/documents/atang-paia-manual.pdf",
    available: true,
  },
  {
    meta: "PAIA · FORM 2",
    title: "PAIA request form",
    body: "To request access to a record held by Atang Tracing Services.",
    href: "/documents/atang-paia-request-form.pdf",
    available: true,
  },
  {
    meta: "PAIA · FORM 3",
    title: "Outcome of request",
    body: "How we notify you of our decision on a PAIA request, and any fees payable.",
    href: "/documents/atang-paia-outcome-form.pdf",
    available: true,
  },
  {
    meta: "POPIA",
    title: "Privacy notice",
    body: "What personal information we process during a tracing engagement, and why.",
    href: "/documents/atang-privacy-notice.pdf",
    available: true,
  },
  {
    meta: "POPIA · FORM 2",
    title: "Data subject request",
    body: "To access, correct or delete your personal information in our records.",
    href: "/documents/atang-popia-request-form.pdf",
    available: false,
  },
];

export const dataHandlingSummary = [
  { label: "Information officer", value: "Named director" },
  { label: "Sources used", value: "Listed per engagement" },
  { label: "Access controls", value: "Engagement team only" },
  { label: "Retention", value: "Agreed in writing" },
  { label: "Incident response", value: "Same-day escalation" },
];
