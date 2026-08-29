import { Suspense } from "react";
import GovernanceContent from "@/components/GovernanceContent";

export const metadata = {
  title: "POPIA & Governance | Atang Tracing Services",
  description:
    "How Atang handles sensitive personal information, and how to verify that a call or request really came from us.",
};

export default function GovernancePage() {
  // useSearchParams (to support the header's "Verify a call" deep link,
  // /governance?route=member) needs a Suspense boundary during the static
  // export build.
  return (
    <Suspense fallback={null}>
      <GovernanceContent />
    </Suspense>
  );
}
