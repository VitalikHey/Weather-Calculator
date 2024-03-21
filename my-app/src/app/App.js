import "./App.css";
import "../components/calculate/Calculate"
import Calculate from "../components/calculate/Calculate";

function App() {
  return (
    <div>
        <h1 style={{textAlign: "center"}}>Калькулятор!</h1>
        <Calculate/>
    </div>
  );
}

export default App;
