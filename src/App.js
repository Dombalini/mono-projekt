import Main from "./Components/Main";
import { Route, Routes } from "react-router-dom";
import LukeSkywalkerROutes from "./Components/Componet Routes/LukeSkywalkerRoute";
import C3poRoute from "./Components/Componet Routes/C3poRoute";
import DarthVaderRoute from "./Components/Componet Routes/DarthVaderRoute";
import ObiOneKenobiRoute from "./Components/Componet Routes/ObiOneKenobiRoute";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route
                    path="/lukeSkyWalker"
                    element={<LukeSkywalkerROutes />}
                />
                <Route path="/3Cpo" element={<C3poRoute />} />
                <Route path="/darthVader" element={<DarthVaderRoute />} />
                <Route path="/obiOneKenobi" element={<ObiOneKenobiRoute />} />
            </Routes>
        </>
    );
}

export default App;
