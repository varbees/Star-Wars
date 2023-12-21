import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Films from './pages/Films';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}>
          <Route path='films' element={<Films />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
