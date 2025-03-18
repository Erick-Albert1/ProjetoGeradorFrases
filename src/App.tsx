import { useState } from 'react'
import './App.css'

import logoImg from './assets/geradorLogo1.png'

function App() {

  const [textoFrase, setTextoFrase] = useState("O sucesso é a soma de pequenos esforços repetidos dia após dia.")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "motivação",
      frases: [
        "Acredite em si mesmo e você será imparável.",
"Cada dia é uma nova oportunidade para brilhar.",
"Se você pode sonhar, pode realizar.",
"A persistência leva ao sucesso.",
"A jornada mais longa começa com um único passo.",
"Sua determinação é sua maior força.",
"O sucesso é a soma de pequenos esforços repetidos dia após dia.",
"Encare cada desafio como uma chance de crescimento.",
"Grandes coisas nunca vêm da zona de conforto.",
"Mude seus pensamentos e você mudará seu mundo.",
"A adversidade revela o verdadeiro campeão que há em você.",
"Você é mais forte do que imagina.",
"O que você faz hoje pode melhorar todos os amanhãs.",
"Acredite no poder dos seus sonhos e siga em frente.",
      ]
    },
    {
      id: 2,
      nome: "bom dia",
      frases: [
        "Que a luz do sol de hoje preencha o seu coração de esperança. Bom dia!",

"Bom dia! Que a sua manhã seja tão perfeita quanto você. Receba as melhores energias no dia de hoje.",

"Um pensamento positivo no dia de hoje para afastar qualquer energia negativa amanhã. Bom dia!",

"Bom dia, grupo! Que o dia de hoje reflita as coisas boas que todos vocês trazem para a minha vida.",

"Passando para desejar um bom dia para todos os meus amigos e seguidores. Que a sua manhã seja perfeita, que a sua tarde seja produtiva e que a sua noite seja revigorante."
      ]
    }
  ]
 
function handleSwitchCategory(index: number){
  setCategoriaSelecionada(index);
}

function gerarFrase(){
  let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
  setTextoFrase(`"${allFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
}


  return (
    
      <div className='container'>
     <img
      alt='Logo frases'
      src={logoImg}
      className='logo'
     />

     <h2 className='title'>Categorias</h2>
     <section className='category-area'>
      {allFrases.map((item, index)=>(
        <button 
        key={item.id}
        className='category-button'
        style={{
          borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
          borderColor: "#1fa4db"
        }}
        onClick={()=> handleSwitchCategory(index)}
        >
          
          {item.nome}
          </button>
      ))}
      {/* <button className='category-button'>Bem Estar</button> */}
     </section>

     <button className='button-frase' onClick={gerarFrase}>Gerar frase</button>
    
     {textoFrase !== "" && <p className='textoFrase'>{textoFrase}</p>}
      </div>
  
  )
}

export default App
