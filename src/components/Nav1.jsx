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
      {/* This will handle scrolling based on URL changes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ScrollToTop />

      <Routes>
        {" "}
        <Route path="/getTouch" element={<GetTouch />} />
        <Route path="/jobs" element={<Job />} />
      </Routes>
    </Router>
  );
}

export default App;
