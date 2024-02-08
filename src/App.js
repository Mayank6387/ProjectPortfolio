import Navbar from "./Components/Navabar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import { Experience } from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Services></Services>
     <Experience></Experience>
     <Projects></Projects>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  );
}

export default App;
