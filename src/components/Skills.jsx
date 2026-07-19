const skillGroups = [
  {
    label: "Frontend",
    color: "text-keyword",
    items: ["React", "Tailwind CSS", "JavaScript (ES6+)", "HTML5 / CSS3", "Vite"],
  },
  {
    label: "Backend",
    color: "text-string",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB / Mongoose", "Java"],
  },
  {
    label: "Cloud & Tools",
    color: "text-tag",
    items: ["AWS Lambda", "AWS S3", "DynamoDB", "Git & GitHub", "Postman"],
  },
  {
    label: "CS Fundamentals",
    color: "text-keyword",
    items: ["Data Structures", "Algorithms", "OOP", "System Design (basics)"],
  },
];

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="font-mono text-sm text-muted">// skills.json</p>
      <h2 className="mt-2 font-mono text-2xl font-bold text-ink sm:text-3xl">Skills</h2>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="rounded-lg border border-border bg-surface p-6">
            <h3 className={`font-mono text-sm font-semibold ${group.color}`}>{group.label}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-border bg-surfacehi px-3 py-1 font-mono text-xs text-ink"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
