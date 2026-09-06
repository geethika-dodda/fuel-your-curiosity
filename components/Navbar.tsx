import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" }
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <Link className="brand" href="/" aria-label="Fuel Your Curiosity home">
          <span className="brand-mark" aria-hidden="true">FC</span>
          <span>Fuel Your Curiosity</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>{link.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
