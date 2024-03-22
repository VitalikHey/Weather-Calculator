import "./App.css";
import "../components/calculate/Calculate"
import Calculate from "../components/calculate/Calculate";
import MainNavbar from "../components/navbar/MainNavbar";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
        <MainNavbar/>
        <Calculate/>
    </div>
  );
}

export default App;
