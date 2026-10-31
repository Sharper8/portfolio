const projects = [
  {
    title: "swapaws.app",
    href: "https://swapaws.app",
    blurb:
      "Full-stack P2P barter platform. NLP pipeline parsing unstructured buy/sell text into structured listings.",
    tags: ["react", "typescript", "postgresql", "nlp"],
  },
  {
    title: "pai — personal ai infrastructure",
    href: "https://github.com/Sharper8",
    blurb:
      "Self-hosted agent runtime with persistent entity memory, kanban orchestration and semantic vault search. My daily driver.",
    tags: ["python", "llm-ops", "sqlite", "self-hosted"],
  },
  {
    title: "alpha finder — early-signal tech watch",
    href: "https://alpha.devprocore.com",
    blurb:
      "Automated tech-watch pipeline: source adapters, dedup, scoring and digests — surfacing signal before it trends.",
    tags: ["python", "scraping", "llm-ops", "docker"],
  },
  {
    title: "homelab & siem/xdr",
    href: "https://github.com/Sharper8",
    blurb:
      "Docker-first homelab: Wazuh SIEM/XDR, Netbird mesh VPN, Nextcloud, Vaultwarden — everything as code.",
    tags: ["linux", "wazuh", "docker", "networking"],
  },
  {
    title: "ml threat detection",
    href: "https://github.com/Sharper8",
    blurb:
      "Network-traffic threat detection with scikit-learn — 98% accuracy on benchmark datasets.",
    tags: ["python", "scikit-learn", "security"],
  },
  {
    title: "cryptography — prim's mst cipher",
    href: "https://github.com/Sharper8",
    blurb:
      "Symmetric encryption scheme built on graph theory and Prim's spanning-tree algorithm.",
    tags: ["cryptography", "algorithms", "c/c++"],
  },
];

export function Work() {
  return (
    <section className="sect" id="work">
      <div className="sec-title">selected work</div>
      {projects.map((p) => (
        <a
          key={p.title}
          className="proj"
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>{p.title}</h3>
          <p>{p.blurb}</p>
          <div className="tags">
            {p.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </a>
      ))}
    </section>
  );
}
