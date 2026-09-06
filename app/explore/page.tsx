"use client";

import { useEffect, useMemo, useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import CategoryFilter from "@/components/CategoryFilter";
import SearchBar from "@/components/SearchBar";
import { articles, type ArticleCategory } from "@/lib/articles";

export default function Explore() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"All" | ArticleCategory>("All");
  useEffect(() => {
    const requestedCategory = new URLSearchParams(window.location.search).get("category");
    if (requestedCategory === "Science" || requestedCategory === "Technology") setCategory(requestedCategory);
  }, []);
  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return articles.filter((article) => {
      const searchableText = `${article.title} ${article.category} ${article.description}`.toLowerCase();
      return searchableText.includes(normalizedQuery) && (category === "All" || article.category === category);
    });
  }, [category, query]);

  return (
    <main className="explore-page shell">
      <section className="explore-header">
        <p className="eyebrow">The curiosity library</p>
        <h1>Explore <em>Curiosities</em></h1>
        <p>Small questions. Surprisingly interesting answers.</p>
      </section>
      <section className="explore-toolbar" aria-label="Article filters">
        <SearchBar value={query} onChange={setQuery} />
        <CategoryFilter value={category} onChange={setCategory} />
      </section>
      <p className="result-count">Showing {filteredArticles.length} {filteredArticles.length === 1 ? "curiosity" : "curiosities"}</p>
      <section className="article-grid" aria-live="polite">
        {filteredArticles.map((article) => <ArticleCard key={article.slug} article={article} />)}
      </section>
      {filteredArticles.length === 0 && <div className="empty-state"><h2>No curiosities found</h2><p>Try another title, category, or keyword.</p></div>}
    </main>
  );
}
