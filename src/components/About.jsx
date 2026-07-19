function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-mono text-sm text-muted">// about.md</p>
      <h2 className="mt-2 font-mono text-2xl font-bold text-ink sm:text-3xl">About Me</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-surface p-6 md:col-span-2">
          <p className="text-muted">
            I'm a recent Computer Science graduate with a strong foundation in the MERN stack,
            Java, and data structures &amp; algorithms. For my final year research project, I
            worked on AI-driven cloud cost optimization, building LSTM/GRU models and wiring them
            up with AWS Lambda, S3, and DynamoDB to forecast and reduce cloud spend.
          </p>
          <p className="mt-4 text-muted">
            I care about writing clean, maintainable code and shipping products end-to-end — from
            database schema to a polished, responsive UI. I'm currently looking for SDE / Full
            Stack Developer roles, primarily with startups in Bangalore.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="font-mono text-xs uppercase tracking-wide text-muted">Quick Facts</p>
          <ul className="mt-3 space-y-2 font-mono text-sm">
            <li className="text-ink">
              <span className="text-keyword">edu:</span> B.Tech CSE, SOA University (ITER)
            </li>
            <li className="text-ink">
              <span className="text-keyword">stack:</span> MongoDB, Express, React, Node
            </li>
            <li className="text-ink">
              <span className="text-keyword">also:</span> Java, AWS, DSA
            </li>
            <li className="text-ink">
              <span className="text-keyword">status:</span>{" "}
              <span className="text-string">open to work</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
