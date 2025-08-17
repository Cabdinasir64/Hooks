import { Routes, Route } from 'react-router-dom';
import UseNavigate3 from './useNavigate/usenavigate3';
import UseNavigate4 from './useNavigate/usenavigate4';
function App() {


  return (
    <Routes>
      <Route path="/" element={<UseNavigate3 />} />
      <Route path="/usenavigate4/:productName" element={<UseNavigate4 />} />
    </Routes>
  );
}

export default App;