import React from "react";
export default function DashboardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-36 w-52 overflow-hidden rounded-lg border dark:border-neutral-700">
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#EC4899_50%,#3B82F6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-rotate-gradient"></div>
        <div className="absolute inset-[2px] rounded-lg bg-neutral-100 dark:bg-neutral-950"></div>
      </div>
      <div className="relative flex items-center justify-start gap-1 border-b bg-neutral-200 px-2 py-1 dark:border-neutral-700 dark:bg-neutral-900">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-2 w-2 rounded-full border border-neutral-400 dark:border-neutral-700"
          />
        ))}
      </div>
      <div className="relative flex justify-center gap-2 bg-neutral-100 p-3 pb-0 dark:bg-neutral-950">
        {children}
      </div>
    </div>
  );
}
