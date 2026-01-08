import Link from "next/link";
import { Container, Button } from "@/components/ui";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <ThemeToggle />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--primary)]/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--accent)]/5 rounded-full blur-[120px]"></div>

      <Container className="relative z-10 text-center space-y-12">
        <header className="space-y-4">
          <span className="text-[var(--primary)] font-semibold tracking-[0.3em] uppercase text-sm block">Portfolio Ready</span>
          <h1 className="text-5xl sm:text-7xl font-serif text-[var(--foreground)] leading-tight">
            Wedding Project <br />
            <span className="text-[var(--primary)]">Foundation</span>
          </h1>
        </header>

        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[var(--foreground)] opacity-80 leading-relaxed font-sans">
          A solid, professional Global UI foundation built with Ivory, Maroon, and Gold. 
          Ready for high-end wedding invitations and ceremonial websites with full Dark Mode support.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
          <Link href="/invitation">
            <Button className="w-full sm:w-auto px-12 py-4 text-lg">
              View Invitation Demo
            </Button>
          </Link>
          <Button variant="outline" className="w-full sm:w-auto px-12 py-4 text-lg">
            Project Details
          </Button>
        </div>

        <footer className="pt-20 border-t border-[var(--accent)]/20 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="font-bold text-[var(--primary)]">3 Colors</h4>
              <p className="text-sm opacity-60">Strict Palette</p>
            </div>
            <div>
              <h4 className="font-bold text-[var(--primary)]">Dark Mode</h4>
              <p className="text-sm opacity-60">Navy #0E1A2B</p>
            </div>
            <div>
              <h4 className="font-bold text-[var(--primary)]">Responsive</h4>
              <p className="text-sm opacity-60">Mobile First</p>
            </div>
            <div>
              <h4 className="font-bold text-[var(--primary)]">Premium</h4>
              <p className="text-sm opacity-60">Sanatan Aesthetic</p>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
}

