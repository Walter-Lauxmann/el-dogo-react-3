import './App.css';

function App() {
  const nombreApp = "El Dogo - Gestión de veterinaria";

  return (
    <>
      <div>
        <h1> {nombreApp} </h1>
        <p>¡Bienvenido! Acá se gestionan los Clientes y las Mascotas</p>

        <section>
          <h2>Gestión de clientes</h2>
          <h2>Gestión de Mascotas</h2>
        </section>
      </div>    
    </>
    
  )
}

export default App;