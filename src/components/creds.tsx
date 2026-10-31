const creds = [
  "AWS Solutions Architect Associate — 2026",
  "Certified Ethical Hacker (CEH) — 2025",
  "CompTIA Security+ — 2025",
  "Stormshield Network Administrator — 2025",
  "CCNA: Introduction to Networks — 2023",
  "MSc Engineering, Networks & Security — Paris, 2026",
  "TOEIC 960 / 990",
];

export function Creds() {
  return (
    <section className="sect" id="creds">
      <div className="sec-title">credentials</div>
      <ul className="certs">
        {creds.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}
