import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from './components/navbar/Navbar'
import Cards from './components/Cards/Cards'
import Footer from './components/footer/Footer'

import kayak from "./assets/kayak.jpg"
import senderismo from "./assets/senderismo.webp"
import ciclismo from "./assets/ciclismo de montaña.jpg"

import Senderismo from './page/Senderismo';
import Actividades from './page/Actividades';
import Tour from './page/Tour';
import Charla from './page/Charla';

import Kayak from './page/kayak';
import Campamento from './page/campamentos';
import Ciclismo from './page/ciclismo';

function App() {

  const slides = [kayak, senderismo, ciclismo]
  const [index, setIndex] = useState(0)

  const nextSlide = () => {
    setIndex((index + 1) % slides.length)
  }

  const prevSlide = () => {
    setIndex((index - 1 + slides.length) % slides.length)
  }

  return (
    <Router>
      <Navbar />

      <main className="hero">

        <div className="carousel">

          <button className="prev" onClick={prevSlide}>❮</button>

          <img src={slides[index]} alt="Ruta EcoRuta" className="carousel-img"/>

          <button className="next" onClick={nextSlide}>❯</button>

        </div>

      </main>

      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/senderismo" element={<Senderismo />} />
        <Route path="/actividades" element={<Actividades />} />
        <Route path="/tour" element={<Tour />} />
        <Route path="/charla" element={<Charla />} />

        <Route path="/kayak" element={<Kayak />} />
        <Route path="/campamentos" element={<Campamento />} />
        <Route path="/ciclismo" element={<Ciclismo />} />
      </Routes>

      <Footer />

    </Router>
  )
}

export default App