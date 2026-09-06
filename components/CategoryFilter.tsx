"use client";

import { SlidersHorizontal } from "lucide-react";
import type { ArticleCategory } from "@/lib/articles";

type CategoryFilterProps = {
  value: "All" | ArticleCategory;
  onChange: (value: "All" | ArticleCategory) => void;
};

const categories: Array<"All" | ArticleCategory> = ["All", "Technology", "Science"];

export default function CategoryFilter({ value, onChange }: CategoryFilterProps) {
  return (
    <div className="filter-tabs" aria-label="Filter by category">
      <span className="filter-label"><SlidersHorizontal aria-hidden="true" size={14} /> Filter</span>
      {categories.map((category) => (
        <button
          className={value === category ? "filter-tab active" : "filter-tab"}
          key={category}
          type="button"
          aria-pressed={value === category}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
