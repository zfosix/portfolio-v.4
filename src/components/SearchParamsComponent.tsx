"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SearchParamsComponent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return <div>Search Query: {query || "No query provided"}</div>;
}

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>

      {/* Wrap the SearchParamsComponent in Suspense */}
      <Suspense fallback={<div>Loading search params...</div>}>
        <SearchParamsComponent />
      </Suspense>
    </div>
  );
}