import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import Mision from "./Pages/Mision";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mision" element={<Mision />} />
      </Routes>
    </div>
  );
}

export default App;
