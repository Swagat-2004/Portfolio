const projects = [
  {
    name: "AI-Driven Cloud Cost Optimization (FYRP)",
    desc:
      "Final year research project forecasting and reducing AWS cloud costs using LSTM/GRU models. My contribution: synthetic dataset generation (based on Alibaba Cluster Trace v2018), feature engineering, MinMaxScaler normalization, sliding-window sequencing, and train/test splitting.",
    tags: ["Python", "LSTM/GRU", "AWS Lambda", "S3", "DynamoDB"],
    link: "https://github.com/Swagat-2004",
  },
  {
    name: "Weather App",
    desc: "A responsive weather application that fetches live data from a public weather API, built with React and styled for clarity across devices.",
    tags: ["React", "REST API", "CSS"],
    link: "https://github.com/Swagat-2004",
  },
  {
    name: "Shopping Cart",
    desc: "A full stack e-commerce style shopping cart with add/remove/update flows, built on the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node"],
    link: "https://github.com/Swagat-2004",
  },
];

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-mono text-sm text-muted">// projects.jsx</p>
      <h2 className="mt-2 font-mono text-2xl font-bold text-ink sm:text-3xl">Projects</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-keyword"
          >
            <h3 className="font-mono text-base font-semibold text-ink">{project.name}</h3>
            <p className="mt-3 flex-1 text-sm text-muted">{project.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-md bg-surfacehi px-2 py-1 font-mono text-xs text-string">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 font-mono text-sm text-keyword hover:underline"
            >
              view code →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
