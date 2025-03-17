import { useState } from 'react'
import './App.css'

import logoImg from './assets/geradorLogo1.png'

function App() {
 

  return (
    
      <div className='container'>
     <img
      alt='Logo frases'
      src={logoImg}
      className='logo'
     />

     <h2 className='title'>Categorias</h2>
     <section className='category-area'>
      <button className='category-button'>Motivação</button>
      <button className='category-button'>Bem Estar</button>
     </section>

     <button className='button-frase'>Gerar frase</button>

     <h3 className='textoFrase'>Alguma frase vai vim aqui</h3>
      </div>
    
  
  )
}

export default App
