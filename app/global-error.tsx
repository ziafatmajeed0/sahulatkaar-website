"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-black/60">
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kuch Galat Ho Gaya!
            </h2>
            <p className="text-gray-600 mb-8">
              Website mein masla aa gaya hai. Please dobara try karain.
            </p>
            <button
              onClick={reset}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition"
            >
              Dobara Try Karain
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
