import "./beneficios.css";
import natural from "../imagenes/natural.jpg"
import relaja from "../imagenes/relaja.jpg"
import duracion from "../imagenes/duracion.jpg"
import regalo from "../imagenes/regalo.jpg"

export const Beneficios = () => {
    return (
        <div className="mt-5 mb-5">
           
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                    <div className="card card-A" >
  <img src={natural} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Cera 100% natural</h5>
    <p className="card-text">sin parafina ni químicos tóxicos</p>
    
  </div>
</div>
                    </div>
                    <div className="col">
                    <div className="card"  >
  <img src={relaja} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Aromas relajantes   </h5>
    <p className="card-text">aceites esenciales premium.</p>
 
  </div>
</div>
                    </div>
                    <div className="col">
                    <div className="card"  >
  <img src={duracion} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title"> Larga duración</h5>
    <p className="card-text">hasta 40 horas de quemado.</p>
     
  </div>
</div>
                    </div>
                    <div className="col">
                    <div className="card"  >
  <img src={regalo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Ideal para regalar</h5>
    <p className="card-text">packaging ecológico y elegante.</p>
 
  </div>
</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
