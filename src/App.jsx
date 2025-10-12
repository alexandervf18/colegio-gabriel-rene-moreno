import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import page components
import Inicio from './paginas/Inicio';
import Nosotros from './paginas/Nosotros';
import Niveles from './paginas/Niveles';
import Pastoral from './paginas/Pastoral';
import Contacto from './paginas/Contacto';

// Import shared components
import BarraNavegacion from './componentes/BarraNavegacion';
import PieDePagina from './componentes/PieDePagina';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation bar - appears on all pages */}
        <BarraNavegacion />
        
        {/* Main content area with route definitions */}
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/niveles" element={<Niveles />} />
            <Route path="/pastoral" element={<Pastoral />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        
        {/* Footer - appears on all pages */}
        <PieDePagina />
      </div>
    </Router>
  );
}

export default App;
