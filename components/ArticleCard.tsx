import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article } from "@/lib/articles";

type ArticleCardProps = {
  article: Article;
};

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="article-card">
      <div className="card-topline">
        <span className={`category-tag category-${article.category.toLowerCase()}`}>
          <span aria-hidden="true">{article.icon}</span>
          {article.category}
        </span>
        <span className="read-time">{article.readTime}</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <Link className="text-link" href={`/articles/${article.slug}`}>
        Read curiosity <ArrowRight aria-hidden="true" size={15} />
      </Link>
    </article>
  );
}
