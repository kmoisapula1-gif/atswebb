// Self-hosted variable font (weights 300-900 in one file) — avoids a
// runtime dependency on Google's font CDN, so the site works even where
// fonts.googleapis.com is blocked or offline, and keeps everything local
// for static hosting.
import "@fontsource-variable/archivo/wght.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Atang Tracing Services | Tracing, verification & unclaimed benefits",
  description:
    "Atang Tracing Services works with retirement funds, administrators and insurers to trace, verify and reconnect members and beneficiaries linked to unclaimed employee benefits across South Africa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
