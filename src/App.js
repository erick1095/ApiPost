import "./App.css";
// Para validacion de input telefono utilizar esta importacion
//import InputPhoneNumber from "./Components/InputPhoneNumber/InputPhoneNumber";
// Para consumir api tipo post utilizar esta importacion
import Register from "./Components/Register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Register />
      </header>
    </div>
  );
}

export default App;
