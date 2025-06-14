import { Lightbulb, Compass, Heart, Shield, Zap } from "lucide-react"

const adviceItems = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Embrace Curiosity",
    description:
      "Never stop learning. The most successful people are those who maintain a childlike curiosity throughout their lives.",
  },
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Find Your North Star",
    description:
      "Define your personal values and let them guide your decisions. When you align your work with your values, fulfillment follows.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Practice Self-Compassion",
    description:
      "Treat yourself with the same kindness you would offer to a good friend. We are often our own harshest critics.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Protect Your Energy",
    description: "Learn to say no to things that drain you. Your time and energy are your most valuable resources.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Take Imperfect Action",
    description:
      "Done is better than perfect. Small, consistent steps will take you further than waiting for the perfect moment.",
  },
]

export default function Advice() {
  return (
    <section id="advice" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">My Advice</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adviceItems.map((item, index) => (
          <div
            key={index}
            className="bg-card text-card-foreground p-6 rounded-lg shadow-md hover:shadow-lg dark:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border border-border"
          >
            <div className="bg-primary/10 p-3 rounded-full w-fit mb-4 text-primary">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
