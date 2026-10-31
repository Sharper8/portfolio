const jobs = [
  {
    when: "2023 — now",
    role: "Site Reliability Engineer — apprentice",
    org: "CAC40 software group · EMEA HQ",
    detail:
      "Global disaster-recovery orchestration across 200+ applications (+25% test coverage, incl. systems driving €1B+ revenue). Re-engineered enterprise risk analysis with Python + ML clustering over 500+ platforms for ISO 27001/SOC2. Zero-trust AWS Glacier backups, 4h RTO. Grafana observability pipelines feeding executive dashboards.",
  },
  {
    when: "summer 2024",
    role: "IT Operations — intern",
    org: "same group · North America HQ",
    detail:
      "IT asset lifecycle automation (−30% processing time), secure provisioning and decommissioning (BitLocker, data sanitization), cross-domain Active Directory incident resolution.",
  },
  {
    when: "2023",
    role: "Business Developer",
    org: "IT consulting firm",
    detail:
      "10+ qualified opportunities with CAC40 accounts in AI/ML, cybersecurity and cloud; designed a CRM framework for ~5,000 prospects.",
  },
];

export function Experience() {
  return (
    <section className="sect" id="xp">
      <div className="sec-title">experience</div>
      {jobs.map((j) => (
        <div className="job" key={j.role}>
          <div className="when">{j.when}</div>
          <div>
            <h3>{j.role}</h3>
            <div className="org">{j.org}</div>
            <p>{j.detail}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
