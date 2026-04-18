"use client";

import { useEffect } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-custom flex min-h-[60vh] items-center justify-center py-16">
      <div className="section-shell max-w-2xl px-8 py-14 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Something went wrong
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-200">
          Please try again. If the issue continues, you can go back home or report it on WhatsApp.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primaryDark"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-primary hover:text-primary"
          >
            Go to home
          </Link>
          <a
            href={getWhatsAppUrl("Assalam o Alaikum, I ran into a website error and need help.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            aria-label="Report error via WhatsApp"
          >
            Report on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
