import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import PageCalculate from "../pages/PageCalculate";
import PageRecipe from "../pages/PageRecipe";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculate" element={<PageCalculate />} />
                <Route path="/recipe" element={<PageRecipe />} />
            </Routes>
        </Router>
    );
}

export default App;
