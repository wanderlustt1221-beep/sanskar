import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Academics from "./components/Academics";
import Facilities from "./components/Facilities";
import GalleryPreview from "./components/GalleryPreview";
import NewsSection from "./components/NewsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Academics />
      <Facilities />
      <GalleryPreview />
      <NewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
