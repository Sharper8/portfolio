const EMAIL = "alias.vantage458@passinbox.com";

export function Contact() {
  return (
    <section className="sect" id="contact">
      <div className="sec-title">contact</div>
      <div className="contact-box">
        <div className="line">
          <span className="k">mail</span>
          {"  → "}
          <a
            href={`mailto:${EMAIL}?subject=${encodeURIComponent("Hello from devprocore.com")}`}
          >
            {EMAIL}
          </a>{" "}
          <span style={{ color: "var(--dim)" }}># answers in ~24h</span>
        </div>
        <div className="line">
          <span className="k">x</span>
          {"     → "}
          <a href="https://x.com/0xymoore" target="_blank" rel="noopener noreferrer">
            @0xymoore
          </a>
        </div>
        <div className="line">
          <span className="k">code</span>
          {"  → "}
          <a
            href="https://github.com/Sharper8"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Sharper8
          </a>
        </div>
        <div className="open">
          open to: internships, consulting, infra/security/AI work — remote or
          relocation.
        </div>
      </div>
    </section>
  );
}
