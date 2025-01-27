"use client";

import { Suspense } from "react";
import SearchParamsComponent from "@/components/SearchParamsComponent";

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
      <Suspense fallback={<div>Loading search params...</div>}>
        <SearchParamsComponent />
      </Suspense>
    </div>
  );
}