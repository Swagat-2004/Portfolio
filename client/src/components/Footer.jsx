function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-8 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left">
        <p className="font-mono text-sm text-muted">
          © {new Date().getFullYear()} Swagat — built with the MERN stack.
        </p>
        <div className="flex gap-4 font-mono text-sm">
          <a
            href="https://github.com/Swagat-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-keyword"
          >
            GitHub
          </a>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-muted transition-colors hover:text-keyword"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
