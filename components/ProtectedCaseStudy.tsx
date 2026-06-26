"use client";

import { useEffect, useState } from "react";
import PasswordGate from "./PasswordGate";

export default function ProtectedCaseStudy({
  children,
}: {
  children: React.ReactNode;
}) {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const access =
      localStorage.getItem("portfolio-access");

    if (access === "granted") {
      setHasAccess(true);
    }
  }, []);

  if (!hasAccess) {
    return (
      <PasswordGate
        redirect={window.location.pathname}
      />
    );
  }

  return <>{children}</>;
}