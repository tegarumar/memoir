const experiences = [
  {
    title: "Senior Product Designer",
    company: "Design Co.",
    period: "2020 - Present",
    description: "Leading product design for enterprise SaaS platform with focus on accessibility and user experience.",
  },
  {
    title: "UX Designer",
    company: "Tech Innovations",
    period: "2017 - 2020",
    description:
      "Redesigned core user flows resulting in 40% increase in conversion and 25% reduction in support tickets.",
  },
  {
    title: "UI Developer",
    company: "Creative Agency",
    period: "2014 - 2017",
    description: "Built responsive interfaces for clients across finance, healthcare, and education sectors.",
  },
  {
    title: "Design Intern",
    company: "Startup Studio",
    period: "2013 - 2014",
    description: "Assisted in creating visual assets and prototypes for early-stage startups.",
  },
]

export default function Experience() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">My Experience</h2>
      <div className="max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 relative pl-8">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary"></div>

            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-[7px] top-6 w-0.5 h-[calc(100%+12px)] bg-border"></div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <span className="text-sm text-muted-foreground sm:before:content-['•'] sm:before:mx-2 sm:before:text-muted-foreground">
                {exp.company}
              </span>
              <span className="text-sm text-muted-foreground ml-auto">{exp.period}</span>
            </div>
            <p className="text-muted-foreground">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
