import Navbar from "./components/Navbar";
import "./index.css";
import Clients from "./sections/Clients";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <Process />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
