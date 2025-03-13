import "./Ofertas.css";
import una from "../imagenes/una.jpg"
import dos from "../imagenes/dos.jpg"
import tres from "../imagenes/tres.jpg"
import cuatro from "../imagenes/cuatro.jpg"
import cinco from "../imagenes/cinco.jpg"
import seis from "../imagenes/seis.jpg"
import siete from "../imagenes/siete.jpg"
import ocho from "../imagenes/ocho.jpg"
import nueve from "../imagenes/nueve.jpg"
import diez from "../imagenes/diez.jpg"

export const Ofertas = () => {
    return (
        <div>
         <h1>Productos</h1>
 
         <div className="gallery-container">
      
      <div className="gallery-grid">
        <div><img src={una} alt="Imagen 1" /></div>
        <div><img src={dos} alt="Imagen 2" /></div>
        <div><img src={tres} alt="Imagen 3" /></div>
        <div><img src={cuatro} alt="Imagen 4" /></div>
        <div><img src={cinco} alt="Imagen 5" /></div>
        <div><img src={seis} alt="Imagen 6" /></div>
        <div><img src={siete} alt="Imagen 7" /></div>
        <div><img src={ocho} alt="Imagen 8" /></div>
        <div><img src={nueve} alt="Imagen 9" /></div>
        <div><img src={diez} alt="Imagen 10" /></div>
     
      </div>
    </div>
            </div>
            )   
}
