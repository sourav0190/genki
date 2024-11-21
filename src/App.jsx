import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import About from "./components/About";
import Header from "./components/Header";
import VideoPlayer from "./components/Video"; // Renamed Video to VideoPlayer for clarity
import Sections from "./components/Sections";
import Recipies from "./components/Recepies";
import Login from './components/Login';
import SignUp from './components/SignUp';
import CuisinesPage from "./components/CuisinesPage"; // Assuming this is the Cuisines route component
import Details from "./components/Details"; // Assuming you want Details component for the /cuisines route

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cuisines" element={<CuisinesPage />} /> {/* Cuisines route */}
      <Route path="/cuisines/:id/details" element={<Details />} /> {/* Cuisines Details route */}
    </Routes>
    <Footer /> {/* Moved Footer outside Routes */}
  </Router>
);

const Home = () => (
  <div>
    <h1>Welcome to Genki Grub!</h1>
    <VideoPlayer /> {/* Render VideoPlayer only on the Home page */}
    <div className="main-content">
      <Sections /> {/* Render Sections only on the Home page */}
      <Recipies /> {/* Render Recipies only on the Home page */}
    </div>
  </div>
);

export default App;
