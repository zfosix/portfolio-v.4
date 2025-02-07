import React from "react";

export default function MobileContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-36 w-max overflow-hidden rounded-lg border bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-950">
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#3B82F6_0%,#EC4899_50%,#3B82F6_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-rotate-gradient"></div>
        <div className="absolute inset-[2px] rounded-lg bg-neutral-950 dark:bg-neutral"></div>
      </div>
      <div className="absolute inset-0 rounded-lg border dark:border-neutral-700" />
      <div className="absolute inset-[3px] rounded-lg bg-neutral-100 dark:bg-neutral-950" />
      <div className="relative flex items-center justify-center gap-1 border-b bg-neutral-200 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="h-1 w-4 rounded-full bg-neutral-300 dark:bg-neutral-600" />
      </div>
      <div className="relative flex flex-col gap-1 p-2">{children}</div>
      <div className="absolute bottom-0 flex w-full items-center justify-around gap-1 border-t bg-neutral-200 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-900">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-2 w-2 rounded-full bg-neutral-300 dark:bg-neutral-700"
          />
        ))}
      </div>
    </div>
  );
}
