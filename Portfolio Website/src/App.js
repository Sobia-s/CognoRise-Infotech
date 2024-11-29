import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./Components/Banner/banner";
import Projects from "./Components/Project/project";
import Certificates from "./Components/Certification/certificate";
import { Nav }  from "./Components/Navbar/nav";
import  {Footer} from "./Components/footer/footer";
import Contact from './Components/Contact/contact';
import About from "./Components/About/about";

function App() {
    return (
        <Router>
             <Nav />
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
