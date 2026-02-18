import Navigation from "@/components/Navigation";
import Surface from "@/components/Surface";
import Story from "@/components/Story";
import Evidence, { SignalSection } from "@/components/Evidence";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="depth-gradient">
        <Surface />
        <SignalSection />
        <Story />
        <Evidence />
      </main>
      <Footer />
    </>
  );
}
