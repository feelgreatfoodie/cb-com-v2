import Navigation from "@/components/Navigation";
import Surface from "@/components/Surface";
import SocialProof from "@/components/SocialProof";
import Story from "@/components/Story";
import Evidence from "@/components/Evidence";
import { ProblemSolver } from "@/components/ProblemSolver";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="depth-gradient">
        <Surface />
        <SocialProof />
        <Story />
        <Evidence />

        {/* Problem Solver Section */}
        <section id="solver" className="px-6 sm:px-8 py-20 sm:py-24 bg-surface/10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-3">
                What's your challenge?
              </h2>
              <p className="text-text-secondary font-light text-lg">
                Describe your technical challenge — get an AI-generated analysis
              </p>
              <div className="mt-6 w-12 h-px bg-accent-active/40" />
            </div>
            <ProblemSolver />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
