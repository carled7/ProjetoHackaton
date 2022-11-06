import { Header } from './components/header/Header.jsx';
import { Itens } from './components/tiposItens/Itens.jsx';
import { Button } from './components/button/Button.jsx';

import './style.css'

function App() {

  return (
    <div className='containerGlobal'>
      <Header />
      <h1>Tipo de atendimento:</h1>
      <form className='listContainer'>
        <Itens title="Fósforo" />
        <Itens title="Gesso" />
        <Itens title="Água" />
        <Itens title="Produtos gerais" />
        <Itens title="Leite" />
        <Itens title="Potássio" />

      </form>
        <Button title="Próximo" to="/password" color="#F2F2F2" bg="#025373" className="btn" />
    </div>
  )
}

export default App
