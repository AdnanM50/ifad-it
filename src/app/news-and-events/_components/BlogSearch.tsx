"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dateFormat from "dateformat";

interface BlogItem {
  slug: string;
  title: string;
  image?: {
    url: string;
    alternativeText?: string;
  };
  createdAt: any;
}

interface BlogSearchProps {
  allBlogs: BlogItem[];
}

export default function BlogSearch({ allBlogs }: BlogSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BlogItem[]>([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const filtered = allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  // Handle search button click (for when user clicks the button)
  const handleSearchClick = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    const filtered = allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filtered);
  };

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className="p-5 rounded-lg">
      <h3 className="font-semibold mb-4">Search Post</h3>
      
      {/* Search Input - Layout exactly as in your original */}
      <div className="flex mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter Keyword"
          className="w-full border px-3 py-2 text-sm outline-none"
        />
        
        {/* Orange Search Button - ALWAYS VISIBLE */}
      {!searchQuery && (
          <button
          onClick={handleSearchClick}
          className="bg-orange-500 text-white px-4 hover:bg-orange-600 transition"
        >
          Search
        </button>)
      }
        
        {/* Gray Clear Button - ONLY when there's search text */}
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="bg-gray-300 text-gray-700 px-4 hover:bg-gray-400 transition"
          >
            Clear
          </button>
        )}
      </div>

      {/* Rest of the code remains the same... */}
      {searchResults.length > 0 && (
        <div className="mb-6">
          <h4 className="font-medium mb-3 text-gray-700">
            Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
          </h4>
          <div className="space-y-4">
            {searchResults.map((item) => (
              <div
                key={item.slug}
                className="flex gap-4 items-start group"
              >
                <div className="w-16 h-12 bg-gray-200 rounded-md shrink-0">
                  {item.image?.url && (
                    <Image
                      src={item.image.url}
                      alt={item.image.alternativeText || item.title}
                      width={64}
                      height={48}
                      className="object-cover w-full h-full rounded-md"
                    />
                  )}
                </div>
                <div>
                  <Link 
                    href={`/news-and-events/${item.slug}`}
                    className="text-sm font-medium line-clamp-2 leading-snug group-hover:text-orange-500 transition"
                    onClick={clearSearch}
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recent Posts (only show when not searching) */}
      {searchResults.length === 0 && (
        <>
          <h3 className="font-semibold mb-4">Recent Post</h3>
          <div className="space-y-5">
            {allBlogs.slice(0, 5).map((item) => {
                console.log("🚀 ~ BlogSearch ~ item:", item)
                return <div
                key={item.slug}
                className="flex gap-4 items-start group"
              >
                <div className="w-20 h-16 bg-gray-200 rounded-md shrink-0">
                  {item.image?.url && (
                    <Image
                      src={item.image.url}
                      alt={item.image.alternativeText || item.title}
                      width={80}
                      height={64}
                      className="object-cover w-full h-full rounded-md transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div>
                  <Link 
                    href={`/news-and-events/${item.slug}`}
                    className="text-base font-medium line-clamp-2 leading-snug group-hover:text-orange-500 transition"
                  >
                    {item.title}
                  </Link>
                  <p className="text-xs text-orange-500 mt-1">
                  {dateFormat(item.createdAt, "mediumDate")}
                  </p>
                </div>
              </div>;
            })}
          </div>
        </>
      )}
    </div>
  );
}