import { BrowserRouter, Routes, Route } from "react-router-dom";
import UseEffect13 from "./UseEffect/useeffect13";
import UseEffect14 from "./UseEffect/useeffect14";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UseEffect13 />} />
        <Route path="/course" element={<UseEffect14 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;