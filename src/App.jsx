import AnimatedBackground from "./components/AnimatedBackground.jsx";
import BookletLayout from "./components/BookletLayout.jsx";
import Footer from "./components/Footer.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import Hero from "./components/Hero.jsx";
import MenuBookletPage from "./components/MenuBookletPage.jsx";
import MotionReveal from "./components/MotionReveal.jsx";
import NavBar from "./components/NavBar.jsx";
import ProcessSection from "./components/ProcessSection.jsx";
import SampleMenusSection from "./components/SampleMenusSection.jsx";

const isBookletView = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get("view") === "booklet" && params.get("menu");
};

export default function App() {
  const params = new URLSearchParams(window.location.search);
  const menuKey = params.get("menu");

  if (isBookletView() && menuKey) {
    return (
      <BookletLayout>
        <MenuBookletPage menuKey={menuKey} />
      </BookletLayout>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-hero text-ink">
      <div className="pointer-events-none fixed inset-0 bg-highlight" />
      <AnimatedBackground />

      <MotionReveal as="header" className="relative z-10 px-[6vw] pt-8 pb-20" delay={0.1}>
        <NavBar />
        <Hero />
      </MotionReveal>

      <FeaturesSection />
      <SampleMenusSection />
      <ProcessSection />
      <Footer />
    </div>
  );
}
