import React, { useEffect, useState } from "react";
import ReactGa from 'react-ga';

// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import About from "./Components/About";
// import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
// import Testimonials from "./Components/Testimonials";
// import Portfolio from "./Components/Portfolio";
import "./App.css";

const Header = React.lazy(() => import("./Components/Header"));
const Footer = React.lazy(() => import("./Components/Footer"));
const About = React.lazy(() => import("./Components/About"));
const Resume = React.lazy(() => import("./Components/Resume"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Portfolio = React.lazy(() => import("./Components/Portfolio"));

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    ReactGa.initialize('G-92D0PVWWB6')
    ReactGa.pageview(window.location.pathname + window.location.search)
    try {
      fetch("/resumeData.json")
        .then((res) => res.json())
        .then((data) => {
          setResumeData(data); 
        })
    } catch (err) {
      console.error(err);
    }

  }, []);

  return (
    <div className="App">
      <Header data={ resumeData.main } />
      <About data={ resumeData.main } />
      <Resume data={ resumeData.resume } />
      <Portfolio data={ resumeData.portfolio } />
      <Contact data={ resumeData.main } />
      <Footer data={ resumeData.main } />
    </div>
  );
};

export default App;
