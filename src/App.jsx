import { useState } from 'react';
import FormularioCliente from './components/FormularioCliente';
import './App.css';

function App() {
  const nombreApp = "El Dogo - Gestión de veterinaria";
  const [clientes, setClientes] = useState([
    {id: 1, nombre: 'Juan Perez', telefono: '11123654789'},
    {id: 2, nombre: 'Ana Gomez', telefono: '11987456321'}
  ]);

  const agregarNuevoCliente = (nuevoCliente) => {
    setClientes([...clientes, nuevoCliente]);
  }

  return (
    <>
      <div>
        <h1> {nombreApp} </h1>
        <p>¡Bienvenido! Acá se gestionan los Clientes y las Mascotas</p>
        <p>Cantidad de clientes: ** {clientes.length} **</p>
        <section>
          <h2>Gestión de clientes</h2>
          <h2>Gestión de Mascotas</h2>
        </section>
        <hr />
        <section>
          <h2>Gestión de clientes</h2>
          <FormularioCliente onClienteAgregado={agregarNuevoCliente} />
          <ul>
            {
            clientes.map((cliente) => (
              <li key={cliente.id}>
                ** {cliente.nombre} ** - Teléfono: {cliente.telefono}
              </li>
            ))
            }
          </ul>
        </section>
      </div>    
    </>
    
  )
}

export default App;