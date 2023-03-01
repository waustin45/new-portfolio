import NavBar from "./components/NavBar";
import AboutMe from './components/AboutMe'
import Portfolio from './components/Portfolio'
import ContactMe from './components/ContactMe'
import Projects from './Projects'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <NavBar />
      <section className="sec about-me-sec visible">
        <AboutMe />
      </section>
      <section className="sec portfolio-me-sec hidden">
        <Portfolio projects={Projects}/>
      </section>
      <section className="sec contact-me-sec hidden">
        <ContactMe />
      </section>
      <Footer />
    </div>
  );
}

export default App;
