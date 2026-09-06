"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search-field">
      <span className="sr-only">Search articles by title</span>
      <Search className="search-icon" aria-hidden="true" size={18} />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search title, category, or keyword"
      />
    </label>
  );
}
