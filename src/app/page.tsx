import About from "@/components/about";
import Camps from "@/components/camps";
import ConsultationForm from "@/components/consultation-form";
import Contact from "@/components/contact";
import Diseases from "@/components/diseases";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PatientStories from "@/components/patient-stories";
import Products from "@/components/products";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Diseases />
      <About />
      <Features />
      <ConsultationForm />
      <PatientStories />
      <Products />
      <Camps />
      <Contact />
      <Footer />
    </main>
  );
}
