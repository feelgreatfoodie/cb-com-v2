import Navigation from "@/components/Navigation";
import Surface from "@/components/Surface";
import Story from "@/components/Story";
import Evidence from "@/components/Evidence";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Surface />
        <Story />
        <Evidence />
      </main>
      <Footer />
    </>
  );
}
