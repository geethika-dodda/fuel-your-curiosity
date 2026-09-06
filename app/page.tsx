import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/articles";

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Everyday mysteries, explained</p>
          <h1>Fuel Your <em>Curiosity</em></h1>
          <p className="hero-lede">
            Ever wondered how the everyday things around you actually work?
          </p>
          <Link className="button button-primary" href="/explore">
            Explore Curiosities <span aria-hidden="true">-&gt;</span>
          </Link>
        </div>
        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one"><span>?</span></div>
          <div className="orbit orbit-two"><span>+</span></div>
          <div className="hero-spark">✦</div>
        </div>
      </section>

      <section className="shell section-block" aria-labelledby="featured-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Start here</p>
            <h2 id="featured-heading">A few things worth wondering about</h2>
          </div>
          <Link className="text-link" href="/explore">View all <span aria-hidden="true">-&gt;</span></Link>
        </div>
        <div className="article-grid featured-grid">
          {articles.slice(0, 3).map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>
    </main>
  );
}