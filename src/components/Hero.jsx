function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="rounded-lg border border-border bg-surface p-6 sm:p-10">
        <p className="font-mono text-sm text-muted">
          <span className="text-keyword">const</span> <span className="text-ink">developer</span> ={" "}
          <span className="text-tag">{"{"}</span>
        </p>
        <div className="pl-4">
          <p className="font-mono text-sm text-muted">
            name: <span className="text-string">"Swagat"</span>,
          </p>
          <p className="font-mono text-sm text-muted">
            role: <span className="text-string">"Full Stack Developer (MERN)"</span>,
          </p>
          <p className="font-mono text-sm text-muted">
            focus: <span className="text-string">"AI-driven cloud cost optimization"</span>,
          </p>
          <p className="font-mono text-sm text-muted">
            basedIn: <span className="text-string">"Odisha → relocating to Bangalore"</span>,
          </p>
        </div>
        <p className="font-mono text-sm text-tag">{"};"}</p>

        <h1 className="mt-8 font-mono text-3xl font-bold leading-tight text-ink sm:text-5xl">
          Building fast, reliable web apps
          <br className="hidden sm:block" /> with the <span className="text-keyword">MERN</span> stack.
        </h1>
        <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
          B.Tech CSE grad from SOA University (ITER), Bhubaneswar. I design and ship full stack
          applications, and recently researched AI-driven cloud cost optimization using LSTM/GRU
          models on AWS.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-md bg-keyword px-5 py-2.5 font-mono text-sm font-semibold text-base transition-opacity hover:opacity-90"
          >
            $ contact --me
          </a>
          <a
            href="https://github.com/Swagat-2004"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-border px-5 py-2.5 font-mono text-sm text-ink transition-colors hover:bg-surfacehi"
          >
            $ open github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
