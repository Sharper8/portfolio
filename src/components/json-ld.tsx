const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "OxY — Portfolio",
      url: "https://sylva.dev/",
      description:
        "Personal portfolio of Sylva: projects, experience, and writing. Systems engineering, AI-infrastructure projects, build-in-public.",
    },
    {
      "@type": "ProfilePage",
      mainEntity: {
        "@type": "Person",
        name: "Sylva",
        jobTitle: "Systems Engineer",
        description:
          "Computer-science graduate and systems engineer building PAI (personal AI infrastructure) and early-signal tech-watch tooling.",
        url: "https://sylva.dev/",
      },
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
