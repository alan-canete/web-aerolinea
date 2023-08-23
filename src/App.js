import "./App.css";
import Inicio from "./Screens/Inicio";
import Destinos from "./Screens/Destinos";
import Hoteles from "./Screens/Hoteles";
import CentroAyuda from "./Screens/CentroAyuda";
import Contacto from "./Screens/Contacto";
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Inicio />
      <Destinos />
      <Hoteles />
      <CentroAyuda />
      <Contacto />
    </div>
  );
}

export default App;
