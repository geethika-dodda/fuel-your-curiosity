import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { articles, type ArticleCategory } from "@/lib/articles";

const categories: Array<{ name: ArticleCategory; icon: string; description: string }> = [
  { name: "Science", icon: "🔬", description: "The physics, chemistry, and biology hiding in plain sight." },
  { name: "Technology", icon: "📱", description: "The systems and signals that make modern life work." }
];

export default function Categories() {
  return (
    <main className="page-shell shell">
      <section className="page-intro">
        <p className="eyebrow">Browse by lens</p>
        <h1>Choose a <em>curiosity</em></h1>
        <p>Follow a thread and see where it leads.</p>
      </section>
      <section className="category-list" aria-label="Article categories">
        {categories.map((category) => {
          const count = articles.filter((article) => article.category === category.name).length;
          return (
            <Link className="category-row" href={`/explore?category=${category.name}`} key={category.name}>
              <span className="category-row-title"><span aria-hidden="true">{category.icon}</span> {category.name}</span>
              <span>{count} {count === 1 ? "article" : "articles"}<small>{category.description}</small></span>
              <span className="row-arrow" aria-hidden="true"><ArrowRight size={18} /></span>
            </Link>
          );
        })}
      </section>
    </main>
  );
}
