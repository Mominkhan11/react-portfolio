import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home id="home" />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Experience id="experience" />
      <Contact id="contact" />
    </div>
  );
}

export default App;
