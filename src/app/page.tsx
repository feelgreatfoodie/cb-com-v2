import Navigation from "@/components/Navigation";
import Surface from "@/components/Surface";
import SocialProof from "@/components/SocialProof";
import Story from "@/components/Story";
import Evidence from "@/components/Evidence";
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
      </main>
      <Footer />
    </>
  );
}
