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
      <div className="contador-principal"></div>
    </div>
  );
}

export default App;
