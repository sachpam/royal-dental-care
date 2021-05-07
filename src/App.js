import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Details from "./components/Details";
import Services from "./components/Services";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/layout";
// import Time from './components/Time/Time';

function App() {
  return (
    <div className="bg">
      <Nav />
      <Hero />
      <Details />
      <Services />
      <Review />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
