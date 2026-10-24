import { useState } from 'react'
import './App.css'
import Header from './components/HeaderPagina'
import Nav from './components/NavPagina'
import Main from './components/MainPagina'
import Aside from './components/AsidePagina'
import Footer from './components/FooterPagina'
import Panel from './components/PanelPagina'


function App() {
  const [count, setCount] = useState(0)
  console.log ("Renderizando componenete App");

  const cabecera =
    [
      {
        titulos: "Portal Académico"
      },
      {
        titulos: "IESP TRUJILLO"
      }
    ]

  const aniopie = "2026"
  const programa = "Diseño y Programación Web"
  return (
    <>
      <Header cabecera={cabecera}></Header>
      <Nav></Nav>
      <Main></Main>
      <Panel titulo="Aviso académico">
        <p>Revisar las fechas de evaluación.</p>
      </Panel>
      <Panel titulo="Próximas actividades">
        <ul>
          <li>Taller de React</li>
          <li>Presentación de proyectos</li>
        </ul>
      </Panel>
      <Aside></Aside>
      <Footer aniopie={aniopie} programa={programa} ></Footer>

    </>
  )
}

export default App
