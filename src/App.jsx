import { Routes, Route } from 'react-router-dom';
import UseNavigate1 from './useNavigate/usenavigate1';
import UseNavigate2 from './useNavigate/usenavigate2';
function App() {


  return (
    <Routes>
      <Route path="/" element={<UseNavigate1 />} />
      <Route path="/usenavigate2/:message" element={<UseNavigate2 />} />
    </Routes>
  );
}

export default App;