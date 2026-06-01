import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

/* Componentes */
import Login from './components/Login';
import Navegacion from './components/Navegacion';
import VistaClientes from './components/VistaClientes';
import VistaMascotas from './components/VistaMascotas';
import VistaConfiguracion from './components/VistaConfiguracion';
import VistaDetalleCliente from './components/VistaDetalleCliente';
import { VeterinariaProvider } from './context/VeterinariaProvider';

import './App.css';

function App() {
  const nombreApp = "El Dogo - Gestión de veterinaria";

  const [estaLogueado, setEstaLogueado] = useState(false);

  const manejadorLogin = (estado) => {
    setEstaLogueado(estado);
  }

  return (
    <>   
        <h1> {nombreApp} </h1>
        <p>¡Bienvenido! Acá se gestionan los Clientes y las Mascotas</p>
      {estaLogueado ? (
        <VeterinariaProvider>
          <Navegacion />

          <Routes>
            <Route path="/" element={<VistaClientes />} />
            <Route path="/cliente/:id" element={<VistaDetalleCliente />} />
            <Route path="/mascotas" element={<VistaMascotas />} />
            <Route path="/config" element={<VistaConfiguracion />} />
            <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
          </Routes>
        </VeterinariaProvider>
      ) : (
        <div>
          <Login onLoginExitoso={manejadorLogin} />
        </div>
      )
    }
    
    {estaLogueado && (
      <button onClick={() => setEstaLogueado(false)}>
        Salir
      </button>
    )}
        
         
    </>
    
  )
}

export default App;