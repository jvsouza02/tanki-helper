import Header from './components/layout/Hearder';
import Home from './pages/Home';
import PaintMatch from './pages/PaintMatch';
import TurretMatch from './pages/TurretMatch';
import About from './pages/About';
import Footer from './components/layout/Footer';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paint-match" element={<PaintMatch />} />
        <Route path="/turret-match" element={<TurretMatch />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
