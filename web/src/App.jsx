import { Header } from './components/header/Header.jsx';
import { Itens } from './components/tiposItens/Itens.jsx';
import { Button } from './components/button/Button.jsx';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css'

function App() {



  return (
    <div className='containerGlobal'>
      <Header />

      <h1>Tipo de atendimento:</h1>
      <form >
        <div className='listContainer'> 
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Fósforo</span>
          </div>
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Gesso</span>
          </div>
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Água</span>
          </div>
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Água</span>
          </div>
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Água</span>
          </div>
          <div className="listTipos" >
            <input type='radio' name="atend" />
            <span>Água</span>
          </div>
        </div>
        <input type="submit" value="Próximo" className='containerBtn' />
      </form>

    </div >
  )
}

export default App
