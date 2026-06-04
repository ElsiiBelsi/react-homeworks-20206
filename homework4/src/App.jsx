import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Universities from './pages/Universities';
import Details from './pages/Details';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/universities/:country" element={<Universities />} />
            <Route path="/details/:name" element={<Details />} />
        </Routes>
    );
}
    
export default App;