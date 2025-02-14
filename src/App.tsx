import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Members from './components/Members';
import Alumni from './components/Alumni';
import Achievements from './components/Achievements';
import Induction from './components/Induction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EventsPage from './components/EventsPage';
import EventDetails from './components/EventDetails';
import Update from './components/Update';
import UpdateDetails from './components/UpdateDetails';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/members" element={<Members />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/induction" element={<Induction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/updates" element={<Update />} />
        <Route path="/updatedetails/:id" element={<UpdateDetails />} />{/* Correct route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
