import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import Leetcode from "./components/Leetcode";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Leetcode/>
      <Portfolio />
      <Experience />
      <About />
      <Contact />
      <SocialLinks />      
      <Footer/>
    </div>
  );
}

export default App;
