import Sidebar from "@/components/sidebar/menu";

export default function BlogPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Blog Page</h1>
        <p>This is the blog page.</p>
      </div>
    </div>
  );
}