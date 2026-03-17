import { Link } from "react-router-dom";

function Actividades() {
  return (
    <div className="page-container">

      <h1 className="titulo-pagina">Actividades Recreativas</h1>

      <div className="cards-container">

        <Link to="/kayak" className="card">
          <img src="/img/kayak.jpg" alt="Kayak en lago" />
          <h3>Kayak en lago</h3>
          <p>Dificultad: Media</p>
          <p>Duración: 2 horas</p>
          <p>Precio: L.450</p>
        </Link>

        <Link to="/campamento" className="card">
          <img src="/img/campamento.jpg" alt="Campamento ecológico" />
          <h3>Campamento</h3>
          <p>Dificultad: Baja</p>
          <p>Duración: 1 día</p>
          <p>Precio: L.600</p>
        </Link>

        <Link to="/ciclismo" className="card">
          <img src="/img/ciclismo de montaña.jpg" alt="Ciclismo de montaña" />
          <h3>Ciclismo de montaña</h3>
          <p>Dificultad: Media</p>
          <p>Duración: 3 horas</p>
          <p>Precio: L.500</p>
        </Link>

      </div>

    </div>
  );
}

export default Actividades;