import "./App.css";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";
import Services from "./components/Services";
import Rating from "./components/Rating";
import Featured from "./components/Featured";

function App() {
  return (
    <div>
      <Hero />
      <BestSeller />
      <Services/>
      <Featured/>
      <Rating/>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
