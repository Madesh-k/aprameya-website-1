import "../Home.css";
import Nav1 from "./Nav1";
import Contact from "./Contact";
import Founder from "./Founder";
import Services from "./Services";
import Clients from "./Clients";
import About from "./About";
import Footer from "./Footer";
import Section from "./Section";

function Home() {
  return (
    <div id="home">
      <Nav1 />
      <main className="main">
        <section className="section">
          <Section />
        </section>
        <Founder />
        <About />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
