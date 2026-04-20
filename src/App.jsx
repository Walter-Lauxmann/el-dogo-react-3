import { useState } from 'react';
import FormularioCliente from './components/FormularioCliente';
import ClienteItem from './components/clienteItem';
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

  const eliminarCliente = (clienteId) => {
    const listaActualizada = clientes.filter(cliente =>
      cliente.id !== clienteId
    );

    setClientes(listaActualizada);

  }

  const actualizarCliente = (clienteActualizado) => {
    const listaActualizada = clientes.map(cliente => {
      if (cliente.id === clienteActualizado.id) {
        return clienteActualizado;
      }

      return cliente;
    });

    setClientes(listaActualizada);
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
              <ClienteItem 
                key={cliente.id} 
                cliente={cliente}
                onEliminar={eliminarCliente}
                onGuardar={actualizarCliente}
              />
            ))
            }
          </ul>
        </section>
      </div>    
    </>
    
  )
}

export default App;