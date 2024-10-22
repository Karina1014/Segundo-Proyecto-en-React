import './App.css';
import logoALline from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <div className="logo-contenedor">
        <img
          className="logo-app"
          src={logoALline}
          alt="Logo de Aline"
        />
      </div>
      <div className="contador-principal">
        {/* Agregar la lógica para el contador */}
        <h2>Contador: 0</h2> {/* Ejemplo de título para el contador */}
      </div>
    </div>
  );
}

export default App;
