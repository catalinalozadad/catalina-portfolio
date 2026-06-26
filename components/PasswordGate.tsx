"use client";

import { useState } from "react";

export default function PasswordGate({
  redirect,
}: {
  redirect: string;
}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleUnlock = () => {
    if (
      value === process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD
    ) {
      localStorage.setItem("portfolio-access", "granted");
localStorage.setItem(
  "portfolio-access",
  "granted"
);

window.location.reload();
    } else {
      setError(true);
    }
  };

  return (
    <section className="mt-32">
      <div className="max-w-[700px] mx-auto rounded-[40px] border border-[#E8E3DF] p-8 lg:p-14">

        <p className="text-xs uppercase tracking-[0.25em] text-[#CBB7F7] mb-5">
          Portfolio Access
        </p>

        <h2 className="text-[36px] md:text-[56px] leading-[0.95] tracking-[-0.05em] mb-6">
          Read the full case study.
        </h2>

        <p className="text-[#667085] text-lg leading-[1.8] mb-10">
          This project contains proprietary work and is shared selectively with
          recruiters and hiring teams.
          <br />
          <br />
          Enter the access password to continue.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="password"
            placeholder="Enter password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUnlock();
              }
            }}
            className="
              flex-1
              rounded-full
              border
              border-[#E8E3DF]
              px-6
              py-4
              outline-none
              focus:border-[#CBB7F7]
            "
          />

          <button
            onClick={handleUnlock}
            className="
              rounded-full
              bg-[#1A1717]
              text-white
              px-8
              py-4
              hover:bg-[#CBB7F7]
              hover:text-[#1A1717]
              transition-all
            "
          >
            Unlock →
          </button>
        </div>

        {error && (
          <p  className="mt-4 text-[#CBB7F7]">
            Incorrect password.
          </p>
        )}

        <p className="mt-6 text-sm text-[#98A2B3]">
          Access provided by the administrator.
        </p>
      </div>
    </section>
  );
}