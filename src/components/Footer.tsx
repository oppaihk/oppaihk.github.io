import oppaiLogo from "@/assets/oppai-logo.svg";

const Footer = () => {
  return (
    <footer className="px-6 pb-10 pt-6 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-border/70 pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center">
          <img src={oppaiLogo} alt="OppAI logo" className="h-6 w-auto" />
        </div>
        <p>© 2026 OppAI. All client references are anonymized.</p>
      </div>
    </footer>
  );
};

export default Footer;
