export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full loading" />
        <p className="text-gray-600 font-medium">Loading...</p>
      </div>
    </div>
  );
}
