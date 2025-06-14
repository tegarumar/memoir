import Hero from "@/components/hero";
import Stories from "@/components/stories";
import Footer from "@/components/footer";
import ThemeIndicator from "@/components/theme-indicator";
import FloatingThemeToggle from "@/components/floating-theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingThemeToggle />
      <main>
        <Hero />
        <Stories />
      </main>
      <Footer />
    </div>
  );
}
