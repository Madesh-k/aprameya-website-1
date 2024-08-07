import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Services from "./Services";
import Job from "./Job";
import GetTouch from "./GetTouch";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/jobs" element={<Job />} />
        <Route path="/getTouch" element={<GetTouch />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
