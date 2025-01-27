import Sidebar from "@/components/sidebar/menu";

export default function TaskboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Taskboard Page</h1>
        <p>This is the taskboard page.</p>
      </div>
    </div>
  );
}