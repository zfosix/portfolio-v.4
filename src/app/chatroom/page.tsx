"use client";

import { Suspense } from "react";
import Sidebar from "@/components/sidebar/menu";

// Move the SearchParamsComponent to a separate file for reusability
import SearchParamsComponent from "@/components/SearchParamsComponent";

export default function ChatroomPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Chatroom Page</h1>
        <p>This is the chatroom page.</p>
        <Suspense fallback={<div>Loading search params...</div>}>
          <SearchParamsComponent />
        </Suspense>
      </div>
    </div>
  );
}