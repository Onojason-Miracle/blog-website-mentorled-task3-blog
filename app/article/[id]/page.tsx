// app/article/[id]/page.tsx

"use client";
import Footer from "@/components/footer";

import { useSearchParams } from "next/navigation";

export default function ArticleDetailPage() {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const image = searchParams.get("image");
  const author = searchParams.get("author");
  const date = searchParams.get("date");
  const category = searchParams.get("category");
  const desc = searchParams.get("snippet");
  const url = searchParams.get("url");

  return (
    <>
      <main className="max-w-3xl mx-auto px-4 py-10 main">
        <h1 className="text-3xl font-bold mb-4 text-white-700">{title}</h1>
        <div className="flex items-center justify-start gap-2">
          <strong className="text-white-900 text-sm mb-2">By: </strong>{" "}
          <p className="text-purple-500 text-sm mb-2">{category}</p>
        </div>
        {image && (
          <img
            src={image}
            alt={title || "Article"}
            className="w-full h-auto rounded-md mb-6"
          />
        )}

        <p className="text-white-800 leading-relaxed mb-4">{desc}</p>

        {/* Link to original article source */}
        <a
          href={url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
        >
          View original source →
        </a>
      </main>

      <Footer />
    </>
  );
}
{
  /* https://cryptopanic.com/api/developer/v2/posts/?auth_token=3dcb385e90065669a89d78aad60b8fd43f9b4448&pageSize=${pageSize}&page=${page}&from=${fromDate}&to=${toDate}` */
}
