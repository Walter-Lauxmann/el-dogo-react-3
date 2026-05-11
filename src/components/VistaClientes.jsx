import { useState, useEffect } from 'react';
import FormularioCliente from './FormularioCliente';
import ClienteItem from './clienteItem';

function VistaClientes() {

    const [clientes, setClientes] = useState(() => {
    const datosGuardados = localStorage.getItem('clientesDogo');
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

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

  useEffect(() => {
    console.log("Detectando cambios en la lista de clientes. ¡Guardando!");
    localStorage.setItem('clientesDogo', JSON.stringify(clientes));
  }, [clientes]);

  return (
    <div>
          <section>
            <h2>Gestión de clientes</h2>
            <p>Cantidad de clientes: ** {clientes.length} **</p>
            <hr />
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
  )
}

export default VistaClientes;