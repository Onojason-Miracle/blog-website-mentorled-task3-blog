// components/SearchBar.tsx
import { Dispatch, SetStateAction } from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export default function Search({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="w-full max-w-md mx-auto relative">
      {/* Search input */}
      <input
        type="text"
        placeholder="Search articles by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
      />

      {/* Clear button */}
      {searchTerm && (
        <button
          onClick={() => setSearchTerm("")}
          className="absolute right-0 top-0 bottom-0  text-white-500 bg-purple-600 px-4 py-2 rounded transition-all duration-300 cursor-pointer"
        >
          Clear
        </button>
      )}
    </div>
  );
}


// af0a9b01d0d2ddadbd6a4502db1dc143

// apikey = 'af0a9b01d0d2ddadbd6a4502db1dc143';
// url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=af0a9b01d0d2ddadbd6a4502db1dc143

// https://newsapi.org/v2/everything?q=bitcoin&pageSize=${pageSize}&page=${page}&from=${fromDate}&to=${toDate}&apiKey=30afa424321c4f94bcb6262d8f185222

