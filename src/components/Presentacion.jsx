import "../App.css";
import { Button } from "react-bootstrap";

function Presentacion() {
  return (
    <div className="text-box">
      <div className="contenido">
        <h2>¡Hola! Soy William May</h2>
        <h1>Soy Desarrollador de Software</h1>
        <p>
          Los servicios en la nube de Azure complementan la plataforma .NET,
          permitiendo a los desarrolladores implementar, escalar y administrar
          sus aplicaciones con facilidad.
        </p>
        <Button className="btn btn-primary">Saber mas...</Button>
      </div>
      <div className="img-container">
        <div>
          <img src="../public/perfil.png" />
        </div>
      </div>
    </div>
  );
}

export default Presentacion;
