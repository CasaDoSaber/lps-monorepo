import FacebookComments from "components/FacebookComments";
import Footer from "components/Footer";
import EmbeddedSection from "containers/EmbeddedSection";
import HeroSection from "containers/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EmbeddedSection />
      <FacebookComments />
      <Footer />
    </>
  );
}
