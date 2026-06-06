import Search from './Search';
import Universities from './Universities';
import Details from './Details';
import { Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/universities/:country" element={<Universities />} />
      <Route path="/details/:name" element={<Details />} />
    </Routes>
  );
}

export default App;