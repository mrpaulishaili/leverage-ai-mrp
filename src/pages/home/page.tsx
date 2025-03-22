import Clients from "../../components/Clients";
import Features from "../../components/Features";
import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Clients />
      <Features />
    </div>
  );
}
