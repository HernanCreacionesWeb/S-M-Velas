import "./nosotras.css";
import noso from "../imagenes/nosotras.jpg"

export const Nosotras = () => {
  return (
    <div className="mb-5 mt-5">
        <h2>Nosotras</h2>
        <div className="container text-center">
  <div className="row">
    <div className="col-12 col-md-12 col-lg-6 col-txt">
    <p className="p-noso"> Hola! somos Sol & Mica, apasionadas por la cecería. <br /> Cada vela que creamos es más que un simple objeto; es el resultado de nuestro esfuerzo, pasión y amor por los detalles. ✨🕯️

<br />  Poco a poco, con dedicación y aprendizaje, hemos dado forma a este emprendimiento que hoy nos llena de orgullo.

<br />  

Cada paso que damos nos acerca más a nuestro sueño: llevar un pedacito de nosotras a cada hogar, a cada persona que encienda una de nuestras velas y sienta su magia.

<br />💛 Gracias por ser parte de este camino. ¡Que la luz y el aroma de Sol & Mica iluminen tus días!💛 </p>

    </div>
    <div className="col-12 col-md-12 col-lg-6">
      <img src={noso} alt="" className="noso" />
    </div>
 
  </div>
</div>
    </div>
  )
}
