// components/BlogCard.tsx

import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  author: string;
  date: string;
  snippet: string;
  image: string;
  url: string;
  content: string;
//    source: {
//     name: string;
//   };
}

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="newsGrid">
      <div className="newsImageDiv">
        {/* Responsive image */}
        <img src={post.image} alt={post.title} className="newsImage" />
      </div>

      <div className="middle">
        {/* Category */}
        <p className="text-sm text-purple-700 font-medium">{post.category}</p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 mt-1 ">
          {post.title}
        </h2>

        {/* Author and date */}
        <div className="flex  flex-col justify-center gap-2 mt-4 text-sm text-gray-500 ">
          <span>{post.date}</span>
        </div>

        {/* article details */}
        <Link
          href={{
            pathname: `/article/${post.id}`,
            query: {
              title: post.title,
              image: post.image,
              author: post.author,
              date: post.date,
            //   category: post.source.name,
              snippet: post.snippet || "No full content provided.",
              url: post.url,
              content: post.content,
            },
          }}
          className="mt-4 inline-block text-sm text-blue-600 hover:underline font-medium"
        >
          Read full article →
        </Link>
      </div>
    </div>
  );
}
