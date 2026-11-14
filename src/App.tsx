// বাংলা: Website-এর সব Component Import
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Services from "./components/Services";
import About from "./components/About";
import Doctors from "./components/Doctors";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      {/* বাংলা: Navigation Bar */}
      <Navbar />

      {/* বাংলা: Main Website Sections */}
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <Doctors />
        <Testimonials />
        <Appointment />
      </main>

      {/* বাংলা: Website Footer */}
      <Footer />
    </>
  );
}