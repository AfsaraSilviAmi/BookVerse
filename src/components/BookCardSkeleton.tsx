export default function BookCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-2xl border bg-white shadow">

      {/* Image */}
      <div className="mx-auto mt-5 h-64 w-40 rounded-lg bg-slate-200" />

      <div className="space-y-3 p-5">

        {/* Genre */}
        <div className="h-5 w-20 rounded bg-slate-200" />

        {/* Title */}
        <div className="h-6 w-full rounded bg-slate-200" />

        {/* Author */}
        <div className="h-4 w-32 rounded bg-slate-200" />

        {/* Description */}
        <div className="space-y-2 pt-2">
          <div className="h-4 rounded bg-slate-200" />
          <div className="h-4 w-5/6 rounded bg-slate-200" />
        </div>

        {/* Price + Rating */}
        <div className="flex justify-between pt-4">
          <div className="h-5 w-16 rounded bg-slate-200" />
          <div className="h-5 w-12 rounded bg-slate-200" />
        </div>

        {/* Button */}
        <div className="mt-5 h-11 rounded-xl bg-slate-200" />

      </div>
    </div>
  );
}