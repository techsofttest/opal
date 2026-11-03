export const Footer = () => {
  return (
    <footer className="bg-paper border-t border-line py-9 text-[0.88rem] text-ink-2">
      <div className="wrap flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <div className="flex items-center gap-3">
          <span>© 2026 Opal Landscaping LLC · A member of RC Group</span>
        </div>
        <nav className="flex flex-wrap gap-[18px]">
          <a
            href="https://opallandscaping.com/policy-statement/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-ink transition-colors"
          >
            Anti-bribery policy
          </a>
          <a
            href="https://www.instagram.com/opal_landscaping_llc_uae"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-ink transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/opal-landscaping-llc/"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
};

