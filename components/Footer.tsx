import Link from "next/link";

const links = [
  { href: "/explore", label: "Explore" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" }
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-wrap">
        <div>
          <Link className="footer-brand" href="/">Fuel Your Curiosity</Link>
          <p>Everyday mysteries, explained.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <p className="footer-note">Built for curious minds <span aria-hidden="true">✨</span></p>
      </div>
    </footer>
  );
}
