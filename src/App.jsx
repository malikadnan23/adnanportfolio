import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Mywork from "./components/Mywork/Mywork";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
