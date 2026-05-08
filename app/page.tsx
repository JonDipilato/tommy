import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Hours } from "@/components/Hours";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <About />
        <Hours />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
