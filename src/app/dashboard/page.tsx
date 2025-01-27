import Sidebar from "@/components/sidebar/menu";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Dashboard Page</h1>
        <p>This is the dashboard page.</p>
      </div>
    </div>
  );
}