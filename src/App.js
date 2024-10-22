import './App.css';
import logoALline from './assets/logo.png';
import Boton from './componentes/Boton';
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
      <Boton/>
      <Boton/>
    </div>
  );
}

export default App;
