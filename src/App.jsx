import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Films from './pages/Films';
import People from './pages/People';
import Planets from './pages/Planets';
import Species from './pages/Species';
import Starships from './pages/Starships';
import Vehicles from './pages/Vehicles';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}>
          <Route path='films' element={<Films />} />
          <Route path='people' element={<People />} />
          <Route path='planets' element={<Planets />} />
          <Route path='species' element={<Species />} />
          <Route path='starships' element={<Starships />} />
          <Route path='vehicles' element={<Vehicles />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
