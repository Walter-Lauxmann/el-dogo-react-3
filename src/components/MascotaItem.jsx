import { useState } from "react";

function MascotaItem ({clientes, mascota, onEliminar, onGuardar}) {

    const getDuenio = (id) => {
        const duenio = clientes.find((cliente) => cliente.id === id);
        return duenio ? duenio.nombre : "Dueño desconocido";
    };

    const [esEdicion, setEsEdicion] = useState(false);

    const[nombreEditado, setNombreEditado] = useState(mascota.nombre);
    const[especieEditado, setEspecieEditado] = useState(mascota.especie);
    const[razaEditado, setRazaEditado] = useState(mascota.raza);
    const[clienteIdEditado, setClienteIdEditado] = useState(mascota.clienteId);

    const manejadorEliminar = () => {
        if(window.confirm(`¿Seguro que quiere eliminar a ${mascota.nombre}?`)) {
            onEliminar(mascota.id);
        }
    }

    const manejadorEditar = () => {
        setEsEdicion(true);
    }

    const manejadorGuardar = (e) => {
        e.preventDefault();

        const mascotaActualizada = {
            ...mascota,
            nombre: nombreEditado,
            especie: especieEditado,
            raza: razaEditado,
            clienteId: Number(clienteIdEditado)
        }
        onGuardar(mascotaActualizada);

        setEsEdicion(false);
    }

    return (
        <li key={mascota.id}>
            {esEdicion ? (
                <form onSubmit={manejadorGuardar}>
                    <input 
                        type="text" 
                        value={nombreEditado}
                        onChange={(e) => setNombreEditado(e.target.value)}
                    />
                    <input 
                        type="text" 
                        value={especieEditado}
                        onChange={(e) => setEspecieEditado(e.target.value)}
                    />
                    <input 
                        type="text" 
                        value={razaEditado}
                        onChange={(e) => setRazaEditado(e.target.value)}
                    />
                    <select 
                        value={clienteIdEditado}
                        onChange={(e) => setClienteIdEditado(e.target.value)}
                    >
                        <option>--Seleccione un dueño--</option>
                        {clientes.map(cliente => (
                            <option key={cliente.id} value={cliente.id}>
                                {cliente.nombre}
                            </option>
                        ))}
                    </select>
                    <button type="submit">Guardar</button>
                    <button 
                        type="button"
                        onClick={() => setEsEdicion(false)}
                    >
                        Cancelar
                    </button>
                </form>
            ) : (
                <>
                    ** {mascota.nombre } **
                    - Especie: {mascota.especie}
                    - Raza: {mascota.raza}
                    - Dueño: {getDuenio(mascota.clienteId)}
                    <button onClick={manejadorEditar}>Editar</button>
                    <button onClick={manejadorEliminar}>Eliminar</button>
                </>
            )}
        </li>
    )
}

export default MascotaItem;