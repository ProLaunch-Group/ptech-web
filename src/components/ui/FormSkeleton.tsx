export default function FormSkeleton() {
  return (
    <div className="absolute inset-0 z-10 bg-deepNavy p-6 flex flex-col gap-5 animate-pulse">
      {/* Title Skeleton */}
      <div className="h-6 bg-slate-200 rounded-md w-3/4"></div>

      {/* Subtitle / Description Skeleton */}
      <div className="h-4 bg-slate-100 rounded-md w-1/2 -mt-2"></div>

      {/* Input Field Skeleton 1 */}
      <div className="space-y-2 mt-4">
        <div className="h-3.5 bg-slate-200 rounded w-1/3"></div>
        <div className="h-11 bg-slate-100 rounded-xl w-full border border-slate-200/60"></div>
      </div>

      {/* Input Field Skeleton 2 */}
      <div className="space-y-2">
        <div className="h-3.5 bg-slate-200 rounded w-2/5"></div>
        <div className="h-11 bg-slate-100 rounded-xl w-full border border-slate-200/60"></div>
      </div>

      {/* Textarea / Choice Skeleton */}
      <div className="space-y-2">
        <div className="h-3.5 bg-slate-200 rounded w-1/4"></div>
        <div className="h-24 bg-slate-100 rounded-xl w-full border border-slate-200/60"></div>
      </div>

      {/* Button Skeleton */}
      <div className="h-11 bg-[#1e3a6e]/20 rounded-full w-full mt-auto"></div>
    </div>
  );
}
