import React from "react";
import { HashRouter  as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css";


const App = () => {
    return (
        <Router>
            <div className="app-container">

            <Header />

            <Routes> 
                <Route path="/#/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/#/experience" element={<Experience />} />
                <Route path="/#/projects" element={<Projects />} /> 
                <Route path="/#/contact" element={<Contact />} /> 
                {/* Catch-all route to redirect unknown URLs to Home */}
                <Route path="*" element={<Home />} />
             </Routes>
            
             <Footer /> 
             </div>

        </Router>
    );
};

export default App;
