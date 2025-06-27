"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/blogcard";
import Search from "@/components/search";

interface ArticleType {
  title: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  author: string;
  content: string;
  url: string;
  source: { name: string };
}

export default function Article() {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = 8;

  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  const fromDate = twoDaysAgo.toISOString().split("T")[0];

  const toDate = today.toISOString().split("T")[0];

  // articles from API with pagination
  const fetchArticles = async () => {
    try {
      const res = await fetch(
        `  https://newsapi.org/v2/everything?q=bitcoin&pageSize=${pageSize}&page=${page}&from=${fromDate}&to=${toDate}&apiKey=30afa424321c4f94bcb6262d8f185222`
      );
      const data = await res.json();
      setArticles(data.articles);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };


 


  useEffect(() => {
    fetchArticles();
  }, [page]);

  const filteredPosts = Array.isArray(articles)
  ? articles.filter((post) =>
      post?.title?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  : [];

//    const filteredPosts = articles.filter((post) => {
//   return (
//     typeof post?.title === 'string' &&
//     post.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// });

//   const filteredPosts = articles.filter((post) =>
//     post.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

  return (
    <main className="px-6 py-10 max-w-7xl mx-auto">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Display message if search is empty */}
      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={index}
              post={{
                id: index,
                title: post.title,
                category: post.source.name,
                author: post.author || "Unknown",
                date: new Date(post.publishedAt).toLocaleDateString(),
                snippet: post.description || "No description available.",
                image:
                  post.urlToImage ||
                  "https://res.cloudinary.com/blackgirlmagic/image/upload/v1750965301/task2/Bitcoin_cryptocurrency_4K_futuristic_wallpaper_1_zhovg9.jpg",
                content: post.content || "No full content available.",
                url: post.url,
              }}
            />
          ))}
        </div>
      )}

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-700 font-medium">Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </main>
  );
}
