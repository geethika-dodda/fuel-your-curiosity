import Link from "next/link";
import { ArrowLeft, ExternalLink, Lightbulb } from "lucide-react";
import { articles } from "@/lib/articles";

type ArticlePageProps = { params: Promise<{ slug: string }> };

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return <main className="not-found shell"><h1>Article Not Found</h1><p>We could not find that curiosity.</p><Link className="text-link" href="/explore"><ArrowLeft size={15} /> Back to Explore</Link></main>;
  }

  return (
    <main className="article-page shell">
      <Link className="back-link" href="/explore"><ArrowLeft aria-hidden="true" size={15} /> Back to Explore</Link>
      <article>
        <header className="article-header">
          <div className={`article-category category-${article.category.toLowerCase()}`}><span aria-hidden="true">{article.icon}</span> {article.category}</div>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-description">{article.description}</p>
          <div className="article-read-time">{article.readTime}</div>
        </header>
        <div className="article-content">
          {article.content.map((section) => <section className="article-section" key={section.heading}><h2><Lightbulb aria-hidden="true" size={19} /> {section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          <section className="dive-deeper" aria-labelledby="dive-deeper-heading">
            <h2 id="dive-deeper-heading">🔎 Dive Deeper</h2>
            <p>Want to explore this topic further? Check out these resources.</p>
            <div className="deeper-links">
              {article.deeperLinks.map((link) => <a className="deeper-link" href={link.url} key={link.url} target="_blank" rel="noopener noreferrer"><span><strong>{link.title}</strong><small>{link.source}</small></span><ExternalLink aria-label={`Open ${link.title} in a new tab`} size={18} /></a>)}
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
