export function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} OxY · served statically, no cookies</span>
      <span>
        <a href="https://x.com/0xymoore" target="_blank" rel="noopener noreferrer">
          x
        </a>
        <a
          href="https://github.com/Sharper8"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a href="mailto:alias.vantage458@passinbox.com">mail</a>
      </span>
    </footer>
  );
}
