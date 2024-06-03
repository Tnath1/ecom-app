import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import BestSeller from "./components/BestSeller";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <BestSeller />
      <Footer/>
    </div>
  );
}

export default App;
