import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div>
      <Hero />
      <BestSeller />
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default App;
