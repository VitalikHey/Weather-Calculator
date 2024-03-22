import "./App.css";
import "../components/calculate/Calculate"
import Calculate from "../components/calculate/Calculate";
import MainNavbar from "../components/navbar/MainNavbar";

function App() {
    //Нужно будет сделать навигационную панель
  return (
    <div>
        <MainNavbar/>
        <div className="position">
            <Calculate/>
        </div>
    </div>
  );
}

export default App;
