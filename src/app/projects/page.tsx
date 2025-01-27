import Sidebar from "@/components/sidebar/menu";

export default function ProjectsPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Projects Page</h1>
        <p>This is the projects page.</p>
      </div>
    </div>
  );
}