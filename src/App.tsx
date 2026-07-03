import Router from 'preact-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Proyectos from './pages/Proyectos'
import SobreMi from './pages/SobreMi'
import Contacto from './pages/Contacto'
import NotFound from './pages/NotFound'
import CTF from './pages/CTF'
import Ale from './pages/Ale'

export default function App(){
  return (
    <>
      <Navbar />
      <main className="main-container">
        <Router>
          <Home path="/" />
          <SobreMi path="/sobre-mi" />
          <Proyectos path="/proyectos" />
          <Contacto path="/contacto" />
          <CTF path="/ctf" />
          <Ale path="/ale" />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </>
  )
}
