import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main
        className="
          relative
          min-h-[calc(100vh-220px)]
          flex
          items-center
          justify-center
          px-6
          py-24
        "
      >
        <div className="max-w-[900px] text-center relative">

          
          {/* 404 Background */}
          <div
            className="
              absolute
              inset-0
              flex
              items-center
              justify-center
              pointer-events-none
              -z-10
            "
          >
            <span
              className="
                text-[200px]
                md:text-[340px]
                font-medium
                text-[#CBB7F7]/10
                tracking-[-0.08em]
              "
            >
              404
            </span>
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-[#B470E7] mb-8">
            Page Not Found
          </p>

          <h1
  className="
    text-[38px]
    md:text-[64px]
    leading-[0.95]
    tracking-[-0.06em]
    text-[#1A1717]
    max-w-[320px]
    md:max-w-[900px]
    mx-auto
    mb-10
  "
>
            Looks like this page
            <br />
            hasn't been{" "}
            <span
              className="italic"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              designed
            </span>{" "}
            yet.
          </h1>

          <p className="text-[#667085] text-lg leading-[1.8] max-w-[800px] mx-auto mb-16">
            The page you're looking for may have moved, doesn't exist,
            or is still being crafted.
          </p>

          <div className="flex flex-wrap justify-center gap-12">

            <Link
              href="/"
              className="
                text-[#667085]
                hover:text-[#B470E7]
                transition-colors
              "
            >
              ← Back Home
            </Link>

            <Link
              href="/#selected-work"
              className="
                inline-flex
                items-center
                gap-2
                hover:text-[#B470E7]
                transition-colors
              "
            >
              Explore Projects →
            </Link>
          </div>
        </div>

        {/* Scroll to top button */}
        <a
          href="#top"
          className="
            fixed
            bottom-10
            right-10
            flex
            items-center
            justify-center
            w-16
            h-16
            rounded-full
            bg-[#CBB7F7]/40
            backdrop-blur-md
            shadow-[0_10px_30px_rgba(203,183,247,0.25)]
            hover:bg-[#CBB7F7]
            transition-all
            duration-300
          "
        >
          <span className="text-3xl">↑</span>
        </a>
      </main>

      <Footer />
    </>
  );
}