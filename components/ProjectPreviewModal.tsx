"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

type Project = {
  title: string;
  subtitle: string;
  slug?: string;
  description?: string;
  category?: string;
  previewImages?: string[];
  comingSoon?: boolean;
};

export default function ProjectPreviewModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  const imageCount =
  project.previewImages?.length || 0;

const gridClass =
  imageCount === 2
    ? "lg:grid-cols-2"
    : imageCount === 4
    ? "lg:grid-cols-2"
    : "lg:grid-cols-3";

const imageRatio =
  imageCount === 2
    ? "aspect-[16/9]"
    : imageCount === 4
    ? "aspect-[2.3/1]"
    : "aspect-[16/10]";
  
    const router = useRouter();
const [showPassword, setShowPassword] =
  useState(false);

const [password, setPassword] =
  useState("");

const [error, setError] =
  useState(false);

  const isPublic =
  project.slug === "customer-journeys";

  const isComingSoon =
  project.comingSoon;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        bg-black/85
        overflow-y-auto
      "
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="
          fixed
          top-4
          left-4
          z-[110]
          flex
          items-center
          justify-center
          w-14
          h-14
          rounded-full
          bg-[#CBB7F7]
          text-[#1A1717]
          shadow-lg
          hover:bg-[#BFA8F5]
          hover:scale-105
          transition-all
        "
      >
        ✕
      </button>

      <div className="px-4 lg:px-6 py-8 lg:py-10">

        {/* Gallery */} 

        {isComingSoon ? (
  <div
    className="
      h-[420px]
      rounded-[40px]
      border
      border-white/10
      bg-white/[0.03]
      flex
      flex-col
      items-center
      justify-center
      text-center
      px-8
    "
  >
    <p
      className="
        text-xs
        uppercase
        tracking-[0.25em]
        text-[#CBB7F7]
        mb-6
      "
    >
      In Progress
    </p>

    <h3
      className="
        text-[42px]
        md:text-[60px]
        leading-[0.95]
        tracking-[-0.05em]
        text-white
        mb-6
      "
    >
      Case study
      <span
        className="italic"
        style={{
          fontFamily:
            "'Playfair Display', serif",
        }}
      >
        {" "}coming soon.
      </span>
    </h3>

    <p
      className="
        text-white/60
        max-w-[48ch]
        text-lg
        leading-[1.8]
      "
    >
      This project is currently being documented.
      A full case study will be available soon.
    </p>
  </div>
) : (

        <div
  className={`
    grid
    grid-cols-1
    md:grid-cols-2
    ${gridClass}
    gap-4
    ${imageCount === 4 ? "max-w-[1400px]" : "max-w-[1800px]"}
    mx-auto
  `}
>
  {project.previewImages?.map((image) => (
    <img
      key={image}
      src={image}
      alt=""
      className={`
        w-full
        rounded-[24px]
        object-cover
        ${imageRatio}
      `}
    />
  ))}
</div>
)}


        {/* Text Block */}
      <div
  className="
    max-w-[1600px]
    mx-auto
    pt-10
    text-white
    grid
    lg:grid-cols-3
    gap-10
    items-start
  "
>
  {/* Left */}
  <div>
    <h2
      className="
        text-[34px]
        lg:text-[46px]
        leading-[1]
        tracking-[-0.04em]
      "
    >
      {project.title}
    </h2>

    <p
      className="
        mt-3
        text-white/60
        text-base
      "
    >
      {project.category}
    </p>
  </div>

  {/* Right */}
 <div
  className="
    lg:col-span-2
    flex
    flex-col
    lg:flex-row
    lg:items-end
    lg:justify-between
    gap-8
  "
>
  <p
    className="
      text-white/70
      text-[17px]
      leading-[1.8]
      max-w-[60ch]
    "
  >
    {project.description || project.subtitle}
  </p>

{isPublic ? (
  <Link
    href="/customer-journeys"
    className="
      inline-flex
      items-center
      justify-center
      px-8
      py-3
      rounded-full
      border
      border-[#CBB7F7]
      text-[#CBB7F7]
      hover:bg-[#CBB7F7]
      hover:text-[#1A1717]
      transition-all
      duration-300
      whitespace-nowrap
      flex-shrink-0
    "
  >
    Read Case Study
  </Link>
) : (
  <button
    onClick={() => setShowPassword(true)}
    className="
      inline-flex
      items-center
      justify-center
      gap-2
      px-8
      py-3
      rounded-full
      border
      border-[#CBB7F7]
      text-[#CBB7F7]
      hover:bg-[#CBB7F7]
      hover:text-[#1A1717]
      transition-all
      duration-300
      whitespace-nowrap
      flex-shrink-0
    "
  >
    <Lock size={14} />
    Unlock Full Case Study
  </button>
)}
</div>
</div>
      </div>
      {showPassword && (
  <div
    className="
      fixed
      inset-0
      z-[200]
      bg-black/60
      flex
      items-center
      justify-center
      p-6
    "
  >
    <div
      className="
        w-full
        max-w-[520px]
        rounded-[32px]
        bg-[#1A1717]
        border
        border-white/10
        p-10
        text-white
      "
    >
     <div className="flex items-start justify-between mb-8">
  <p
    className="
      text-sm
      uppercase
      tracking-[0.25em]
      text-[#CBB7F7]
    "
  >
    Portfolio Access
  </p>

 <button
  onClick={() => setShowPassword(false)}
  className="
    flex
    items-center
    justify-center
    w-10
    h-10
    rounded-full
    bg-white
    text-[#1A1717]
    transition-all
    duration-300
    hover:bg-[#CBB7F7]
    hover:scale-105
    flex-shrink-0
  "
>
  ✕
</button>
</div>

      <h3 className="text-[36px] leading-[1] mb-4">
        Read the full case study.
      </h3>

      <p className="text-white/60 mb-8">
         This project contains proprietary work. Enter the password to continue.
      </p>

      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError(false);
        }}
        placeholder="Enter password"
        className="
          w-full
          rounded-full
          border
          border-white/10
          bg-transparent
          px-6
          py-4
          outline-none
          mb-6
        "
      />

      <button
        onClick={() => {
            console.log("Entered:", password);
console.log(
  "Env:",
  process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD
);
         if (
  password.trim() ===
  process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD?.trim()
){
            localStorage.setItem(
              "portfolio-access",
              "granted"
            );

            router.push(
              `/projects/${project.slug}/full`
            );
          } else {
            setError(true);
          }
        }}
        className="
          w-full
          rounded-full
          bg-[#CBB7F7]
          text-[#1A1717]
          py-4
          hover:opacity-90
          transition-all
        "
      >
        Unlock
      </button>

      {error && (
        <p className="mt-4 text-[#CBB7F7]">
          Incorrect password.
        </p>
      )}
    </div>
  </div>
)}
    </div>
  );
}