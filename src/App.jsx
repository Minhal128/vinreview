import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
// import Documentation from "./components/Documentation";
// import FeatureSection from "./components/Features"; // Import your Features component
// import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (

    <Router>
      <Navbar />
      <Routes>
      {/* <Route path="/" element={<HeroSection />} /> */}
      <Route path="/features" element={<FeatureSection />} />
      <Route path="/workflow" element={<Workflow />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
