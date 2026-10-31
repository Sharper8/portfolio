const data = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: "https://devprocore.com/",
  description:
    "Portfolio of OxY, an anonymous systems & infrastructure engineer: selected work, experience, credentials.",
  mainEntity: {
    "@type": "Person",
    name: "OxY",
    alternateName: "0xymoore",
    url: "https://devprocore.com/",
    jobTitle: "Systems & Infrastructure Engineer",
    knowsAbout: [
      "Site Reliability Engineering",
      "Disaster Recovery",
      "Cybersecurity",
      "Cloud Infrastructure",
      "Machine Learning",
    ],
    sameAs: ["https://x.com/0xymoore", "https://github.com/Sharper8"],
  },
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
