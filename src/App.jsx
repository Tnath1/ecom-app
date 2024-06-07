import "./App.css";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import Services from "./components/css/Services";

function App() {
  return (
    <div>
      <Hero />
      <BestSeller />
      <Services/>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
