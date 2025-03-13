import "./Hero.css";
import hero from "../imagenes/hero.jpg";

export const Hero = () => {
  return (
    <div className="hero-cont">
        <div className="img-hero-cont">
            
            <img src={hero} alt="" className="hero-img"/>
            <div className="overlay"></div>
        </div>
        <div className="txt-cont">
        <div className="container text-center">
  <div className="row align-items-start">
    <div className="col">
      
    </div>
    <div className="col contenedor-txt">
      <h1 className="h1-hero">Ilumina tu vida</h1>
      <h2 className="h2-hero">Velas artesanales hechas con amor y esencias naturales</h2>
      
      <button className="btn-hero">Tu vela Hoy</button>
    </div>
    
  </div>
</div>
        </div>


    </div>
  )
}
