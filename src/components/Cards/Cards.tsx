import "./Cards.css";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards-container-home">

      <Link to="/senderismo" className="card">
        <img src="/img/senderismo.webp" alt="Guia de Senderismo" />
        <h3>Guia de Senderismo</h3>
        <p>Dificultad: Media</p>
        <p>Duración: 3 horas</p>
        <p>Precio: L.350</p>
      </Link>

      <Link to="/actividades" className="card">
        <img src="/img/actividades.webp" alt="Actividades Recreativas" />
        <h3>Actividades Recreativas</h3>
        <p>Dificultad: Baja</p>
        <p>Duración: 2 horas</p>
        <p>Precio: L.400</p>
      </Link>

      <Link to="/tour" className="card">
        <img src="/img/tour.jpg" alt="Tour Ecológico" />
        <h3>Tours</h3>
        <p>Dificultad: Baja</p>
        <p>Duración: 2 horas</p>
        <p>Precio: L.300</p>
      </Link>

      <Link to="/charla" className="card">
        <img src="/img/charlaa.jpg" alt="Charlas Ambientales" />
        <h3>Charlas Ambientales</h3>
        <p>Duración: 1 hora</p>
        <p>Precio: L.200</p>
      </Link>

    </div>
  );
}

export default Cards;