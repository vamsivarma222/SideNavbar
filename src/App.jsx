  import React, { useState } from "react";
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import NavBar from "./components/NavBar";
  import About from "./Pages/About";
  import Home from "./Pages/Home";
  import Administration from "./Pages/Administration";
  import Contactus from "./Pages/Contactus";
  import Services from "./Pages/Services";
  import Portfolio from "./Pages/Portfolio";
  import Blog from "./Pages/Blog";
  import FAQ from "./Pages/FAQ";
  import Notifications from "./Pages/Notifications";
  import Settings from "./Pages/Settings";
  import Reports from "./Pages/Reports";
  import Configuration from "./Pages/Configuration";
  import { GiHamburgerMenu } from "react-icons/gi";
  import Form from "./Pages/Form";


  const App = () => {
    const [showNav, setShowNav] = useState(false);

    return (
      <Router>
        <div className="App">
          <header>
            <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
          </header>

          <NavBar show={showNav} />

          <div className="table-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Administration" element={<Administration />} />
              <Route path="/about" element={<About />} />
              <Route path="/Contactus" element={<Contactus />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/configuration" element={<Configuration />} />
              <Route path="/form" element={<Form />} />
            
            </Routes>
          </div>
        </div>
      </Router>
    );
  };

  export default App;