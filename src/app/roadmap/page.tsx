import Sidebar from "@/components/sidebar/menu";

export default function RoadmapPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Roadmap Page</h1>
        <p>This is the roadmap page.</p>
      </div>
    </div>
  );
}