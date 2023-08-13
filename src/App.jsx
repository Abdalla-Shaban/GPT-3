import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Brands from "./components/brands/Brands";
import WhatGPT from "./components/whatGPT-3/WhatGPT";
import Features from "./components/features/Features";
import Feature from "./components/feature/Feature";
import Cta from "./components/cta/CTA";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <main>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brands />
      <WhatGPT />
      <Features />
      <Feature />
      <Cta />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
