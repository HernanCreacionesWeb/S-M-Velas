import { useState } from 'react'
 
import './App.css'
import { Preheader } from './componentes/Preheader'
import {   Menu } from './componentes/Menu'
import { Hero } from './componentes/Hero'
import { Beneficios } from './componentes/Beneficios'
import { Ofertas } from './componentes/Ofertas'
import { Nosotras } from './componentes/Nosotras'
import { Pago } from './componentes/Pago'
import { Futer } from './componentes/Futer'


function App() {
  const [ ] = useState(0)

  return (
    <>
      <div>
       <Preheader/>
       <Menu/>
       <Hero/>
       <Beneficios/>
       <Ofertas/>
       <Nosotras/>
       <Pago/>
   
       <Futer/>
             </div>
     
    </>
  )
}

export default App
