// types/blog.ts
export interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    views: number;
    category: string;
    readTime: string;
    author: string;
    authorRole: string;
  }
  
  export interface CategoryData {
    color: string;
    posts: BlogPost[];
  }
  
  // This is the improved interface with string indexing support
  export interface Categories {
    [key: string]: CategoryData;
  }
  
  export const categoryColors: Record<string, string> = {
    React: "bg-blue-500 text-white",
    TypeScript: "bg-indigo-500 text-white",
    Performance: "bg-green-500 text-white",
    "State Management": "bg-purple-500 text-white",
    Testing: "bg-rose-500 text-white",
    "Next.js": "bg-yellow-500 text-white",
  };