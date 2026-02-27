import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Portfolio from "./components/Portfolio";
import TransitionLines from "./components/TransitionLines";
import Services from "./components/Services";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-bg-dark text-white font-sans selection:bg-accent-red selection:text-white">
      <Navbar />
      <Hero />
      <Impact />
      <Portfolio />
      <TransitionLines direction="dark-to-light" />
      <Services />
      <TransitionLines direction="light-to-dark" />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
