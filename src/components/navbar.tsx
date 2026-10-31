const links = [
  { href: "#work", label: "work" },
  { href: "#xp", label: "xp" },
  { href: "#creds", label: "creds" },
  { href: "#contact", label: "contact" },
];

export function Navbar() {
  return (
    <header className="site-header">
      <div className="wrap bar">
        <a className="mark" href="#top">
          Y
        </a>
        <nav className="site-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
